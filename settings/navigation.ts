import { PageRoutes } from '@/lib/pageroutes'

export const Navigations = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Products',
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: 'SonaTG',
    href: 'https://sonatg.app',
    external: true,
  },
  {
    title: 'ClassTour',
    href: '/docs/classtour',
  },
]

export const GitHubLink = {
  href: 'https://github.com/Ymffuture/Swiftmetadocs',
}
