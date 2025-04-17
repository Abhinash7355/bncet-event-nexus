
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { galleryData } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredImages = activeTab === "all" 
    ? galleryData.images 
    : galleryData.images.filter(img => img.category === activeTab);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-10 mx-auto">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Event <span className="text-bncet-blue">Gallery</span>
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Explore photos from past events at B.N. College of Engineering and Technology, Lucknow.
        </p>
        
        <Tabs 
          defaultValue="all" 
          className="mb-8"
          onValueChange={(value) => setActiveTab(value)}
        >
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
        
        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((item, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer"
              onClick={() => openLightbox(item.src)}
            >
              <img 
                src={item.src} 
                alt={item.alt || "Gallery Image"} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="text-white" size={24} />
                </div>
              </div>
              {item.event && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm font-medium">{item.event}</p>
                  {item.date && <p className="text-white/80 text-xs">{item.date}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="relative max-w-5xl w-full max-h-full">
              <img 
                src={selectedImage} 
                alt="Enlarged gallery image" 
                className="w-full h-auto object-contain max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              />
              <button 
                className="absolute top-2 right-2 text-white hover:text-gray-300 p-2 bg-black/50 rounded-full"
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
