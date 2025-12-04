"use client"

import { useState } from "react"
import { Send, ImagePlus, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface ChatInputProps {
  onSendMessage: (message: string) => void
  isLoading?: boolean
}

export function ChatInput({ onSendMessage, isLoading = false }: ChatInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border-t bg-background p-4">
      {/* Integrated Input Container */}
      <div className="relative">
        {/* Message input */}
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe your pet's symptoms..."
          className="min-h-32 max-h-[300px] resize-none pr-24 pb-12 rounded-2xl border-2 focus-visible:ring-2 focus-visible:ring-offset-0 transition-all"
          disabled={isLoading}
        />
        
        {/* Character count */}
        <div className="absolute top-3 right-3 text-xs text-muted-foreground/60">
          {message.length}/2000
        </div>

        {/* Action buttons container - positioned at bottom right inside textarea */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          {/* Image upload button */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-muted transition-colors"
            disabled={isLoading}
          >
            <ImagePlus className="h-4 w-4" />
            <span className="sr-only">Upload image</span>
          </Button>

          {/* Send button */}
          <Button
            type="submit"
            size="icon"
            className="h-8 w-8 rounded-full transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            disabled={!message.trim() || isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
      
      <p className="mt-2 text-xs text-muted-foreground">
        Press Enter to send, Shift+Enter for new line
      </p>
    </form>
  )
}
