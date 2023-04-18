import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'honeydew-panther',

  projectId: 'y1iur5aj',
  dataset: 'deliveroo-clone',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
