import { redirect } from "next/navigation"

export default function ChatPage() {
  // Generate a random ID for the new chat session
  const id = crypto.randomUUID()
  
  // Redirect to the dynamic chat route
  redirect(`/chat/${id}`)
}
