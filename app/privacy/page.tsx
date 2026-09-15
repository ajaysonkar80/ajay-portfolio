export const metadata = {
  title: "Privacy Policy | Ajay Sonkar",
  description: "Privacy Policy for Ajay Sonkar portfolio",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#080c14] to-[#0a101a]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%,   rgba(0,212,255,0.15) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 85% 70%,  rgba(245,158,11,0.08) 0%, transparent 60%)
            `,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h1 className="font-heading font-black text-neon mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-sm">Last Updated: September 15, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="text-white/90 leading-relaxed mb-4">
              Ajay Sonkar ("I", "we", "us", or "our") operates the <strong className="text-neon">www.ajaysonkar.com</strong> website. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit or interact with our Site.
            </p>
            <p className="text-white/90 leading-relaxed mb-4">
              This Privacy Policy is designed to comply with applicable data protection laws, including India's Digital Personal Data Protection Act (DPDPA) 2023.
            </p>
            <p className="text-white/90 leading-relaxed">
              By accessing or using this Site, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please do not use this Site.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">1.</span> Information We Collect
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">1.1</span> Information You Provide Directly
            </h3>
            <p className="text-white/90 mb-3">When you use our contact form, we collect:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your company name (if provided)</li>
              <li>Your message or inquiry</li>
              <li>Any other information you choose to include</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">1.2</span> Information Collected Automatically
            </h3>
            <p className="text-white/90 mb-3">When you visit our Site, we automatically collect certain information through <strong className="text-neon">PostHog</strong> (our analytics platform):</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referral source</li>
              <li>General geographic location (city/country level)</li>
              <li>Device information</li>
              <li>User interactions and events</li>
            </ul>
            <p className="text-white/90 mb-6">This data is collected via cookies and similar tracking technologies.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">1.3</span> Cookies and Tracking
            </h3>
            <p className="text-white/90">We use cookies to enhance your browsing experience and understand Site usage. You can control cookie settings through your browser preferences, though some Site functionality may be limited if you disable cookies.</p>
          </div>

          {/* 2. How We Use Your Information */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">2.</span> How We Use Your Information
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">2.1</span> Contact Form Data
            </h3>
            <p className="text-white/90 mb-3">We use information from your contact form to:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Respond to your inquiry</li>
              <li>Follow up on your interest in our services</li>
              <li>Improve our service offerings</li>
              <li>Contact you about relevant opportunities (with your consent)</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">2.2</span> Analytics Data
            </h3>
            <p className="text-white/90 mb-3">We use PostHog analytics to:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Understand how visitors use our Site</li>
              <li>Identify popular content and features</li>
              <li>Troubleshoot technical issues</li>
              <li>Improve Site performance and user experience</li>
              <li>Make data-driven decisions about our services and positioning</li>
            </ul>
            <p className="text-white/90"><strong>We do not sell or share analytics data with third parties</strong> (beyond PostHog's standard data processing).</p>
          </div>

          {/* 3. Data Sharing and Disclosure */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">3.</span> Data Sharing and Disclosure
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">3.1</span> Third-Party Service Providers
            </h3>
            <p className="text-white/90 mb-3">We share data with:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li><strong className="text-neon">PostHog</strong> – for website analytics and usage tracking</li>
              <li><strong className="text-neon">Zoho Zeptomail</strong> – for email communications</li>
            </ul>
            <p className="text-white/90 mb-6">These services are contractually obligated to use your data only as necessary to provide services to us.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">3.2</span> Legal Obligations
            </h3>
            <p className="text-white/90 mb-6">We may disclose your information if required by law, regulation, or valid legal process (such as a court order or government request).</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">3.3</span> Business Transfers
            </h3>
            <p className="text-white/90">If our business is acquired, merged, or sold, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have regarding your information.</p>
          </div>

          {/* 4. Data Retention */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">4.</span> Data Retention
            </h2>
            <ul className="text-white/90 list-disc list-inside space-y-2 pl-8">
              <li><strong>Contact Form Data:</strong> We retain your contact information until you request deletion.</li>
              <li><strong>Analytics Data:</strong> PostHog analytics data is retained until you request deletion.</li>
            </ul>
          </div>

          {/* 5. Your Rights and Choices */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">5.</span> Your Rights and Choices
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">5.1</span> Access and Deletion
            </h3>
            <p className="text-white/90 mb-6">You have the right to request access to, or deletion of, your personal information. Email us at <strong className="text-neon">hello@ajaysonkar.com</strong> with "Data Request" in the subject line.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">5.2</span> Opt-Out of Analytics
            </h3>
            <p className="text-white/90 mb-3">You can opt out of PostHog tracking by:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Adjusting your cookie preferences in your browser</li>
              <li>Contacting us to request that we stop tracking your data</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">5.3</span> Communication Preferences
            </h3>
            <p className="text-white/90">If you receive follow-up emails from us, you can unsubscribe by clicking the unsubscribe link in any email or by contacting us directly.</p>
          </div>

          {/* 6. Data Security */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">6.</span> Data Security
            </h2>
            <p className="text-white/90">We implement reasonable technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </div>

          {/* 7. Third-Party Links */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">7.</span> Third-Party Links
            </h2>
            <p className="text-white/90">Our Site may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review the privacy policies of any third-party sites before providing personal information.</p>
          </div>

          {/* 8. Children's Privacy */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">8.</span> Children's Privacy
            </h2>
            <p className="text-white/90">Our Site is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with information, we will delete it promptly.</p>
          </div>

          {/* 9. Changes to This Privacy Policy */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">9.</span> Changes to This Privacy Policy
            </h2>
            <p className="text-white/90">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by updating the "Last Updated" date above. Your continued use of the Site after changes constitutes your acceptance of the updated Privacy Policy.</p>
          </div>

          {/* 10. Contact Us */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">10.</span> Contact Us
            </h2>
            <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 p-6 rounded-lg">
              <p className="text-white/90 mb-4">If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
              <div className="text-white/90 space-y-2 pl-8">
                <p><strong>Email:</strong> <strong className="text-neon">hello@ajaysonkar.com</strong></p>
                <p><strong>Website:</strong> <strong className="text-neon">www.ajaysonkar.com</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
