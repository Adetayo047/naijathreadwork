import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden pt-32 pb-40">
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="text-label-sm text-secondary-fixed uppercase tracking-[0.4em] mb-6">
              The Professional Artisan Ecosystem
            </span>
            <h1 className="font-serif text-display-lg text-white mb-8">
              Mastering the Vertical Lifecycle of Heritage Textiles
            </h1>
            <p className="text-body-md text-primary-fixed-dim text-lg max-w-2xl leading-relaxed opacity-90">
              From ethical sourcing and artisanal production to global
              distribution, we provide a premium, integrated pipeline for the
              world&rsquo;s most exquisite hand-woven African textiles.
            </p>
          </div>
        </div>
        {/* Atmospheric elements */}
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[120px]" />
      </section>

      {/* Services Ecosystem: Structured Flow */}
      <section className="bg-white">
        {/* Service 01: Sourcing & Production */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[600px] overflow-hidden group">
            <Image
              src="/images/ntw-654e5fc41dcb.jpg"
              alt="Close-up of raw hand-spun cotton threads on a traditional loom, softly lit in warm West African sunlight"
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-surface lg:border-l border-outline-variant/30">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-4xl text-secondary opacity-30 italic">
                01
              </span>
              <div className="h-[1px] w-12 bg-secondary" />
            </div>
            <h3 className="font-serif text-headline-lg text-primary mb-6">
              Ethical Sourcing &amp; Production
            </h3>
            <p className="text-on-surface-variant text-body-md text-lg mb-8 leading-relaxed">
              We manage direct partnerships with elite weaving clusters across
              West Africa, ensuring fair trade practices and uncompromising
              quality at the source of every fiber.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  verified
                </span>
                <span className="text-label-sm uppercase tracking-wider text-xs">
                  Origin Validation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  verified
                </span>
                <span className="text-label-sm uppercase tracking-wider text-xs">
                  Heritage Preservation
                </span>
              </div>
            </div>
            <Link
              href="/contact"
              className="w-fit bg-primary text-white text-label-sm uppercase px-10 py-5 tracking-[0.2em] hover:bg-secondary transition-all shadow-md"
            >
              Consult Sourcing
            </Link>
          </div>
        </div>

        {/* Service 02: Wholesale Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 lg:order-1 flex flex-col justify-center p-12 md:p-24 bg-primary text-white">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-4xl text-secondary-fixed opacity-30 italic">
                02
              </span>
              <div className="h-[1px] w-12 bg-secondary-fixed" />
            </div>
            <h3 className="font-serif text-headline-lg mb-6">
              Wholesale &amp; Professional Supply
            </h3>
            <p className="text-primary-fixed-dim text-body-md text-lg mb-8 leading-relaxed">
              Providing high-end ateliers, luxury designers, and global
              retailers with curated heritage collections. Our volume supply
              maintains the highest artisanal standards for enterprise
              scalability.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-fixed">
                  inventory_2
                </span>
                <div>
                  <h5 className="text-label-sm uppercase text-secondary-fixed tracking-widest text-xs mb-1">
                    Stock Access
                  </h5>
                  <p className="text-sm opacity-70">
                    Exclusive seasonal catalogs for registered wholesale
                    partners.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/wholesale"
              className="w-fit bg-secondary-fixed text-on-secondary-fixed text-label-sm uppercase px-10 py-5 tracking-[0.2em] hover:bg-white transition-all shadow-xl"
            >
              Apply for Wholesale
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative h-[600px] overflow-hidden group">
            <Image
              src="/images/ntw-1a616e05fab5.jpg"
              alt="Rolls of luxury hand-woven textiles stacked and ready for wholesale distribution"
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
          </div>
        </div>

        {/* Service 03: Global Logistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[600px] overflow-hidden group">
            <Image
              src="/images/ntw-da75e80769ec.jpg"
              alt="Shipping containers at a port representing global logistics for artisanal textile exports"
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-surface-container-high lg:border-l border-outline-variant/30">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-4xl text-secondary opacity-30 italic">
                03
              </span>
              <div className="h-[1px] w-12 bg-secondary" />
            </div>
            <h3 className="font-serif text-headline-lg text-primary mb-6">
              Global Logistics Management
            </h3>
            <p className="text-on-surface-variant text-body-md text-lg mb-8 leading-relaxed">
              Navigating the complexities of international trade. We handle
              end-to-end supply chain logistics, customs clearance, and
              insured transport for fragile artisanal cargo.
            </p>
            <ul className="space-y-3 mb-10">
              <li className="flex items-center gap-3 text-on-surface text-label-sm text-xs tracking-wider">
                <span className="material-symbols-outlined text-secondary text-sm">
                  public
                </span>{" "}
                DUTY &amp; TAX OPTIMIZATION
              </li>
              <li className="flex items-center gap-3 text-on-surface text-label-sm text-xs tracking-wider">
                <span className="material-symbols-outlined text-secondary text-sm">
                  shield
                </span>{" "}
                FULL ARTISANAL INSURANCE
              </li>
            </ul>
            <Link
              href="/contact"
              className="w-fit border border-secondary text-secondary text-label-sm uppercase px-10 py-5 tracking-[0.2em] hover:bg-secondary hover:text-white transition-all"
            >
              View Logistics Rates
            </Link>
          </div>
        </div>

        {/* Service 04: Boutique Retail */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 lg:order-1 flex flex-col justify-center p-12 md:p-24 bg-white">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-4xl text-secondary opacity-30 italic">
                04
              </span>
              <div className="h-[1px] w-12 bg-secondary" />
            </div>
            <h3 className="font-serif text-headline-lg text-primary mb-6">
              Boutique Retail &amp; Bespoke
            </h3>
            <p className="text-on-surface-variant text-body-md text-lg mb-8 leading-relaxed">
              Experience the finished artistry through our flagship retail
              boutiques and bespoke tailoring services. We bridge the gap
              between heritage weaving and modern silhouette.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              <p className="text-sm italic font-serif text-secondary">
                &ldquo;A sensory journey into African luxury.&rdquo;
              </p>
            </div>
            <Link
              href="/shop"
              className="w-fit bg-primary text-white text-label-sm uppercase px-10 py-5 tracking-[0.2em] hover:bg-secondary transition-all shadow-md"
            >
              Shop The Collection
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative h-[600px] overflow-hidden group">
            <Image
              src="/images/ntw-6f437552a25f.jpg"
              alt="Minimalist modern retail boutique interior with mannequins draped in vibrant hand-woven African textiles"
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="relative py-32 bg-primary text-white overflow-hidden text-center">
        <div className="max-w-3xl mx-auto px-margin-desktop relative z-10">
          <h2 className="font-serif text-headline-lg mb-6 italic">
            Strategically tailored for your global growth.
          </h2>
          <p className="text-primary-fixed-dim text-body-md text-lg mb-12">
            Whether you are an independent creative or a multinational
            retailer, our infrastructure is engineered to elevate your
            heritage-inspired vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-secondary-fixed text-on-secondary-fixed text-label-sm uppercase px-12 py-5 tracking-[0.2em] hover:bg-white transition-all shadow-2xl"
            >
              Partner With Us
            </Link>
            <a
              href="#"
              className="w-full sm:w-auto border border-white/30 text-white text-label-sm uppercase px-12 py-5 tracking-[0.2em] hover:bg-white hover:text-primary transition-all"
            >
              Investor Relations
            </a>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col items-center mb-24 text-center">
            <span className="text-label-sm text-secondary uppercase tracking-[0.3em] mb-4">
              Precision Workflow
            </span>
            <h2 className="font-serif text-headline-lg text-primary">
              The NAIJA Method
            </h2>
            <div className="w-24 h-[1px] bg-secondary mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 border border-secondary/30 rounded-full flex items-center justify-center mb-8 group-hover:border-secondary transition-colors duration-500">
                <span className="font-serif text-xl text-secondary">I</span>
              </div>
              <h4 className="text-label-sm uppercase mb-4 tracking-widest text-primary">
                Discovery
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Deep analysis of weave specificity and cultural narrative to
                match your creative brief.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 border border-secondary/30 rounded-full flex items-center justify-center mb-8 group-hover:border-secondary transition-colors duration-500">
                <span className="font-serif text-xl text-secondary">II</span>
              </div>
              <h4 className="text-label-sm uppercase mb-4 tracking-widest text-primary">
                Curation
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Rigorous batch-level quality control directly at the loom
                side by our experts.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 border border-secondary/30 rounded-full flex items-center justify-center mb-8 group-hover:border-secondary transition-colors duration-500">
                <span className="font-serif text-xl text-secondary">III</span>
              </div>
              <h4 className="text-label-sm uppercase mb-4 tracking-widest text-primary">
                Logistics
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Secure export documentation and fiber-safe transit protocols
                for global arrival.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 border border-secondary/30 rounded-full flex items-center justify-center mb-8 group-hover:border-secondary transition-colors duration-500">
                <span className="font-serif text-xl text-secondary">IV</span>
              </div>
              <h4 className="text-label-sm uppercase mb-4 tracking-widest text-primary">
                Integration
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Seamless white-glove delivery into your retail or atelier
                infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
