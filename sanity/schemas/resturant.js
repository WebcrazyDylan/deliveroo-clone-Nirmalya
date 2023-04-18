import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Resturant Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'name',
      type: 'image',
      title: 'Image of Resturant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latiture of Resturant',
    },
    {
      name: 'lon',
      type: 'number',
      title: 'Longitude of Resturant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Resturant Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 Stars)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please Enter a Value Between 1 to 5.'),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
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
    },
  ],
})
