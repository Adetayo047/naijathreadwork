import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export default function AtelierPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ntw-616deec18690.jpg"
            alt="A Nigerian master tailor adjusting a charcoal grey wool Aso Oke suit on a mannequin in a sun-drenched Lagos atelier"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/95" />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1280px] mx-auto w-full text-white">
          <span className="text-label-sm uppercase tracking-[0.3em] mb-6 block text-secondary-fixed">
            The Atelier Experience
          </span>
          <h1 className="font-serif text-[80px] leading-[0.9] mb-8 max-w-3xl">
            The Art of <br />
            <span className="italic font-light">Bespoke</span> Tailoring.
          </h1>
          <p className="font-serif text-headline-lg max-w-xl text-primary-fixed-dim opacity-90 mb-12">
            Let Naijathread dress you.
          </p>
          <div className="flex gap-6">
            <Link
              className="bg-primary text-on-primary px-10 py-5 text-label-sm uppercase tracking-widest hover:bg-primary-container transition-all hover:scale-[1.02]"
              href="#appointment"
            >
              Request an Appointment
            </Link>
            <Link
              className="border border-secondary-fixed text-secondary-fixed px-10 py-5 text-label-sm uppercase tracking-widest hover:bg-secondary-fixed/10 transition-all"
              href="#process"
            >
              Explore the Process
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 px-6 md:px-20 bg-surface-bright relative">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/ntw-0f2a1c9752be.jpg"
                alt="Close-up of a silver needle piercing hand-woven ivory cotton fabric with fine gold embroidery threads"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-80 bg-primary hidden md:block p-8">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4">
                architecture
              </span>
              <p className="text-white italic">
                &ldquo;Every stitch is a narrative of heritage, every cut a
                celebration of the modern silhouette.&rdquo;
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-serif text-display-lg text-primary">
              Where Heritage Meets <br /> Precision.
            </h2>
            <p className="text-on-surface-variant leading-relaxed max-w-lg">
              Our bespoke service is the pinnacle of the Naija Threadworks
              experience. In our Lagos-based atelier, time slows down. We
              honor the century-old traditions of West African weaving while
              employing the rigorous technical standards of Savile Row. This
              is not just a suit; it is a legacy piece woven specifically for
              your story.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-primary font-semibold uppercase text-label-sm">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                Exclusive Hand-Woven Textiles
              </li>
              <li className="flex items-center gap-4 text-primary font-semibold uppercase text-label-sm">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                Master Pattern Cutting
              </li>
              <li className="flex items-center gap-4 text-primary font-semibold uppercase text-label-sm">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                Unlimited Personalization
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-32 bg-primary text-white overflow-hidden" id="process">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <span className="text-label-sm text-secondary-fixed-dim uppercase tracking-[0.4em] mb-4 block">
                Our Method
              </span>
              <h2 className="font-serif text-display-lg text-white">
                The Journey of a Garment
              </h2>
            </div>
            <div className="h-[1px] flex-grow bg-secondary/30 mb-4 mx-8 hidden md:block" />
            <div className="text-secondary-fixed font-serif text-headline-lg italic">
              Step by Step
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="group cursor-default">
              <div className="text-display-lg font-light text-secondary/40 mb-8 transition-colors group-hover:text-secondary-fixed">
                01
              </div>
              <h3 className="font-serif text-headline-lg text-secondary-fixed mb-4">
                Discovery
              </h3>
              <p className="text-on-primary-container text-body-md mb-8 leading-relaxed">
                A private consultation where we discuss your lifestyle,
                preferences, and the intent behind the commission. We explore
                silhouettes that flatter your form.
              </p>
              <div className="relative w-full aspect-square grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/images/ntw-94021d20239f.jpg"
                  alt="A luxury tailoring lounge with leather armchairs and shelves of rich green and gold fabrics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Step 2 */}
            <div className="group cursor-default md:mt-20">
              <div className="text-display-lg font-light text-secondary/40 mb-8 transition-colors group-hover:text-secondary-fixed">
                02
              </div>
              <h3 className="font-serif text-headline-lg text-secondary-fixed mb-4">
                Measurement
              </h3>
              <p className="text-on-primary-container text-body-md mb-8 leading-relaxed">
                A rigorous 35-point measurement process ensuring a
                second-skin fit. We analyze posture and stance to engineer
                the perfect drape.
              </p>
              <div className="relative w-full aspect-square grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/images/ntw-859fbc49b863.jpg"
                  alt="A master tailor's hands wrapping a measuring tape around a client's shoulder over charcoal wool fabric"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Step 3 */}
            <div className="group cursor-default">
              <div className="text-display-lg font-light text-secondary/40 mb-8 transition-colors group-hover:text-secondary-fixed">
                03
              </div>
              <h3 className="font-serif text-headline-lg text-secondary-fixed mb-4">
                Fabric Selection
              </h3>
              <p className="text-on-primary-container text-body-md mb-8 leading-relaxed">
                Choose from our curated vault of hand-loomed Aso Oke, premium
                Italian silks, and English wools. Your tactile signature
                begins here.
              </p>
              <div className="relative w-full aspect-square grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/images/ntw-bd93fa15719f.jpg"
                  alt="An array of fabric swatches including forest green silks, golden hand-woven cottons, and patterned brocades on a dark table"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Step 4 */}
            <div className="group cursor-default md:mt-20">
              <div className="text-display-lg font-light text-secondary/40 mb-8 transition-colors group-hover:text-secondary-fixed">
                04
              </div>
              <h3 className="font-serif text-headline-lg text-secondary-fixed mb-4">
                Crafting
              </h3>
              <p className="text-on-primary-container text-body-md mb-8 leading-relaxed">
                Over 80 hours of hand-work by our master artisans. Three
                fittings ensure the garment evolves perfectly alongside your
                physique.
              </p>
              <div className="relative w-full aspect-square grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/images/ntw-b864c9b61072.jpg"
                  alt="A close-up of a vintage sewing machine in motion with a blur of forest green thread"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-12 grid-rows-2 gap-8 h-[1000px]">
            <div className="relative col-span-8 row-span-1 shadow-lg">
              <Image
                src="/images/ntw-b6299a3b462b.jpg"
                alt="A cinematic view of the Naija Threadworks workshop with sunbeams over cutting tables and artisans at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative col-span-4 row-span-2 shadow-lg">
              <Image
                src="/images/ntw-de1d22ff554e.jpg"
                alt="A gentleman in a bespoke dark green tuxedo with gold embroidery standing in a minimalist gallery space"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative col-span-4 row-span-1 shadow-lg">
              <Image
                src="/images/ntw-48e43a8626e1.jpg"
                alt="Close-up of a tailor's chalk markings on navy blue fabric beside a pair of brass tailor's shears"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative col-span-4 row-span-1 shadow-lg">
              <Image
                src="/images/ntw-e2e39f8024c3.jpg"
                alt="A loom weaving green and cream thread into a modern Aso Oke pattern"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Request Appointment Section */}
      <section
        className="py-32 bg-surface-bright border-t border-secondary/10"
        id="appointment"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-secondary text-5xl mb-8">
            auto_fix
          </span>
          <h2 className="font-serif text-display-lg text-primary mb-6">
            Begin Your Bespoke Story
          </h2>
          <p className="text-on-surface-variant mb-12">
            Our master tailors are available for private consultations in
            Lagos, Abuja, and seasonally in London and New York. Please
            complete the form below to request your slot.
          </p>
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
