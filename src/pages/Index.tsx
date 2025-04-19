
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Download, User, BookOpen, CheckCircle } from "lucide-react";
import CertificatePreview from "@/components/certificate/CertificatePreview";
import StudentSearch from "@/components/certificate/StudentSearch";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { studentData } from "@/lib/certificateData";
import type { Student } from "@/types/student";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Filter students based on search query
    if (searchQuery.trim() === "") {
      setFilteredStudents([]);
    } else {
      const filtered = studentData.filter(
        (student) =>
          student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStudents(filtered);
    }
  }, [searchQuery]);

  useEffect(() => {
    // Animate hero section
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
        .from(".hero-subtitle", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.4")
        .from(".search-container", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out"
        }, "-=0.4")
        .from(".info-card", {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.out"
        }, "-=0.2");
    }

    // Animate sections on scroll
    gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          once: true
        }
      });
    });
  }, []);

  const handleStudentSelect = (student: Student) => {
    setSelectedStudent(student);
    setSearchQuery("");
    setFilteredStudents([]);
    toast({
      title: "Certificate Found!",
      description: `${student.name}'s certificate is ready to view and download.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-[#f5f5f5]">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-bncet-darkBlue to-bncet-blue py-20 md:py-28"
      >
        <div className="absolute inset-0 z-0 opacity-20 bg-grid-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              CreatiVerse Certificate Portal
              <span className="block text-bncet-gold mt-2">BNCET Business Incubation Hub</span>
            </h1>
            <p className="hero-subtitle text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Search and download your participation certificate for the "Intrapreneurship in Academia" workshop.
            </p>
            
            <div className="search-container relative max-w-lg mx-auto mb-4">
              <Input
                type="text"
                placeholder="Search by name or roll number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg rounded-full shadow-lg focus:ring-2 focus:ring-bncet-gold"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              
              {filteredStudents.length > 0 && (
                <StudentSearch 
                  students={filteredStudents} 
                  onSelect={handleStudentSelect} 
                />
              )}
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
      
      {/* Info Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="info-card p-8 border-t-4 border-bncet-blue shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
            <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <User className="text-bncet-blue" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Find Your Certificate</h3>
            <p className="text-gray-600">
              Search using your name or roll number to locate your participation certificate.
            </p>
          </Card>
          
          <Card className="info-card p-8 border-t-4 border-bncet-gold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
            <div className="bg-amber-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BookOpen className="text-bncet-gold" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Workshop Achievement</h3>
            <p className="text-gray-600">
              This certificate verifies your participation in the "Intrapreneurship in Academia" workshop.
            </p>
          </Card>
          
          <Card className="info-card p-8 border-t-4 border-green-500 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
            <div className="bg-green-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Download className="text-green-500" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Download Instantly</h3>
            <p className="text-gray-600">
              Preview and download your certificate in high-quality PDF format with a single click.
            </p>
          </Card>
        </div>
        
        {/* Certificate Preview Section */}
        <div className="animate-on-scroll">
          {selectedStudent ? (
            <CertificatePreview student={selectedStudent} />
          ) : (
            <div className="text-center py-16 px-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-gray-400" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Certificate Selected</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-4">
                Search for your name or roll number above to find and view your certificate.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
