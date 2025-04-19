
export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  branch: string;
  email?: string;
}

export type Branch = "Computer Science Engineering" | "Electrical Engineering" | "Mechanical Engineering" | "Information Technology" | "Electronics Engineering" | "Civil Engineering" | "Biotechnology";
