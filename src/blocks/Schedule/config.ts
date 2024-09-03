import type { Block } from 'payload'
import { HeroBlock } from '../Hero/config'

export const ScheduleBlock: Block = {
  slug: 'schedule',
  interfaceName: 'Schedule',
  fields: [
    {
      name: 'hero',
      type: 'blocks',
      blocks: [HeroBlock],
      maxRows: 1,
    },
    {
      name: 'events',
      type: 'array',
      labels: {
        singular: 'Event',
        plural: 'Events',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'date',
          type: 'date',
          label: 'Date',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'landscapes',
      required: true,
    },
  ],
}
