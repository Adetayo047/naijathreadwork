import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
  tag?: string;
  cta: string;
}

const products: Product[] = [
  {
    id: "oshun-flow-maxi",
    name: "Oshun Flow Maxi",
    price: "$285.00",
    image: "/images/ntw-c382feef6eaf.jpg",
    alt: "A model in a floor-length vibrant Ankara print maxi dress with intricate geometric patterns in indigo, gold, and terracotta, photographed in a minimalist ivory studio.",
    tag: "Hand-woven Silk",
    cta: "Select Size",
  },
  {
    id: "sahara-tailored-trouser",
    name: "Sahara Tailored Trouser",
    price: "$195.00",
    image: "/images/ntw-0be1c32a803d.jpg",
    alt: "Close-up of high-waisted tailored trousers in premium wax-print cotton with bold concentric circular motifs in emerald green and burnt orange.",
    tag: "Limited Edition",
    cta: "Select Size",
  },
  {
    id: "heritage-resort-set",
    name: "Heritage Resort Set",
    price: "$210.00",
    image: "/images/ntw-2c91b898a780.jpg",
    alt: "A male model wearing structured Ankara print shorts and a matching short-sleeved shirt with a modern Cuban collar, in mustard yellow and deep navy abstract patterns.",
    cta: "Quick Add",
  },
  {
    id: "signature-wax-print",
    name: "Signature Wax Print (6yd)",
    price: "$120.00",
    image: "/images/ntw-ac322261a993.jpg",
    alt: "A stack of hand-folded African wax print fabrics with Kente and Adinkra-inspired patterns in forest green, ivory, and gold, shot top-down on a wooden table with tailoring tools.",
    tag: "Uncut Yardage",
    cta: "Configure Yardage",
  },
  {
    id: "gilded-gala-gown",
    name: "Gilded Gala Gown",
    price: "$450.00",
    image: "/images/ntw-4a9b8460331d.jpg",
    alt: "An elegant evening gown with a structured bodice and cascading peplum hem in shimmering gold-threaded Ankara fabric, photographed in a dimly lit luxury lounge.",
    cta: "Select Size",
  },
  {
    id: "lagos-lounge-shorts",
    name: "Lagos Lounge Shorts",
    price: "$135.00",
    image: "/images/ntw-521299a0c12f.jpg",
    alt: "Tailored women's shorts in a vibrant floral-inspired African print of magenta and royal blue, styled with an ivory silk blouse in a sunlit garden.",
    cta: "Select Size",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-secondary text-label-sm uppercase tracking-[0.2em] block mb-4">
            Curated Collections
          </span>
          <h1 className="font-serif text-display-lg text-primary mb-6">
            The Art of Ankara
          </h1>
          <p className="text-on-surface-variant text-body-md">
            Explore our meticulously crafted garments, where centuries of
            West African heritage meet contemporary luxury silhouettes.
            Every thread tells a story of vibrant resilience.
          </p>
        </div>
      </section>

      {/* Shop Grid */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          {/* Filters & Sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 border-b border-outline-variant/30 pb-6">
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-primary text-on-primary text-label-sm uppercase hover:opacity-90 transition-all">
                All Pieces
              </button>
              <button className="px-6 py-2 border border-outline text-on-surface text-label-sm uppercase hover:bg-surface-container-low transition-all">
                Fabrics
              </button>
              <button className="px-6 py-2 border border-outline text-on-surface text-label-sm uppercase hover:bg-surface-container-low transition-all">
                Dresses
              </button>
              <button className="px-6 py-2 border border-outline text-on-surface text-label-sm uppercase hover:bg-surface-container-low transition-all">
                Trousers
              </button>
              <button className="px-6 py-2 border border-outline text-on-surface text-label-sm uppercase hover:bg-surface-container-low transition-all">
                Shorts
              </button>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="text-label-sm uppercase">Sort by:</span>
              <select className="bg-transparent border-none focus:ring-0 text-label-sm text-primary cursor-pointer">
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid — spacious two-up boutique layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-surface-container shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.tag && (
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-surface/90 backdrop-blur-sm text-secondary border border-secondary/20 text-label-sm text-[10px] uppercase">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full bg-primary text-on-primary py-3 text-label-sm uppercase tracking-widest hover:bg-secondary transition-colors">
                      {product.cta}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-serif text-headline-lg text-primary mb-1">
                    {product.name}
                  </h3>
                  <button
                    className="material-symbols-outlined text-outline hover:text-secondary transition-colors"
                    aria-label={`Add ${product.name} to wishlist`}
                  >
                    favorite
                  </button>
                </div>
                <span className="text-body-md text-on-surface-variant">
                  {product.price}
                </span>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-24 flex justify-center">
            <button className="px-12 py-4 border-2 border-secondary text-secondary text-label-sm uppercase hover:bg-secondary hover:text-on-secondary transition-all">
              Discover More Pieces
            </button>
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-secondary text-label-sm uppercase tracking-[0.2em] block mb-4">
              The NAIJA Promise
            </span>
            <h2 className="font-serif text-display-lg text-primary mb-8 leading-tight">
              Mastery in Every Stitch. <br />
              Authenticity in Every Thread.
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary">
                    verified_user
                  </span>
                </div>
                <div>
                  <h4 className="font-serif text-headline-lg text-primary mb-2">
                    Authentic Provenance
                  </h4>
                  <p className="text-on-surface-variant text-body-md">
                    We source 100% genuine wax prints directly from master
                    artisans in Nigeria and Ghana, ensuring every yard
                    supports local heritage.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary">
                    architecture
                  </span>
                </div>
                <div>
                  <h4 className="font-serif text-headline-lg text-primary mb-2">
                    Bespoke Precision
                  </h4>
                  <p className="text-on-surface-variant text-body-md">
                    Our tailors utilize traditional construction methods
                    reinforced with modern techniques for silhouettes that
                    last a lifetime.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary">
                    eco
                  </span>
                </div>
                <div>
                  <h4 className="font-serif text-headline-lg text-primary mb-2">
                    Sustainable Practices
                  </h4>
                  <p className="text-on-surface-variant text-body-md">
                    Zero-waste cutting patterns and natural fiber focus
                    minimize our footprint while maximizing garment
                    longevity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] bg-surface-container group">
            <Image
              src="/images/ntw-20a98abbe14c.jpg"
              alt="A black and white photograph of an elderly tailor's weathered hands working a vintage sewing machine on vibrant African fabric, lit dramatically from the side."
              fill
              className="object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 border border-secondary/20 -z-10" />
          </div>
        </div>
      </section>
    </>
  );
}
