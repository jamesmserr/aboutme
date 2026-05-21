import { ArrowUpRight, Mail, ExternalLink } from "lucide-react";

const expertise = [
  {
    title: "Paid Social",
    platforms: "Meta · TikTok",
    description:
      "Full-funnel campaigns that balance acquisition cost with creative quality. Built and scaled paid social programs from zero to eight figures in spend.",
  },
  {
    title: "Paid Search",
    platforms: "Google · Bing",
    description:
      "SEM strategy rooted in intent signals — keyword architecture, Quality Score optimization, and bid strategies that actually move ROAS.",
  },
  {
    title: "Growth Strategy",
    platforms: "Experimentation · Analytics",
    description:
      "Structured testing frameworks, funnel analysis, and channel mix modeling. Growth without guesswork.",
  },
  {
    title: "Lifecycle Marketing",
    platforms: "Email · Onboarding · Retention",
    description:
      "Drip sequences and segmentation strategies that turn new users into loyal ones. Acquisition gets the glory; lifecycle keeps the business alive.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold tracking-tight text-sm">James Merrill</span>
          <a
            href="mailto:james@rise4.co"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="flex-1 pt-14">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 pt-24 pb-20">
          <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-6">
            Performance Marketer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-zinc-50 mb-6">
            I connect creative <br className="hidden sm:block" />
            and data.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-10">
            Most performance marketers optimize the channel or the creative. I
            do both — and I build the systems that keep them working together
            long after launch.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:james@rise4.co"
              className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              <Mail size={15} />
              Say hello
            </a>
            <a
              href="https://linkedin.com/in/jamesmerrill"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium px-5 py-2.5 rounded-full hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
            >
              <ExternalLink size={15} />
              LinkedIn
              <ArrowUpRight size={13} className="text-zinc-400" />
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <hr className="border-zinc-100 dark:border-zinc-800" />
        </div>

        {/* Expertise */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-10">
            Where I work
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {expertise.map((item) => (
              <div key={item.title}>
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    {item.platforms}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <hr className="border-zinc-100 dark:border-zinc-800" />
        </div>

        {/* About */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-10">
            Background
          </h2>
          <div className="space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
            <p>
              I&apos;ve built and run performance programs across B2B SaaS
              startups, DTC brands, and agencies — which means I&apos;ve seen
              what works at every stage and at every budget.
            </p>
            <p>
              The through-line: I don&apos;t believe in separating creative
              from analytics. The best campaigns come from people who can read
              a data model and brief a designer in the same afternoon.
            </p>
            <p>
              I&apos;m based online. Always interested in meeting sharp people
              working on interesting problems.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <hr className="border-zinc-100 dark:border-zinc-800" />
        </div>

        {/* Contact CTA */}
        <section id="contact" className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-6">
            Get in touch
          </h2>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 max-w-sm leading-snug mb-8">
            Working on something interesting? I&apos;d like to hear about it.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:james@rise4.co"
              className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              <Mail size={15} />
              james@rise4.co
            </a>
            <a
              href="https://linkedin.com/in/jamesmerrill"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium px-5 py-2.5 rounded-full hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
            >
              <ExternalLink size={15} />
              LinkedIn
              <ArrowUpRight size={13} className="text-zinc-400" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            James Merrill
          </span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}
