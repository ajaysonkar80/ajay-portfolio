export const metadata = {
  title: "Terms of Service | Ajay Sonkar",
  description: "Terms of Service for Ajay Sonkar portfolio",
};

export default function TermsPage() {
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
            TERMS OF SERVICE
          </h1>
          <div className="text-white/70 text-sm space-y-1">
            <p><strong>Ajay Sonkar - Independent Web & AI Automation Consultant</strong></p>
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
            <p className="text-white/90 mb-3"><strong className="text-neon">"Service Provider"</strong> refers to Ajay Sonkar operating as an independent web and AI automation consultant through www.ajaysonkar.com.</p>
            <p className="text-white/90 mb-3"><strong className="text-neon">"Client"</strong> refers to any individual, business entity, or organization that engages Service Provider for consulting, automation, development, or support services.</p>
            <p className="text-white/90 mb-3"><strong className="text-neon">"Services"</strong> include but are not limited to: business automation, workflow optimization, data integration, custom API development, full-stack web development, AI product engineering, internal tools and custom software development (web-based), retainer support, and related technical consulting.</p>
            <p className="text-white/90"><strong className="text-neon">"Work Product"</strong> refers to deliverables produced by Service Provider, including but not limited to: code, configurations, documentation, AI-generated outputs, architectural recommendations, and integrated third-party solutions.</p>
          </div>

          {/* 2. SERVICE SCOPE & BUSINESS ALIGNMENT */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">2.</span> SERVICE SCOPE & BUSINESS ALIGNMENT
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">2.1</span> Services Definition
            </h3>
            <p className="text-white/90 mb-3">Service Provider provides the following core services:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Business automation and workflow optimization</li>
              <li>Data integration and real-time analytics</li>
              <li>Custom API development (FastAPI, Node.js, etc.)</li>
              <li>Full-stack web development (Next.js, React, etc.)</li>
              <li>Internal tools and custom software development (web-based)</li>
              <li>AI product engineering and LLM integration</li>
              <li>Database design and optimization</li>
              <li>Retainer support and system maintenance</li>
              <li>Technical consulting and architectural strategy</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">2.2</span> Third-Party Costs (Domain, Hosting, APIs, Software)
            </h3>
            <p className="text-white/90 mb-3">When delivering services, Service Provider may integrate third-party APIs, cloud services, and AI models (e.g., OpenAI, Anthropic Claude, Deepseek, n8n, Supabase). <strong className="text-neon">Client is responsible for all associated costs, including but not limited to:</strong></p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Domain registration and renewal</li>
              <li>Hosting and infrastructure (VPS, cloud servers, CDN, etc.)</li>
              <li>Third-party API usage fees and token costs</li>
              <li>Software subscription costs and licensing fees</li>
              <li>AI model API fees (OpenAI, Anthropic, Deepseek, etc.)</li>
              <li>Email services, payment gateways, and other integrations</li>
            </ul>
            <p className="text-white/90 mb-3">These costs are separate from Service Provider's professional fees and will be billed to Client as incurred or invoiced separately.</p>
            <p className="text-white/90 mb-6">Service Provider will provide transparency on estimated third-party costs and seek Client approval before incurring significant expenses. Clients may opt to bring their own domain, hosting, API keys, or subscriptions.</p>

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
              <span className="text-amber-500">3.</span> ENGAGEMENT MODELS
            </h2>
            <p className="text-white/90 mb-6">Service Provider offers multiple engagement structures based on Client needs.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">3.1</span> PROJECT-BASED SERVICES
            </h3>
            <p className="text-white/90 mb-3">Project-based engagements deliver defined deliverables within fixed scope and timeline.</p>
            <p className="text-white/90 mb-3"><strong className="text-amber-500">Pricing Structure:</strong></p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Minimum project fee: ₹5,000 per project</li>
              <li>Pricing varies based on complexity, timeline, and integrations required</li>
              <li>All project fees are fixed-price (no hourly billing)</li>
            </ul>
            <p className="text-white/90 mb-3"><strong className="text-amber-500">Project Workflow:</strong></p>
            <ol className="text-white/90 list-decimal list-inside space-y-2 mb-6 pl-8">
              <li>Initial consultation and problem definition</li>
              <li>Scope documentation in SOW</li>
              <li>Agreed timeline and milestones</li>
              <li>Payment structure (50% upfront, 50% upon completion)</li>
              <li>Delivery and acceptance</li>
            </ol>
            <p className="text-white/90 mb-3"><strong className="text-amber-500">Payment Terms for Projects:</strong></p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>All projects: 50% upfront to confirm engagement and initiate work</li>
              <li>Remaining 50% due upon delivery and Client acceptance</li>
              <li>Invoices due Net 15 (within 15 days of issue)</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">3.2</span> RETAINER SERVICES
            </h3>
            <p className="text-white/90 mb-3">Retainer engagements provide ongoing support, optimization, and maintenance on a fixed monthly basis.</p>
            <p className="text-white/90 mb-3"><strong className="text-amber-500">Retainer Scope:</strong></p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Defined hours per month (10, 20, or 40 hours)</li>
              <li>Monitoring and maintenance of existing systems</li>
              <li>Performance optimization and bug fixes</li>
              <li>Strategic recommendations</li>
              <li>Emergency support (if specified in SOW)</li>
            </ul>
            <p className="text-white/90 mb-3"><strong className="text-amber-500">Change Request Process:</strong></p>
            <p className="text-white/90 mb-6">New features, architecture changes, or scope expansions are classified as "Change Requests" and quoted separately. Work will not begin on Change Requests until approved in writing.</p>
            <p className="text-white/90 mb-3"><strong className="text-amber-500">Retainer Terms:</strong></p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Minimum engagement: 3 months</li>
              <li>Billing cycle: Monthly, due by the 5th of each month</li>
              <li>Unused hours do not roll over</li>
              <li>Either party may terminate with 30 days notice after minimum period</li>
              <li>Pricing adjustable with 60 days notice after 6 months</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">3.3</span> RETAINER SUPPORT AVAILABILITY
            </h3>
            <p className="text-white/90">Service Provider provides support during business hours (Mon-Fri, 9 AM - 6 PM IST). Response times are best-effort; critical production issues receive priority attention.</p>
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
              <li>Invoices are issued upon service delivery or as specified in SOW</li>
              <li>Payment is due <strong className="text-neon">Net 15</strong> (within 15 days of invoice date)</li>
              <li>All fees are exclusive of applicable taxes</li>
              <li>GST or other applicable taxes will be added per current Indian tax law (if applicable based on annual turnover)</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">6.2</span> Payment Methods
            </h3>
            <p className="text-white/90 mb-3">Service Provider accepts:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Bank transfer (NEFT/RTGS)</li>
              <li>UPI payments</li>
              <li>Digital payment gateways</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">6.3</span> Late Payment
            </h3>
            <p className="text-white/90 mb-3">If payment is not received within 30 days of invoice date:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Service Provider will suspend ongoing retainer services</li>
              <li>Service Provider may terminate the engagement without further notice</li>
              <li>Client remains liable for all accrued fees, late charges (1.5% per month), and collection costs</li>
            </ul>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">6.4</span> Taxes
            </h3>
            <p className="text-white/90">Service Provider's annual turnover from freelance services may fall below the ₹20 Lakh GST registration threshold. <strong className="text-neon">All fees exclude applicable taxes, which will be added if required by Indian tax law.</strong> Clients will be advised if tax registration becomes applicable.</p>
          </div>

          {/* 7. INTELLECTUAL PROPERTY & AI OUTPUTS */}
          <div>
            <h2 className="font-heading font-bold text-amber-500 text-2xl mb-6 flex items-center gap-2">
              <span className="text-amber-500">7.</span> INTELLECTUAL PROPERTY & AI OUTPUTS
            </h2>
            
            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">7.1</span> AI-Generated Content Disclaimer
            </h3>
            <div className="bg-gradient-to-br from-amber-500/30 to-transparent border border-amber-500/60 p-6 rounded-lg mb-6">
              <p className="text-white/90 mb-3"><strong className="text-neon">This is critical:</strong> Work Product may incorporate AI-generated outputs from third-party language models (OpenAI GPT, Anthropic Claude, Deepseek, Gemini, Mercury, etc.). Service Provider makes <strong className="text-neon">no warranty</strong> regarding:</p>
              <ul className="text-white/90 list-disc list-inside space-y-2 pl-8">
                <li>Accuracy or correctness of AI-generated code or content</li>
                <li>Hallucinations, confabulations, or false information produced by AI models</li>
                <li>Unexpected behavior or edge cases in AI-integrated systems</li>
                <li>Bias or harmful outputs from integrated AI models</li>
                <li>Compliance with regulations or ethical standards in AI recommendations</li>
              </ul>
            </div>
            <p className="text-white/90 mb-3"><strong className="text-neon">Client Responsibility:</strong> Client is responsible for:</p>
            <ul className="text-white/90 list-disc list-inside space-y-2 mb-6 pl-8">
              <li>Testing all AI-integrated systems thoroughly</li>
              <li>Verifying accuracy of AI outputs before production use</li>
              <li>Implementing safeguards and human review processes</li>
              <li>Compliance with regulations regarding AI usage (e.g., GDPR, sector-specific AI regulations)</li>
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
              <span className="text-amber-500">10.1</span> Termination of Retainer Engagements
            </h3>
            <p className="text-white/90 mb-6">Either party may terminate a retainer with <strong className="text-neon">30 days written notice</strong> after the minimum engagement period.</p>

            <h3 className="text-neon font-bold text-lg mb-4 pl-4 border-l-2 border-amber-500">
              <span className="text-amber-500">10.2</span> Termination of Project Engagements
            </h3>
            <p className="text-white/90 mb-6">Project-based engagements may be terminated only upon mutual written agreement.</p>

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
