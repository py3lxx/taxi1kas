import { MapPin, Clock, Route, Car } from "lucide-react";

export const LocationSection = () => {
  const locations = [
    "Kaş Merkez",
    "Kalkan",
    "Patara",
    "Gelemiş",
    "Islamlar",
    "Antalya Havalimanı"
  ];

  const features = [
    {
      icon: Clock,
      title: "Hızlı Servis",
      description: "Ortalama 5-10 dakikada yanınızdayız"
    },
    {
      icon: Route,
      title: "En İyi Rotalar",
      description: "Trafik ve yol durumunu takip ediyoruz"
    },
    {
      icon: Car,
      title: "Temiz Araçlar",
      description: "Düzenli bakım ve temizlik"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hizmet Bölgelerimiz
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Kaş & Kalkan Bölgesinde Tam Kapsamlı Hizmet
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 bg-card rounded-lg border border-border"
                >
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <span className="text-foreground">{location}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};