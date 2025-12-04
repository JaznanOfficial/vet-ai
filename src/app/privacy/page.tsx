import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: December 4, 2024</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li><strong>Account Information:</strong> Name, email address, password</li>
                <li><strong>Pet Information:</strong> Pet names, types, symptoms, and health assessments</li>
                <li><strong>Chat Data:</strong> Conversations with our AI assistant</li>
                <li><strong>Images:</strong> Photos you upload for assessment purposes</li>
                <li><strong>Usage Data:</strong> How you interact with our service</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our AI-powered veterinary triage service</li>
                <li>Generate health assessments for your pets</li>
                <li>Communicate with you about your account and our services</li>
                <li>Improve our AI models and service quality</li>
                <li>Ensure the security and integrity of our platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Data Storage and Security</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>We take data security seriously:</p>
              <ul>
                <li>All data is encrypted in transit and at rest</li>
                <li>Images are stored securely in Cloudflare R2</li>
                <li>Chat history is stored in encrypted vector databases</li>
                <li>We use industry-standard security practices</li>
                <li>Access to your data is strictly controlled</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party services that help us operate (e.g., cloud hosting, AI models)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                We use cookies and similar tracking technologies to improve your experience, analyze usage, and personalize content. You can control cookies through your browser settings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Our service is not intended for children under 18. We do not knowingly collect personal information from children.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                If you have questions about this Privacy Policy, please contact us at privacy@vetai.com
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
