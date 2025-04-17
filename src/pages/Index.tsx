
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CountdownTimer from "@/components/events/CountdownTimer";
import { eventsData } from "@/lib/data";

const Index = () => {
  const [featuredEvent, setFeaturedEvent] = useState<any>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);

  useEffect(() => {
    // Get featured event
    const featured = eventsData.find(event => event.featured && event.status === "upcoming");
    setFeaturedEvent(featured || null);

    // Get upcoming events (excluding featured one)
    const upcoming = eventsData
      .filter(event => event.status === "upcoming" && (!featured || event.id !== featured.id))
      .slice(0, 3);
    setUpcomingEvents(upcoming);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bncet-darkBlue to-bncet-blue overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-grid-white/[0.2]" />
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-16 md:py-24 relative z-10">
          <div className="flex flex-col items-center text-center text-white">
            <div className="inline-block p-2 px-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <span className="text-white/90">Welcome to</span>{" "}
              <span className="text-bncet-gold">BNCET Events Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              Celebrate. Connect. Create.
              <span className="block text-bncet-gold mt-2">At B.N. College of Engineering & Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              Discover exciting events, workshops, and competitions happening at our campus in Lucknow. Join us to learn, network, and showcase your talents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-bncet-gold hover:bg-bncet-lightGold text-black font-semibold">
                <Link to="/events">
                  Browse Events
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/gallery">
                  View Gallery
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-16 sm:h-20 text-white fill-current">
            <path d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,74.7C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Featured Event Section */}
      {featuredEvent && (
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
                    {featuredEvent.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {featuredEvent.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-2 text-bncet-blue" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-2 text-bncet-blue" />
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin size={16} className="mr-2 text-bncet-blue" />
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                    <Button asChild className="w-full sm:w-auto bg-bncet-blue hover:bg-bncet-darkBlue">
                      <a href={featuredEvent.registrationUrl} target="_blank" rel="noopener noreferrer">
                        Register Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-auto border-bncet-blue text-bncet-blue hover:bg-blue-50">
                      <Link to={`/events/${featuredEvent.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-1/2 relative">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={featuredEvent.image} 
                      alt={featuredEvent.title} 
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
      )}

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About BNCET Events Hub</h2>
            <p className="text-gray-600 mb-8">
              B.N. College of Engineering and Technology, Lucknow is committed to providing students with a well-rounded educational experience. 
              The BNCET Events Hub is our platform to showcase the vibrant campus life, featuring technical competitions, cultural celebrations, 
              workshops, guest lectures, and more. Our events are designed to complement academic learning with practical experiences and networking opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-bncet-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Diverse Events</h3>
                <p className="text-gray-500 text-sm">
                  From technical competitions to cultural celebrations, we offer a wide range of events.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-bncet-blue">
                    <path d="M17 11a2 2 0 1 0 4 0 4 4 0 0 0-4-4h-1a8 8 0 1 0 0 16h1a4 4 0 0 0 4-4 2 2 0 1 0-4 0" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Networking</h3>
                <p className="text-gray-500 text-sm">
                  Connect with industry professionals, alumni, and peers during our events.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-bncet-blue">
                    <path d="M12 2v12l-3-2" />
                    <path d="M12 2v12l3-2" />
                    <path d="M12 2C8 2 4 6 4 12s4 10 8 10c4 0 8-4 8-10S16 2 12 2z" />
                    <path d="M14 16h-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Skill Development</h3>
                <p className="text-gray-500 text-sm">
                  Enhance your technical and soft skills through workshops and competitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
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

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-bncet-blue text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to join our next event?</h2>
            <p className="text-xl opacity-90 mb-8">
              Explore our upcoming events and register today!
            </p>
            <Button asChild size="lg" className="bg-bncet-gold hover:bg-bncet-lightGold text-black font-semibold">
              <Link to="/events">
                Browse All Events
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
