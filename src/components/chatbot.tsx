// src/components/Chatbot.tsx

import { useState, useEffect, useRef } from 'react';

// Define the structure for a message
interface Message {
    text: string;
    sender: 'user' | 'assistant';
}

// --- YOUR CONVERSATION TREE DATABASE ---
// This is the new, more powerful structure. Each question leads to an answer
// and can optionally have a list of follow-up questions.

interface ConversationNode {
    answer: string;
    followUpQuestions?: string[]; // This is optional
}

const conversationTree: { [key: string]: ConversationNode } = {
    // Top-Level Questions
    "What are your skills?": {
        answer: "Ashwani is skilled in several areas. Which would you like to know more about?",
        followUpQuestions: ["Frontend Technologies", "Backend Technologies", "Go back"]
    },
    "Tell me about your projects": {
        answer: "He has built several projects. Here are a couple of highlights. Which one interests you?",
        followUpQuestions: ["E-commerce Platform", "Real-time Chat App", "Go back"]
    },
    "How can I contact you?": {
        answer: "You can reach out to Ashwani via email at example@email.com or connect with him on LinkedIn.",
        followUpQuestions: ["Start Over"] // An option to go back to the beginning
    },

    // Second-Level Questions (Skills)
    "Frontend Technologies": {
        answer: "For the frontend, he is proficient in React, TypeScript, and Tailwind CSS.",
        followUpQuestions: ["Backend Technologies", "Go back"]
    },
    "Backend Technologies": {
        answer: "On the backend, he works with Node.js, Express, and databases like MongoDB and SQL.",
        followUpQuestions: ["Frontend Technologies", "Go back"]
    },

    // Second-Level Questions (Projects)
    "E-commerce Platform": {
        answer: "The e-commerce platform is a full-stack MERN application with user authentication, a product catalog, and a shopping cart.",
        followUpQuestions: ["Real-time Chat App", "Go back"]
    },
    "Real-time Chat App": {
        answer: "The chat app was built with Socket.IO and allows users to communicate instantly in chat rooms.",
        followUpQuestions: ["E-commerce Platform", "Go back"]
    },
};

// Define the very first questions the user will see
const initialQuestions: string[] = ["What are your skills?", "Tell me about your projects", "How can I contact you?"];

// --- END OF DATABASE ---


export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hello! Here are some things you can ask me:", sender: 'assistant' }
    ]);
    const [currentQuestions, setCurrentQuestions] = useState<string[]>(initialQuestions);
    const chatMessagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    const handleQuestionClick = (question: string) => {
        // Handle special "Go back" and "Start Over" commands
        if (question === "Go back" || question === "Start Over") {
            setMessages(prev => [...prev, { text: "What else can I help you with?", sender: 'assistant' }]);
            setCurrentQuestions(initialQuestions);
            return;
        }

        // Add the user's chosen question to the chat
        setMessages(prev => [...prev, { text: question, sender: 'user' }]);

        // Find the corresponding answer and follow-up questions
        const conversationNode = conversationTree[question];
        const answer = conversationNode?.answer || "Sorry, I don't have an answer for that.";
        const followUps = conversationNode?.followUpQuestions || [];

        // Show the bot's answer after a short delay
        setTimeout(() => {
            setMessages(prev => [...prev, { text: answer, sender: 'assistant' }]);
            setCurrentQuestions(followUps); // Set the next list of questions
        }, 500);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Chat Window */}
            <div className={`w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-0 pointer-events-none'}`}>
                {/* Header */}
                <div className="bg-indigo-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                    <h3 className="font-bold text-lg">Portfolio Assistant</h3>
                    <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 text-2xl leading-none">&times;</button>
                </div>

                {/* Messages Area */}
                <div ref={chatMessagesRef} className="flex-1 p-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                            <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}

                    {/* Render the current list of question buttons */}
                    {currentQuestions.length > 0 && (
                        <div className="flex flex-col items-start space-y-2 mt-4">
                            {currentQuestions.map((question) => (
                                <button
                                    key={question}
                                    onClick={() => handleQuestionClick(question)}
                                    className="bg-gray-100 text-gray-800 text-left text-sm px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Chat Bubble Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="bg-indigo-600 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            </button>
        </div>
    );
}