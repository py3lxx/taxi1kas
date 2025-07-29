import { Plane, Navigation, Crown } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Plane,
      title: "Havalimanı Transfer",
      description: "Antalya Havalimanı'ndan Kaş/Kalkan'a konforlu transfer hizmeti",
      features: [
        "Kapıdan kapıya hizmet",
        "Uçuş takibi",
        "Bavul yardımı"
      ]
    },
    {
      icon: Navigation,
      title: "Şehir İçi Ulaşım",
      description: "Kaş ve Kalkan içinde tüm destinasyonlara hızlı ulaşım",
      features: [
        "Hızlı servis",
        "Uygun fiyat",
        "Temiz araçlar"
      ]
    },
    {
      icon: Crown,
      title: "VIP Transfer",
      description: "Özel etkinlikler ve lüks seyahatler için VIP araç hizmeti",
      features: [
        "Lüks araçlar",
        "Özel şoför",
        "Premium konfor"
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hizmetlerimiz
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-center">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};