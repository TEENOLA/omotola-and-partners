import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { practiceAreas } from "../../data/practiceAreas";

// lucide-react dropped brand marks; kept as minimal inline glyphs instead.
const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zM8.02 8.24h4.37v2.01h.06c.61-1.15 2.1-2.37 4.33-2.37 4.63 0 5.48 3.05 5.48 7.02V23h-4.56v-6.94c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.8-2.67 3.67V23H8.02V8.24z" />
  </svg>
);
const XIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
    <path d="M18.24 2H21l-6.4 7.32L22.15 22h-6.4l-5-6.58L4.9 22H2.13l6.87-7.86L1.5 2h6.55l4.53 6.02L18.24 2zm-1.12 18h1.5L7.02 3.9H5.4L17.12 20z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment/80 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <span className="font-display text-lg text-parchment">Omotola & Partners</span>
            <p className="citation text-brass-light mt-1">Attorneys &amp; Solicitors</p>
            <p className="text-sm mt-4 leading-relaxed max-w-xs">
              Trusted legal counsel. Practical business solutions. Full-service commercial law firm serving Lagos
              and beyond since 2011.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="hover:text-brass-light transition-colors">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="X (Twitter)" className="hover:text-brass-light transition-colors">
                <XIcon />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-brass-light transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="citation text-parchment mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-brass-light transition-colors">About the Firm</Link></li>
              <li><Link to="/team" className="hover:text-brass-light transition-colors">Our Team</Link></li>
              <li><Link to="/insights" className="hover:text-brass-light transition-colors">Insights</Link></li>
              <li><Link to="/careers" className="hover:text-brass-light transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-brass-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="citation text-parchment mb-4">Practice Areas</h3>
            <ul className="space-y-2.5 text-sm">
              {practiceAreas.slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link to={`/practice-areas/${area.slug}`} className="hover:text-brass-light transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/practice-areas" className="text-brass-light hover:text-brass transition-colors">
                  View all &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="citation text-parchment mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPin size={16} className="shrink-0 mt-0.5 text-brass-light" />
                <span>Suite 14, Meridian Plaza, 18 Acme Road, Agidingbi, Ikeja, Lagos, Nigeria</span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="shrink-0 mt-0.5 text-brass-light" />
                <a href="tel:+2348035129487" className="hover:text-brass-light transition-colors">
                  +234 803 512 9487
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="shrink-0 mt-0.5 text-brass-light" />
                <a href="mailto:info@omotolapartners.com" className="hover:text-brass-light transition-colors">
                  info@omotolapartners.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-hairline/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-parchment/50">
          <p>&copy; {new Date().getFullYear()} Omotola & Partners LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-brass-light transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brass-light transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
