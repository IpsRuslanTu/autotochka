import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as fs from 'fs'
import * as yaml from 'yaml'
import { resolve } from 'path'
import { AuthModule } from '@/application/auth/auth.module'
import { ScheduleModule } from '@/modules/schedule/schedule.module'
import { BookingModule } from '@/modules/booking/booking.module'

const MODULES = {
  schedule: ScheduleModule,
  auth: AuthModule,
  booking: BookingModule,
}

async function generateModuleOpenApi(moduleName: string) {
  const ModuleClass = MODULES[moduleName as keyof typeof MODULES]

  const app = await NestFactory.create(ModuleClass, { logger: false })

  const config = new DocumentBuilder()
    .setTitle(`${moduleName} API`)
    .setDescription(`API for ${moduleName} module`)
    .setVersion('1.0')
    .addTag(moduleName)
    .build()

  const document = SwaggerModule.createDocument(app, config, {
    include: [ModuleClass],
  })

  const yamlStr = yaml.stringify(document)
  const outputPath = resolve(`./${moduleName}.yaml`)
  fs.writeFileSync(outputPath, yamlStr, 'utf8')
}

async function main() {
  const moduleName = process.argv[2]
  if (!moduleName) {
    console.log('Usage: npm run openapi:module -- <module-name>')
    console.log('Available modules:', Object.keys(MODULES).join(', '))
    process.exit(1)
  }

  await generateModuleOpenApi(moduleName)
}

main().catch(console.error)
