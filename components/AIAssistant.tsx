
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Truck, Loader2 } from 'lucide-react';
import { askAssistant } from '../services/gemini';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: "Good day! I'm Swiftwheel's AI Assistant. How can I help you with your logistics needs today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await askAssistant(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', text: response || "I'm sorry, I couldn't process that." }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-[90vw] sm:w-[380px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200 origin-bottom-right">
          <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold">Swiftwheel Assistant</h4>
                <div className="flex items-center gap-1.5 text-xs text-blue-100">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  AI Powered • Active Now
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-md shadow-blue-200' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-200 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none">
                  <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-grow px-4 py-2 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all group relative"
        >
          <MessageSquare className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl border border-slate-100 font-bold whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            Need help? Ask AI
          </div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
