
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Mail } from "lucide-react";
import { Student } from "@/types/student";
import { workshopDetails } from "@/lib/certificateData";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface CertificatePreviewProps {
  student: Student;
}

const CertificatePreview: React.FC<CertificatePreviewProps> = ({ student }) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;
    
    setIsDownloading(true);
    toast({
      title: "Preparing Certificate",
      description: "Please wait while we generate your PDF...",
    });
    
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#fff9e6"
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4"
      });
      
      const imgWidth = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${student.name.replace(/\s+/g, "_")}_CreatiVerse_Certificate.pdf`);
      
      toast({
        title: "Certificate Downloaded!",
        description: "Your certificate has been successfully downloaded.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error generating your certificate.",
        variant: "destructive"
      });
      console.error("Certificate download error:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const sendByEmail = () => {
    toast({
      title: "Email Feature Coming Soon",
      description: "The option to send certificates by email will be available soon.",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 animate-scale-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Your Certificate</h2>
          <p className="text-gray-600">
            {student.name} <span className="mx-2">•</span> {student.branch}
          </p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={sendByEmail}
          >
            <Mail size={18} />
            Email
          </Button>
          <Button 
            className="gap-2 bg-bncet-blue hover:bg-bncet-darkBlue"
            onClick={downloadCertificate}
            disabled={isDownloading}
          >
            <Download size={18} />
            {isDownloading ? "Processing..." : "Download PDF"}
          </Button>
        </div>
      </div>
      
      {/* Certificate Preview */}
      <div className="relative overflow-hidden rounded-lg border-8 border-[#f5eacf] mb-8">
        <div 
          ref={certificateRef}
          className="relative bg-[#fff9e6] p-8 aspect-[1.4/1] flex flex-col items-center justify-between"
          style={{
            backgroundImage: "url('/lovable-uploads/53fae72e-f98b-4b54-9541-e818547a81f2.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* This div is just for better visualization - the actual content is in the background image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center mt-[26%] w-full">
              <div className="text-[#8B4513] font-semibold mt-20 pt-8">
                <span className="uppercase">{student.name}</span>
              </div>
              <div className="text-[#8B4513] font-semibold mt-2">
                <span className="uppercase">{student.branch}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Certificate Details</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <ArrowRight size={18} className="text-bncet-blue mr-2 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium block">Event:</span>
              <span className="text-gray-600">{workshopDetails.name}</span>
            </div>
          </li>
          <li className="flex items-start">
            <ArrowRight size={18} className="text-bncet-blue mr-2 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium block">Date:</span>
              <span className="text-gray-600">{workshopDetails.date}</span>
            </div>
          </li>
          <li className="flex items-start">
            <ArrowRight size={18} className="text-bncet-blue mr-2 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium block">Organized by:</span>
              <span className="text-gray-600">{workshopDetails.organizers.join(" & ")}</span>
            </div>
          </li>
          <li className="flex items-start">
            <ArrowRight size={18} className="text-bncet-blue mr-2 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium block">Certificate ID:</span>
              <span className="text-gray-600">BNCET/CV/2025/{student.rollNumber}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CertificatePreview;
