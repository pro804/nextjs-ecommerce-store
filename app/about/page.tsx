function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        Building
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          better shopping
        </span>
        experiences
      </h1>

      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground text-center">
        This project is a <strong>portfolio demonstration</strong> of a
        full-stack e-commerce app built while learning modern Next.js
        development. It features typed server actions for product management,
        authentication with Clerk, a Prisma + Supabase data layer, and a
        responsive UI using shadcn/ui — deployed on Vercel. The goal was to
        implement a<strong> real production workflow</strong>: browsing,
        searching, creating products, reviews & favorites, and a Stripe checkout
        path.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        <Feature chip="Next.js (App Router)" text="RSC & server actions" />
        <Feature chip="TypeScript" text="End-to-end type safety" />
        <Feature chip="Prisma + Supabase" text="Typed Postgres + storage" />
        <Feature chip="Clerk" text="Secure auth & sessions" />
        <Feature chip="Zod" text="Robust form & file validation" />
        <Feature chip="Stripe" text="Embedded checkout (test mode)" />
        <Feature chip="Favorites & Reviews" text="Social proof & UX polish" />
        <Feature chip="Admin Dashboard" text="Product CRUD & media" />
        <Feature chip="Cart & Orders" text="Totals, taxes, and flow" />
      </div>

      <p className="mt-8 text-sm text-center text-muted-foreground">
        <em>
          Note: This is a demonstration project. All brands, products, and data
          are fictional and created for educational purposes.
        </em>
      </p>
    </section>
  );
}

function Feature({ chip, text }: { chip: string; text: string }) {
  return (
    <div className="rounded-lg border p-4">
      <div className="text-sm font-semibold">{chip}</div>
      <div className="text-sm text-muted-foreground">{text}</div>
    </div>
  );
}

export default AboutPage;
