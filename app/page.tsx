import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import Xlinks from "@/components/Xlinks";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Header/>
      <main>
        <div className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-3xl">
            <div className="mb-4">
              <p className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#C70039] px-3 py-1 text-sm font-medium shadow-sm shadow-black/[.12] text-white dark:bg-[#C70039] dark:text-white">
                <span className="mr-1 flex shrink-0 pr-2 font-extrabold">
                  ✨
                </span>
                New releases every week
              </p>
            </div>
            <div className="mb-16">
              <h1 className="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-bold font-jetbrains  text-foreground md:text-5xl/[1.1] tracking-tighter">
                Effortless UI Building with Minimalitic UI
              </h1>
              <p className="text-lg text-muted-foreground">
                Beautiful, customizable Nextjs and Tailwind CSS components for
                effortless app building. Open source , easy , customizable and  ready to use.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="mb-5 text-muted-foreground text-white text-xl">
                Components
              </h2>
              <nav>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-auto">
                  {/* First and second link in the same line (span 1 column each) */}
                    <Link
                      href="/inputs"
                      className=" rounded-xl bg-background p-4 border border-border shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:py-10 hover:border-[#C70039]"
                    >
                  <li className="inline-flex w-full items-center justify-between text-white font-bold transition-colors hover:text-accent-foreground">
                      <span className="truncate">Input</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="ml-2 shrink-0 opacity-60"
                      />
                  </li>
                    </Link>
                    <Link
                      href="/button"
                      className=" rounded-xl bg-background p-4 border border-border shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:py-10 hover:border-[#C70039]"
                    >
                  <li className="inline-flex w-full items-center justify-between text-white font-bold transition-colors hover:text-accent-foreground">
                      <span className="truncate">Button</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="ml-2 shrink-0 opacity-60"
                      />
                  </li>
                    </Link>
                  {/* Third link on the second line (span 1 column) */}
                  <Link
                      href="/inputs"
                      className=" rounded-xl bg-background p-4 border border-border shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:py-10 hover:border-[#C70039]"
                    >
                  <li className="inline-flex w-full items-center justify-between text-white font-bold transition-colors hover:text-accent-foreground">
                      <span className="truncate">Accordion</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="ml-2 shrink-0 opacity-60"
                      />
                  </li>
                    </Link>
                  {/* Fourth link on the second line (span 1 column) */}
                  <Link
                      href="/inputs"
                      className=" rounded-xl bg-background p-4 border border-border shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:py-10 hover:border-[#C70039]"
                    >
                  <li className="inline-flex w-full items-center justify-between text-white font-bold transition-colors hover:text-accent-foreground">
                      <span className="truncate">Forms</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="ml-2 shrink-0 opacity-60"
                      />
                  </li>
                    </Link>
                  {/* Fifth link spans all columns (takes full width) */}
                  <li className="rounded-xl bg-background p-4 border border-border shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:col-span-2 lg:col-span-4 sm:py-10 hover:border-[#C70039]">
                    <span className="inline-flex w-full items-center justify-between text-white font-bold">
                      Home Pages
                      <span className="text-xs font-medium uppercase text-[#C70039]">
                        Available soon!
                      </span>
                    </span>
                  </li>

                  {/* Additional new elements, added in similar fashion */}
                  <Link
                      href="/inputs"
                      className=" rounded-xl bg-background p-4 border border-border shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:py-10 hover:border-[#C70039]"
                    >
                  <li className="inline-flex w-full items-center justify-between text-white font-bold transition-colors hover:text-accent-foreground">
                      <span className="truncate">Modals</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="ml-2 shrink-0 opacity-60"
                      />
                  </li>
                    </Link>
                    <Link
                      href="/inputs"
                      className=" rounded-xl bg-background p-4 border border-border shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:col-span-3 lg:col-span-3 sm:py-10 hover:border-[#C70039]"
                    >
                  <li className="inline-flex w-full items-center justify-between text-white font-bold transition-colors hover:text-accent-foreground sm:col-span-3">
                      <span className="truncate">Tabs</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="ml-2 shrink-0 opacity-60"
                      />
                  </li>
                    </Link>
                    <li className="rounded-xl bg-background p-4 border border-border shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:col-span-2 lg:col-span-4 sm:py-10 hover:border-[#C70039]">
                    <span className="inline-flex w-full items-center justify-between text-white font-bold">
                      Alerts
                      <span className="text-xs font-medium uppercase text-[#C70039]">
                        Available soon!
                      </span>
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
            <Newsletter />
            <div className="mt-16">
              <Xlinks />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
