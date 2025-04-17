
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load pages for better performance
const UpcomingEvents = lazy(() => import("./pages/UpcomingEvents"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const Gallery = lazy(() => import("./pages/Gallery"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// Loading fallback with animation
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bncet-darkBlue to-bncet-blue">
    <div className="flex flex-col items-center">
      <div className="h-20 w-20 border-4 border-t-bncet-blue border-r-bncet-gold border-b-bncet-darkBlue border-l-bncet-lightGold rounded-full animate-spin mb-4"></div>
      <p className="text-white font-medium animate-pulse">Loading amazing events...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const AppContent = () => {
  useEffect(() => {
    // Initialize page transitions if GSAP is available
    if (window.gsap) {
      // Add page transition effects
      const pageTransition = (from: string, to: string, trigger: Element) => {
        return window.gsap.timeline()
          .to(from, { opacity: 0, y: -20, duration: 0.3 })
          .to(to, { opacity: 1, y: 0, duration: 0.3, delay: 0.1 });
      };
      
      // If ScrollTrigger is available, register it
      if (window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
      }
    }
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="events" element={<UpcomingEvents />} />
          <Route path="events/:eventId" element={<EventDetails />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
