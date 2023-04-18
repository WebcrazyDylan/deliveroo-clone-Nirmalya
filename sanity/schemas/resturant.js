import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Resturant Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of Resturant',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latiture of Resturant',
    }),
    defineField({
      name: 'lon',
      type: 'number',
      title: 'Longitude of Resturant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Resturant Address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 Stars)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please Enter a Value Between 1 to 5.'),
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'dish',
            },
          ],
        },
      ],
    }),
  ],
})
