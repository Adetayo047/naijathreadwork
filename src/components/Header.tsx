"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/shop", label: "Shop" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-surface/90 backdrop-blur-md w-full sticky top-0 z-50 border-b border-secondary/20 shadow-sm">
      <div className="flex justify-between items-center h-20 px-6 md:px-20 max-w-[1280px] mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="NAIJA THREADWORKS"
            width={160}
            height={80}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-secondary font-bold border-b-2 border-secondary pb-1 text-label-sm uppercase tracking-widest"
                    : "text-on-surface-variant hover:text-primary transition-colors text-label-sm uppercase tracking-widest"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/shop"
            className="p-2 hover:bg-surface-container-low transition-all rounded-full"
            aria-label="Shop"
          >
            <span className="material-symbols-outlined text-primary">
              shopping_bag
            </span>
          </Link>
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-primary">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-6 bg-surface border-t border-secondary/10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-on-surface-variant hover:text-primary transition-colors text-label-sm uppercase tracking-widest border-b border-surface-container-high"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/atelier"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-on-surface-variant hover:text-primary transition-colors text-label-sm uppercase tracking-widest border-b border-surface-container-high"
          >
            The Atelier
          </Link>
          <Link
            href="/wholesale"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-on-surface-variant hover:text-primary transition-colors text-label-sm uppercase tracking-widest"
          >
            Wholesale
          </Link>
        </div>
      )}
    </nav>
  );
}
