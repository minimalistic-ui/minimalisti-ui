import React from "react";
import { Button } from "@/components/ui/button";
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

const Newsletter = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="py-7 sm:py-8" variant="minimalui">
          Join Our Newsletter <MailCheck className="ml-2" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Join Newsletter</SheetTitle>
          <SheetDescription>
            Join our newsletter space to get notified first everytime we release
            a new component
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
            <Button
              type="submit"
              variant="minimalui"
            >
              Join Now
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Newsletter;
