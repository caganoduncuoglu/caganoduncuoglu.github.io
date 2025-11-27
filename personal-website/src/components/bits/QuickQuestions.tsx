import React from 'react';
import { QUICK_QUESTIONS } from '../../hooks/useChat';

interface QuickQuestionsProps {
    onQuestionClick: (question: string) => void;
}

export const QuickQuestions: React.FC<QuickQuestionsProps> = ({ onQuestionClick }) => {
    return (
        <div className="flex flex-col gap-2 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1 px-1">Suggested Questions</p>
            {QUICK_QUESTIONS.map((q, idx) => (
                <button
                    key={idx}
                    onClick={() => onQuestionClick(q)}
                    className="text-left text-sm p-3 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:bg-slate-800 hover:border-purple-500/50 hover:text-purple-400 transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
                >
                    {q}
                </button>
            ))}
        </div>
    );
};
