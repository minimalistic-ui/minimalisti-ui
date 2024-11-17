import { Moon, Sun, Laptop } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ThemesPage() {
  return (
    <div className="container relative">
      <div className="mx-auto flex max-w-[980px] flex-col items-start gap-4 py-8 md:py-12 lg:py-24">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Themes
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground mb-8">
          Customize the look and feel of your components with our theming system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Card className="p-6 hover:shadow-lg transition-shadow border-0">
            <Sun className="h-8 w-8 mb-4 text-primary" />
            <h2 className="text-lg font-semibold mb-2">Light Theme</h2>
            <p className="text-sm text-muted-foreground">
              Clean and minimal light theme for day time usage.
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow border-0">
            <Moon className="h-8 w-8 mb-4 text-primary" />
            <h2 className="text-lg font-semibold mb-2">Dark Theme</h2>
            <p className="text-sm text-muted-foreground">
              Easy on the eyes dark theme for night time usage.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-0">
            <Laptop className="h-8 w-8 mb-4 text-primary" />
            <h2 className="text-lg font-semibold mb-2">System Theme</h2>
            <p className="text-sm text-muted-foreground">
              Automatically matches your system preferences.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}