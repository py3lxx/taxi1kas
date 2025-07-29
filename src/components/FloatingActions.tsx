import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const FloatingActions = () => {
  const [showDesktop, setShowDesktop] = useState(false);
  
  const phoneNumber = "+905462558064";
  const whatsappNumber = "905462558064";

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendWhatsAppMessage = (message = "Merhaba Gökhan Bey, taksi hizmeti almak istiyorum.") => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.pageYOffset > 300 && window.innerWidth >= 768;
      setShowDesktop(shouldShow);
    };

    const handleResize = () => {
      const shouldShow = window.pageYOffset > 300 && window.innerWidth >= 768;
      setShowDesktop(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Mobile Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 md:hidden z-50">
        <Button
          onClick={makeCall}
          size="lg"
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-6 h-6" />
        </Button>
        
        <Button
          onClick={() => sendWhatsAppMessage()}
          size="lg"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Desktop WhatsApp Button */}
      {showDesktop && (
        <div className="fixed bottom-4 right-4 hidden md:block z-50">
          <Button
            onClick={() => sendWhatsAppMessage()}
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full px-6 py-3"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </div>
      )}
    </>
  );
};