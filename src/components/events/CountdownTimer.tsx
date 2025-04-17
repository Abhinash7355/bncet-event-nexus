
import { useState, useEffect, useRef } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const timerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        // Target date has passed
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initialize animation if GSAP is available
    if (window.gsap && timerRef.current) {
      window.gsap.to(timerRef.current, {
        rotationY: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div 
      ref={timerRef}
      className="flex space-x-3 text-white transform-gpu"
    >
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit = ({ value, label }: TimeUnitProps) => (
  <div className="flex flex-col items-center">
    <div className="bg-black/40 backdrop-blur-lg w-16 h-16 flex items-center justify-center rounded-md mb-1 shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]">
      <span className="text-2xl font-bold animate-pulse-soft">{value.toString().padStart(2, '0')}</span>
    </div>
    <span className="text-xs font-medium">{label}</span>
  </div>
);

export default CountdownTimer;

// Add TypeScript declarations for GSAP
declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
  }
}
