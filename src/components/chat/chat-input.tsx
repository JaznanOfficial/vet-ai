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
      <div className="flex items-end gap-2">
        {/* Image upload button */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="shrink-0"
          disabled={isLoading}
        >
          <ImagePlus className="h-4 w-4" />
          <span className="sr-only">Upload image</span>
        </Button>

        {/* Message input */}
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe your pet's symptoms..."
            className="min-h-[60px] max-h-[200px] resize-none pr-12"
            disabled={isLoading}
          />
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
            {message.length}/2000
          </div>
        </div>

        {/* Send button */}
        <Button
          type="submit"
          size="icon"
          className="shrink-0"
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
      
      <p className="mt-2 text-xs text-muted-foreground">
        Press Enter to send, Shift+Enter for new line
      </p>
    </form>
  )
}
