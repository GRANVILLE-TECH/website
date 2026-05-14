import React from 'react';
import { BoxIcon } from 'lucide-react';
interface StatsCardProps {
  icon: BoxIcon;
  label: string;
  value: string | number;
  trend?: {
    value: number;
    label: string;
  };
  color?: 'indigo' | 'green' | 'amber' | 'purple';
}
const StatsCard: React.FC<StatsCardProps> = ({
  icon: Icon,
  label,
  value,
  trend,
  color = 'indigo'
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'green':
        return 'bg-green-50 text-green-600';
      case 'amber':
        return 'bg-amber-50 text-amber-600';
      case 'purple':
        return 'bg-purple-50 text-purple-600';
      default:
        return 'bg-indigo-50 text-indigo-600';
    }
  };
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {trend &&
          <div className="flex items-center mt-2">
              <span
              className={`text-sm font-medium ${trend.value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              
                {trend.value >= 0 ? '+' : ''}
                {trend.value}%
              </span>
              <span className="text-sm text-gray-500 ml-1">{trend.label}</span>
            </div>
          }
        </div>
        <div className={`p-3 rounded-xl ${getColorClasses()}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>);

};
export default StatsCard;