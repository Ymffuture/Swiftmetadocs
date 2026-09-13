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

      {/* About Section */}
      <section className="mx-auto max-w-3xl px-2 py-16 text-center sm:px-8">
        <h2 className="mb-4 text-3xl font-bold">About SwiftMeta</h2>
        <p className="text-foreground/80">
          SwiftMeta is a technology company building across two fronts: communication and
          education. We ship real-time software people rely on every day, and we're bringing
          that same craft to how students learn.
        </p>
      </section>

      {/* Products Section */}
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-2 py-16 sm:px-8">
        <h2 className="text-center text-3xl font-bold">Our Products</h2>

        {/* SonaTG Card */}
        <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
          <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Live Now
          </div>
          <h3 className="mb-3 text-2xl font-bold">SonaTG — Talk Gold</h3>
          <p className="mb-6 text-foreground/80">
            Private messaging, voice &amp; video calls, and AI-powered conversations with Sona
            AI — all in one beautiful, encrypted place. Real-time chat with friends, built for
            genuine connection.
          </p>
          <Link
            href="https://sonatg.vercel.app"
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
            An interactive learning platform for Grade 11–12 students in Mathematics, Physical
            Sciences, and Life Sciences.
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
