'use client';

import React, { useState, useRef } from 'react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! 👋 How can I help you today?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [step, setStep] = useState<'greeting' | 'collect-info' | 'message'>('greeting');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const chatWidgetRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('[data-chat-header]')) {
      setIsDragging(true);
      const widget = chatWidgetRef.current;
      if (widget) {
        setDragOffset({
          x: e.clientX - widget.getBoundingClientRect().left,
          y: e.clientY - widget.getBoundingClientRect().top,
        });
      }
    }
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    if (step === 'greeting') {
      setMessages([
        ...messages,
        { id: Date.now().toString(), type: 'user', content: inputValue },
      ]);
      setInputValue('');
      setStep('collect-info');
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: "I'd like to collect some information. What's your name?",
        },
      ]);
    } else if (step === 'collect-info' && !userData.name) {
      setUserData({ ...userData, name: inputValue });
      setMessages([
        ...messages,
        { id: Date.now().toString(), type: 'user', content: inputValue },
      ]);
      setInputValue('');
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: 'Nice to meet you! What is your email address?',
        },
      ]);
    } else if (step === 'collect-info' && !userData.email) {
      const email = inputValue;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            type: 'bot',
            content: 'Please enter a valid email address.',
          },
        ]);
        setInputValue('');
        return;
      }
      setUserData({ ...userData, email });
      setMessages([
        ...messages,
        { id: Date.now().toString(), type: 'user', content: inputValue },
      ]);
      setInputValue('');
      setStep('message');
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: "Perfect! Now, please tell me your message or question. I'll forward it to the website owner.",
        },
      ]);
    } else if (step === 'message') {
      setMessages([
        ...messages,
        { id: Date.now().toString(), type: 'user', content: inputValue },
      ]);

      setIsLoading(true);

      try {
        const response = await fetch('/api/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: userData.name,
            email: userData.email,
            message: inputValue,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              type: 'bot',
              content: '✅ Your message has been sent successfully! The website owner will get back to you soon.',
            },
          ]);
          setInputValue('');
          setTimeout(() => {
            setIsOpen(false);
            setStep('greeting');
            setUserData({ name: '', email: '' });
            setMessages([
              {
                id: '1',
                type: 'bot',
                content: 'Hello! 👋 How can I help you today?',
              },
            ]);
          }, 2000);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              type: 'bot',
              content: '❌ Sorry, there was an error sending your message. Please try again.',
            },
          ]);
        }
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            content: '❌ Sorry, there was an error sending your message. Please try again.',
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 z-40"
        title="Open chat"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
    );
  }

  return (
    <div
      ref={chatWidgetRef}
      className="fixed z-50 w-96 h-[600px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      <div
        data-chat-header
        className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center cursor-move"
        onMouseDown={handleDragStart}
      >
        <div>
          <h3 className="font-bold text-lg">Chat with us</h3>
          <p className="text-sm opacity-90">We&apos;re here to help!</p>
        </div>
        <button
          onClick={() => {
            setIsOpen(false);
            setStep('greeting');
            setUserData({ name: '', email: '' });
            setMessages([
              {
                id: '1',
                type: 'bot',
                content: 'Hello! 👋 How can I help you today?',
              },
            ]);
          }}
          className="text-white hover:opacity-80 transition-opacity"
          title="Close chat"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.type === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !isLoading) {
                handleSendMessage();
              }
            }}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {isLoading ? '...' : '📤'}
          </button>
        </div>
      </div>
    </div>
  );
}
