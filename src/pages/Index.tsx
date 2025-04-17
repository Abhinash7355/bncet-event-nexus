
import { useState, useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturedEvent from "@/components/home/FeaturedEvent";
import AboutSection from "@/components/home/AboutSection";
import UpcomingEventsPreview from "@/components/home/UpcomingEventsPreview";
import CTASection from "@/components/home/CTASection";
import { eventsData } from "@/lib/data";
import { Event } from "@/types/events";

const Index = () => {
  const [featuredEvent, setFeaturedEvent] = useState<Event | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

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
      <HeroSection />
      
      {featuredEvent && <FeaturedEvent event={featuredEvent} />}
      
      <AboutSection />
      
      <UpcomingEventsPreview events={upcomingEvents} />
      
      <CTASection />
    </div>
  );
};

export default Index;
