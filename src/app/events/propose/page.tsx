"use client"
import Breadcrumbs from "@/components/Breadcrumbs"
import { Button } from "@/components/ui/button"

export default function ProposeEventPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gray-50">
        <div className="pointer-events-none absolute -top-20 right-1/3 w-[28rem] h-[28rem] bg-red-500/5 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 w-[24rem] h-[24rem] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <Breadcrumbs />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Propose an Event</h1>
          <div className="h-1 w-28 bg-gradient-to-r from-red-600 via-blue-600 to-green-600 rounded-full my-4" />
          <p className="text-gray-600 max-w-3xl">Share your idea for a summit, cultural festival, workshop, or roadshow across Türkiye, Azerbaijan, and Pakistan.</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <form className="space-y-4" onSubmit={async (e) => {
              e.preventDefault()
              const form = e.currentTarget as HTMLFormElement
              const formData = new FormData(form)
              const payload = Object.fromEntries(formData.entries())
              const res = await fetch("/api/forms/propose-event", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              })
              if (res.ok) window.location.href = "/thank-you"
            }}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input id="name" name="name" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="you@example.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input id="phone" name="phone" type="tel" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="+90 5xx xxx xx xx" />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization (optional)</label>
                  <input id="organization" name="organization" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="Company / Institution" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                  <input id="title" name="title" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="e.g. TAPFF Innovation Summit" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <select id="country" name="country" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900">
                    <option>Türkiye</option>
                    <option>Azerbaijan</option>
                    <option>Pakistan</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input id="city" name="city" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="City" />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                  <select id="type" name="type" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900">
                    <option>Summit</option>
                    <option>Cultural</option>
                    <option>Workshop</option>
                    <option>Roadshow</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                <textarea id="summary" name="summary" rows={4} required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="Describe the event idea briefly" />
              </div>
              <div>
                <label htmlFor="proposedDate" className="block text-sm font-medium text-gray-700 mb-1">Proposed Date</label>
                <input id="proposedDate" name="proposedDate" type="date" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-gray-500">We’ll review and contact you shortly.</p>
                <Button className="bg-gray-900 hover:bg-black text-white">Submit Proposal</Button>
              </div>
            </form>
          </article>
        </div>
      </section>
    </main>
  )
}


