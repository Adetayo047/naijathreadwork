import Image from "next/image";

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 pr-12">
            <span className="text-secondary uppercase tracking-[0.3em] block mb-6">
              Archive No. 04
            </span>
            <h1 className="font-serif text-display-lg leading-[1.1] mb-10">
              Heritage in <span className="italic text-primary">Every Single</span> Stitch.
            </h1>
            <p className="text-on-surface-variant max-w-lg mb-12 leading-loose text-lg">
              Explore our curated visual journey through the heart of West
              African craftsmanship. From the rhythmic sounds of the loom to
              the modern silhouettes of the Lagos runway.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-10 py-5 uppercase tracking-widest hover:bg-primary-container transition-all flex items-center gap-4 group">
                Enter the Lookbook
                <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-high relative overflow-hidden ring-1 ring-black/5">
              <Image
                src="/images/ntw-7e1014dd75c7.jpg"
                alt="Portrait of a woman wearing a high-fashion Aso Oke garment"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-10 -left-10 bg-background py-10 px-12 border border-outline-variant/30 shadow-2xl">
                <p className="font-serif text-headline-lg italic text-primary">
                  Beautifully Woven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Editorial Gallery */}
      <section className="py-32 px-6 md:px-20 max-w-[1280px] mx-auto border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-display-lg mb-4">Cultural Narratives</h2>
            <p className="text-on-surface-variant">
              A curated selection of textiles, process, and street elegance.
            </p>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar uppercase tracking-widest text-outline text-xs">
            <button className="text-primary font-bold border-b-2 border-primary pb-2">
              All Archives
            </button>
            <button className="hover:text-primary transition-colors pb-2">
              Macro Details
            </button>
            <button className="hover:text-primary transition-colors pb-2">
              The Loom
            </button>
            <button className="hover:text-primary transition-colors pb-2">
              Editorial
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Focus Item */}
          <div className="lg:col-span-8 relative overflow-hidden aspect-[16/10] group">
            <Image
              src="/images/ntw-56d8c7a99bb8.jpg"
              alt="Macro photograph of a traditional Yoruba woven textile pattern"
              fill
              className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12">
              <span className="text-on-primary uppercase tracking-[0.4em] mb-2">
                Detail Archive
              </span>
              <h3 className="text-on-primary font-serif text-headline-lg italic">
                Signature Silk &amp; Gold
              </h3>
            </div>
          </div>

          {/* Side Item */}
          <div className="lg:col-span-4 relative overflow-hidden aspect-[3/4] group">
            <Image
              src="/images/ntw-7fd35efec613.jpg"
              alt="Close-up of an artisan's hands working at a traditional loom"
              fill
              className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[16px] border-white/0 group-hover:border-white/10 transition-all duration-500" />
            <div className="absolute bottom-8 left-8">
              <span className="bg-background/90 backdrop-blur px-4 py-2 tracking-widest text-[10px] uppercase">
                The Process
              </span>
            </div>
          </div>

          {/* Wide Item below */}
          <div className="lg:col-span-4 relative overflow-hidden aspect-square group">
            <Image
              src="/images/ntw-3d1f75aa329e.jpg"
              alt="Male model wearing an ivory agbada ensemble"
              fill
              className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
          </div>

          <div className="lg:col-span-8 relative overflow-hidden aspect-[16/9] group">
            <Image
              src="/images/ntw-f35587d9b052.jpg"
              alt="Three women posing in coordinated Lagos street-style outfits"
              fill
              className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-12 right-12 text-right">
              <p className="text-white font-serif italic text-headline-lg drop-shadow-lg">
                Boldly Worn.
              </p>
            </div>
          </div>

          {/* Vertical Feature */}
          <div className="lg:col-span-4 relative overflow-hidden aspect-[2/3] group lg:-mt-32 z-10 shadow-2xl">
            <Image
              src="/images/ntw-30df8bdd92b6.jpg"
              alt="Stacked bolts of vertical textile rolls in rich heritage colors"
              fill
              className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
            />
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-8 items-start">
            <div className="relative overflow-hidden aspect-square group">
              <Image
                src="/images/ntw-ee626285d869.jpg"
                alt="Macro detail of a Naija Threadworks garment logo tag"
                fill
                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center h-full p-8 border border-outline-variant/30">
              <span className="text-secondary uppercase tracking-widest mb-6 block">
                The Statement
              </span>
              <p className="font-serif text-headline-lg italic leading-tight text-primary">
                Every thread is a choice to honor the past and embrace the future.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center">
          <button className="group relative px-16 py-6 overflow-hidden">
            <span className="relative z-10 uppercase tracking-[0.4em] text-primary group-hover:text-white transition-colors duration-500">
              View Full Archive
            </span>
            <div className="absolute inset-0 border border-primary transition-all duration-500 group-hover:bg-primary" />
          </button>
        </div>
      </section>

      {/* High-Contrast Storytelling Block */}
      <section className="bg-primary py-40 overflow-hidden text-on-primary">
        <div className="px-6 md:px-20 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <span className="text-secondary-fixed uppercase tracking-[0.5em] mb-8 block">
              Cultural Pillar
            </span>
            <h2 className="font-serif text-display-lg mb-12 italic leading-tight">
              The Philosophy <br />
              of Thread
            </h2>
            <div className="space-y-8 text-primary-fixed-dim/80 text-lg leading-relaxed">
              <p>
                In traditional weaving, every pattern tells a story of
                lineage, status, or celebration. We aren&rsquo;t just making
                clothes; we are preserving a language that was almost lost.
              </p>
              <p>
                By combining these ancient techniques with modern tailoring,
                we ensure the narrative continues for the next generation of
                global citizens.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-8">
              <div className="mt-20 relative aspect-[3/4]">
                <Image
                  src="/images/ntw-e5c797b97aed.jpg"
                  alt="Close-up action shot of a wooden loom shuttle passing through silk threads"
                  fill
                  className="object-cover ring-1 ring-white/10"
                />
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/ntw-add67cd8fcc8.jpg"
                  alt="Tailored blazer displayed on a wooden hanger against a plain backdrop"
                  fill
                  className="object-cover ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="px-6 md:px-20 max-w-[1280px] mx-auto flex flex-col items-center mb-24 text-center">
          <span className="text-secondary uppercase tracking-[0.3em] mb-6">
            Woven Boldly
          </span>
          <h2 className="font-serif text-display-lg mb-8 italic">Worn by the Brave</h2>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed text-lg">
            Our community is the heartbeat of the brand. Witness how the
            world styles history.
          </p>
        </div>
        <div className="ntw-marquee-track flex gap-10 whitespace-nowrap overflow-hidden">
          <div className="flex gap-10 min-w-full items-center">
            <div className="w-80 aspect-square flex-shrink-0 bg-white overflow-hidden group relative shadow-sm">
              <Image
                src="/images/ntw-29af45a9dc3f.jpg"
                alt="Customer styling a Naija Threadworks piece for a street style photo"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="w-96 aspect-[4/5] flex-shrink-0 bg-white overflow-hidden group relative shadow-sm">
              <Image
                src="/images/ntw-688994c01734.jpg"
                alt="Community member wearing a Naija Threadworks look in a portrait shot"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="w-80 aspect-square flex-shrink-0 bg-white overflow-hidden group relative shadow-sm">
              <Image
                src="/images/ntw-19e190748792.jpg"
                alt="Close-up of a customer wearing a hand-woven Naija Threadworks textile"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="w-72 aspect-[3/4] flex-shrink-0 bg-white overflow-hidden group relative shadow-sm">
              <Image
                src="/images/ntw-7a3aff9ed46d.jpg"
                alt="Brand supporter posing in Naija Threadworks apparel"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="w-80 aspect-square flex-shrink-0 bg-white overflow-hidden group relative shadow-sm">
              <Image
                src="/images/ntw-ffe2c049ad31.jpg"
                alt="Social media post featuring a customer in Naija Threadworks style"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
          </div>
          <div className="flex gap-10 min-w-full items-center" aria-hidden="true">
            <div className="w-80 aspect-square flex-shrink-0 bg-white overflow-hidden group relative shadow-sm">
              <Image
                src="/images/ntw-29af45a9dc3f.jpg"
                alt=""
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="w-96 aspect-[4/5] flex-shrink-0 bg-white overflow-hidden group relative shadow-sm">
              <Image
                src="/images/ntw-688994c01734.jpg"
                alt=""
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="w-80 aspect-square flex-shrink-0 bg-white overflow-hidden group relative shadow-sm">
              <Image
                src="/images/ntw-19e190748792.jpg"
                alt=""
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="w-72 aspect-[3/4] flex-shrink-0 bg-white overflow-hidden group relative shadow-sm">
              <Image
                src="/images/ntw-7a3aff9ed46d.jpg"
                alt=""
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="w-80 aspect-square flex-shrink-0 bg-white overflow-hidden group relative shadow-sm">
              <Image
                src="/images/ntw-ffe2c049ad31.jpg"
                alt=""
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
          </div>
        </div>
        <style>{`
          .ntw-marquee-track {
            width: max-content;
            animation: ntw-marquee 40s linear infinite;
          }
          .ntw-marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes ntw-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        <div className="mt-24 text-center">
          <a
            className="inline-flex items-center gap-6 text-primary group tracking-[0.3em]"
            href="#"
          >
            @NAIJATHREADWORKS
            <span className="w-16 h-px bg-primary group-hover:w-32 transition-all duration-700" />
          </a>
        </div>
      </section>
    </>
  );
}
