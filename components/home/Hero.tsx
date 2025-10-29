import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
      <div>
        <h1
          className="
            max-w-2xl font-bold
            text-4xl sm:text-6xl
            leading-tight sm:leading-tight
            tracking-tight
            supports-[text-wrap:balance]:text-balance
          "
        >
          A shopping experience built with{" "}
          <span className="text-primary">Next.js</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          This demo store highlights clean design, fast performance, and a
          scalable architecture — powered by Next.js, TypeScript, Prisma,
          Supabase, Clerk, and Stripe. Explore the catalog, toggle layouts, and
          try the full end-to-end checkout flow.
        </p>

        <Button
          asChild
          size="lg"
          className="mt-8 focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <Link href="/products" aria-label="Browse products">
            Browse Products
          </Link>
        </Button>
      </div>

      <HeroCarousel />
    </section>
  );
}

export default Hero;
