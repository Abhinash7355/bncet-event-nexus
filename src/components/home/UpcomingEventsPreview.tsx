
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import AnimatedEventCard from "./AnimatedEventCard";
import { Event } from "@/types/events";

interface UpcomingEventsPreviewProps {
  events: Event[];
}

const UpcomingEventsPreview = ({ events }: UpcomingEventsPreviewProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-white relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 40px 40px, #dbeafe 0, transparent 80px), radial-gradient(circle at 400px 400px, #e0f2fe 0, transparent 80px)",
          backgroundSize: "600px 600px",
          backgroundPosition: "0 0",
        }}
        animate={{ 
          backgroundPosition: isInView ? ["0px 0px", "100px 50px", "0px 0px"] : "0px 0px" 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <motion.div
          className="flex justify-between items-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <Link
            to="/events"
            className="flex items-center text-bncet-blue hover:text-bncet-darkBlue font-medium group"
          >
            <span>View All</span>
            <motion.div
              className="ml-1"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight size={18} />
            </motion.div>
          </Link>
        </motion.div>

        {events.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {events.map((event, index) => (
              <AnimatedEventCard 
                key={event.id} 
                event={event} 
                index={index} 
              />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500">No upcoming events at the moment. Check back soon!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEventsPreview;
