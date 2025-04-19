
import React from "react";
import { Student } from "@/types/student";
import { User } from "lucide-react";

interface StudentSearchProps {
  students: Student[];
  onSelect: (student: Student) => void;
}

const StudentSearch: React.FC<StudentSearchProps> = ({ students, onSelect }) => {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-20 max-h-80 overflow-y-auto">
      {students.length === 0 ? (
        <div className="p-4 text-center text-gray-500">No students found</div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {students.map((student) => (
            <li 
              key={student.id}
              className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
              onClick={() => onSelect(student)}
            >
              <div className="flex items-center">
                <div className="bg-bncet-blue/10 rounded-full p-2 mr-3">
                  <User size={20} className="text-bncet-blue" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{student.name}</p>
                  <div className="flex mt-1 text-sm">
                    <span className="text-gray-500 mr-3">Roll: {student.rollNumber}</span>
                    <span className="text-gray-500">{student.branch}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentSearch;
