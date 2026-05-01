import { MessageSquare, X, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'user' | 'agent', text: string}[]>([
    { sender: 'agent', text: 'Hi! How can we help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    const userMessage = input;
    setInput('');

    // Simulate agent reply
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'agent', text: 'Thanks for reaching out! A representative will connect with you shortly regarding: ' + userMessage }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 rounded-t-xl rounded-bl-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden transition-all duration-300">
          <div className="bg-brand-blue text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="font-semibold">Blexford Support</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 h-80 overflow-y-auto bg-gray-50 flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.sender === 'user' ? 'bg-brand-blue text-white rounded-br-sm' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow px-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
              placeholder="Type your message..."
            />
            <button type="submit" className="p-2 bg-brand-gold text-brand-blue rounded-lg hover:bg-yellow-500 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-brand-blue rounded-full shadow-xl flex items-center justify-center text-white hover:scale-105 transition-transform"
        >
          <MessageSquare className="w-6 h-6 text-brand-gold" />
        </button>
      )}
    </div>
  );
}
