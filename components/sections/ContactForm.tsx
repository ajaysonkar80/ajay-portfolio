"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type Tier = "starter" | "core" | "growth" | "custom";

interface FormData {
  name:           string;
  phone:          string;
  email:          string;
  country:        string;
  state:          string;
  city:           string;
  serviceTier:    Tier;
  serviceType:    string;
  projectOutline: string;
}

const tiers: { id: Tier; price: string; label: string }[] = [
  { id: "starter", price: "₹3k",  label: "Starter" },
  { id: "core",    price: "₹7k",  label: "Core"    },
  { id: "growth",  price: "₹15k", label: "Growth"  },
  { id: "custom",  price: "Custom", label: "Custom" },
];

const serviceTypes = [
  "Website Development",
  "AI Automation",
  "Lead Acquisition System",
  "Technical Consultation",
  "Website Maintenance",
  "Custom / Not sure yet",
];

const indianStates = [
  "Chhattisgarh","Maharashtra","Delhi","Karnataka",
  "Madhya Pradesh","Gujarat","Rajasthan","Tamil Nadu",
  "Telangana","Uttar Pradesh","West Bengal","Other",
];

const cgCities = [
  "Raipur","Bilaspur","Durg","Bhilai","Korba",
  "Rajnandgaon","Jagdalpur","Ambikapur","Other",
];

const countries = [
  { code: "IN",    label: "🇮🇳 India"      },
  { code: "US",    label: "🇺🇸 USA"        },
  { code: "GB",    label: "🇬🇧 UK"         },
  { code: "AE",    label: "🇦🇪 UAE"        },
  { code: "SG",    label: "🇸🇬 Singapore"  },
  { code: "AU",    label: "🇦🇺 Australia"  },
  { code: "CA",    label: "🇨🇦 Canada"     },
  { code: "other", label: "Other"          },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "",
    country: "IN", state: "Chhattisgarh", city: "Raipur",
    serviceTier: "core", serviceType: "", projectOutline: "",
  });
  const [status,  setStatus]  = useState<"idle"|"loading"|"success"|"error">("idle");
  const [message, setMessage] = useState("");
  const [errors,  setErrors]  = useState<Record<string, string[]>>({});

  function setField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: [] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ ...form, budgetRange: form.serviceTier }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (res.status === 422 && data.errors) setErrors(data.errors);
        setStatus("error");
        setMessage(data.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Thanks! I'll get back to you within 24 hours.");
      setForm({
        name: "", phone: "", email: "",
        country: "IN", state: "Chhattisgarh", city: "Raipur",
        serviceTier: "core", serviceType: "", projectOutline: "",
      });
    } catch {
      setStatus("error");
      setMessage("Network error. Please try WhatsApp or email instead.");
    }
  }

  const labelClass = "block text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-2";
  const errClass   = "text-red-400 text-xs mt-1";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge-blue mb-4">Ready to Start?</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="text-neon">Work Together</span>
          </h2>
          <p className="text-[#64748b] text-base max-w-md mx-auto">
            Tell me your project — I&apos;ll reply within 24 hours with a clear plan.
          </p>
        </div>

        <Card className="glass border-0 bg-transparent">
          <CardContent className="p-8">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-[#64748b] mb-6">{message}</p>
                <Button
                  variant="outline"
                  onClick={() => setStatus("idle")}
                  className="btn-outline h-auto text-sm px-6 py-2.5"
                  style={{ background: "transparent", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.4)" }}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Your Name *</label>
                    <input
                      className="input-neon"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                      required
                    />
                    {errors.name && <p className={errClass}>{errors.name[0]}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input
                      className="input-neon"
                      placeholder="+91 XXXXXXXXXX"
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    className="input-neon"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    required
                  />
                  {errors.email && <p className={errClass}>{errors.email[0]}</p>}
                </div>
                {/* Service Tier */}
                <div>
                  <label className={labelClass}>Preferred Plan</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {tiers.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setField("serviceTier", t.id)}
                        className="py-3 px-2 rounded-lg text-center transition-all duration-200"
                        style={{
                          border:     form.serviceTier === t.id ? "2px solid #00D4FF" : "1px solid rgba(255,255,255,0.1)",
                          background: form.serviceTier === t.id ? "rgba(0,212,255,0.08)" : "transparent",
                        }}
                      >
                        <div className="text-neon text-sm font-bold">{t.price}</div>
                        <div className="text-[#64748b] text-xs mt-0.5">{t.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project outline */}
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    className="input-neon"
                    placeholder="Describe your business, what you want to achieve, and any specific requirements..."
                    rows={4}
                    style={{ resize: "none" }}
                    value={form.projectOutline}
                    onChange={(e) => setField("projectOutline", e.target.value)}
                    
                  />
                  {errors.projectOutline && <p className={errClass}>{errors.projectOutline[0]}</p>}
                </div>

                {/* Error */}
                {status === "error" && (
                  <div
                    className="p-4 rounded-lg text-sm text-red-400"
                    style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
                  >
                    {message}
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-amber w-full h-auto py-4 text-base font-semibold"
                  style={{
                    background: "#F59E0B",
                    color:      "#080c14",
                    border:     "none",
                    opacity:    status === "loading" ? 0.7 : 1,
                    cursor:     status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? "Sending..." : "Send Inquiry →"}
                </Button>

                {/* Alt contacts */}
                <div className="text-center text-sm text-[#64748b] pt-1">
                  Prefer to talk directly?&nbsp;
                  <Button asChild variant="link" className="h-auto p-0 text-sm font-semibold" style={{ color: "#00D4FF" }}>
                    <Link href="https://wa.me/918319928445" target="_blank" rel="noreferrer">WhatsApp</Link>
                  </Button>
                  &nbsp;·&nbsp;
                  <Button asChild variant="link" className="h-auto p-0 text-sm font-semibold" style={{ color: "#F59E0B" }}>
                    <Link href="#contact">Book a Free Call</Link>
                  </Button>
                  &nbsp;·&nbsp;
                  <Button asChild variant="link" className="h-auto p-0 text-sm font-semibold" style={{ color: "#00D4FF" }}>
                    <Link href="mailto:hello@ajaysonkar.com">Email</Link>
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}