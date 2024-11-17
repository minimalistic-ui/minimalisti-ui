import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MailCheck } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="px-4 sm:px-6">
        <div className="mx-auto mb-16 flex h-[72px] w-full max-w-6xl items-center justify-between border-b border-border/70">
          <Link href="/" aria-label="Home">
            <h1 className="font-bold tracking-wide text-2xl font-jetbrains">
              minimal/ui
            </h1>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="py-4 sm:py-5 bg-[#C70039] text-white hover:bg-[#C70039] hover:text-white">
                Join Our Newsletter <MailCheck className="sm:ml-1" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Join Newsletter</SheetTitle>
                <SheetDescription>
                  Join our newsletter space to get notified first everytime we
                  release a new component
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value="Minimal UI" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value="founder@minimalui.com"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" variant="minimalui">
                    Join Now
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
