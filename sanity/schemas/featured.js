import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured Menu Category Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'resturants',
      type: 'array',
      title: 'Resturants',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'resturants',
            },
          ],
        },
      ],
    }),
  ],
})
