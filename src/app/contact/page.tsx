import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ntw-f891dedd4bd5.jpg"
            alt="A bustling Lagos garment workshop at golden hour with sunbeams over antique sewing machines and vibrant West African textiles"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75" />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1280px] mx-auto w-full">
          <div className="max-w-2xl text-on-primary">
            <span className="text-label-sm uppercase tracking-[0.3em] text-secondary-fixed block mb-4">
              Connect With Heritage
            </span>
            <h1 className="font-serif text-display-lg leading-tight mb-6">
              Woven into the heart of Lagos.
            </h1>
            <p className="text-surface-bright/80 max-w-lg leading-relaxed">
              Whether you are seeking a bespoke commission, wholesale
              partnership, or simply wish to visit our workshop, our doors
              are open to the connoisseurs of fine thread.
            </p>
          </div>
        </div>
      </section>

      {/* Information & Form Grid */}
      <section className="py-24 px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="font-serif text-headline-lg mb-8 text-primary">
                The Workshop
              </h2>
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    location_on
                  </span>
                  <div>
                    <h3 className="text-label-sm uppercase text-secondary mb-2">
                      Lagos Atelier
                    </h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      12 Heritage Square, Victoria Island,
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    call
                  </span>
                  <div>
                    <h3 className="text-label-sm uppercase text-secondary mb-2">
                      Direct Line
                    </h3>
                    <a
                      className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
                      href="tel:+2347047444628"
                    >
                      +234 704 744 4628
                    </a>
                  </div>
                </div>
                {/* Social */}
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    alternate_email
                  </span>
                  <div>
                    <h3 className="text-label-sm uppercase text-secondary mb-2">
                      Digital Presence
                    </h3>
                    <a
                      className="text-body-md text-primary font-bold hover:underline decoration-secondary"
                      href="https://instagram.com/naija_thread_works"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @naija_thread_works
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-surface-container-low border border-outline-variant/30 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-serif text-[20px] mb-4 italic">
                  Artisanal Hours
                </h3>
                <ul className="space-y-3 text-on-surface-variant">
                  <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>Mon &mdash; Fri</span> <span>09:00 &mdash; 18:00</span>
                  </li>
                  <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>Saturday</span> <span>10:00 &mdash; 16:00</span>
                  </li>
                  <li className="flex justify-between text-secondary italic">
                    <span>Sunday</span> <span>By Appointment</span>
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-5">
                <span
                  className="material-symbols-outlined text-[120px]"
                  style={{ fontVariationSettings: "'wght' 100" }}
                >
                  architecture
                </span>
              </div>
            </div>
            {/* Mini Map Integration */}
            <div className="relative aspect-video w-full grayscale opacity-80 hover:grayscale-0 transition-all duration-700 overflow-hidden bg-surface-container-highest">
              <Image
                src="/images/ntw-26190fb6d59f.png"
                alt="A stylized minimalist architectural map of Victoria Island, Lagos with muted tones and forest green landmark markers"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-10 md:p-16 shadow-lg shadow-primary/5 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
              <h2 className="font-serif text-headline-lg mb-4 text-primary">
                General Inquiries
              </h2>
              <p className="text-body-md text-on-surface-variant mb-12 italic">
                Please fill the form below and our concierge will respond
                within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Divider */}
      <section className="py-12">
        <div className="px-6 md:px-20 max-w-[1280px] mx-auto flex items-center gap-8 opacity-20">
          <div className="flex-grow h-[1px] bg-outline" />
          <span className="material-symbols-outlined text-secondary">
            architecture
          </span>
          <div className="flex-grow h-[1px] bg-outline" />
        </div>
      </section>
    </>
  );
}
