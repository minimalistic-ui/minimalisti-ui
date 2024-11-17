import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="container relative">
      <div className="mx-auto flex max-w-[980px] flex-col items-start gap-4 py-8 md:py-12 lg:py-24">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Documentation
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground">
          Learn how to use and customize our components.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
          <div className="p-6 bg-card rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
            <p className="text-muted-foreground mb-4">
              Learn how to install and set up the component library in your project.
            </p>
            <Link href="/docs/getting-started">
              <Button variant="outline">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="p-6 bg-card rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Components</h2>
            <p className="text-muted-foreground mb-4">
              Explore our collection of pre-built components and their usage.
            </p>
            <Link href="/components">
              <Button variant="outline">
                View Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}