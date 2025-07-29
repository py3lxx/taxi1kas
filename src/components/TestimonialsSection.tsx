import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ayşe H.",
      text: "Havalimanından Kaş'a kadar çok rahat bir yolculuk oldu. Gökhan Bey çok kibar ve güvenilir.",
      rating: 5
    },
    {
      name: "Mehmet K.",
      text: "Gece yarısı acil bir durumda aradık, hemen geldi. Çok teşekkür ederiz!",
      rating: 5
    },
    {
      name: "Fatma S.",
      text: "Kalkan'da tatildeyken her gün kullandık. Hem güvenilir hem de uygun fiyatlı.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Müşteri Yorumları
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className="w-5 h-5 text-yellow-400 fill-current" 
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 text-center italic">
                "{testimonial.text}"
              </p>
              
              <div className="text-center">
                <p className="font-semibold text-foreground">
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};