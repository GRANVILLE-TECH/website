import React, { useEffect, useState } from 'react';
import {
  VideoIcon,
  MicIcon,
  MonitorIcon,
  HandIcon,
  MessageSquareIcon,
  UsersIcon,
  XIcon,
  MicOffIcon,
  VideoOffIcon,
  UserIcon } from
'lucide-react';
import ChatPanel from './ChatPanel';
interface Participant {
  id: string;
  name: string;
  role: 'teacher' | 'student';
  isHandRaised: boolean;
  hasCamera: boolean;
  hasMic: boolean;
  isScreenSharing: boolean;
}
interface Message {
  id: string;
  sender: {
    name: string;
    role: 'teacher' | 'student';
  };
  content: string;
  timestamp: Date;
}
interface VirtualClassroomProps {
  classTitle: string;
  teacherName: string;
  subject: string;
  isTeacher?: boolean;
}
const VirtualClassroom: React.FC<VirtualClassroomProps> = ({
  classTitle,
  teacherName,
  subject,
  isTeacher = false
}) => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [participants, setParticipants] = useState<Participant[]>([
  {
    id: '1',
    name: teacherName,
    role: 'teacher',
    isHandRaised: false,
    hasCamera: true,
    hasMic: true,
    isScreenSharing: false
  },
  {
    id: '2',
    name: 'John Doe',
    role: 'student',
    isHandRaised: true,
    hasCamera: true,
    hasMic: true,
    isScreenSharing: false
  }]
  );
  const [messages, setMessages] = useState<Message[]>([
  {
    id: '1',
    sender: {
      name: teacherName,
      role: 'teacher'
    },
    content:
    "Welcome to today's class! We'll be covering quadratic equations.",
    timestamp: new Date()
  },
  {
    id: '2',
    sender: {
      name: 'John Doe',
      role: 'student'
    },
    content: "I'm excited to learn!",
    timestamp: new Date(Date.now() - 1000 * 60)
  }]
  );
  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: String(messages.length + 1),
      sender: {
        name: isTeacher ? teacherName : 'You',
        role: isTeacher ? 'teacher' : 'student'
      },
      content,
      timestamp: new Date()
    };
    setMessages([...messages, newMessage]);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="h-screen flex flex-col">
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  {classTitle}
                </h1>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-500">{subject}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{teacherName}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-green-800">
                    Live
                  </span>
                </div>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-150">
                  End Class
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 p-4">
            <div className="bg-gray-900 rounded-xl h-full relative overflow-hidden shadow-2xl">
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                      <UserIcon className="h-6 w-6 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{teacherName}</p>
                      <p className="text-gray-300 text-sm">Speaking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 flex flex-col bg-white shadow-lg">
            <ChatPanel
              messages={messages}
              onSendMessage={handleSendMessage}
              isTeacher={isTeacher} />
            
            <div className="border-t border-gray-200 p-4 space-y-4">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setIsMicOn(!isMicOn)}
                  className={`p-4 rounded-full transition-all duration-200 transform hover:scale-105 ${isMicOn ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200' : 'bg-red-100 text-red-600 hover:bg-red-200'}`}
                  title={isMicOn ? 'Turn off microphone' : 'Turn on microphone'}>
                  
                  {isMicOn ?
                  <MicIcon className="h-6 w-6" /> :

                  <MicOffIcon className="h-6 w-6" />
                  }
                </button>
                <button
                  onClick={() => setIsCameraOn(!isCameraOn)}
                  className={`p-4 rounded-full transition-all duration-200 transform hover:scale-105 ${isCameraOn ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200' : 'bg-red-100 text-red-600 hover:bg-red-200'}`}
                  title={isCameraOn ? 'Turn off camera' : 'Turn on camera'}>
                  
                  {isCameraOn ?
                  <VideoIcon className="h-6 w-6" /> :

                  <VideoOffIcon className="h-6 w-6" />
                  }
                </button>
                <button
                  onClick={() => setIsScreenSharing(!isScreenSharing)}
                  className={`p-4 rounded-full transition-all duration-200 transform hover:scale-105 ${isScreenSharing ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  title={isScreenSharing ? 'Stop sharing' : 'Share screen'}>
                  
                  <MonitorIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setIsHandRaised(!isHandRaised)}
                  className={`p-4 rounded-full transition-all duration-200 transform hover:scale-105 ${isHandRaised ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  title={isHandRaised ? 'Lower hand' : 'Raise hand'}>
                  
                  <HandIcon className="h-6 w-6" />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setIsParticipantsOpen(!isParticipantsOpen)}
                    className={`p-4 rounded-full transition-all duration-200 transform hover:scale-105 ${isParticipantsOpen ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    title="Participants">
                    
                    <UsersIcon className="h-6 w-6" />
                  </button>
                  {participants.length > 0 &&
                  <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-indigo-600 text-white text-xs font-bold rounded-full ring-2 ring-white">
                      {participants.length}
                    </span>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

};
export default VirtualClassroom;