import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { RoomsSection } from '@/components/RoomsSection';
import { AmenitiesSection } from '@/components/AmenitiesSection';
import { LocationSection } from '@/components/LocationSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <RoomsSection />
      <AmenitiesSection />
      <LocationSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
