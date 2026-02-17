import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hotel-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-display text-2xl font-bold text-primary-foreground">
                ITS South East
              </span>
              <span className="block text-sm text-primary-foreground/60 tracking-wider uppercase">
                Residency
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Your comfortable and affordable home away from home in Perumbakkam, Chennai. 
              Ideally located near Gleneagles Global Hospital and major IT hubs.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Quick Links</h3>
            <nav>
              <ul className="space-y-3">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#rooms', label: 'Our Rooms' },
                  { href: '#amenities', label: 'Amenities' },
                  { href: '#location', label: 'Location' },
                  { href: '#reviews', label: 'Guest Reviews' },
                  { href: '#contact', label: 'Contact Us' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Room Types */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Our Rooms</h3>
            <ul className="space-y-3">
              {[
                { name: 'Standard Room', price: 'From ₹1,499/night' },
                { name: 'Deluxe Room', price: 'From ₹2,499/night' },
                { name: 'Premium Suite', price: 'From ₹3,999/night' },
              ].map((room) => (
                <li key={room.name}>
                  <a href="#rooms" className="block text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                    {room.name}
                    <span className="block text-primary-foreground/50 text-xs">{room.price}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+914412345678" className="flex items-start gap-3 text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+91-44-1234-5678</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@itssoutheastresidency.com" className="flex items-start gap-3 text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>info@itssoutheastresidency.com</span>
                </a>
              </li>
              <li>
                <address className="flex items-start gap-3 text-primary-foreground/70 text-sm not-italic">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    123 Main Road, Perumbakkam<br />
                    Chennai, Tamil Nadu 600100
                  </span>
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} ITS South East Residency. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
