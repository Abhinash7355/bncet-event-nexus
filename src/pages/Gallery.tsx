
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { X, ExternalLink, Search, Maximize2 } from "lucide-react";
import { galleryData } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const filteredImages = activeTab === "all" 
    ? galleryData.images 
    : galleryData.images.filter(img => img.category === activeTab);

  const searchFilteredImages = searchQuery 
    ? filteredImages.filter(img => 
        img.event?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        img.alt?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredImages;

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
      const x = e.clientX - left;
      const y = e.clientY - top;
      cursorX.set(x);
      cursorY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [cursorX, cursorY]);

  const wrapperVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.96,
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.96,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="container px-4 sm:px-6 lg:px-8 py-10 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Event <span className="text-bncet-blue">Gallery</span>
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 text-center mb-10 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore photos from past events at B.N. College of Engineering and Technology, Lucknow.
        </motion.p>
        
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs 
            defaultValue="all" 
            className="mb-0"
            onValueChange={(value) => {
              setActiveTab(value);
              setSearchQuery("");
            }}
          >
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search gallery..."
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bncet-blue focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>
        
        {/* Custom cursor for gallery */}
        <div 
          ref={containerRef} 
          className="relative overflow-hidden rounded-lg"
        >
          <motion.div
            className="hidden md:block absolute w-12 h-12 rounded-full pointer-events-none z-10 mix-blend-difference"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: "-50%",
              translateY: "-50%",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              border: "2px solid white"
            }}
          />
          
          {/* Photo Gallery */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab + searchQuery}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              variants={wrapperVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {searchFilteredImages.length > 0 ? (
                searchFilteredImages.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer bg-gray-100"
                    onClick={() => openLightbox(item.src)}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.img 
                      src={item.src} 
                      alt={item.alt || "Gallery Image"} 
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2, rotate: -2 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute top-4 right-4">
                        <motion.div 
                          className="bg-white/20 backdrop-blur-sm rounded-full p-2"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Maximize2 className="text-white" size={18} />
                        </motion.div>
                      </div>
                      
                      {item.event && (
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <motion.p 
                            className="text-white text-base font-medium"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.event}
                          </motion.p>
                          {item.date && (
                            <motion.p 
                              className="text-white/80 text-sm"
                              initial={{ y: 10, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              {item.date}
                            </motion.p>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  className="col-span-full py-12 text-center"
                  variants={itemVariants}
                >
                  <p className="text-gray-500">No images found matching your search.</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeLightbox}
            >
              <motion.div 
                className="relative max-w-5xl w-full max-h-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <img 
                  src={selectedImage} 
                  alt="Enlarged gallery image" 
                  className="w-full h-auto object-contain max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                />
                <motion.button 
                  className="absolute top-2 right-2 text-white hover:text-gray-300 p-2 bg-black/50 rounded-full"
                  onClick={closeLightbox}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Gallery;
