
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { eventsData } from "@/lib/data";

const UpcomingEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = eventsData.filter((event) => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-10 mx-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6">
          Upcoming <span className="text-bncet-blue">Events</span>
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Discover and register for upcoming events at B.N. College of Engineering and Technology. Join us for workshops, competitions, and more!
        </p>

        {/* Search */}
        <div className="mb-8 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search events by name, description, or location..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Events List */}
        <div className="grid gap-6 my-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden transition-shadow hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto bg-gray-200 relative">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                      {event.featured && (
                        <div className="absolute top-2 left-2 bg-bncet-gold text-black text-xs font-bold px-2 py-1 rounded">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="md:w-2/3 p-5">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={16} className="mr-2 text-bncet-blue" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={16} className="mr-2 text-bncet-blue" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 sm:col-span-2">
                          <MapPin size={16} className="mr-2 text-bncet-blue" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <Button asChild variant="outline" className="text-bncet-blue border-bncet-blue hover:bg-blue-50">
                          <Link to={`/events/${event.id}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button asChild className="bg-bncet-blue hover:bg-bncet-darkBlue">
                          <Link to={`/events/${event.id}`}>
                            Register Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 mb-4">No events found matching your search criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm("")}
                className="text-bncet-blue border-bncet-blue hover:bg-blue-50"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
