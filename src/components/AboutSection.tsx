import { Clock, ShieldCheck, MapPin, Star } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Clock,
      title: "7/24 Hizmet",
      description: "Gece gündüz demeden her an hizmetinizdeyiz"
    },
    {
      icon: ShieldCheck,
      title: "Güvenilir",
      description: "Lisanslı ve sigortalı araçlarımızla güvenle seyahat edin"
    },
    {
      icon: MapPin,
      title: "Yerel Bilgi",
      description: "Bölgeyi çok iyi biliyoruz, en kısa yolu gösteririz"
    },
    {
      icon: Star,
      title: "Kaliteli Hizmet",
      description: "Müşteri memnuniyeti bizim önceliğimizdir"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Neden Bizi Seçmelisiniz?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};