"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

type Props = {
  eventTitle: string
  eventSlug?: string
  triggerClassName?: string
}

export default function EventInterest({ eventTitle, eventSlug, triggerClassName }: Props) {
  const [open, setOpen] = useState(false)
  const [intent, setIntent] = useState<"interested" | "attend" | "volunteer">("interested")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return
    // Focus the first input for accessibility when opening
    const t = setTimeout(() => {
      document.getElementById("rsvp_name")?.focus()
    }, 50)
    return () => clearTimeout(t)
  }, [open])

  return (
    <>
      <div className={triggerClassName}>
        <div className="flex gap-2">
          <Button variant="outline" className="border-gray-300" onClick={() => { setIntent("interested"); setOpen(true) }}>Interested</Button>
          <Button className="bg-red-600 hover:bg-red-700" onClick={() => { setIntent("attend"); setOpen(true) }}>Attend</Button>
          <Button variant="ghost" onClick={() => { setIntent("volunteer"); setOpen(true) }}>Volunteer</Button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{intent === "interested" ? "I'm Interested" : intent === "attend" ? "I Want to Attend" : "I Want to Volunteer"}</h3>
              <p className="text-sm text-gray-600">{eventTitle}</p>
            </div>
            {submitted ? (
              <div className="p-6 space-y-3">
                <div className="rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm p-3">
                  Thank you! We’ll contact you regarding this event.
                </div>
                <div className="flex justify-end">
                  <Button onClick={() => setOpen(false)} className="bg-gray-900 hover:bg-black text-white">Close</Button>
                </div>
              </div>
            ) : (
            <form className="p-6 space-y-3" onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}>
              <div>
                <label htmlFor="rsvp_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input id="rsvp_name" name="name" required className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="rsvp_email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input id="rsvp_email" name="email" type="email" required className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="rsvp_phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input id="rsvp_phone" name="phone" type="tel" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900" placeholder="+90 5xx xxx xx xx" />
              </div>
              <div>
                <label htmlFor="rsvp_message" className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
                <textarea id="rsvp_message" name="message" rows={3} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900" placeholder="Any preference or question?" />
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <Button variant="ghost" type="button" onClick={() => setOpen(false)}>Cancel</Button>
                <Button type="submit" className="bg-gray-900 hover:bg-black text-white">Submit</Button>
              </div>
            </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}


