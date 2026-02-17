import { MapPin, Star, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hotel-hero.jpg';

export const HeroSection = () => {
  const scrollToRooms = () => {
    const element = document.querySelector('#rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="ITS South East Residency hotel exterior with beautiful landscaping in Perumbakkam, Chennai"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-secondary px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Near Gleneagles Global Hospital, Perumbakkam</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up stagger-1">
            Your Comfortable Stay in{' '}
            <span className="text-secondary">Chennai</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up stagger-2">
            Experience affordable luxury at ITS South East Residency. 
            Budget-friendly rooms with premium amenities, just minutes from major hospitals 
            and IT hubs in Perumbakkam.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-8 animate-fade-in-up stagger-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-primary-foreground/90 text-sm">
              4.5/5 from 328+ happy guests
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-secondary hover:bg-hotel-gold-dark text-secondary-foreground font-semibold px-8 py-6 text-lg"
            >
              Book Now
            </Button>
            <Button
              onClick={scrollToRooms}
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              View Rooms
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in-up stagger-5">
            <div>
              <div className="text-3xl font-display font-bold text-secondary">24/7</div>
              <div className="text-primary-foreground/70 text-sm">Front Desk</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-secondary">5 min</div>
              <div className="text-primary-foreground/70 text-sm">To Hospital</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-secondary">Free</div>
              <div className="text-primary-foreground/70 text-sm">WiFi & Parking</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <button
          onClick={scrollToRooms}
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Scroll to rooms section"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};
