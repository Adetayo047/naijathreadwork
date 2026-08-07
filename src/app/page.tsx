import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ntw-87b294f8d531.jpg"
            alt="A model wearing a hand-woven Ankara gown with intricate green and gold patterns, standing in a West African landscape at golden hour"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/40" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="font-serif text-white text-[56px] md:text-[84px] leading-tight mb-8 animate-fade-in-up">
            Beautifully Woven...
            <br />
            <span className="italic text-secondary-fixed">
              Beautifully Worn
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up [animation-delay:300ms] opacity-0">
            <Link
              className="bg-primary text-white px-10 py-4 text-label-sm uppercase tracking-[0.2em] hover:bg-primary-container transition-all shadow-xl"
              href="/shop"
            >
              Explore the Collection
            </Link>
            <Link
              className="border border-secondary-fixed text-secondary-fixed px-10 py-4 text-label-sm uppercase tracking-[0.2em] hover:bg-secondary-fixed/10 transition-all backdrop-blur-sm"
              href="/gallery"
            >
              View Lookbook
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-label-sm uppercase tracking-widest text-[10px]">
            Scroll to discover
          </span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative shadow-2xl z-10">
              <Image
                src="/images/ntw-ff905f7d211e.jpg"
                alt="A close-up of a traditional Nigerian hand-loom weaving green and gold silk threads"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-secondary/30 hidden md:block" />
            <div className="absolute -bottom-10 -right-10 w-64 h-80 bg-primary-container/10 -z-0 hidden md:block" />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-secondary text-label-sm uppercase tracking-[0.3em] block">
                Our Heritage
              </span>
              <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary">
                From Nigeria to the World
              </h2>
            </div>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-body-md">
              <p>
                Naija Threadworks is more than just a fashion brand; it is a
                bridge between the vibrant craftsmanship of West Africa and
                the discerning wardrobes of the world. Our mission is
                two-fold: to share the unparalleled beauty of African prints
                and to empower Nigerian artisans through sustainable job
                creation.
              </p>
              <p>
                What started as a personal passion for beautiful attire has
                grown into a global vision. We source and sew our garments in
                Nigeria, working closely with master tailors to ensure every
                stitch represents our commitment to &ldquo;Beautifully
                Woven&hellip; Beautifully Worn.&rdquo;
              </p>
            </div>
            <div className="pt-4">
              <Link
                className="inline-flex items-center gap-4 text-primary font-bold group"
                href="/about"
              >
                <span className="text-label-sm uppercase tracking-widest">
                  Our Mission &amp; Vision
                </span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections (Bento Grid) */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16 space-y-2">
            <span className="text-secondary text-label-sm uppercase tracking-widest">
              Curated Selections
            </span>
            <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
              The Threadworks Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[1000px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-surface-container">
              <Image
                src="/images/ntw-238a36457433.jpg"
                alt="A couple wearing coordinated luxury African attire with bold green geometric patterns"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
                <span className="text-secondary-fixed text-label-sm uppercase mb-2">
                  New Arrival
                </span>
                <h3 className="text-white font-serif text-headline-lg mb-4">
                  Signature Ankara Dresses
                </h3>
                <Link
                  className="text-white text-label-sm uppercase border-b border-white pb-1 w-fit hover:border-secondary-fixed transition-colors"
                  href="/shop"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-surface-container">
              <Image
                src="/images/ntw-d40866dab2b6.jpg"
                alt="Vibrant African print trousers and shorts laid out on a white linen surface"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 p-6">
                <div className="text-center">
                  <h3 className="text-white font-serif text-2xl mb-2">
                    Modern Trousers
                  </h3>
                  <p className="text-white/80 text-xs uppercase tracking-widest">
                    Tailored in Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-surface-container">
              <Image
                src="/images/ntw-f8ca3d440def.jpg"
                alt="A hand-woven headscarf featuring traditional motifs draped over a minimalist stand"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all flex items-end p-6">
                <h3 className="text-white text-label-sm uppercase tracking-tighter">
                  Artisanal Accessories
                </h3>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-surface-container">
              <Image
                src="/images/ntw-8fba8d68aecb.jpg"
                alt="A Nigerian tailor threading a needle with golden thread in a bright workshop"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all flex items-end p-6">
                <h3 className="text-white text-label-sm uppercase tracking-tighter">
                  Bespoke Design
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fashion Ecosystem / Services */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/30 rounded-full blur-[100px] -ml-20 -mb-20" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary-fixed text-label-sm uppercase tracking-[0.3em] mb-4 block">
                Fashion Ecosystem
              </span>
              <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg leading-tight">
                Comprehensive solutions for the global African fashion market
              </h2>
            </div>
            <div className="h-1 w-24 bg-secondary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {[
              {
                icon: "flight_land",
                title: "Importation",
                copy: "Expert logistics for bringing world-class fashion items to the Nigerian market.",
              },
              {
                icon: "flight_takeoff",
                title: "Exportation",
                copy: "Taking authentic Nigerian traditional wears to the global stage.",
              },
              {
                icon: "sell",
                title: "Retail Sales",
                copy: "Curated individual pieces for those who value artisanal heritage.",
              },
              {
                icon: "inventory_2",
                title: "Wholesale",
                copy: "Bulk supply for boutiques and partners worldwide.",
              },
              {
                icon: "find_in_page",
                title: "Sourcing",
                copy: "Professional sourcing of unique African fabrics and designs.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-8 border border-white/10 hover:border-secondary transition-colors h-full flex flex-col items-start bg-white/5 backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-6">
                  {service.icon}
                </span>
                <h4 className="font-serif text-xl mb-4">{service.title}</h4>
                <p className="text-primary-fixed-dim text-sm leading-relaxed mb-6">
                  {service.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <span className="material-symbols-outlined text-secondary text-6xl opacity-20">
              format_quote
            </span>
          </div>
          <blockquote className="mb-12">
            <p className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-primary italic">
              Let Naija Threadworks dress you.
            </p>
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-secondary/30" />
            <span className="text-on-surface-variant text-label-sm uppercase tracking-[0.4em]">
              The Naija Promise
            </span>
            <div className="h-[1px] w-12 bg-secondary/30" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="bg-surface-container-high p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="relative z-10 max-w-xl">
              <h3 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
                Stay Woven with Us
              </h3>
              <p className="text-on-surface-variant text-body-md">
                Join our inner circle for exclusive early access to new
                collections and stories from our Nigerian artisans.
              </p>
            </div>
            <form className="w-full max-w-md relative z-10 flex border-b border-primary">
              <input
                className="bg-transparent border-none focus:ring-0 w-full text-label-sm text-primary uppercase placeholder:text-primary/40 py-4"
                placeholder="YOUR EMAIL ADDRESS"
                type="email"
                name="email"
                required
              />
              <button
                className="text-primary p-2 group"
                type="submit"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
              <Image
                src="/images/ntw-ef09d4da0c6b.png"
                alt=""
                width={600}
                height={600}
                className="h-[600px] w-auto rotate-12"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
