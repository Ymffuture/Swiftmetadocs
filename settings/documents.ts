import { type Paths } from '@/lib/pageroutes'

export const Documents: Paths[] = [
  {
    heading: 'Products',
    title: 'SonaTG',
    href: '/sonatg',
    items: [
      {
        title: 'Overview',
        href: '/overview',
      },
      {
        title: 'Getting Started',
        href: '/getting-started',
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: 'ClassTour',
    href: '/classtour',
    heading: 'Upcoming',
  },
]
