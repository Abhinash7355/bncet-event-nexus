
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Hero3DAnimation from "./Hero3DAnimation";
import ScrollPrompt from "./ScrollPrompt";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-bncet-darkBlue to-bncet-blue overflow-hidden h-screen flex items-center">
      <div className="absolute inset-0 z-0 opacity-20 bg-grid-white/[0.2]" />
      
      {/* 3D Animation Background */}
      <Hero3DAnimation />
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center text-white">
          <motion.div 
            className="inline-block p-2 px-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-white/90">Welcome to</span>{" "}
            <span className="text-bncet-gold">BNCET Events Hub</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Celebrate. Connect. Create.
            <motion.span 
              className="block text-bncet-gold mt-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              At B.N. College of Engineering & Technology
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            Discover exciting events, workshops, and competitions happening at our campus in Lucknow. Join us to learn, network, and showcase your talents.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <Button asChild size="lg" className="bg-bncet-gold hover:bg-bncet-lightGold text-black font-semibold group">
              <Link to="/events">
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  Browse Events
                </motion.span>
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0, opacity: 1 }}
                  whileHover={{ x: 4, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 group"
            >
              <Link to="/gallery">
                <motion.span
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  View Gallery
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <ScrollPrompt />
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-16 sm:h-20 text-white fill-current">
          <path d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,74.7C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
