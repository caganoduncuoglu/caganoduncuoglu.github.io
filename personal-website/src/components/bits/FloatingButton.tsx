import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, isOpen }) => {
    if (isOpen) return null;

    return (
        <button
            onClick={onClick}
            className="group flex items-center gap-2 bg-purple-600 text-white p-4 pr-6 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
        >
            <div className="relative">
                <MessageCircle size={24} />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            </div>
            <span className="font-semibold text-sm whitespace-nowrap">Ask about Çağan</span>
        </button>
    );
};
