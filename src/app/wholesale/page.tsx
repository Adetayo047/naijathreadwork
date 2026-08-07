import Image from "next/image";
import WholesaleInquiryForm from "@/components/WholesaleInquiryForm";

export default function WholesalePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden h-[70vh] flex items-center">
        <div className="relative z-10 px-6 md:px-20 max-w-[1280px] mx-auto w-full">
          <span className="text-secondary-fixed text-label-sm uppercase tracking-widest mb-4 block">
            Bespoke Exports
          </span>
          <h1 className="text-on-primary font-serif text-display-lg max-w-3xl mb-8 leading-tight">
            Global Partnerships &amp; Export.
          </h1>
          <p className="text-primary-fixed-dim max-w-xl text-lg leading-relaxed">
            Bridging West African artisanal mastery with the global retail
            landscape. We specialize in curating premium, hand-woven textiles
            for discerning boutiques across the UK, Europe, and North
            America.
          </p>
        </div>
      </section>

      {/* Mission & UK Focus Section */}
      <section className="py-24 px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-surface-container-high overflow-hidden shadow-lg border border-outline-variant">
              <Image
                src="/images/ntw-52ea346e5536.jpg"
                alt="A high-end London retail space displaying Nigerian hand-woven textiles on minimalist brass racks"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary-container p-8 flex flex-col justify-center border border-secondary">
              <span className="text-on-secondary-container font-serif text-headline-lg">
                UK
              </span>
              <span className="text-on-secondary-fixed-variant text-label-sm uppercase">
                Exclusive Logistics Hub
              </span>
            </div>
          </div>
          <div className="md:col-span-7 pl-0 md:pl-12">
            <h2 className="font-serif text-display-lg text-primary mb-8">
              Woven Heritage, Globally Shared.
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                Our mission is to establish a seamless pipeline for authentic
                Nigerian textiles into the Western world. With a dedicated
                focus on the UK market, we handle the complexities of
                sourcing, quality control, and international export.
              </p>
              <p>
                We empower retailers to offer their clientele more than just
                fabric&mdash;we offer stories, heritage, and the meticulous
                labor of skilled artisans from across Nigeria.
              </p>
            </div>
            <ul className="needle-list mt-10 space-y-4 font-medium text-primary">
              <li>
                Tiered pricing for independent boutiques and department
                stores.
              </li>
              <li>Sustainably sourced, ethically produced artisanal fabrics.</li>
              <li>Priority customs clearance and door-to-door delivery.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bento Grid - Shipping & Logistics */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="relative z-10 px-6 md:px-20 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-headline-lg text-primary">
              Shipping &amp; Global Logistics
            </h2>
            <p className="text-on-surface-variant mt-2">
              Tailored solutions for international retail partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-10 border border-outline-variant hover:shadow-xl transition-all group">
              <div className="mb-6 text-secondary">
                <span className="material-symbols-outlined text-4xl">
                  public
                </span>
              </div>
              <h3 className="font-serif text-headline-lg text-primary mb-4">
                Door-to-Door
              </h3>
              <p className="text-on-surface-variant">
                Complete end-to-end logistics from our Lagos workshop to your
                warehouse in London, Birmingham, or Manchester.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-primary p-10 text-on-primary border border-primary hover:shadow-xl transition-all">
              <div className="mb-6 text-secondary-fixed">
                <span className="material-symbols-outlined text-4xl">
                  inventory_2
                </span>
              </div>
              <h3 className="font-serif text-headline-lg mb-4">Low MOQs</h3>
              <p className="text-primary-fixed-dim">
                Supporting independent retailers with flexible minimum order
                quantities designed for exclusive capsule collections.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-10 border border-outline-variant hover:shadow-xl transition-all">
              <div className="mb-6 text-secondary">
                <span className="material-symbols-outlined text-4xl">
                  verified_user
                </span>
              </div>
              <h3 className="font-serif text-headline-lg text-primary mb-4">
                Export Ready
              </h3>
              <p className="text-on-surface-variant">
                All shipments include certified certificates of origin,
                textile quality reports, and detailed customs documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Catalog & Inquiry Form */}
      <section className="py-24 px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Download Section */}
          <div className="flex flex-col justify-center">
            <div className="p-12 border-2 border-dashed border-secondary bg-surface-bright relative">
              <div className="absolute -top-6 -left-6 bg-secondary p-4">
                <span className="material-symbols-outlined text-on-secondary text-3xl">
                  download
                </span>
              </div>
              <h2 className="font-serif text-display-lg text-primary mb-6">
                Access the Lookbook.
              </h2>
              <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
                Explore our current Seasonal Collections including
                Hand-woven Aso Oke, Ankara Prints, and Artisanal Batiks. Our
                wholesale catalog includes detailed specifications, fabric
                weights, and wholesale pricing.
              </p>
              <button className="bg-primary text-on-primary text-label-sm uppercase px-10 py-5 hover:bg-tertiary-container transition-colors inline-flex items-center gap-3">
                Download 2024 Wholesale Catalog
                <span className="material-symbols-outlined">
                  arrow_downward
                </span>
              </button>
            </div>
          </div>
          {/* Inquiry Form */}
          <div
            className="bg-white p-12 shadow-sm border border-outline-variant"
            id="wholesale-inquiry"
          >
            <h3 className="font-serif text-headline-lg text-primary mb-8">
              Wholesale Inquiry
            </h3>
            <WholesaleInquiryForm />
          </div>
        </div>
      </section>

      {/* Partner Showcase (Logos) */}
      <section className="py-16 border-y border-outline-variant/30">
        <div className="px-6 md:px-20 max-w-[1280px] mx-auto">
          <p className="text-center text-label-sm uppercase text-on-surface-variant tracking-widest mb-10 opacity-50">
            Authorized Stockists &amp; Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-40">
            <span className="font-serif text-headline-lg italic">
              The Artisan Collective
            </span>
            <span className="font-serif text-headline-lg italic">
              Heritage London
            </span>
            <span className="font-serif text-headline-lg italic">
              Vanguard Prints
            </span>
            <span className="font-serif text-headline-lg italic">
              Global Weave
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
