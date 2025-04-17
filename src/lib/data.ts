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
    description: "Join us for a celebration of creativity and innovation. This event showcases student projects, startups, and creative works across various engineering domains.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    status: "upcoming" as "upcoming", // Explicit type assertion
    organizer: "BNCET Technical Club",
    registrationUrl: "https://forms.google.com/creators-day-registration",
    longDescription: `
      <p>Creator's Day is BNCET's premier annual event celebrating student innovation and creativity across all engineering disciplines. This full-day event provides a platform for students to showcase their projects, prototypes, and ideas to peers, faculty, industry professionals, and potential investors.</p>
      
      <p>This year's theme focuses on "Sustainable Innovation for Tomorrow," encouraging projects that address environmental and social challenges through technology.</p>
    `,
    highlights: [
      "Project Exhibition with over 50 student innovations",
      "Guest lectures from industry experts and successful BNCET alumni",
      "Pitch competition with cash prizes for best startups",
      "Interactive workshops on emerging technologies",
      "Networking opportunities with industry recruiters"
    ],
    whoShouldAttend: "Open to all BNCET students, faculty, alumni, and invited guests from industry partners. If you're passionate about innovation, entrepreneurship, or simply want to see the amazing work being done by BNCET students, this event is for you!",
    schedule: [
      {
        time: "09:00 AM - 09:30 AM",
        title: "Opening Ceremony",
        description: "Welcome address by the Principal and Chief Guest"
      },
      {
        time: "09:30 AM - 11:30 AM",
        title: "Project Exhibition - Session 1",
        description: "Computer Science, Electronics and Electrical projects"
      },
      {
        time: "11:30 AM - 12:30 PM",
        title: "Expert Talk",
        description: "Innovation in the Age of AI",
        speaker: "Dr. Rajesh Kumar, CTO of TechFusion"
      },
      {
        time: "12:30 PM - 01:30 PM",
        title: "Lunch Break",
        description: "Networking lunch with industry partners"
      },
      {
        time: "01:30 PM - 03:30 PM",
        title: "Project Exhibition - Session 2",
        description: "Mechanical, Civil and Interdisciplinary projects"
      },
      {
        time: "03:30 PM - 04:30 PM",
        title: "Startup Pitch Competition",
        description: "Top 5 startups pitch to panel of judges"
      },
      {
        time: "04:30 PM - 05:00 PM",
        title: "Award Ceremony",
        description: "Prizes for best projects and pitch competition winners"
      }
    ],
    speakers: [
      {
        id: "1", // Add a unique identifier
        name: "Dr. Rajesh Kumar",
        title: "CTO, TechFusion",
        role: "Guest Speaker", // Add the required role property
        bio: "Dr. Kumar has over 20 years of experience in technology innovation and has mentored numerous successful startups.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "2", // Add a unique identifier
        name: "Er. Priya Sharma",
        title: "BNCET Alumna & Founder of EcoSolutions",
        role: "Industry Expert", // Add the required role property
        bio: "Ms. Sharma graduated from BNCET in 2015 and has since built a successful clean-tech startup.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "3", // Add a unique identifier
        name: "Mr. Vikram Singh",
        title: "Senior Engineer, Google",
        role: "Technical Advisor", // Add the required role property
        bio: "Mr. Singh specializes in AI and machine learning applications.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: "technovate-2025",
    title: "Technovate 2025",
    date: "May 15-17, 2025",
    time: "10:00 AM - 06:00 PM",
    location: "BNCET Campus",
    description: "The annual technical festival of BNCET featuring competitions, workshops, and technical exhibitions across various engineering domains.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    status: "upcoming" as "upcoming", // Explicit type assertion
    organizer: "Student Technical Council",
    registrationUrl: "https://forms.google.com/technovate-registration",
  },
  {
    id: "industry-connect-workshop",
    title: "Industry Connect Workshop",
    date: "June 5, 2025",
    time: "11:00 AM - 03:00 PM",
    location: "Seminar Hall",
    description: "A hands-on workshop by industry experts focusing on bridging the gap between academic knowledge and industry requirements.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "upcoming" as "upcoming", // Explicit type assertion
    organizer: "Training & Placement Cell",
    registrationUrl: "https://forms.google.com/industry-workshop-registration",
  },
  {
    id: "alumni-meetup-2025",
    title: "Alumni Meetup 2025",
    date: "July 22, 2025",
    time: "05:00 PM - 09:00 PM",
    location: "BNCET Lawn",
    description: "Annual alumni gathering to reconnect with the alma mater and network with current students and fellow alumni.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "upcoming" as "upcoming", // Explicit type assertion
    organizer: "Alumni Association",
    registrationUrl: "https://forms.google.com/alumni-meetup-registration",
  },
  {
    id: "hackathon-2025",
    title: "BNCET Hackathon 2025",
    date: "August 12-13, 2025",
    time: "Starts at 09:00 AM",
    location: "Computer Center",
    description: "24-hour coding competition challenging participants to build innovative solutions for real-world problems.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "upcoming" as "upcoming", // Explicit type assertion
    organizer: "Coding Club",
    registrationUrl: "https://forms.google.com/hackathon-registration",
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
      alt: "Students in robotics competition",
      event: "Robotics Competition",
      date: "August 15, 2024",
      category: "technical"
    }
  ],
  videos: [
    {
      title: "BNCET Cultural Fest 2024 Highlights",
      thumbnail: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      date: "November 25, 2024"
    },
    {
      title: "Tech Exhibition 2024 - Innovation Showcase",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      date: "January 20, 2024"
    },
    {
      title: "BNCET Sports Week 2024 - Event Compilation",
      thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      date: "February 10, 2024"
    },
    {
      title: "Alumni Talks - Success Stories from BNCET Graduates",
      thumbnail: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      date: "July 30, 2024"
    }
  ]
};
