
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
}

export interface Speaker {
  id: string | number;
  name: string;
  role: string;
  image?: string;
  bio?: string;
}
