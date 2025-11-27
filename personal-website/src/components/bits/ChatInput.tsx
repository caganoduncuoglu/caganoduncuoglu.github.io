import React, { useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
    onSend: (text: string) => void;
    disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() && !disabled) {
            onSend(input);
            setInput('');
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="p-4 bg-slate-950 border-t border-slate-800 rounded-b-2xl">
            <div className="flex items-center gap-2 bg-slate-900 p-2 rounded-full border border-slate-800 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about skills, experience or projects..."
                    className="flex-1 bg-transparent border-none outline-none text-sm px-2 text-slate-200 placeholder:text-slate-500"
                    disabled={disabled}
                />
                <button
                    onClick={handleSend}
                    disabled={!input.trim() || disabled}
                    className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <Send size={16} />
                </button>
            </div>
        </div>
    );
};
