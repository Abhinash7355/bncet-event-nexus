
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    // Add animation class to elements as they enter viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Target elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute top-0 left-0 right-0 h-screen pointer-events-none bg-grid-white/[0.02] z-[-1]" />
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
