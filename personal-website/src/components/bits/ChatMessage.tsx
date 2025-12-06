import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Message } from '../../hooks/useChat';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
    message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const isBot = message.sender === 'bot';

    return (
        <div className={`flex w-full mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
            <div className={`flex max-w-[85%] ${isBot ? 'flex-row' : 'flex-row-reverse'} items-end gap-2`}>

                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isBot ? 'bg-slate-800 text-purple-400' : 'bg-purple-600 text-white'
                    }`}>
                    {isBot ? <Bot size={16} /> : <User size={16} />}
                </div>

                {/* Bubble */}
                <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${isBot
                    ? 'bg-slate-900 text-slate-200 rounded-bl-none border border-slate-800'
                    : 'bg-purple-600 text-white rounded-br-none'
                    }`}>
                    <ReactMarkdown
                        components={{
                            p: ({ children }: any) => <p className="mb-1 last:mb-0">{children}</p>,
                            strong: ({ children }: any) => <span className="font-bold">{children}</span>,
                            ul: ({ children }: any) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                            ol: ({ children }: any) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                            li: ({ children }: any) => <li className="mb-0.5">{children}</li>,
                            a: ({ href, children }: any) => <a href={href} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">{children}</a>,
                            code: ({ children }: any) => <code className="bg-black/20 px-1 py-0.5 rounded text-xs font-mono">{children}</code>
                        }}
                    >
                        {message.text}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};
