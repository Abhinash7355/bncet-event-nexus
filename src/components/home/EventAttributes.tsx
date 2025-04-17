
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventAttributesProps {
  date: string;
  time: string;
  location: string;
  className?: string;
}

const EventAttributes = ({ date, time, location, className = "" }: EventAttributesProps) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center gap-4 ${className}`}>
      <div className="flex items-center text-sm text-gray-500">
        <Calendar size={16} className="mr-2 text-bncet-blue" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <Clock size={16} className="mr-2 text-bncet-blue" />
        <span>{time}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <MapPin size={16} className="mr-2 text-bncet-blue" />
        <span>{location}</span>
      </div>
    </div>
  );
};

export default EventAttributes;
