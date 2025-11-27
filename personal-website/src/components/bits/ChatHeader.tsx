import React from 'react';
import { X, Minus } from 'lucide-react';

interface ChatHeaderProps {
    onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
    return (
        <div className="flex items-center justify-between bg-slate-950 text-white p-4 rounded-t-2xl border-b border-slate-800">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                <div className="flex flex-col">
                    <h3 className="font-semibold text-sm tracking-wide">Çağan – AI Assistant</h3>
                    <span className="text-[10px] text-slate-400 font-medium">Powered by CloudFlare</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={onClose}
                    className="hover:bg-slate-800 p-1.5 rounded-full transition-colors text-slate-400 hover:text-white"
                    aria-label="Minimize chat"
                >
                    <Minus size={16} />
                </button>
            </div>
        </div>
    );
};
