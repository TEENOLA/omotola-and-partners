import { MapPin, Phone, Mail, Clock, ShieldAlert } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ContactForm from "../components/contact/ContactForm";
import BookingForm from "../components/contact/BookingForm";
import FAQAccordion from "../components/contact/FAQAccordion";

const HOURS = [
  { day: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
  { day: "Saturday", time: "By Appointment" },
  { day: "Sunday", time: "Closed" },
];

const MAP_SRC =
  "https://www.google.com/maps?q=Meridian+Plaza,+Acme+Road,+Agidingbi,+Ikeja,+Lagos,+Nigeria&output=embed";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We're easiest to reach directly."
        description="Call, email, or book a consultation below — a member of our team responds to every inquiry within one business day."
      />

      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <Reveal className="lg:col-span-2 flex flex-col gap-6">
              <div className="rounded-lg overflow-hidden border border-hairline-light h-64">
                <iframe
                  title="Omotola & Partners LLP office location"
                  src={MAP_SRC}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-lg border border-hairline-light bg-white p-7 flex flex-col gap-5">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-brass shrink-0 mt-0.5" />
                  <p className="text-sm text-ink leading-relaxed">
                    Suite 14, Meridian Plaza
                    <br />
                    18 Acme Road, Agidingbi, Ikeja
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone size={18} className="text-brass shrink-0 mt-0.5" />
                  <a
                    href="tel:+2348035129487"
                    className="text-sm text-ink hover:text-brass transition-colors"
                  >
                    +234 803 512 9487
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail size={18} className="text-brass shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@omotolapartners.com"
                    className="text-sm text-ink hover:text-brass transition-colors"
                  >
                    info@omotolapartners.com
                  </a>
                </div>
                <div className="flex gap-3">
                  <Clock size={18} className="text-brass shrink-0 mt-0.5" />
                  <div className="text-sm text-ink space-y-1">
                    {HOURS.map((h) => (
                      <div key={h.day} className="flex gap-2">
                        <span className="w-32 text-slate">{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-brass/40 bg-ink p-7 flex gap-3">
                <ShieldAlert
                  size={18}
                  className="text-brass-light shrink-0 mt-0.5"
                />
                <div>
                  <p className="citation text-brass-light">
                    Emergency Legal Contact
                  </p>
                  <p className="text-sm text-parchment/70 mt-1.5 leading-relaxed">
                    Existing clients facing an urgent matter outside business
                    hours can reach our emergency line at{" "}
                    <a
                      href="tel:+2348035129487"
                      className="text-brass-light hover:text-brass"
                    >
                      +234 803 512 9487
                    </a>
                    .
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-3 flex flex-col gap-8">
              <ContactForm />
              <BookingForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-parchment border-t border-hairline-light">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20">
          <Reveal>
            <p className="citation text-brass mb-3 text-center">FAQ</p>
            <h2 className="font-display text-3xl text-ink text-center mb-10">
              Common Questions
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
