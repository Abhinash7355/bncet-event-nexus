
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/events/CountdownTimer";
import { Event } from "@/types/events";
import EventAttributes from "./EventAttributes";
import AnimatedSection from "./AnimatedSection";

interface FeaturedEventProps {
  event: Event;
}

const FeaturedEvent = ({ event }: FeaturedEventProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=60')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <motion.div 
                className="inline-flex items-center px-3 py-1 text-sm font-medium text-bncet-blue bg-blue-100 rounded-full mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Calendar size={16} className="mr-2" />
                Featured Event
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {event.title}
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {event.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <EventAttributes 
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  className="mb-8"
                />
              </motion.div>
              
              <motion.div 
                className="space-y-4 sm:space-y-0 sm:flex sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Button asChild className="w-full sm:w-auto bg-bncet-blue hover:bg-bncet-darkBlue group">
                  <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      Register Now
                    </motion.span>
                    <motion.span
                      className="inline-block ml-2"
                      initial={{ x: 0, opacity: 1 }}
                      whileHover={{ x: 4, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="w-full sm:w-auto border-bncet-blue text-bncet-blue hover:bg-blue-50">
                  <Link to={`/events/${event.id}`}>
                    View Details
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <motion.img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-auto"
                  animate={{ scale: isHovering ? 1.05 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-bncet-blue/30 to-transparent pointer-events-none"
                  animate={{ opacity: isHovering ? 0.8 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Animated highlights */}
              <AnimatedSection 
                animation="scale" 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white w-5/6 mx-auto py-4 px-6 rounded-lg shadow-lg"
              >
                <p className="text-center text-sm font-medium text-gray-600 mb-2">Event starts in:</p>
                <div className="flex justify-center">
                  <CountdownTimer targetDate={new Date("2025-04-21T09:00:00")} />
                </div>
              </AnimatedSection>
              
              {/* Floating badges */}
              {event.category && event.category.length > 0 && (
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {event.category.map((category, index) => (
                    <motion.span
                      key={index}
                      className="bg-white/80 backdrop-blur-sm text-bncet-darkBlue text-xs px-2 py-1 rounded-md"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                    >
                      {category}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvent;
