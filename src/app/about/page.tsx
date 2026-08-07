import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero: The Art of Ancestral Loom */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-primary">
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <span className="inline-block px-4 py-1 mb-6 bg-secondary/10 border border-secondary/30 text-secondary-fixed-dim text-label-sm uppercase tracking-widest rounded-full">
              EST. 2024
            </span>
            <h1 className="font-serif text-[44px] md:text-[64px] leading-tight text-white mb-8">
              The Art of <br />
              <span className="italic text-secondary-fixed">Ancestral</span>{" "}
              Loom.
            </h1>
            <p className="text-primary-fixed-dim text-xl max-w-xl">
              Naija Threadworks is more than a fashion house. It is a dialogue
              between the rhythmic clacking of traditional looms and the
              pulse of modern global luxury.
            </p>
          </div>
          <div className="hidden md:block md:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full bg-surface-container overflow-hidden border border-outline/20 rotate-3 shadow-xl">
              <Image
                src="/images/ntw-2a71f1a91c5e.jpg"
                alt="A Nigerian master weaver working at a traditional vertical loom, hands illuminated in warm, dramatic light"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Founder's Journey */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
              A Vision Born in Lagos
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              It began in the vibrant, chaotic markets of Lagos, where our
              founder, Chidi Okafor, watched the vanishing art of indigenous
              weaving. The exquisite patterns of Aso-oke and Akwete were being
              relegated to memory, replaced by mass-produced textiles.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              &ldquo;I saw a disconnect,&rdquo; Chidi recalls. &ldquo;We have
              the world&rsquo;s most sophisticated textile traditions, yet
              our youth were looking elsewhere for luxury. Naija Threadworks
              was founded to bring that luxury home, and then take it to the
              world.&rdquo;
            </p>
            <blockquote className="border-l-4 border-secondary pl-8 py-4 italic text-headline-lg text-secondary font-serif">
              &ldquo;Every thread we weave is a heartbeat of our heritage,
              redirected toward a global future.&rdquo;
            </blockquote>
          </div>
          <div className="relative">
            <div className="relative aspect-square bg-surface-container-high border border-outline/20 p-4 z-10">
              <div className="relative w-full h-full">
                <Image
                  src="/images/ntw-fa7236a9f788.jpg"
                  alt="Founder Chidi Okafor in a modern blazer tailored from hand-woven Akwete fabric, in a minimalist ivory studio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-video bg-secondary p-8 text-white z-20 shadow-lg">
              <p className="text-label-sm uppercase tracking-[0.2em] mb-2 opacity-70">
                The Founder
              </p>
              <p className="font-serif text-2xl">Chidi Okafor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision: Bento Layout */}
      <section className="bg-surface-container-low py-24 md:py-32 border-y border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="text-center mb-20">
            <p className="text-label-sm text-secondary uppercase tracking-widest mb-4">
              Our North Star
            </p>
            <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary">
              Purpose Beyond the Garment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Mission */}
            <div className="md:col-span-7 bg-white p-8 md:p-12 flex flex-col justify-between border border-outline/20">
              <div>
                <span className="material-symbols-outlined text-secondary text-5xl mb-8">
                  auto_awesome
                </span>
                <h3 className="font-serif text-3xl mb-6">Our Mission</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                  To democratize access to West African craftsmanship by
                  integrating artisanal hand-weaving techniques into
                  contemporary luxury fashion. We aim to preserve endangered
                  textile traditions through commercial viability and global
                  storytelling.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-background border border-secondary/20 text-label-sm text-secondary rounded-full">
                  Ethical Sourcing
                </span>
                <span className="px-4 py-2 bg-background border border-secondary/20 text-label-sm text-secondary rounded-full">
                  Cultural Preservation
                </span>
                <span className="px-4 py-2 bg-background border border-secondary/20 text-label-sm text-secondary rounded-full">
                  Artisan Equity
                </span>
              </div>
            </div>
            {/* Side Image */}
            <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden border border-outline/20">
              <Image
                src="/images/ntw-613ff15172d2.jpg"
                alt="Macro close-up of golden thread pulled through dark green fabric by a needle"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Job Creation */}
            <div className="md:col-span-4 bg-primary p-8 md:p-12 text-white">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-6">
                groups
              </span>
              <h3 className="font-serif text-2xl mb-4">Empowerment</h3>
              <p className="opacity-80 leading-relaxed">
                Our goal is to create 5,000 sustainable jobs for Nigerians by
                2030. By investing in regional weaving clusters, we ensure
                that economic prosperity stays within the communities that
                hold the craft.
              </p>
            </div>
            {/* Vision */}
            <div className="md:col-span-8 bg-surface-container-highest p-8 md:p-12 flex items-center">
              <div className="max-w-2xl">
                <h3 className="font-serif text-3xl mb-4">Our Vision</h3>
                <p className="text-on-surface-variant italic text-xl">
                  To become the definitive bridge between the continent&rsquo;s
                  artisanal past and a borderless creative future, where
                  &lsquo;Made in Nigeria&rsquo; is synonymous with world-class
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Heritage Loom — grafted from the alternate concept for emotional texture */}
      <section className="relative h-[65vh] md:h-[75vh] min-h-[420px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/ntw-613ff15172d2.jpg"
          alt="Golden thread woven through dark green fabric, the signature texture of the Heritage Loom"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-20">
          <h2 className="font-serif text-headline-lg md:text-[56px] text-white mb-8 italic">
            The Heritage Loom
          </h2>
          <p className="text-primary-fixed-dim text-xl leading-relaxed italic">
            Our signature weaving methodology merges ancient geometric wisdom
            with modern ergonomic design. We don&rsquo;t just weave fabric;
            we engineer legacies.
          </p>
        </div>
      </section>

      {/* Meet the Artisans: Archival Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
                The Hands Behind the Thread
              </h2>
              <p className="text-on-surface-variant">
                Our collective of master weavers across Iseyin, Abeokuta, and
                Akwete are the true architects of our brand. We celebrate
                their names, their families, and their centuries-old
                techniques.
              </p>
            </div>
            <div>
              <button className="px-8 py-3 bg-primary text-white text-label-sm uppercase tracking-widest hover:bg-tertiary transition-all">
                Support the Craft
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Artisan Card 1 */}
            <div className="group">
              <div className="aspect-[3/4] bg-surface-container overflow-hidden mb-6 border border-outline/20 relative">
                <Image
                  src="/images/ntw-f435bc6e70f0.jpg"
                  alt="Archival-style black-and-white portrait of Mama Tunde, an elder master weaver, holding a spindle of yarn in her workshop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                  <p className="text-white italic text-base md:text-lg">
                    &ldquo;The loom is the breath of the house. Without the
                    thread, there is no history.&rdquo;
                  </p>
                </div>
              </div>
              <p className="text-label-sm text-secondary uppercase mb-2">
                Master Weaver, Iseyin
              </p>
              <h4 className="font-serif text-xl">Mama Tunde</h4>
            </div>
            {/* Artisan Card 2 */}
            <div className="group">
              <div className="aspect-[3/4] bg-surface-container overflow-hidden mb-6 border border-outline/20 relative">
                <Image
                  src="/images/ntw-9284e667e9f3.jpg"
                  alt="Adebowale, a young apprentice weaver, adjusting the warp on a large wooden loom"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                  <p className="text-white italic text-base md:text-lg">
                    &ldquo;I am weaving the future of my ancestors. Every pull
                    of the warp is a step forward.&rdquo;
                  </p>
                </div>
              </div>
              <p className="text-label-sm text-secondary uppercase mb-2">
                Apprentice, Akwete
              </p>
              <h4 className="font-serif text-xl">Adebowale</h4>
            </div>
            {/* Artisan Card 3 */}
            <div className="group">
              <div className="aspect-[3/4] bg-surface-container overflow-hidden mb-6 border border-outline/20 relative">
                <Image
                  src="/images/ntw-d6d49a2a5094.jpg"
                  alt="Blessing Nnadi, leader of an indigo dyeing cooperative, standing beside ceramic dye vats with hands stained blue"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                  <p className="text-white italic text-base md:text-lg">
                    &ldquo;Nature gives us the color; we just give it a voice
                    on the fabric.&rdquo;
                  </p>
                </div>
              </div>
              <p className="text-label-sm text-secondary uppercase mb-2">
                Indigo Master, Abeokuta
              </p>
              <h4 className="font-serif text-xl">Blessing Nnadi</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="w-full h-32 flex items-center justify-center overflow-hidden">
        <div className="w-full h-px bg-outline-variant/30 flex justify-center items-center">
          <span className="material-symbols-outlined text-secondary bg-background px-8">
            architecture
          </span>
        </div>
      </div>

      {/* Impact CTA */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl text-primary mb-8">
            Be Part of the Thread.
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 leading-relaxed">
            Every purchase supports our vocational training programs and
            helps us provide healthcare for our artisan families. Together,
            we are weaving a more equitable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/shop"
              className="px-12 py-4 bg-primary text-white text-label-sm uppercase tracking-widest hover:shadow-xl transition-all"
            >
              Shop the Collection
            </Link>
            <a
              href="#"
              className="px-12 py-4 border border-secondary text-secondary text-label-sm uppercase tracking-widest hover:bg-secondary/5 transition-all"
            >
              Download 2024 Impact Report
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
