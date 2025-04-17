
export interface Event {
  id: string | number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  status: "upcoming" | "past";
  featured?: boolean;
  registrationUrl: string;
  category?: string[];
  tags?: string[];
  organizer?: string;
  speakers?: Speaker[];
  // Additional fields from your data
  longDescription?: string;
  highlights?: string[];
  whoShouldAttend?: string;
  schedule?: EventScheduleItem[];
}

export interface Speaker {
  id: string | number;
  name: string;
  role: string;
  image?: string;
  bio?: string;
  title?: string; // Add title as it appears in your data
}

export interface EventScheduleItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
}
