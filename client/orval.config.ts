import { defineConfig } from 'orval'

const sharedPath: string = 'src/shared/api'

const buildEntityConfig = (name: string) => {
  const filePath = `api/${name}.yaml`

  return {
    input: filePath,
    output: {
      target: sharedPath + `/generated/${name}GenApi.ts`,
      override: {
        mutator: {
          path: sharedPath + '/apiInstance.ts',
          name: 'createInstance',
        },
      },
    },
  }
}

export default defineConfig({
  schedule: buildEntityConfig('schedule'),
})
