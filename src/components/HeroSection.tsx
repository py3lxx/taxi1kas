import { Phone, MessageCircle, Car, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export const HeroSection = () => {
  const phoneNumber = "+905462558064";
  const whatsappNumber = "905462558064";
  const { theme, setTheme } = useTheme();

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendWhatsAppMessage = (message = "Merhaba Gökhan Bey, taksi hizmeti almak istiyorum.") => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/10 to-primary/20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 40}px`
            }}
          >
            <Car />
          </motion.div>
        ))}
      </div>

      {/* Theme Toggle */}
      <motion.div 
        className="absolute top-4 right-4 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="glass-effect hover:scale-110 transition-transform duration-300"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </motion.div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-6 p-4 rounded-full glass-effect"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Car className="w-12 h-12 text-primary animate-bounce-taxi" />
            <span className="text-2xl font-bold text-primary">Gökhan Taksi</span>
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Kaş & Kalkan
          <motion.span 
            className="block text-4xl md:text-6xl mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Güvenilir Taksi Hizmeti
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-3xl mb-12 text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          7/24 profesyonel transfer hizmeti ile 
          <span className="text-primary font-semibold"> güvenle seyahat edin</span>
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={makeCall}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 animate-glow"
            >
              <Phone className="w-8 h-8 mr-3 animate-bounce" />
              Hemen Ara
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => sendWhatsAppMessage()}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-8 text-xl font-bold rounded-full shadow-2xl glass-effect transition-all duration-300"
            >
              <MessageCircle className="w-8 h-8 mr-3" />
              WhatsApp
            </Button>
          </motion.div>
        </motion.div>

        {/* Taxi Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: "7/24", label: "Hizmet" },
            { number: "5+", label: "Yıl Tecrübe" },
            { number: "1000+", label: "Mutlu Müşteri" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl glass-effect"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Floating Taxi Animation */}
      <motion.div
        className="absolute bottom-10 left-10 text-primary opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Car size={60} />
      </motion.div>
    </section>
  );
};