import React, { useEffect, useState, useRef } from 'react';
import {
  PenIcon,
  EraserIcon,
  UndoIcon,
  RedoIcon,
  TrashIcon,
  Square,
  Circle,
  Type } from
'lucide-react';
interface WhiteboardProps {
  isTeacher: boolean;
}
const Whiteboard: React.FC<WhiteboardProps> = ({ isTeacher }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setTool] = useState<'pen' | 'eraser' | 'text' | 'shape'>('pen');
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(2);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Set up canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    // Basic drawing setup
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
  }, [color, lineWidth]);
  const tools = [
  {
    icon: PenIcon,
    name: 'pen',
    label: 'Pen'
  },
  {
    icon: EraserIcon,
    name: 'eraser',
    label: 'Eraser'
  },
  {
    icon: Type,
    name: 'text',
    label: 'Text'
  },
  {
    icon: Square,
    name: 'shape',
    label: 'Shape'
  }];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {tools.map(({ icon: Icon, name, label }) =>
          <button
            key={name}
            onClick={() => setTool(name as any)}
            className={`p-2 rounded-lg ${tool === name ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700'}`}
            title={label}>
            
              <Icon className="h-5 w-5" />
            </button>
          )}
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-8 h-8 rounded border border-gray-300" />
          
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            title="Undo">
            
            <UndoIcon className="h-5 w-5" />
          </button>
          <button
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            title="Redo">
            
            <RedoIcon className="h-5 w-5" />
          </button>
          <button
            className="p-2 rounded-lg text-red-700 hover:bg-red-100"
            title="Clear">
            
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Canvas */}
      <div className="relative border border-gray-200 rounded-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-[600px] bg-white cursor-crosshair" />
        
        {!isTeacher &&
        <div className="absolute inset-0 bg-gray-500 bg-opacity-10" />
        }
      </div>
    </div>);

};
export default Whiteboard;