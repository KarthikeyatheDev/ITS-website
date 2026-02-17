import { 
  Wifi, 
  Car, 
  UtensilsCrossed, 
  Wind, 
  Clock, 
  Shield, 
  Tv, 
  Droplets,
  Phone,
  MapPin
} from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: 'Free High-Speed WiFi',
    description: 'Stay connected with complimentary high-speed internet in all rooms and common areas.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Complimentary Breakfast',
    description: 'Start your day with a delicious South Indian breakfast included with your stay.',
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Secure on-site parking available at no extra cost for all our guests.',
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'Climate-controlled rooms to keep you comfortable throughout your stay.',
  },
  {
    icon: Clock,
    title: '24/7 Front Desk',
    description: 'Round-the-clock assistance for check-in, check-out, and guest services.',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'CCTV surveillance and secure key card access for your peace of mind.',
  },
  {
    icon: Tv,
    title: 'Flat Screen TV',
    description: 'Enjoy entertainment with cable TV and streaming options in every room.',
  },
  {
    icon: Droplets,
    title: 'Hot Water 24/7',
    description: 'Continuous hot water supply with modern geyser systems in all bathrooms.',
  },
  {
    icon: Phone,
    title: 'Room Service',
    description: 'Order food and beverages directly to your room at reasonable prices.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Walking distance to hospitals, restaurants, and public transportation.',
  },
];

export const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Hotel Amenities
          </h2>
          <p className="text-muted-foreground">
            We provide everything you need for a comfortable and hassle-free stay. 
            From essential amenities to thoughtful extras, we've got you covered.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="group p-6 rounded-xl bg-muted hover:bg-primary transition-colors duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-4 transition-colors">
                <amenity.icon className="w-6 h-6 text-secondary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm transition-colors">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-muted rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Special Services Available
              </h3>
              <ul className="space-y-3">
                {[
                  'Airport pickup and drop (on request)',
                  'Laundry and ironing services',
                  'Travel desk for sightseeing arrangements',
                  'Doctor on call for emergencies',
                  'Extended stay discounts',
                  'Corporate billing facility',
                ].map((service) => (
                  <li key={service} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-hotel">
              <h4 className="font-display text-xl font-bold text-foreground mb-2">
                Check-in & Check-out
              </h4>
              <div className="space-y-4 mt-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Check-in Time</span>
                  <span className="font-semibold text-foreground">12:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Check-out Time</span>
                  <span className="font-semibold text-foreground">11:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground">Early Check-in</span>
                  <span className="font-semibold text-foreground">On Request</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
