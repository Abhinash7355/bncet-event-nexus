
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Share2, Calendar, Clock, MapPin, Users, MessageSquare, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { eventsData } from "@/lib/data";
import CountdownTimer from "@/components/events/CountdownTimer";

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<any>(null);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundEvent = eventsData.find(e => e.id === eventId);
    setEvent(foundEvent);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Close share menu when clicking outside
    const closeShareMenu = () => setIsShareMenuOpen(false);
    document.addEventListener('click', closeShareMenu);
    
    return () => {
      document.removeEventListener('click', closeShareMenu);
    };
  }, [eventId]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-16 w-16 border-4 border-t-bncet-blue border-r-bncet-gold border-b-bncet-darkBlue border-l-bncet-lightGold rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShareMenuOpen(prev => !prev);
  };

  const handleShareOption = (e: React.MouseEvent, platform: string) => {
    e.stopPropagation();
    
    const url = window.location.href;
    const text = `Check out this event: ${event.title} at BNCET Events Hub`;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
      default:
        // Copy to clipboard
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        setIsShareMenuOpen(false);
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setIsShareMenuOpen(false);
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8 mx-auto">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-bncet-blue">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/events" className="hover:text-bncet-blue">Events</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{event.title}</span>
        </div>
        
        {/* Event Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{event.title}</h1>
            
            <div className="relative">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleShareClick}
                className="flex items-center gap-2"
              >
                <Share2 size={16} />
                Share
              </Button>
              
              {isShareMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200 overflow-hidden animate-scale-in">
                  <div className="py-1">
                    <button 
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={(e) => handleShareOption(e, 'facebook')}
                    >
                      <span className="w-8">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.878v-6.987h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                        </svg>
                      </span>
                      Facebook
                    </button>
                    <button 
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={(e) => handleShareOption(e, 'twitter')}
                    >
                      <span className="w-8">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 5.8a8.6 8.6 0 0 1-2.36.64 4.07 4.07 0 0 0 1.8-2.27 8.5 8.5 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.8A11.65 11.65 0 0 1 3.4 4.5a4.1 4.1 0 0 0 1.27 5.5 4.1 4.1 0 0 1-1.86-.52v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.4a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.67-6.25 11.67-11.67l-.01-.53A8.74 8.74 0 0 0 22 5.8z"></path>
                        </svg>
                      </span>
                      Twitter
                    </button>
                    <button 
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={(e) => handleShareOption(e, 'linkedin')}
                    >
                      <span className="w-8">
                        <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                      </span>
                      LinkedIn
                    </button>
                    <button 
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={(e) => handleShareOption(e, 'whatsapp')}
                    >
                      <span className="w-8">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.6 6.32A8.78 8.78 0 0012.02 4c-4.85 0-8.8 3.92-8.8 8.74 0 1.54.4 3.04 1.16 4.37L3 21.5l4.52-1.18a8.78 8.78 0 004.2 1.07h.02c4.85 0 8.8-3.93 8.8-8.75 0-2.34-.93-4.54-2.6-6.2l-.3-.12zM12.02 19.6h-.01a7.3 7.3 0 01-3.73-1.02l-.27-.16-2.77.73.74-2.7-.17-.28a7.3 7.3 0 01-1.12-3.93c0-4.03 3.3-7.32 7.36-7.32 1.97 0 3.81.77 5.2 2.15a7.29 7.29 0 012.15 5.18c0 4.04-3.3 7.33-7.36 7.33zm4.04-5.49c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.1-.15.22-.57.72-.7.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.1-.66-.58-1.1-1.3-1.23-1.52-.13-.21-.01-.33.1-.44.1-.1.22-.25.33-.38.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.4-.06-.11-.5-1.2-.69-1.64-.18-.43-.37-.37-.5-.38-.13 0-.28-.01-.43-.01-.15 0-.39.06-.6.28-.2.23-.78.77-.78 1.87 0 1.1.8 2.17.92 2.31.12.15 1.65 2.53 4.01 3.54.56.24 1 .39 1.34.5.56.18 1.07.15 1.48.09.45-.07 1.37-.56 1.57-1.1.19-.53.19-.99.13-1.08-.06-.1-.22-.15-.44-.25z"/>
                        </svg>
                      </span>
                      WhatsApp
                    </button>
                    <button 
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={(e) => handleShareOption(e, 'copy')}
                    >
                      <span className="w-8">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                      </span>
                      Copy Link
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-bncet-blue" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2 text-bncet-blue" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-bncet-blue" />
              <span>{event.location}</span>
            </div>
            {event.organizer && (
              <div className="flex items-center">
                <Users size={16} className="mr-2 text-bncet-blue" />
                <span>Organized by: {event.organizer}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Event Banner */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg relative">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-64 md:h-96 object-cover"
          />
          {event.registrationUrl && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Don't miss out!</h3>
                  <p>Secure your spot for this exciting event</p>
                </div>
                <CountdownTimer targetDate={new Date("2025-04-21T09:00:00")} />
                <Button asChild className="w-full md:w-auto bg-bncet-gold hover:bg-bncet-lightGold text-black">
                  <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Event Details Tabs */}
        <Tabs defaultValue="details" className="mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="speakers">Speakers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="mt-6">
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-700 mb-4">{event.description}</p>
              
              {event.longDescription && (
                <div dangerouslySetInnerHTML={{ __html: event.longDescription }} />
              )}
              
              {event.highlights && (
                <>
                  <h3 className="text-xl font-bold mt-6 mb-4 flex items-center">
                    <Award size={20} className="mr-2 text-bncet-blue" />
                    Event Highlights
                  </h3>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-bncet-blue mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              {event.whoShouldAttend && (
                <>
                  <h3 className="text-xl font-bold mt-6 mb-4 flex items-center">
                    <Users size={20} className="mr-2 text-bncet-blue" />
                    Who Should Attend
                  </h3>
                  <p>{event.whoShouldAttend}</p>
                </>
              )}
            </div>
            
            <Separator className="my-8" />
            
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MessageSquare size={20} className="mr-2 text-bncet-blue" />
                Contact for Queries
              </h3>
              <p className="text-gray-700">
                For any questions or information about this event, please contact:<br />
                <span className="font-medium">Email: </span>events@bncet.ac.in<br />
                <span className="font-medium">Phone: </span>+91 9876543210
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <Button asChild className="bg-bncet-blue hover:bg-bncet-darkBlue">
                <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                  Register for this Event
                </a>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="schedule" className="mt-6">
            {event.schedule ? (
              <div className="space-y-4">
                {event.schedule.map((item: any, index: number) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="sm:w-1/4 font-medium text-bncet-blue mb-2 sm:mb-0">
                      {item.time}
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="font-semibold">{item.title}</h4>
                      {item.description && (
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      )}
                      {item.speaker && (
                        <p className="text-gray-500 text-sm mt-2">
                          <span className="font-medium">Speaker: </span>
                          {item.speaker}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Detailed schedule will be updated soon.
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="speakers" className="mt-6">
            {event.speakers ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {event.speakers.map((speaker: any, index: number) => (
                  <div key={index} className="flex items-start p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mr-4 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                      {speaker.image ? (
                        <img 
                          src={speaker.image} 
                          alt={speaker.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <Users size={24} />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold">{speaker.name}</h4>
                      {speaker.title && (
                        <p className="text-bncet-blue text-sm">{speaker.title}</p>
                      )}
                      {speaker.bio && (
                        <p className="text-gray-600 text-sm mt-2">{speaker.bio}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Speaker information will be updated soon.
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        {/* Related Events */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">More Events You Might Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {eventsData
              .filter(e => e.id !== eventId)
              .slice(0, 3)
              .map(relatedEvent => (
                <Link 
                  key={relatedEvent.id} 
                  to={`/events/${relatedEvent.id}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow group-hover:shadow-lg">
                    <div className="h-48 overflow-hidden bg-gray-200">
                      <img 
                        src={relatedEvent.image} 
                        alt={relatedEvent.title} 
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-bncet-blue transition-colors">{relatedEvent.title}</h3>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1 text-bncet-blue" />
                        <span>{relatedEvent.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
