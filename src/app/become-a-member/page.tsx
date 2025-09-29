"use client"
import Breadcrumbs from "@/components/Breadcrumbs"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function BecomeMemberPage() {
  const [selected, setSelected] = useState<"individual" | "corporate" | "institutional">("individual")
  const [submitted, setSubmitted] = useState(false)
  // Initialize from URL on mount to avoid Next.js sync dynamic APIs warning
  useEffect(() => {
    try {
      const urlType = new URLSearchParams(window.location.search).get("type")?.toLowerCase()
      if (urlType && ["individual", "corporate", "institutional"].includes(urlType)) {
        setSelected(urlType as any)
      }
    } catch {}
  }, [])
  // Optional: keep URL in sync without reload
  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set("type", selected)
    window.history.replaceState({}, "", url)
  }, [selected])
  const benefits: Record<string, string[]> = {
    individual: [
      "Access to events and webinars",
      "Priority for exchanges and scholarships",
      "Community newsletter",
    ],
    corporate: [
      "Business matchmaking and delegations",
      "Co-branding and showcase opportunities",
      "Policy and market briefings",
    ],
    institutional: [
      "MoUs and program partnerships",
      "Joint research and capacity building",
      "Cross-border youth initiatives",
    ],
  }
  const current = benefits[selected] || benefits.individual
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="pointer-events-none absolute -top-20 right-1/3 w-[28rem] h-[28rem] bg-red-500/5 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 w-[24rem] h-[24rem] bg-green-500/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <Breadcrumbs />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Become a Member</h1>
          <div className="h-1 w-28 bg-gradient-to-r from-red-600 via-blue-600 to-green-600 rounded-full my-4" />
          <p className="text-gray-600 max-w-3xl">
            Join the Türkiye–Azerbaijan–Pakistan Friendship Forum (TAPFF) and help strengthen
            people-to-people linkages across our three nations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Info card */}
            <article className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Why Join TAPFF?</h2>
              <p className="text-gray-600 mb-4">Be part of a trilateral community driving cooperation across trade, culture and technology.</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                {current.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-4">
                <h3 className="font-medium text-gray-900 mb-1">Membership Types</h3>
                <p className="text-sm text-gray-600">Individual, Corporate and Institutional options are available.
                Select what best fits you when applying.</p>
              </div>
            </article>

            {/* Form card */}
            <article className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">Membership Application</h2>
                <p className="text-sm text-gray-600 mb-4">We typically respond within 2–3 business days.</p>
                {submitted ? (
                  <div className="rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm p-4">
                    Thank you! Your membership request has been received. Our team will contact you shortly.
                  </div>
                ) : (
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="firstName" name="firstName" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="Abdul" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="lastName" name="lastName" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="Rehman" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input id="email" name="email" type="email" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input id="phone" name="phone" type="tel" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="+90 5xx xxx xx xx" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                      <input id="country" name="country" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="Pakistan / Türkiye / Azerbaijan / Other" />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                      <input id="organization" name="organization" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="Company / Institution (optional)" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Membership Type</label>
                    <select id="type" name="type" value={selected} onChange={(e) => setSelected(e.target.value as any)} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900">
                      <option value="individual">Individual</option>
                      <option value="corporate">Corporate</option>
                      <option value="institutional">Institutional</option>
                    </select>
                  </div>

                  {/* Minimal type-specific fields */}
                  {selected === "corporate" && (
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                      <select id="companySize" name="companySize" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900">
                        <option value="1-10">1–10</option>
                        <option value="11-50">11–50</option>
                        <option value="51-200">51–200</option>
                        <option value="200+">200+</option>
                      </select>
                    </div>
                  )}

                  {selected === "institutional" && (
                    <div>
                      <label htmlFor="institutionType" className="block text-sm font-medium text-gray-700 mb-1">Institution Type</label>
                      <select id="institutionType" name="institutionType" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900">
                        <option value="university">University</option>
                        <option value="chamber">Chamber / Association</option>
                        <option value="public">Public Sector</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}

                  {selected === "individual" && (
                    <div>
                      <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                      <input id="occupation" name="occupation" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="Student / Professional / Volunteer" />
                    </div>
                  )}

                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest</label>
                    <select id="interests" name="interests" defaultValue="" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900">
                      <option value="" disabled>Select an option</option>
                      <option value="cultural">Cultural Exchange</option>
                      <option value="education">Education & Scholarships</option>
                      <option value="trade">Trade & Investment</option>
                      <option value="tech">Technology & Startups</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" name="message" rows={5} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="Tell us briefly why you want to join" />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-gray-500">By submitting, you agree to be contacted by TAPFF.</p>
                    <Button className="bg-gray-900 hover:bg-black text-white">Submit Application</Button>
                  </div>
                </form>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold">Have questions about membership?</h3>
              <p className="text-white/70">We’re happy to help you choose the right option.</p>
            </div>
            <div className="flex gap-3 flex-col sm:flex-row w-full md:w-auto">
              <a href="/#membership" className="w-full sm:w-auto"><Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 w-full sm:w-auto">See Plans</Button></a>
              <a href="/#contact" className="w-full sm:w-auto"><Button className="bg-white/10 hover:bg-white/20 text-white w-full sm:w-auto">Contact Us</Button></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


