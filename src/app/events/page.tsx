"use client"
import Breadcrumbs from "@/components/Breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { slugify } from "./utils"
import EventInterest from "@/components/EventInterest"
import SubscribeInline from "@/components/SubscribeInline"

export default function EventsPage() {
  const events = [
    {
      title: "TAPFF Business & Investment Summit",
      date: "Oct 12, 2025",
      location: "Istanbul, Türkiye",
      summary: "Leaders and investors meet to discuss trilateral trade, venture collaboration and market access.",
      theme: { badge: "bg-red-100 text-red-700", border: "border-red-200/60" },
    },
    {
      title: "Culture & Languages Festival",
      date: "Nov 02, 2025",
      location: "Baku, Azerbaijan",
      summary: "A celebration of Urdu, Azerbaijani and Turkish with performances, food and exhibitions.",
      theme: { badge: "bg-blue-100 text-blue-700", border: "border-blue-200/60" },
    },
    {
      title: "Youth Skills & Scholarships Fair",
      date: "Nov 18, 2025",
      location: "Lahore, Pakistan",
      summary: "Universities and partners present scholarships, exchange programs and career pathways.",
      theme: { badge: "bg-emerald-100 text-emerald-700", border: "border-emerald-200/60" },
    },
    {
      title: "Startup & E‑commerce Roadshow",
      date: "Dec 05, 2025",
      location: "Ankara, Türkiye",
      summary: "Founders showcase products; mentors and VCs share insights for scaling across TAP.",
      theme: { badge: "bg-amber-100 text-amber-700", border: "border-amber-200/60" },
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="pointer-events-none absolute -top-20 right-1/3 w-[28rem] h-[28rem] bg-red-500/5 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 w-[24rem] h-[24rem] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <Breadcrumbs />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Upcoming Events</h1>
          <div className="h-1 w-28 bg-gradient-to-r from-red-600 via-blue-600 to-green-600 rounded-full my-4" />
          <p className="text-gray-600 max-w-3xl">Explore summits, cultural gatherings, workshops and community drives across Türkiye, Azerbaijan and Pakistan.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 items-start">
            {/* Main list */}
            <div className="md:col-span-2 space-y-6">
              {events.map((ev, idx) => (
                <Card key={idx} className={`bg-white ${ev.theme.border} rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden`}>
                  {/* Accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-red-600 via-blue-600 to-green-600" />
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${ev.theme.badge} mb-2`}>
                          <Calendar className="w-3.5 h-3.5 mr-1.5" /> {ev.date}
                        </div>
                        <CardTitle className="text-xl leading-snug">{ev.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 mt-2">{ev.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-2" /> {ev.location}
                    </div>
                    <div className="flex items-center text-gray-500 text-xs mb-6">
                      <Clock className="w-4 h-4 mr-2" /> More details soon
                    </div>
                    <div className="flex items-center justify-between">
                      <a href={`/events/${slugify(ev.title)}`}>
                        <Button variant="ghost" className="group px-0 h-auto text-gray-700 hover:bg-transparent">
                          <span className="font-medium">Details</span>
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                      </a>
                      <EventInterest eventTitle={ev.title} eventSlug={slugify(ev.title)} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Host or Sponsor an Event</CardTitle>
                  <CardDescription className="text-white/80">Partner with TAPFF on summits, cultural festivals and roadshows.</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-3">
                  <a href="/events/propose"><Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">Propose an Event</Button></a>
                  <a href="/#contact"><Button className="bg-white/10 hover:bg-white/20 text-white">Contact Us</Button></a>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Stay Updated</CardTitle>
                  <CardDescription>Get notified about upcoming events across Türkiye, Azerbaijan and Pakistan.</CardDescription>
                </CardHeader>
                <CardContent>
                  <SubscribeInline />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


