import { Check, ChevronRight } from "lucide-react";
import { NavLink } from "../ui/NavLink";

interface DebtCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  href: string;
}

export const DebtCard = ({
  icon,
  title,
  description,
  points,
  href,
}: DebtCardProps) => {
  return (
    <div className="bg-green-500 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      <div className="p-6">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-100 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {points.map((point, index) => (
            <li key={index} className="flex items-center text-gray-100">
              <Check className="w-5 h-5 text-white mr-2" />
              {point}
            </li>
          ))}
        </ul>
        <NavLink
          href={href}
          className="inline-flex items-center text-purple-100 font-semibold hover:text-white"
        >
          Learn More
          <ChevronRight className="w-4 h-4 ml-1" />
        </NavLink>
      </div>
    </div>
  );
};
