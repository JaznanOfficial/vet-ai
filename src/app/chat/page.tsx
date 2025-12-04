"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { ChatMessage } from "@/components/chat/chat-message"
import { ChatInput } from "@/components/chat/chat-input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

// Mock data for UI demonstration
const initialMessages = [
  {
    id: "1",
    role: "assistant" as const,
    content: "Hello! I'm your AI veterinary assistant. How can I help you today? You can describe your pet's symptoms or ask me about past assessments.",
    timestamp: new Date(Date.now() - 60000),
  },
]

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      role: "user" as const,
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])

    // Simulate AI response (for UI demo only)
    setIsLoading(true)
    setTimeout(() => {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant" as const,
        content: "I understand you're concerned about your pet. Could you provide more details about the symptoms you're observing? For example:\n\n• When did the symptoms start?\n• How severe are they?\n• Any changes in behavior or appetite?\n\nYou can also upload images if there are visible symptoms.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container px-4 py-6 max-w-4xl">
        {/* Chat Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-bold">AI Chat</h1>
            <Badge variant="secondary" className="gap-1">
              <Sparkles className="h-3 w-3" />
              Agentic
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Ask about your pet's symptoms or search through past assessments
          </p>
        </div>

        {/* Chat Container */}
        <Card className="flex flex-col h-[calc(100vh-280px)]">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
                timestamp={message.timestamp}
              />
            ))}
            
            {isLoading && (
              <div className="flex gap-3 mb-4">
                <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-muted text-muted-foreground text-sm font-medium">
                  AI
                </div>
                <div className="flex items-center gap-1 bg-muted rounded-2xl px-4 py-2.5">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </Card>

        {/* Disclaimer */}
        <p className="mt-4 text-xs text-center text-muted-foreground">
          This is a triage tool. Always consult with a licensed veterinarian for medical advice.
        </p>
      </main>
    </div>
  )
}
