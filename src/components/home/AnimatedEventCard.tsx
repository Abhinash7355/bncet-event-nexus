
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Event } from '@/types/events';

interface AnimatedEventCardProps {
  event: Event;
  index: number;
}

const AnimatedEventCard = ({ event, index }: AnimatedEventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1 + 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <Card 
        className="overflow-hidden transition-shadow hover:shadow-xl relative h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0 flex-grow flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: isHovered ? 0.7 : 0.2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <div className="p-5 flex-grow flex flex-col">
            <motion.h3 
              className="text-xl font-bold mb-2 transition-colors"
              animate={{ color: isHovered ? '#0EA5E9' : '#1f2937' }}
              transition={{ duration: 0.3 }}
            >
              {event.title}
            </motion.h3>
            
            <div className="flex flex-col space-y-1 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar size={14} className="mr-2 text-bncet-blue" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={14} className="mr-2 text-bncet-blue" />
                <span>{event.location}</span>
              </div>
            </div>
            
            <motion.div className="mt-auto">
              <Link 
                to={`/events/${event.id}`}
                className="inline-flex items-center text-bncet-blue font-medium"
              >
                <span>View Details</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={16} className="ml-1" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
          
          {/* Glowing effect on hover */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.2 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: `radial-gradient(circle at 50% 50%, ${event.id.includes('animation') ? '#0EA5E9' : '#F59E0B'}, transparent 70%)`,
            }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedEventCard;
