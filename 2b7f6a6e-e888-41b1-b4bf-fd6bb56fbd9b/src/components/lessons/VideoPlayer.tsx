import React, { useState } from 'react';
import {
  PlayIcon,
  PauseIcon,
  MaximizeIcon,
  MinimizeIcon,
  VolumeIcon,
  Volume2Icon,
  SettingsIcon } from
'lucide-react';
interface VideoPlayerProps {
  src: string;
  title: string;
  onProgress?: (progress: number) => void;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  onProgress
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };
  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time);
    if (onProgress) {
      onProgress(time / duration * 100);
    }
  };
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <video
          src={src}
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1635070041078-e363dbe005cb" />
        
      </div>
      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="relative h-1 bg-gray-600 rounded-full">
            <div
              className="absolute h-full bg-indigo-600 rounded-full"
              style={{
                width: `${currentTime / duration * 100}%`
              }} />
            
            <div
              className="absolute h-3 w-3 bg-white rounded-full -mt-1 -ml-1.5 cursor-pointer"
              style={{
                left: `${currentTime / duration * 100}%`
              }} />
            
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="text-white hover:text-indigo-400 transition-colors">
              
              {isPlaying ?
              <PauseIcon className="h-6 w-6" /> :

              <PlayIcon className="h-6 w-6" />
              }
            </button>
            <div className="flex items-center space-x-2">
              <button className="text-white hover:text-indigo-400 transition-colors">
                {volume > 0 ?
                <Volume2Icon className="h-5 w-5" /> :

                <VolumeIcon className="h-5 w-5" />
                }
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20" />
              
            </div>
            <div className="text-sm text-white">
              <span>{formatTime(currentTime)}</span>
              <span className="mx-1">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-indigo-400 transition-colors">
              <SettingsIcon className="h-5 w-5" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-indigo-400 transition-colors">
              
              {isFullscreen ?
              <MinimizeIcon className="h-5 w-5" /> :

              <MaximizeIcon className="h-5 w-5" />
              }
            </button>
          </div>
        </div>
      </div>
    </div>);

};
export default VideoPlayer;