import React, { useEffect, useState, useRef } from 'react';
import { SendIcon, SmileIcon } from 'lucide-react';
interface Message {
  id: string;
  sender: {
    name: string;
    role: 'teacher' | 'student';
  };
  content: string;
  timestamp: Date;
}
interface ChatPanelProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  isTeacher: boolean;
}
const ChatPanel: React.FC<ChatPanelProps> = ({
  messages,
  onSendMessage,
  isTeacher
}) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim());
      setNewMessage('');
    }
  };
  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Class Chat</h2>
        <p className="text-sm text-gray-500">
          {messages.length} messages in chat
        </p>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) =>
        <div key={message.id} className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {message.sender.name.charAt(0)}
                </span>
              </div>
              <div>
                <span
                className={`text-sm font-medium ${message.sender.role === 'teacher' ? 'text-indigo-600' : 'text-gray-900'}`}>
                
                  {message.sender.name}
                </span>
                <span className="text-xs text-gray-500 ml-2">
                  {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
                </span>
              </div>
            </div>
            <div className="ml-10">
              <p className="text-sm text-gray-600">{message.content}</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
            
            <SmileIcon className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500" />
          
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="p-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed">
            
            <SendIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>);

};
export default ChatPanel;