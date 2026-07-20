"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/tricks", label: "Tricks" },
  { href: "/guides", label: "Guías" },
  { href: "/hacks", label: "Secretos" },
  { href: "/videos", label: "Videos" },
  { href: "/skins", label: "Skins" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 w-full z-50 hidden md:block border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVdNsSiJvy7ne3RzNXWbxn6EMvhI0OqwZHrwHNQZ7rr10aZdP51zfUWjnbvJB8792U1tCO24aAOZoT6RFEhPnq0tcwqbn5mYERrYNzQ0_W8ypYwrb8HFUygBX7_7Q1ol0mVSpZoGFhaiX-6XHirez3uD8tl0uEpQwfOq0GNNcmw59UZOgXcN7HIGxUHVeCpS8iXsB6hUcJ_W3O8yasVIjFNqqX8RR9sV_FP44Ec5nvndfGiAYh-gF8"
            alt=""
            className="w-full h-full object-cover opacity-20 blur-xl scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        </div>
        <div className="flex justify-between items-center px-margin-desktop h-[72px] max-w-container-max mx-auto relative z-10">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="https://logotyp.us/file/dota2.svg"
              alt="Dota 2"
              className="h-9 w-auto"
            />
            <span className="font-display-md text-display-md tracking-tight text-on-surface">
              Dota<span className="text-primary">Frag</span>Hub
            </span>
          </Link>
          <div className="flex items-center">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 rounded-lg font-body-md font-medium text-[15px] transition-all duration-200 ${
                        active
                          ? "text-primary bg-primary-container/10"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <nav className="sticky top-0 w-full z-50 md:hidden border-b border-white/5 h-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVdNsSiJvy7ne3RzNXWbxn6EMvhI0OqwZHrwHNQZ7rr10aZdP51zfUWjnbvJB8792U1tCO24aAOZoT6RFEhPnq0tcwqbn5mYERrYNzQ0_W8ypYwrb8HFUygBX7_7Q1ol0mVSpZoGFhaiX-6XHirez3uD8tl0uEpQwfOq0GNNcmw59UZOgXcN7HIGxUHVeCpS8iXsB6hUcJ_W3O8yasVIjFNqqX8RR9sV_FP44Ec5nvndfGiAYh-gF8"
            alt=""
            className="w-full h-full object-cover opacity-20 blur-xl scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        </div>
        <div className="flex justify-between items-center px-4 h-16 relative z-10">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://logotyp.us/file/dota2.svg"
            alt="Dota 2"
            className="h-7 w-auto"
          />
          <span className="font-display-md text-headline-lg-mobile tracking-tight text-on-surface">
            Dota<span className="text-primary">Frag</span>
          </span>
        </Link>
        <button
          className="text-on-surface p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-b border-white/5 bg-background/90 backdrop-blur-2xl">
          <ul className="px-4 py-4 space-y-1">
            {NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-body-md font-medium transition-all ${
                      active
                        ? "text-primary bg-primary-container/10"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
