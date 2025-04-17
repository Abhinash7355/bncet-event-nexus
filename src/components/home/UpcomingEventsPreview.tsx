
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ChevronRight, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Event } from "@/types/events";

interface UpcomingEventsPreviewProps {
  events: Event[];
}

const UpcomingEventsPreview = ({ events }: UpcomingEventsPreviewProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <Link
            to="/events"
            className="flex items-center text-bncet-blue hover:text-bncet-darkBlue font-medium"
          >
            View All
            <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card 
                key={event.id}
                className="overflow-hidden transition-shadow hover:shadow-md group"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-bncet-blue transition-colors">
                      {event.title}
                    </h3>
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
                    <Link 
                      to={`/events/${event.id}`}
                      className="inline-flex items-center text-bncet-blue font-medium hover:underline"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No upcoming events at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEventsPreview;
