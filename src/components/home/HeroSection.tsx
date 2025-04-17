
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
