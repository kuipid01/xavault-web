"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
  ["Security", "#security"],
  ["About", "#about"],
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu relative md:hidden">
      <button
        className="grid size-10 place-items-center rounded-full border border-line"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open ? (
        <div className="absolute right-0 top-12 flex w-44 flex-col gap-1 rounded-2xl border border-line bg-white p-2 shadow-xl">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
