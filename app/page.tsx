import { buttonVariants } from '@/components/ui/button'
import { PageRoutes } from '@/lib/pageroutes'
import { Link } from '@/lib/transition'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-2 py-8 text-center">
        <h1 className="mb-4 text-5xl font-bold sm:text-7xl">SwiftMeta</h1>
        <p className="mb-8 max-w-2xl text-lg font-medium text-foreground/90 sm:text-xl">
          Building communication platforms and learning technology for the future.
        </p>

        <div className="flex items-center gap-5">
          <Link
            className={buttonVariants({ className: 'px-6', size: 'lg' })}
            href={`/docs${PageRoutes[0].href}`}
          >
            Explore Products
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-2 py-16 sm:px-8">
        <h2 className="text-center text-3xl font-bold">Our Products</h2>

        {/* SonaTG Card */}
        <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
          <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Live Now
          </div>
          <h3 className="mb-3 text-2xl font-bold">SonaTG</h3>
          <p className="mb-6 text-foreground/80">
            A real-time live chat platform designed for seamless communication and collaboration.
          </p>
          <Link
            href="https://sonatg.app"
            className={buttonVariants({ variant: 'default', className: 'w-full sm:w-auto' })}
          >
            Open SonaTG
          </Link>
        </div>

        {/* ClassTour Card */}
        <div className="rounded-lg border border-border bg-card p-6 sm:p-8 opacity-75">
          <div className="mb-3 inline-block rounded-full bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground">
            Coming Soon
          </div>
          <h3 className="mb-3 text-2xl font-bold">ClassTour</h3>
          <p className="mb-6 text-foreground/80">
            An interactive learning platform for Grade 11–12 students in Mathematics, Physical Sciences, and Life Sciences.
          </p>
          <button
            disabled
            className={buttonVariants({ variant: 'outline', className: 'w-full cursor-not-allowed sm:w-auto opacity-50' })}
          >
            Coming Soon
          </button>
        </div>
      </section>
    </>
  )
}
