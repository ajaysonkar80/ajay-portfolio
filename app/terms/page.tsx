export const metadata = {
  title: "Terms of Service | Ajay Sonkar",
  description: "Terms of Service for Ajay Sonkar portfolio",
};

export default function TermsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-b from-[#080c14] to-[#0a101a]">
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
            TERMS OF SERVICE
          </h1>
          <div className="text-white/70 text-sm space-y-1">
            <p><strong>Ajay Sonkar - Independent Web Developer</strong></p>
            <p>Website: www.ajaysonkar.com | Email: hello@ajaysonkar.com</p>
            <p>Location: Dhamtari, Chhattisgarh, India</p>
            <p>Effective Date: September 15, 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* 1. INTRODUCTION & DEFINITIONS */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">1.</span> INTRODUCTION & DEFINITIONS
            </h2>
            <p className="text-white/90 mb-3"><strong className="text-neon">"Service Provider"</strong> refers to Ajay Sonkar operating as an independent web developer through www.ajaysonkar.com.</p>
            <p className="text-white/90 mb-3"><strong className="text-neon">"Client"</strong> refers to any individual, business entity, or organization that engages Service Provider for website development or maintenance services.</p>
            <p className="text-white/90 mb-3"><strong className="text-neon">"Services"</strong> include: website design and development for local businesses, local SEO setup, WhatsApp button and contact form integration, uptime monitoring, security updates, hosting management, and related technical support.</p>
            <p className="text-white/90"><strong className="text-neon">"Work Product"</strong> refers to deliverables produced by Service Provider, including but not limited to: website code, configurations, documentation, and integrated third-party solutions.</p>
          </div>

          {/* 2. SERVICE SCOPE & BUSINESS ALIGNMENT */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">2.</span> SERVICE SCOPE & BUSINESS ALIGNMENT
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">2.1</span> Services Definition
            </h3>
            <p className="text-white/90 mb-3">Service Provider provides one core service:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Website development for local businesses in Raipur — a mobile-first website with WhatsApp button, local SEO, contact form, uptime monitoring, and security updates</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">2.2</span> Domain & Third-Party Costs
            </h3>
            <p className="text-white/90 mb-3"><strong className="text-neon">The domain is paid separately by the Client</strong> and is not included in the project fee or the maintenance plan. Client is responsible for:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Domain registration and renewal (billed separately)</li>
              <li>Any third-party services Client chooses to purchase independently (e.g., premium plugins, stock assets, email services)</li>
            </ul>
            <p className="text-white/90 mb-3">Hosting, uptime monitoring, and security updates are covered by the ₹1,000/month maintenance plan.</p>
            <p className="text-white/90 mb-6">Service Provider will provide transparency on any third-party costs and seek Client approval before incurring expenses.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">2.3</span> Scope of Engagement
            </h3>
            <p className="text-white/90 mb-3">Each engagement will be defined in a Statement of Work (SOW) or engagement letter specifying:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Deliverables and acceptance criteria</li>
              <li>Timeline and milestones</li>
              <li>Assumptions and exclusions</li>
              <li>Payment terms and structure</li>
            </ul>
            <p className="text-white/90">Requests beyond the documented scope are classified as "Change Orders" and will be quoted separately.</p>
          </div>

          {/* 3. ENGAGEMENT MODELS */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">3.</span> OFFER & ENGAGEMENT
            </h2>
            <p className="text-white/90 mb-6">Service Provider offers a single service with straightforward pricing. There is no minimum contract term.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">3.1</span> Website Development — Starting at ₹10,000 (one-time)
            </h3>
            <p className="text-white/90 mb-3"><strong className="text-amber-500">Included:</strong></p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Mobile-first website for local businesses</li>
              <li>WhatsApp button for instant enquiries</li>
              <li>Local SEO setup</li>
              <li>Contact form</li>
              <li>Uptime monitoring &amp; security updates</li>
              <li>Delivery within <strong className="text-neon">4 days from the initial deposit</strong></li>
            </ul>
            <p className="text-white/90 mb-3"><strong className="text-amber-500">Payment &amp; Contract:</strong></p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li><strong className="text-neon">50% of the project fee is payable upfront via UPI</strong> as a deposit</li>
              <li>A <strong className="text-neon">signed written contract</strong> is required before work starts</li>
              <li>Remaining 50% is due upon delivery</li>
              <li>The domain is billed separately</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">3.2</span> Maintenance &amp; Hosting — ₹1,000 per month
            </h3>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Hosting management</li>
              <li>Uptime monitoring</li>
              <li>Security updates</li>
              <li>1 revision per month</li>
              <li>Billed monthly, starting after the website is delivered</li>
              <li>Either party may stop the maintenance plan at any time; there is no minimum term</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">3.3</span> Client Deliverables &amp; Delays
            </h3>
            <p className="text-white/90 mb-6">The 4-day delivery window starts from the initial deposit and assumes Client provides all required materials (images, logo, content, business details) promptly. <strong className="text-neon">Delays caused by late or missing client-supplied images, logo, content, or other deliverables are the Client's responsibility</strong> and extend the delivery timeline day-for-day.</p>
          </div>

          {/* 4. INTELLECTUAL PROPERTY OWNERSHIP */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">4.</span> INTELLECTUAL PROPERTY OWNERSHIP
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">4.1</span> Work Product Ownership
            </h3>
            <p className="text-white/90 mb-3">Unless explicitly agreed otherwise in the SOW:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li><strong className="text-neon">Custom Work Product</strong> created specifically for Client becomes Client's property upon full payment</li>
              <li><strong className="text-neon">Source code</strong> is delivered with documentation enabling continuation or maintenance</li>
              <li><strong className="text-neon">Generic reusable components</strong> remain Service Provider's intellectual property and may be reused across clients, including:
                <ul className="text-white/90 list-disc list-inside space-y-2 pl-8">
                  <li>Code libraries and frameworks</li>
                  <li>FastAPI backend templates</li>
                  <li>Next.js UI component libraries</li>
                  <li>Architectural patterns and design systems</li>
                  <li>Optimization methodologies</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">4.2</span> Pre-Existing Intellectual Property
            </h3>
            <p className="text-white/90 mb-6">Service Provider retains all rights to pre-existing IP, tools, frameworks, and methodologies developed before or outside the engagement. Client receives a non-exclusive license to use pre-existing IP incorporated in the Work Product.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">4.3</span> Third-Party Software & Licenses
            </h3>
            <p className="text-white/90 mb-6">Services may incorporate open-source software, third-party libraries, and commercial tools. Service Provider will disclose third-party licenses upon request. <strong className="text-neon">Client is responsible for compliance with all third-party license terms.</strong></p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">4.4</span> Reusable Methods & Patterns
            </h3>
            <p className="text-white/90 mb-3">Service Provider may use methodologies, architectural patterns, optimization techniques, and code libraries learned from the engagement to serve other clients, provided:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>No confidential Client information is disclosed</li>
              <li>The generic patterns are sufficiently generalized</li>
              <li>Clients do not receive exclusive rights to these methods</li>
            </ul>
          </div>

          {/* 5. INFRASTRUCTURE, HOSTING & DATA MANAGEMENT */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">5.</span> INFRASTRUCTURE, HOSTING & DATA MANAGEMENT
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">5.1</span> Infrastructure & Hosting
            </h3>
            <p className="text-white/90 mb-3"><strong className="text-neon">Service Provider Controls Infrastructure:</strong></p>
            <p className="text-white/90 mb-3">Unless otherwise agreed in writing, Service Provider will:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Host applications and services on Service Provider's infrastructure (VPS, cloud servers, managed platforms)</li>
              <li>Provide monitoring, backups, and routine maintenance</li>
              <li>Bill separately for infrastructure costs incurred (pass-through)</li>
              <li>Provide Client with necessary credentials and access to production systems</li>
            </ul>
            <p className="text-white/90 mb-3"><strong className="text-neon">If Client Provides Infrastructure:</strong></p>
            <p className="text-white/90 mb-3">If Client prefers to provide their own hosting or VPS, Client assumes full responsibility for:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Security patches and hardening</li>
              <li>Backups and disaster recovery</li>
              <li>Compliance and regulatory requirements</li>
              <li>Uptime and availability</li>
              <li>Cost management</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">5.2</span> Data Ownership & Access
            </h3>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li><strong className="text-neon">Client retains ownership</strong> of all Client Data input into systems</li>
              <li>Service Provider accesses Client Data only to perform services or troubleshoot issues</li>
              <li>Upon termination, Client may request a data export within 30 days</li>
              <li><strong className="text-neon">After 30 days, all Client data will be permanently deleted without further notice</strong></li>
              <li>Service Provider is not liable for data loss or recovery failures after the 30-day window</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">5.3</span> Backup & Disaster Recovery
            </h3>
            <p className="text-white/90 mb-3">Service Provider maintains backups for recovery purposes. However:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>No guarantee of recovery time or data completeness</li>
              <li>Service Provider is not liable for data loss</li>
              <li>Critical data protection is Client's responsibility through separate backup agreements if required</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">5.4</span> Third-Party Infrastructure
            </h3>
            <p className="text-white/90">If using third-party platforms (Supabase, Vercel, AWS, etc.), data is subject to their terms of service. Client is responsible for reviewing and accepting third-party privacy and data handling policies.</p>
          </div>

          {/* 6. PAYMENT TERMS & CONDITIONS */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">6.</span> PAYMENT TERMS & CONDITIONS
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">6.1</span> Invoicing & Payment
            </h3>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li><strong className="text-neon">50% deposit via UPI</strong> plus a signed contract is required before work starts</li>
              <li>Remaining 50% of the project fee is due upon delivery</li>
              <li>Maintenance of ₹1,000/month is due at the start of each month</li>
              <li>All fees are exclusive of applicable taxes</li>
              <li>GST or other applicable taxes will be added per current Indian tax law (if applicable based on annual turnover)</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">6.2</span> Payment Methods
            </h3>
            <p className="text-white/90 mb-3">Service Provider accepts:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li><strong className="text-neon">UPI payments (primary method)</strong></li>
              <li>Bank transfer (NEFT/RTGS)</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">6.3</span> Late Payment
            </h3>
            <p className="text-white/90 mb-3">If payment is not received within 15 days of invoice date:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Service Provider may pause work or suspend the maintenance plan (including hosting) until payment is received</li>
              <li>Service Provider may terminate the engagement without further notice</li>
              <li>Client remains liable for all accrued fees and collection costs</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">6.4</span> Taxes
            </h3>
            <p className="text-white/90">Service Provider's annual turnover from freelance services may fall below the ₹20 Lakh GST registration threshold. <strong className="text-neon">All fees exclude applicable taxes, which will be added if required by Indian tax law.</strong> Clients will be advised if tax registration becomes applicable.</p>
          </div>

          {/* 7. CLIENT MATERIALS & CONTENT */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">7.</span> CLIENT MATERIALS & CONTENT
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">7.1</span> Client Responsibilities
            </h3>
            <div className="bg-gradient-to-br from-amber-500/30 to-transparent border border-amber-500/60 p-6 rounded-lg mb-6">
              <p className="text-white/90 mb-3"><strong className="text-neon">This is critical:</strong> Client is responsible for providing all required materials on time, including:</p>
              <ul className="text-white/90 list-disc list-inside space-y-2 pl-8">
                <li>Images, photos, and media for the website</li>
                <li>Logo and brand assets</li>
                <li>Business details, text content, and contact information</li>
                <li>Domain access and any third-party accounts required</li>
              </ul>
            </div>
            <p className="text-white/90 mb-3"><strong className="text-neon">Delays:</strong> Late, missing, or incomplete client materials extend the delivery timeline and are the Client's responsibility.</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Client warrants that all supplied materials may legally be used on the website</li>
              <li>Client is responsible for verifying accuracy of their own content before it goes live</li>
              <li>Service Provider is not liable for claims arising from Client-supplied content, images, or trademarks</li>
            </ul>
          </div>

          {/* 8. WARRANTIES & LIMITATIONS OF LIABILITY */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">8.</span> WARRANTIES & LIMITATIONS OF LIABILITY
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">8.1</span> Service Warranties
            </h3>
            <p className="text-white/90 mb-3">Service Provider warrants that:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Services will be performed in a professional and competent manner</li>
              <li>Work Product will not knowingly infringe third-party intellectual property rights</li>
              <li>Service Provider has authority to enter into this agreement</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">8.2</span> Disclaimer of Other Warranties
            </h3>
            <div className="bg-gradient-to-br from-amber-500/30 to-transparent border border-amber-500/60 p-6 rounded-lg mb-6">
              <p className="text-white/90 mb-3"><strong className="text-neon">EXCEPT AS EXPRESSLY STATED ABOVE, SERVICE PROVIDER MAKES NO OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:</strong></p>
              <ul className="text-white/90 list-disc list-inside space-y-2 pl-8">
                <li><strong className="text-neon">No warranty of merchantability or fitness for a particular purpose</strong></li>
                <li><strong className="text-neon">No warranty of bug-free code or error-free Work Product</strong></li>
                <li><strong className="text-neon">No guarantee of uninterrupted service availability</strong></li>
                <li><strong className="text-neon">No guarantee of specific business outcomes</strong> (revenue increase, cost reduction, etc.)</li>
                <li><strong className="text-neon">No warranty regarding third-party integrations or third-party API reliability</strong></li>
                <li><strong className="text-neon">No warranty regarding AI-generated outputs</strong> (see Section 7.1)</li>
              </ul>
            </div>
            <p className="text-white/90 mb-6">Services are provided <strong className="text-neon">"as-is."</strong> Client is responsible for independent testing and validation.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">8.3</span> Limitation of Liability
            </h3>
            <div className="bg-gradient-to-br from-amber-500/30 to-transparent border border-amber-500/60 p-6 rounded-lg mb-6">
              <p className="text-white/90 mb-3"><strong className="text-neon">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong></p>
              <ul className="text-white/90 list-disc list-inside space-y-2 pl-8">
                <li>Service Provider's total liability for any claim shall <strong className="text-neon">not exceed the total amount paid by Client for the specific project in dispute</strong></li>
                <li>For claims arising from work within the past 6 months, liability is capped at the project value</li>
                <li>Service Provider is <strong className="text-neon">not liable for indirect, incidental, consequential, special, or punitive damages</strong></li>
                <li>Service Provider is <strong className="text-neon">not liable for:</strong>
                  <ul className="text-white/90 list-disc list-inside space-y-2 pl-8">
                    <li>Loss of data, revenue, profits, or business interruption</li>
                    <li>Third-party claims or regulatory fines</li>
                    <li>Reputational damage or lost business opportunities</li>
                    <li>Even if advised of the possibility of such damages</li>
                  </ul>
                </li>
              </ul>
            </div>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">8.4</span> Client Indemnification
            </h3>
            <p className="text-white/90 mb-3">Client agrees to indemnify and hold harmless Service Provider from:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Claims arising from Client's use of Work Product</li>
              <li>Client's violation of these terms</li>
              <li>Client's violation of applicable law</li>
              <li>Third-party claims related to Client's data or business use</li>
            </ul>
          </div>

          {/* 9. CONFIDENTIALITY */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">9.</span> CONFIDENTIALITY
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">9.1</span> Confidential Information
            </h3>
            <p className="text-white/90 mb-3">Both parties agree to keep confidential:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Sensitive business information</li>
              <li>Trade secrets and proprietary methods</li>
              <li>Financial data and pricing</li>
              <li>Technical architecture and implementation details</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">9.2</span> Permitted Disclosures
            </h3>
            <p className="text-white/90 mb-3">Service Provider may:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Use anonymized or aggregated project information in case studies and portfolio examples (with Client consent when reasonably practicable)</li>
              <li>Disclose information if required by law or government authority</li>
              <li>Share technical details with subcontractors or support staff under written confidentiality agreements</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">9.3</span> Confidentiality Duration
            </h3>
            <p className="text-white/90">Confidentiality obligations survive termination of engagement for <strong className="text-neon">2 years</strong>.</p>
          </div>

          {/* 10. TERMINATION */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">10.</span> TERMINATION
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">10.1</span> Cancellation by Client
            </h3>
            <p className="text-white/90 mb-6">Client may cancel at any time by giving written notice. <strong className="text-neon">If Client cancels, Client keeps the domain and the website code</strong>, but the website will be taken offline and will no longer remain live — it will be shown as temporarily unavailable. Any outstanding fees remain payable, and no refund is due for work already completed.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">10.2</span> Cancellation of Maintenance Plan
            </h3>
            <p className="text-white/90 mb-6">Client may stop the ₹1,000/month maintenance plan at any time. Once maintenance stops, hosting, uptime monitoring, security updates, and revisions cease, and the website will be taken offline.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">10.3</span> Termination for Cause
            </h3>
            <p className="text-white/90 mb-3">Service Provider may terminate immediately if:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Client fails to pay and does not cure within 15 days</li>
              <li>Client uses Work Product for illegal purposes</li>
              <li>Client breaches confidentiality obligations</li>
              <li>Client materially breaches these terms</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">10.4</span> Obligations Upon Termination
            </h3>
            <p className="text-white/90 mb-3">Upon termination:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Client remains liable for all accrued fees through termination date</li>
              <li>Service Provider will provide a data export within 30 days if requested</li>
              <li><strong className="text-neon">After 30 days, all Client data will be permanently deleted</strong></li>
              <li>Client must cease using pre-existing IP and proprietary tools</li>
              <li>Confidentiality obligations survive termination</li>
            </ul>
          </div>

          {/* 11. GENERAL PROVISIONS */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">11.</span> GENERAL PROVISIONS
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">11.1</span> Independent Contractor Status
            </h3>
            <p className="text-white/90 mb-3">Service Provider is an <strong className="text-neon">independent contractor</strong>, not an employee, agent, or representative of Client. Service Provider is responsible for:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>All taxes and statutory compliance</li>
              <li>Insurance and business licenses</li>
              <li>Ongoing training and professional development</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">11.2</span> No Guarantee of Business Results
            </h3>
            <p className="text-white/90 mb-6">While Service Provider optimizes systems and processes, specific business outcomes depend on factors outside Service Provider's control. <strong className="text-neon">Service Provider makes no guarantees regarding business results.</strong></p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">11.3</span> Entire Agreement
            </h3>
            <p className="text-white/90 mb-6">These Terms, together with the SOW or engagement letter, constitute the entire agreement. Any prior discussions are superseded. <strong className="text-neon">Amendments must be in writing and signed by both parties.</strong></p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">11.4</span> Governing Law & Jurisdiction
            </h3>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>These Terms are governed by the <strong className="text-neon">laws of India</strong></li>
              <li>Disputes are subject to the <strong className="text-neon">exclusive jurisdiction of courts in Dhamtari, Chhattisgarh</strong></li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">11.5</span> Amendment of Terms
            </h3>
            <p className="text-white/90 mb-6">Service Provider reserves the right to amend these Terms with <strong className="text-neon">30 days notice</strong>. Continued use of services after the effective date constitutes acceptance.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">11.6</span> Severability
            </h3>
            <p className="text-white/90 mb-6">If any provision is found invalid, remaining provisions remain in full effect.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">11.7</span> Waiver
            </h3>
            <p className="text-white/90">Failure to enforce any term does not constitute a waiver of that term or any other term.</p>
          </div>

          {/* 12. CONTACT & NOTICES */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">12.</span> CONTACT & NOTICES
            </h2>
            <p className="text-white/90 mb-3">For notices, inquiries, disputes, or clarifications:</p>
            <div className="bg-gradient-to-br from-amber-500/30 to-transparent border border-amber-500/60 p-6 rounded-lg">
              <div className="text-white/90 space-y-2 pl-8">
                <p><strong className="text-neon">Ajay Sonkar</strong></p>
                <p>Email: <strong className="text-neon">hello@ajaysonkar.com</strong></p>
                <p>Website: <strong className="text-neon">www.ajaysonkar.com</strong></p>
                <p>Location: Dhamtari, Chhattisgarh, India</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-white/70 text-sm mb-2"><strong>Last Updated:</strong> September 15, 2026</p>
            <p className="text-white/60 text-xs">By engaging with Service Provider, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
