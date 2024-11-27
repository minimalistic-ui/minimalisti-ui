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
          <AvatarImage src="https://avatars.githubusercontent.com/u/102461506?s=400&u=4718570e83b5ad0cd169157f7eef3c48031a07d9&v=4" alt="@minimal-ui" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
};

export default Xlinks;
