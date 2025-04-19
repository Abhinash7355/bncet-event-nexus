
import React, { useState, useMemo } from "react";
import { Student, Branch } from "@/types/student";
import { User } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface StudentSearchProps {
  students: Student[];
  onSelect: (student: Student) => void;
}

const BRANCHES: Branch[] = [
  "Computer Science Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Information Technology",
  "Electronics Engineering",
  "Civil Engineering",
  "Biotechnology"
];

const StudentSearch: React.FC<StudentSearchProps> = ({ students, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<Branch | "">("");

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBranch = !selectedBranch || student.branch === selectedBranch;
      return matchesSearch && matchesBranch;
    });
  }, [students, searchQuery, selectedBranch]);

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="Search by name or roll number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
        <Select
          value={selectedBranch}
          onValueChange={(value: Branch) => setSelectedBranch(value)}
        >
          <SelectTrigger className="w-[260px]">
            <SelectValue placeholder="Select branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Branches</SelectItem>
            {BRANCHES.map((branch) => (
              <SelectItem key={branch} value={branch}>
                {branch}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="bg-white rounded-lg shadow-lg max-h-80 overflow-y-auto">
        {filteredStudents.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No students found</div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {filteredStudents.map((student) => (
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
    </div>
  );
};

export default StudentSearch;
