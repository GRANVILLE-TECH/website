import React from 'react';
import { HardDriveIcon, TrashIcon } from 'lucide-react';
interface StorageStatusProps {
  totalStorage: string;
  usedStorage: string;
  onClearStorage: () => void;
}
const StorageStatus: React.FC<StorageStatusProps> = ({
  totalStorage,
  usedStorage,
  onClearStorage
}) => {
  const usedPercentage =
  parseFloat(usedStorage) / parseFloat(totalStorage) * 100;
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <HardDriveIcon className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">Storage</h3>
            <p className="text-sm text-gray-500">
              Manage offline content storage
            </p>
          </div>
        </div>
        <button
          onClick={onClearStorage}
          className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          
          <TrashIcon className="h-4 w-4 mr-1" />
          Clear
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Used Storage</span>
            <span className="text-gray-900 font-medium">
              {usedStorage} / {totalStorage}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${usedPercentage > 90 ? 'bg-red-500' : usedPercentage > 70 ? 'bg-yellow-500' : 'bg-green-500'}`}
              style={{
                width: `${usedPercentage}%`
              }} />
            
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Downloaded Items</p>
            <p className="text-xl font-semibold text-gray-900">24</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Pending Updates</p>
            <p className="text-xl font-semibold text-gray-900">3</p>
          </div>
        </div>
      </div>
    </div>);

};
export default StorageStatus;