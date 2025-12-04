import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">About Vet AI</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered veterinary triage assistant helping pet owners make informed decisions about their pet's health.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chat" className="text-muted-foreground hover:text-primary transition-colors">
                  Start Chat
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-muted-foreground hover:text-primary transition-colors">
                  Assessment History
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">support@vetai.com</li>
              <li className="text-muted-foreground">Emergency: Contact your local vet</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 border-t pt-6">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Important:</strong> Vet AI is a triage tool and does not replace professional veterinary care. 
            Always consult with a licensed veterinarian for medical advice and treatment.
          </p>
          <p className="mt-2 text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Vet AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
