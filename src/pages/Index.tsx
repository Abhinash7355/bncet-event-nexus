
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import FeaturedEvent from "@/components/home/FeaturedEvent";
import AboutSection from "@/components/home/AboutSection";
import UpcomingEventsPreview from "@/components/home/UpcomingEventsPreview";
import CTASection from "@/components/home/CTASection";
import AnimatedSection from "@/components/home/AnimatedSection";
import { eventsData } from "@/lib/data";
import { Event } from "@/types/events";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [featuredEvent, setFeaturedEvent] = useState<Event | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const progressOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    // Get featured event
    const featured = eventsData.find(
      event => event.featured && event.status === "upcoming"
    );
    
    if (featured) {
      setFeaturedEvent(featured as Event);
    } else {
      setFeaturedEvent(null);
    }

    // Get upcoming events (excluding featured one)
    const upcoming = eventsData
      .filter(
        event => event.status === "upcoming" && (!featured || event.id !== featured.id)
      )
      .slice(0, 3);
      
    setUpcomingEvents(upcoming as Event[]);
    
    // Setup scroll animations
    if (mainRef.current) {
      const sections = mainRef.current.querySelectorAll("section");
      
      sections.forEach((section, index) => {
        if (index === 0) return; // Skip hero section
        
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });
    }
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen relative">
      {/* Progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-bncet-gold z-50"
        style={{ 
          scaleX: scrollYProgress,
          transformOrigin: "0% 0%",
          opacity: progressOpacity
        }}
      />
      
      <HeroSection />
      
      <AnimatedSection animation="slideUp">
        {featuredEvent && <FeaturedEvent event={featuredEvent} />}
      </AnimatedSection>
      
      <AnimatedSection animation="slideLeft" delay={0.2}>
        <AboutSection />
      </AnimatedSection>
      
      <AnimatedSection animation="slideRight" delay={0.3}>
        <UpcomingEventsPreview events={upcomingEvents} />
      </AnimatedSection>
      
      <AnimatedSection animation="fade" delay={0.4}>
        <CTASection />
      </AnimatedSection>
    </div>
  );
};

export default Index;
