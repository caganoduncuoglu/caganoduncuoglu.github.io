import { useState, useRef, useEffect } from 'react';

export type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const INITIAL_MESSAGE: Message = {
  id: 'init-1',
  text: "Hello! I am an AI assistant created to help you learn more about Çağan’s skills, experience, and projects. Feel free to ask anything relevant.",
  sender: 'bot',
  timestamp: new Date(),
};

export const QUICK_QUESTIONS = [
  "What are his main technical skills?",
  "How strong is he in C# and .NET?",
  "Does he have Java or Python experience?",
  "How can I contact him?",
];

export function useChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setShowQuickQuestions(false);

    try {
      const response = await fetch('https://portfolio-helper.mcagano.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply || "I'm sorry, I couldn't get a response at the moment.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, something went wrong. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isOpen,
    toggleChat,
    messages,
    isLoading,
    sendMessage,
    messagesEndRef,
    showQuickQuestions,
  };
}
