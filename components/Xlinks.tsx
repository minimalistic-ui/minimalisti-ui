import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Xlinks = () => {
  return (
    <div className="mb-12 flex items-center justify-center gap-2 text-sm">
      <span className="text-zinc-500">Brought to you by</span>
      <Link href="github.com/AdityaSrivastava184">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
};

export default Xlinks;
