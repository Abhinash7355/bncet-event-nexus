
import { Event } from "@/types/events";

// Mock data for the BNCET Events Hub
// In a real application, this would be stored in a database

// Event Data
export const eventsData: Event[] = [
  {
    id: "creators-day-2025",
    title: "Creator's Day",
    date: "April 21, 2025",
    time: "09:00 AM - 05:00 PM",
    location: "BNCET Main Auditorium",
    description: "Join us for a celebration of creativity and innovation. This event showcases student projects, startups, and creative works with a focus on 3D animation and design.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    status: "upcoming" as "upcoming", // Explicit type assertion
    organizer: "BNCET Technical Club",
    registrationUrl: "https://forms.google.com/creators-day-registration",
    longDescription: `
      <p>Creator's Day is BNCET's premier annual event celebrating student innovation and creativity across all engineering disciplines. This full-day event provides a platform for students to showcase their projects, prototypes, and ideas to peers, faculty, industry professionals, and potential investors.</p>
      
      <p>This year's theme focuses on "3D Animation and Design for Tomorrow," encouraging projects that showcase innovative animation techniques and 3D design solutions.</p>
    `,
    highlights: [
      "3D Animation Showcase with over 50 student innovations",
      "Interactive 3D design exhibitions",
      "Animation workshops for beginners and advanced creators",
      "Motion graphics competitions with prizes",
      "Networking opportunities with animation studios and design agencies"
    ],
    whoShouldAttend: "Open to all BNCET students, faculty, alumni, and invited guests from industry partners. If you're passionate about 3D design, animation, creative visualization, or simply want to see the amazing work being done by BNCET students, this event is for you!",
    schedule: [
      {
        time: "09:00 AM - 09:30 AM",
        title: "Opening Ceremony",
        description: "Welcome address by the Principal and Chief Guest"
      },
      {
        time: "09:30 AM - 11:30 AM",
        title: "3D Animation Exhibition - Session 1",
        description: "Character animation, motion graphics, and visual effects"
      },
      {
        time: "11:30 AM - 12:30 PM",
        title: "Expert Talk",
        description: "The Future of 3D Animation and Design"
      },
      {
        time: "12:30 PM - 01:30 PM",
        title: "Lunch Break",
        description: "Networking lunch with industry partners"
      },
      {
        time: "01:30 PM - 03:30 PM",
        title: "3D Modeling Exhibition - Session 2",
        description: "Architectural visualization, product design, and game assets"
      },
      {
        time: "03:30 PM - 04:30 PM",
        title: "Animation Competition",
        description: "Live animation challenge with judges"
      },
      {
        time: "04:30 PM - 05:00 PM",
        title: "Award Ceremony",
        description: "Prizes for best animations and 3D designs"
      }
    ],
    category: ["Design", "Animation", "3D"],
    tags: ["3D Design", "Animation", "Motion Graphics", "Visual Effects", "Student Projects"]
  },
  {
    id: "cultural-fest-2024",
    title: "Cultural Fest 2024",
    date: "November 18-20, 2024",
    time: "10:00 AM - 10:00 PM",
    location: "BNCET Campus",
    description: "Annual cultural festival featuring music, dance, drama, and various artistic performances by talented students.",
    image: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "past" as "past", // Explicit type assertion
    organizer: "Cultural Committee",
    registrationUrl: "",
  },
  {
    id: "sports-week-2024",
    title: "Sports Week 2024",
    date: "February 1-7, 2025",
    time: "08:00 AM - 06:00 PM",
    location: "BNCET Sports Complex",
    description: "Week-long sports event featuring competitions in cricket, football, basketball, athletics, and other sports.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "past" as "past", // Explicit type assertion
    organizer: "Sports Committee",
    registrationUrl: "",
  }
];

// Gallery Data
export const galleryData = {
  images: [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tech exhibition with students presenting projects",
      event: "Tech Exhibition 2024",
      date: "January 15, 2024",
      category: "technical"
    },
    {
      src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Alumni gathering at BNCET campus",
      event: "Alumni Meetup 2024",
      date: "July 22, 2024",
      category: "cultural"
    },
    {
      src: "https://images.unsplash.com/photo-1475721027785-f74ec9c2595a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Students performing on stage",
      event: "Cultural Fest 2024",
      date: "November 18, 2024",
      category: "cultural"
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Hackathon participants coding",
      event: "Hackathon 2024",
      date: "August 12, 2024",
      category: "technical"
    },
    {
      src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Sports event at BNCET",
      event: "Sports Week 2024",
      date: "February 1, 2024",
      category: "sports"
    },
    {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Workshop session with students",
      event: "Industry Workshop 2024",
      date: "June 5, 2024",
      category: "technical"
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cultural performance on stage",
      event: "Cultural Night 2024",
      date: "November 19, 2024",
      category: "cultural"
    },
    {
      src: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Students playing football",
      event: "Inter-College Football Tournament",
      date: "February 3, 2024",
      category: "sports"
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Students in 3D design competition",
      event: "3D Animation Showcase",
      date: "August 15, 2024",
      category: "technical"
    }
  ],
  videos: []  // Removed YouTube video links
};
