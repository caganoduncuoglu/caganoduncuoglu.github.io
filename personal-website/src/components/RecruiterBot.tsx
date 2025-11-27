'use client';

import React from 'react';
import { useChat } from '../hooks/useChat';
import { ChatHeader } from './bits/ChatHeader';
import { ChatMessage } from './bits/ChatMessage';
import { ChatInput } from './bits/ChatInput';
import { QuickQuestions } from './bits/QuickQuestions';
import { FloatingButton } from './bits/FloatingButton';
import { AnimatePresence, motion } from 'framer-motion';

export default function RecruiterBot() {
    const {
        isOpen,
        toggleChat,
        messages,
        isLoading,
        sendMessage,
        messagesEndRef,
        showQuickQuestions,
    } = useChat();

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="w-[350px] h-[500px] bg-slate-950 rounded-2xl shadow-2xl flex flex-col mb-4 border border-slate-800"
                    >
                        <ChatHeader onClose={toggleChat} />

                        <div className="flex-1 overflow-y-auto p-4 bg-slate-950 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <ChatMessage key={msg.id} message={msg} />
                            ))}

                            {isLoading && (
                                <div className="flex justify-start mb-4">
                                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl rounded-bl-none shadow-sm">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="w-2 h-2 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="w-2 h-2 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {showQuickQuestions && (
                                <QuickQuestions onQuestionClick={sendMessage} />
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        <ChatInput onSend={sendMessage} disabled={isLoading} />
                    </motion.div>
                )}
            </AnimatePresence>

            <FloatingButton onClick={toggleChat} isOpen={isOpen} />
        </div>
    );
}
