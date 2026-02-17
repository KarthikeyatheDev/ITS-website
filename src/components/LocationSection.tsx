import { MapPin, Building2, Train, Plane, Hospital, School } from 'lucide-react';

const nearbyPlaces = [
  {
    icon: Hospital,
    name: 'Gleneagles Global Hospital',
    distance: '5 min walk',
    description: 'Multi-specialty hospital',
  },
  {
    icon: Building2,
    name: 'Siruseri IT Park',
    distance: '10 min drive',
    description: 'Major IT hub',
  },
  {
    icon: Train,
    name: 'Perumbakkam Bus Stop',
    distance: '2 min walk',
    description: 'Public transport',
  },
  {
    icon: School,
    name: 'Velammal School',
    distance: '8 min drive',
    description: 'Educational institution',
  },
  {
    icon: Plane,
    name: 'Chennai Airport',
    distance: '35 min drive',
    description: 'International airport',
  },
  {
    icon: Building2,
    name: 'OMR Food Street',
    distance: '5 min drive',
    description: 'Restaurants & cafes',
  },
];

export const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Find Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Location
          </h2>
          <p className="text-muted-foreground">
            Strategically located in Perumbakkam, Chennai, we offer easy access to major hospitals, 
            IT parks, and public transportation. Ideal for both business and leisure travelers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-hotel-elevated h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5675034682187!2d80.20430931482168!3d12.916500090892468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d97e4d1b1a1%3A0x3b2b1b2b1b2b1b2b!2sPerumbakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ITS South East Residency Location Map - Perumbakkam, Chennai"
              />
            </div>
          </div>

          {/* Address & Nearby Places */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Address Card */}
            <div className="bg-card rounded-2xl p-8 shadow-hotel">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    ITS South East Residency
                  </h3>
                  <address className="text-muted-foreground not-italic leading-relaxed">
                    123 Main Road, Perumbakkam<br />
                    Chennai, Tamil Nadu 600100<br />
                    India
                  </address>
                  <div className="mt-4 space-y-2">
                    <a href="tel:+914412345678" className="block text-primary hover:text-hotel-navy-light transition-colors">
                      📞 +91-44-1234-5678
                    </a>
                    <a href="mailto:info@itssoutheastresidency.com" className="block text-primary hover:text-hotel-navy-light transition-colors">
                      ✉️ info@itssoutheastresidency.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Places */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Nearby Landmarks
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {nearbyPlaces.map((place) => (
                  <div
                    key={place.name}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <place.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{place.name}</h4>
                      <p className="text-secondary font-medium text-xs">{place.distance}</p>
                      <p className="text-muted-foreground text-xs">{place.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions CTA */}
            <a
              href="https://maps.google.com/?q=ITS+South+East+Residency+Perumbakkam+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-hotel-navy-light transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
