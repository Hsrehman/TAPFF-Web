import Breadcrumbs from "@/components/Breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import EventInterest from "@/components/EventInterest"
import { use } from "react"

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

const events = [
  {
    title: "TAPFF Business & Investment Summit",
    date: "Oct 12, 2025",
    location: "Istanbul, Türkiye",
    summary: "Leaders and investors meet to discuss trilateral trade, venture collaboration and market access.",
    details:
      "A full‑day summit featuring keynotes, panels and B2B matchmaking across Türkiye, Azerbaijan and Pakistan.",
  },
  {
    title: "Culture & Languages Festival",
    date: "Nov 02, 2025",
    location: "Baku, Azerbaijan",
    summary: "A celebration of Urdu, Azerbaijani and Turkish with performances, food and exhibitions.",
    details:
      "Cultural showcases, language corners, food stalls and performances by artists from the three nations.",
  },
  {
    title: "Youth Skills & Scholarships Fair",
    date: "Nov 18, 2025",
    location: "Lahore, Pakistan",
    summary: "Universities and partners present scholarships, exchange programs and career pathways.",
    details:
      "Meet universities, explore scholarships and discover skills programs and exchange opportunities.",
  },
  {
    title: "Startup & E‑commerce Roadshow",
    date: "Dec 05, 2025",
    location: "Ankara, Türkiye",
    summary: "Founders showcase products; mentors and VCs share insights for scaling across TAP.",
    details:
      "Roadshow stops with founder pitches, mentorship clinics and sessions on cross‑border e‑commerce.",
  },
].map((e) => ({ ...e, slug: slugify(e.title) }))

export default function EventDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const event = events.find((e) => e.slug === slug)
  const notFound = !event
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gray-50">
        <div className="pointer-events-none absolute -top-20 right-1/3 w-[28rem] h-[28rem] bg-red-500/5 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 w-[24rem] h-[24rem] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <Breadcrumbs />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{notFound ? "Event not found" : event.title}</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 via-blue-600 to-green-600 rounded-full my-4" />
          {!notFound && (
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="inline-flex items-center"><Calendar className="w-4 h-4 mr-2" /> {event.date}</div>
              <div className="inline-flex items-center"><MapPin className="w-4 h-4 mr-2" /> {event.location}</div>
              <div className="inline-flex items-center"><Clock className="w-4 h-4 mr-2" /> Agenda coming soon</div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {notFound ? (
            <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>We couldn't find that event</CardTitle>
                <CardDescription>Check back later or browse the list of upcoming events.</CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <Card className="md:col-span-2 rounded-2xl border border-gray-200 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>{event.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>{event.details}</p>
                  <p>Registration details and full agenda will be published soon.</p>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Event Info</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-700 space-y-2">
                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {event.date}</div>
                    <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {event.location}</div>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Participate</CardTitle>
                    <CardDescription>Express interest, attend, or volunteer.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EventInterest eventTitle={event.title} eventSlug={event.slug} />
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Interested in partnering?</CardTitle>
                    <CardDescription className="text-white/80">Co-brand or host a session with TAPFF.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-3">
                    <a href="/events"><button className="px-4 py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100">Back to Events</button></a>
                    <a href="/#contact"><button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white">Contact Us</button></a>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }))
}


