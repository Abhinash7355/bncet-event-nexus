
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/events/CountdownTimer";
import { Event } from "@/types/events";
import EventAttributes from "./EventAttributes";

interface FeaturedEventProps {
  event: Event;
}

const FeaturedEvent = ({ event }: FeaturedEventProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-bncet-blue bg-blue-100 rounded-full mb-6">
                <Calendar size={16} className="mr-2" />
                Featured Event
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {event.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {event.description}
              </p>
              
              <EventAttributes 
                date={event.date}
                time={event.time}
                location={event.location}
                className="mb-8"
              />
              
              <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                <Button asChild className="w-full sm:w-auto bg-bncet-blue hover:bg-bncet-darkBlue">
                  <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto border-bncet-blue text-bncet-blue hover:bg-blue-50">
                  <Link to={`/events/${event.id}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Countdown Timer */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white w-5/6 mx-auto py-4 px-6 rounded-lg shadow-lg">
                <p className="text-center text-sm font-medium text-gray-600 mb-2">Event starts in:</p>
                <div className="flex justify-center">
                  <CountdownTimer targetDate={new Date("2025-04-21T09:00:00")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvent;
