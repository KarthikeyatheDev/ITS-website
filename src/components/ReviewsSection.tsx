import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Bangalore, India',
    rating: 5,
    date: '2024-01-15',
    title: 'Perfect stay near the hospital',
    review: 'Stayed here while visiting family at Gleneagles Hospital. The location is incredibly convenient, and the staff was very understanding of our needs. Clean rooms, good breakfast, and very affordable.',
  },
  {
    id: 2,
    name: 'Priya Menon',
    location: 'Kerala, India',
    rating: 5,
    date: '2024-01-10',
    title: 'Great value for money',
    review: 'The best budget hotel in Perumbakkam! Free WiFi, free parking, and complimentary breakfast - what more can you ask for? The room was spacious and well-maintained.',
  },
  {
    id: 3,
    name: 'Michael Thomas',
    location: 'Mumbai, India',
    rating: 4,
    date: '2024-01-05',
    title: 'Good for business travelers',
    review: 'Was in Chennai for work at the IT park. This hotel is perfectly located and the WiFi was excellent for my video calls. Front desk was available 24/7 which was helpful.',
  },
  {
    id: 4,
    name: 'Anitha Sharma',
    location: 'Delhi, India',
    rating: 5,
    date: '2023-12-28',
    title: 'Highly recommend!',
    review: 'We had an amazing stay. The deluxe room was beautiful with all modern amenities. Staff was courteous and helpful. Will definitely come back!',
  },
  {
    id: 5,
    name: 'Suresh Nair',
    location: 'Hyderabad, India',
    rating: 5,
    date: '2023-12-20',
    title: 'Best hotel in the area',
    review: 'Clean rooms, excellent location, friendly staff. The breakfast was delicious - loved the South Indian options. Parking was convenient too.',
  },
  {
    id: 6,
    name: 'Dr. Fatima Hassan',
    location: 'Chennai, India',
    rating: 4,
    date: '2023-12-15',
    title: 'Comfortable and convenient',
    review: 'I recommend this hotel to all my patients\' families. It\'s the closest good hotel to Gleneagles. Rooms are clean and the staff is very accommodating.',
  },
];

export const ReviewsSection = () => {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < Math.round(averageRating) ? 'fill-secondary text-secondary' : 'text-muted'}`}
                />
              ))}
            </div>
            <span className="text-foreground font-semibold">{averageRating.toFixed(1)}</span>
            <span className="text-muted-foreground">from 328+ reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-muted rounded-2xl p-6 relative"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-secondary/30 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={review.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'fill-secondary text-secondary' : 'text-muted-foreground/30'}`}
                  />
                ))}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-foreground mb-2" itemProp="name">
                {review.title}
              </h3>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm mb-6 line-clamp-4" itemProp="reviewBody">
                "{review.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3" itemProp="author" itemScope itemType="https://schema.org/Person">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm" itemProp="name">
                    {review.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {review.location}
                  </div>
                </div>
              </div>

              <meta itemProp="datePublished" content={review.date} />
              <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Hotel">
                <meta itemProp="name" content="ITS South East Residency" />
              </div>
            </article>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-6">Trusted by travelers from across India</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-foreground font-semibold">TripAdvisor</div>
            <div className="text-foreground font-semibold">Google Reviews</div>
            <div className="text-foreground font-semibold">MakeMyTrip</div>
            <div className="text-foreground font-semibold">Goibibo</div>
          </div>
        </div>
      </div>
    </section>
  );
};
