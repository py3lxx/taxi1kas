import { Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const phoneNumber = "+905462558064";
  const whatsappNumber = "905462558064";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceNames = {
      airport: "Havalimanı Transfer",
      city: "Şehir İçi Ulaşım",
      vip: "VIP Transfer",
      other: "Diğer"
    };

    let whatsappMessage = `Merhaba Gökhan Bey,\n\n`;
    whatsappMessage += `Ad: ${formData.name}\n`;
    whatsappMessage += `Telefon: ${formData.phone}\n`;
    whatsappMessage += `Hizmet: ${serviceNames[formData.service as keyof typeof serviceNames] || formData.service}\n`;
    if (formData.message) {
      whatsappMessage += `Mesaj: ${formData.message}\n`;
    }
    whatsappMessage += `\nTaksi hizmeti almak istiyorum.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: phoneNumber,
      subtitle: "7/24 Hizmet"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: phoneNumber,
      subtitle: "Anında İletişim"
    },
    {
      icon: MapPin,
      title: "Bölge",
      value: "Kaş & Kalkan",
      subtitle: "Antalya"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            İletişim
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium">
                      {info.value}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Rezervasyon Talebi
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Adınız</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="service">Hizmet Türü</Label>
                <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seçiniz" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="airport">Havalimanı Transfer</SelectItem>
                    <SelectItem value="city">Şehir İçi Ulaşım</SelectItem>
                    <SelectItem value="vip">VIP Transfer</SelectItem>
                    <SelectItem value="other">Diğer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Mesajınız (Opsiyonel)</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                <Send className="w-5 h-5 mr-2" />
                WhatsApp ile Gönder
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};