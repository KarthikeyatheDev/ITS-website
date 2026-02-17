import { Users, Maximize, Wifi, Wind, Tv, Bath, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import roomStandard from '@/assets/room-standard.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomSuite from '@/assets/room-suite.jpg';

const rooms = [
  {
    id: 'standard',
    name: 'Standard Room',
    description: 'Comfortable and budget-friendly room perfect for solo travelers or couples. Features essential amenities for a pleasant stay.',
    image: roomStandard,
    alt: 'Standard room at ITS South East Residency with queen bed and modern amenities',
    price: '₹1,499',
    priceNote: 'per night',
    size: '200 sq ft',
    guests: '2 Guests',
    features: ['Queen Bed', 'Free WiFi', 'AC', 'TV', 'Attached Bath'],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    description: 'Spacious room with premium furnishings and enhanced amenities. Ideal for business travelers and families seeking extra comfort.',
    image: roomDeluxe,
    alt: 'Deluxe room at ITS South East Residency with king bed and elegant decor',
    price: '₹2,499',
    priceNote: 'per night',
    size: '300 sq ft',
    guests: '3 Guests',
    features: ['King Bed', 'Free WiFi', 'AC', 'Smart TV', 'Work Desk', 'Mini Fridge'],
    popular: true,
  },
  {
    id: 'suite',
    name: 'Premium Suite',
    description: 'Luxurious suite with separate living area and premium amenities. Perfect for extended stays and special occasions.',
    image: roomSuite,
    alt: 'Premium suite at ITS South East Residency with living area and city view',
    price: '₹3,999',
    priceNote: 'per night',
    size: '450 sq ft',
    guests: '4 Guests',
    features: ['King Bed', 'Living Area', 'Free WiFi', 'AC', 'Smart TV', 'City View', 'Premium Bath'],
  },
];

export const RoomsSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rooms" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Accommodations</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Rooms & Suites
          </h2>
          <p className="text-muted-foreground">
            Choose from our range of well-appointed rooms designed for comfort and convenience. 
            All rooms feature modern amenities and are regularly sanitized for your safety.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="group overflow-hidden border-0 shadow-hotel hover:shadow-hotel-elevated transition-shadow duration-300">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {room.popular && (
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <span className="font-display text-xl font-bold text-primary">{room.price}</span>
                  <span className="text-muted-foreground text-sm"> {room.priceNote}</span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Room Name */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {room.name}
                </h3>

                {/* Room Specs */}
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.guests}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.slice(0, 4).map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                    >
                      <Check className="w-3 h-3 text-secondary" />
                      {feature}
                    </span>
                  ))}
                  {room.features.length > 4 && (
                    <span className="text-xs text-muted-foreground">
                      +{room.features.length - 4} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-hotel-navy-light text-primary-foreground"
                >
                  Book This Room
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          * Prices may vary based on season and availability. Contact us for best rates.
        </p>
      </div>
    </section>
  );
};
