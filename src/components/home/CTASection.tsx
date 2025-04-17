
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
