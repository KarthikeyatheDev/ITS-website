import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the check-in and check-out time?',
    answer: 'Check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in and late check-out are available upon request and subject to availability.',
  },
  {
    question: 'Is ITS South East Residency near Gleneagles Global Hospital?',
    answer: 'Yes! ITS South East Residency is located just 5 minutes away from Gleneagles Global Hospital, making it the ideal accommodation choice for patients\' families and medical travelers.',
  },
  {
    question: 'Does the hotel offer free WiFi?',
    answer: 'Yes, complimentary high-speed WiFi is available in all rooms and common areas. Perfect for business travelers who need to stay connected.',
  },
  {
    question: 'Is breakfast included in the room rate?',
    answer: 'Yes, we offer complimentary South Indian breakfast to all our guests. It includes traditional items like idli, dosa, vada, and more.',
  },
  {
    question: 'Is parking available at the hotel?',
    answer: 'Yes, we provide free secure parking for all guests. Both car and two-wheeler parking is available on-site.',
  },
  {
    question: 'Can I book a room for a few hours?',
    answer: 'Yes, we offer hourly booking for guests who need a room for a short duration. Please contact our front desk for availability and rates.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit/debit cards, UPI payments, and online bank transfers. Corporate billing is also available.',
  },
  {
    question: 'Is there a restaurant at the hotel?',
    answer: 'We offer room service with a variety of South Indian and North Indian cuisines. There are also many restaurants within walking distance.',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about staying at ITS South East Residency.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-hotel-navy-light transition-colors"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
};
