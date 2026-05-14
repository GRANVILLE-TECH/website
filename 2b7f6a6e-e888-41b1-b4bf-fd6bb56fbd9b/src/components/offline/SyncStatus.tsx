import React from 'react';
import {
  CloudIcon,
  RefreshCwIcon,
  CheckCircleIcon,
  WifiOffIcon } from
'lucide-react';
interface SyncStatusProps {
  isOnline: boolean;
  lastSync: string;
  onSync: () => void;
}
const SyncStatus: React.FC<SyncStatusProps> = ({
  isOnline,
  lastSync,
  onSync
}) => {
  const formatLastSync = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <CloudIcon className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">Sync Status</h3>
            <p className="text-sm text-gray-500">
              Keep your content up to date
            </p>
          </div>
        </div>
        <button
          onClick={onSync}
          disabled={!isOnline}
          className={`inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md ${isOnline ? 'text-gray-700 bg-white hover:bg-gray-50' : 'text-gray-400 bg-gray-50 cursor-not-allowed'}`}>
          
          <RefreshCwIcon className="h-4 w-4 mr-1" />
          Sync Now
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            {isOnline ?
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" /> :

            <WifiOffIcon className="h-5 w-5 text-gray-400 mr-2" />
            }
            <span className="text-sm font-medium text-gray-900">
              {isOnline ? 'Connected' : 'Offline'}
            </span>
          </div>
          <span className="text-xs text-gray-500">
            Last synced: {formatLastSync(lastSync)}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Sync Success Rate</p>
            <p className="text-xl font-semibold text-gray-900">98%</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Next Auto-Sync</p>
            <p className="text-xl font-semibold text-gray-900">30m</p>
          </div>
        </div>
      </div>
    </div>);

};
export default SyncStatus;