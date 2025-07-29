import { Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gökhan Taksi</h3>
            <p className="text-muted-foreground">
              Kaş & Kalkan'da güvenilir taksi hizmeti
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+90 546 255 80 64</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Kaş, Antalya</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Havalimanı Transfer</li>
              <li>Şehir İçi Ulaşım</li>
              <li>VIP Transfer</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; 2024 Gökhan Taksi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};