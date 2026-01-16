генерация Prisma Client
npx prisma generate

Миграции в dev-среде (создает миграцию и применяет ее локально)
npx prisma migrate dev --name <название миграции>

Миграции в проде (применит все незавершенные миграции)
npx prisma migrate deploy

Для генерации описания апи 
npm run openapi:module -- <название модуля>