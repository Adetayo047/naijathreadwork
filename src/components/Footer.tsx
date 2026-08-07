import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full mt-auto border-t-4 border-secondary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-20 px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="col-span-1 flex flex-col gap-8">
          <div className="bg-surface-container-lowest inline-block w-fit p-3 rounded-md">
            <Image
              src="/images/logo.png"
              alt="NAIJA THREADWORKS"
              width={200}
              height={100}
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="text-primary-fixed-dim text-sm leading-relaxed">
            Crafting luxury African attire with passion, precision, and
            purpose. Directly from the heart of Nigeria to the rest of the
            world.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary transition-all"
              href="https://instagram.com/naija_thread_works"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary transition-all"
              href="/contact"
              aria-label="Contact"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-secondary-fixed font-bold uppercase tracking-widest text-sm mb-8">
            Navigation
          </h5>
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link
                className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed"
                href="/shop"
              >
                Shop the Collection
              </Link>
            </li>
            <li>
              <Link
                className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed"
                href="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed"
                href="/about"
              >
                About Our Heritage
              </Link>
            </li>
            <li>
              <Link
                className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed"
                href="/atelier"
              >
                The Atelier
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-secondary-fixed font-bold uppercase tracking-widest text-sm mb-8">
            Customer Care
          </h5>
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link
                className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed"
                href="/services"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed"
                href="/wholesale"
              >
                Wholesale Inquiries
              </Link>
            </li>
            <li>
              <Link
                className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed"
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-secondary-fixed font-bold uppercase tracking-widest text-sm mb-8">
            Contact Info
          </h5>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-lg">
                call
              </span>
              <span className="text-primary-fixed-dim">
                +234 704 744 4628
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-lg">
                near_me
              </span>
              <span className="text-primary-fixed-dim">Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-lg">
                language
              </span>
              <span className="text-primary-fixed-dim">
                @naija_thread_works
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-10 px-6 md:px-20 max-w-[1280px] mx-auto text-center">
        <p className="text-primary-fixed-dim text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} NAIJA THREADWORKS. BEAUTIFULLY
          WOVEN. BOLDLY WORN.
        </p>
      </div>
    </footer>
  );
}
