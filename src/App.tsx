import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load pages for better performance
const UpcomingEvents = lazy(() => import("./pages/UpcomingEvents"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const Gallery = lazy(() => import("./pages/Gallery"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="h-16 w-16 border-4 border-t-bncet-blue border-r-bncet-gold border-b-bncet-darkBlue border-l-bncet-lightGold rounded-full animate-spin"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
