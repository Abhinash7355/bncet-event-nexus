
import { Calendar } from "lucide-react";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
