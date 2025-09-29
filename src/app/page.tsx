"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Twitter, Instagram, Calendar, DollarSign, Target, Building, Lightbulb, MapPin, Clock, Menu, X, ArrowRight } from "lucide-react"
import EventInterest from "@/components/EventInterest"
import Image from "next/image"
import { useState } from "react"
// Strategic Partner Logos will be served from /public/images/partners

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Static upcoming events (to be replaced with scraped/live data later)
  const events = [
    {
      title: "TAPFF Business & Investment Summit",
      date: "Oct 12, 2025",
      location: "Istanbul, Türkiye",
      summary: "Leaders and investors meet to discuss trilateral trade, venture collaboration and market access.",
      theme: { badge: "bg-red-100 text-red-700", iconWrap: "bg-red-100 text-red-600", border: "border-red-200/60" },
    },
    {
      title: "Culture & Languages Festival",
      date: "Nov 02, 2025",
      location: "Baku, Azerbaijan",
      summary: "A celebration of Urdu, Azerbaijani and Turkish with performances, food and exhibitions.",
      theme: { badge: "bg-blue-100 text-blue-700", iconWrap: "bg-blue-100 text-blue-600", border: "border-blue-200/60" },
    },
    {
      title: "Youth Skills & Scholarships Fair",
      date: "Nov 18, 2025",
      location: "Lahore, Pakistan",
      summary: "Universities and partners present scholarships, exchange programs and career pathways.",
      theme: { badge: "bg-emerald-100 text-emerald-700", iconWrap: "bg-emerald-100 text-emerald-600", border: "border-emerald-200/60" },
    },
    {
      title: "Startup & E‑commerce Roadshow",
      date: "Dec 05, 2025",
      location: "Ankara, Türkiye",
      summary: "Founders showcase products; mentors and VCs share insights for scaling across TAP.",
      theme: { badge: "bg-amber-100 text-amber-700", iconWrap: "bg-amber-100 text-amber-600", border: "border-amber-200/60" },
    },
    {
      title: "Volunteer & Community Drive",
      date: "Dec 20, 2025",
      location: "Karachi, Pakistan",
      summary: "Cross‑border volunteer teams coordinate donation and outreach activities.",
      theme: { badge: "bg-indigo-100 text-indigo-700", iconWrap: "bg-indigo-100 text-indigo-600", border: "border-indigo-200/60" },
    },
    {
      title: "Traditional Sports Friendship Cup",
      date: "Jan 10, 2026",
      location: "Ganja, Azerbaijan",
      summary: "Regional tournament promoting heritage sports and people‑to‑people connections.",
      theme: { badge: "bg-fuchsia-100 text-fuchsia-700", iconWrap: "bg-fuchsia-100 text-fuchsia-600", border: "border-fuchsia-200/60" },
    },
  ]
  // Only show two events for now
  const visibleEvents = events.slice(0, 2)
  const strategicLogos = [
    { src: "/images/partners/azpromo.png", alt: "AZPROMO" },
    { src: "/images/partners/azerbaijan-investment-holding.png", alt: "Azerbaijan Investment Holding" },
    { src: "/images/partners/dipl.jpg", alt: "DIPL" },
    { src: "/images/partners/hifi-holiday-club.jpeg", alt: "Hifi Holiday Club" },
    { src: "/images/partners/invest-in-turkiye.png", alt: "Invest in Türkiye" },
    { src: "/images/partners/ipds.webp", alt: "IPDS" },
    { src: "/images/partners/the-diplomatic-insight.png", alt: "The Diplomatic Insight" },
    { src: "/images/partners/belt-and-road.png", alt: "Belt and Road" },
    { src: "/images/partners/turkesms.jpg", alt: "Türk SMS" },
    { src: "/images/partners/pakazcham.png", alt: "PakAZCham" },
  ]
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-800/20 via-transparent to-green-800/20"></div>
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-red-600 via-transparent to-green-600"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Logo above the main title */}
            <div className="flex justify-center mb-6">
              <Image
                src="/hero-logo.png"
                alt="TAPFF Logo"
                width={180}
                height={180}
                priority
                className="h-auto w-30 md:w-44 lg:w-38 drop-shadow-xl"
              />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-green-400"></span>
              <span className="block mb-3 text-[3.75rem]">Türkiye–Azerbaijan–Pakistan</span>
              <span className="block mb-8 text-[3.25rem]">Friendship Forum (TAPFF)</span>
              <span className="block text-red-400 text-lg lg:text-xl font-light mt-6">Let us work together — For Peace, Progress, and Brotherhood</span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <a href="#membership">
                <Button className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/60">
                  Become a Member
                </Button>
              </a>
              <a href="/events">
                <Button variant="outline" className="!bg-transparent border-white text-white hover:bg-white/20 hover:text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/60">
                  Upcoming Events
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Flag Elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-20 bg-gradient-to-r from-red-600 to-white opacity-30 rounded-r-lg"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-20 bg-gradient-to-l from-green-600 to-white opacity-30 rounded-l-lg"></div>
      </section>

      {/* About TAPFF */}
      <section id="about" className="relative py-20 bg-white overflow-hidden scroll-mt-24">
        {/* subtle background accents */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800">About TAPFF</h2>
          <div className="mx-auto h-1 w-28 bg-gradient-to-r from-red-600 via-green-600 to-blue-600 rounded-full mb-8"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">The Türkiye–Azerbaijan–Pakistan Friendship Forum (TAPFF) is a non‑governmental, non‑profit platform that connects people,
            institutions and businesses across the three nations. We promote cooperation in trade and investment, culture and youth,
            technology and education—building a community of trust, opportunity, and shared prosperity.</p>
          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Mission</h3>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 via-green-600 to-blue-600 rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                The Türkiye–Azerbaijan–Pakistan Friendship Forum (TAPFF) is a non‑governmental, non‑profit platform that connects people,
                institutions and businesses across the three nations. We promote cooperation in trade and investment, culture and youth,
                technology and education—building a community of trust, opportunity, and shared prosperity.
              </p>
            </div>
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center shadow-sm bg-red-50/60 border border-red-200/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-extrabold text-gray-900">3</CardTitle>
                </CardHeader>
                <CardContent className="text-xs uppercase tracking-wide text-gray-600">Countries</CardContent>
              </Card>
              <Card className="text-center shadow-sm bg-green-50/60 border border-green-200/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-extrabold text-gray-900">50+</CardTitle>
                </CardHeader>
                <CardContent className="text-xs uppercase tracking-wide text-gray-600">Focus Areas</CardContent>
              </Card>
              <Card className="text-center shadow-sm bg-blue-50/60 border border-blue-200/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-extrabold text-gray-900">1M+</CardTitle>
                </CardHeader>
                <CardContent className="text-xs uppercase tracking-wide text-gray-600">Youth & Community</CardContent>
              </Card>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                  <Building className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Trilateral Economic Cooperation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Forums, delegations and a trilateral investment platform to connect businesses and institutions across TAP.
              </CardContent>
            </Card>

            <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Culture, Youth & Languages</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Building people-to-people links: youth programs, cultural exchanges, and promotion of Urdu, Azerbaijani and Turkish.
              </CardContent>
            </Card>

            <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Technology & Education</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Enabling IT collaboration, scholarships, skills, and startup support including e‑commerce and freelancing ecosystems.
              </CardContent>
            </Card>
          </div>

          {/* Highlights list */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-md bg-red-600/10 text-red-700 flex items-center justify-center mr-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Summits, Workshops & Delegations</h4>
                  <p className="text-gray-600 text-sm">Regular convenings to build networks, share policy insights and unlock opportunities.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-md bg-green-600/10 text-green-700 flex items-center justify-center mr-3">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Investment & Trade Enablement</h4>
                  <p className="text-gray-600 text-sm">Linking chambers, investors and SMEs with practical market access support.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-md bg-blue-600/10 text-blue-700 flex items-center justify-center mr-3">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Skills, Scholarships & Exchanges</h4>
                  <p className="text-gray-600 text-sm">Academic and technical programs that strengthen people‑to‑people links.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-md bg-gray-600/10 text-gray-700 flex items-center justify-center mr-3">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Culture & Heritage Promotion</h4>
                  <p className="text-gray-600 text-sm">Joint celebrations, language initiatives and cultural routes across TAP.</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* TAPFF Focus Areas */}
      <section id="focus" className="relative py-24 bg-gray-50 overflow-hidden scroll-mt-24">
        {/* subtle background accents */}
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-gradient-to-b from-gray-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800">Areas of Focus</h2>
          <div className="mx-auto h-1 w-28 bg-gradient-to-r from-orange-500 via-blue-500 to-green-600 rounded-full mb-8"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">TAPFF advances collaboration across business, culture and technology to build long‑term partnerships among Türkiye, Azerbaijan and Pakistan.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-orange-50 border border-orange-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 hover:ring-1 hover:ring-orange-300/70 transition-all rounded-xl">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                  <Building className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl">Trade, Investment & Business</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  Strengthening trilateral economic ties across trade, investment, industrialization and joint ventures in TAP countries.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border border-blue-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 hover:ring-1 hover:ring-blue-300/70 transition-all rounded-xl">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl">Culture, Youth & Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  Building people-to-people links: youth programs, cultural exchanges, and promotion of Urdu, Azerbaijani and Turkish.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border border-green-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 hover:ring-1 hover:ring-green-300/70 transition-all rounded-xl">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl">Technology & Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  Enabling IT collaboration, scholarships, skills, and startup support including e‑commerce and freelancing ecosystems.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section id="initiatives" className="relative py-24 bg-white overflow-hidden scroll-mt-24">
        {/* subtle background accents */}
        <div className="pointer-events-none absolute -top-28 -right-32 w-[34rem] h-[34rem] bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800">Key Initiatives</h2>
          <div className="mx-auto h-1 w-28 bg-gradient-to-r from-red-500 via-green-600 to-purple-600 rounded-full mb-8"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Driving regional cooperation with scalable programs that connect institutions, founders and communities across TAP.</p>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-red-50 border border-red-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 hover:ring-1 hover:ring-red-300/70 transition-all rounded-xl text-left">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-3 mx-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Summits & Delegations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 mb-6">
                  Business summits, seminars and trade missions connecting Türkiye, Azerbaijan and Pakistan.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border border-green-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 hover:ring-1 hover:ring-green-300/70 transition-all rounded-xl text-left">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3 mx-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Startup & E‑commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 mb-6">
                  Support for founders and SMEs with access to markets, mentors and investment platforms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border border-blue-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 hover:ring-1 hover:ring-blue-300/70 transition-all rounded-xl text-left">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3 mx-0">
                  <Target className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Trilateral Investment Forum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 mb-6">
                  Connecting investors and businesses via forums, summits and collaboration platforms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border border-purple-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 hover:ring-1 hover:ring-purple-300/70 transition-all rounded-xl text-left">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3 mx-0">
                  <Building className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Language & Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 mb-6">
                  Promoting Urdu, Azerbaijani and Turkish with cultural exchanges and celebrations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="relative py-24 bg-gray-50 overflow-hidden scroll-mt-24">
        <div className="pointer-events-none absolute -top-24 right-1/4 w-[28rem] h-[28rem] bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800">Upcoming Events</h2>
          <div className="mx-auto h-1 w-28 bg-gradient-to-r from-red-600 via-blue-600 to-green-600 rounded-full mb-8"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Explore upcoming summits, cultural gatherings, workshops and community drives across Türkiye, Azerbaijan and Pakistan.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleEvents.map((ev, idx) => (
              <Card
                key={idx}
                className={`bg-white ${ev.theme.border} rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all h-full overflow-hidden flex flex-col min-h-[320px]`}
              >
                <CardHeader>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${ev.theme.badge} mb-3`}>
                    <Calendar className="w-3.5 h-3.5 mr-1.5" /> {ev.date}
                  </div>
                  <CardTitle className="text-lg leading-snug">{ev.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full pb-6">
                  <div className="text-gray-600 mb-4">{ev.summary}</div>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-2" /> {ev.location}
                  </div>
                  <div className="flex items-center text-gray-500 text-xs mb-6">
                    <Clock className="w-4 h-4 mr-2" /> More details soon
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <a href={`/events/${ev.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`}>
                        <Button variant="ghost" className="group justify-between px-0 h-auto text-gray-700 hover:bg-transparent">
                          <span className="font-medium">Details</span>
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                      </a>
                      <EventInterest eventTitle={ev.title} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {/* CTA to events page (subtle inline) */}
            <div className="md:col-span-2 flex items-center justify-center py-2">
              <a href="/events">
                <Button variant="outline" className="border-gray-300">View all events</Button>
              </a>
            </div>
          </div>

          <div className="mt-10">
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold">Partner on a TAPFF Event</h3>
                <p className="text-white/70">Host, co-brand or sponsor an upcoming event across Türkiye, Azerbaijan or Pakistan.</p>
              </div>
              <div className="flex gap-3 flex-col sm:flex-row w-full md:w-auto">
                <a href="/events/propose" className="w-full sm:w-auto">
                  <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 w-full sm:w-auto">Propose an Event</Button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <Button className="bg-white/10 hover:bg-white/20 text-white w-full sm:w-auto">Contact Us</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Partners */}
      <section id="partners" className="relative py-20 bg-gray-50 overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">Partners</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-green-600 via-blue-600 to-red-600 rounded-full mb-10"></div>

          {/* Category 1: Strategic Partners (larger logos) */}
          <div className="mb-10 group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Strategic Partners</h3>
            </div>
            <div className="relative overflow-hidden">
              <div className="partners-track animate-partners-scroll">
                <div className="partners-row">
                  {strategicLogos.map((logo, i) => (
                    <div key={`sp-a-${i}`} className="w-48 h-28 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center p-3">
                      <Image src={logo.src} alt={logo.alt} width={160} height={64} className="object-contain max-h-20 w-auto h-auto" />
                    </div>
                  ))}
                </div>
                <div className="partners-row">
                  {strategicLogos.map((logo, i) => (
                    <div key={`sp-b-${i}`} className="w-48 h-28 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center p-3">
                      <Image src={logo.src} alt={logo.alt} width={160} height={64} className="object-contain max-h-20 w-auto h-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Category 2: Community Partners */}
          <div className="group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Community Partners</h3>
            </div>
            <div className="relative overflow-hidden">
              <div className="partners-track animate-partners-scroll slow">
                <div className="partners-row">
                  {[...Array(10)].map((_, i) => (
                    <div key={`cp-a-${i}`} className="w-40 h-24 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Logo</span>
                    </div>
                  ))}
                </div>
                <div className="partners-row">
                  {[...Array(10)].map((_, i) => (
                    <div key={`cp-b-${i}`} className="w-40 h-24 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Logo</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          /* Hide scrollbar just in case */
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          /* Marquee base */
          .partners-track { display: flex; width: max-content; }
          /* Keep a 1rem gap between cards, and add the same spacing at the end of each row
             so the transition between duplicated rows has an identical gap */
          .partners-row { display: flex; gap: 1rem; padding-right: 1rem; }
          @keyframes partners-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-partners-scroll {
            animation: partners-scroll 30s linear infinite;
            width: fit-content;
          }
          .animate-partners-scroll.slow { animation-duration: 40s; }
          /* Pause on hover */
          .group:hover .animate-partners-scroll { animation-play-state: paused; }
        `}</style>
      </section>

      {/* Membership */}
      <section id="membership" className="relative py-24 bg-white overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800">Membership</h2>
          <div className="mx-auto h-1 w-28 bg-gradient-to-r from-red-600 via-blue-600 to-green-600 rounded-full mb-8"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Join TAPFF to connect with leaders and communities across Türkiye, Azerbaijan and Pakistan. Choose the plan that suits you and help shape trilateral cooperation.</p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Individual */}
            <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Individual</CardTitle>
                <CardDescription>Great for students, professionals and volunteers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                  <li>• Access to events and webinars</li>
                  <li>• Priority for exchanges and scholarships</li>
                  <li>• Community newsletter</li>
                </ul>
                <a href="/become-a-member?type=individual"><Button className="w-full bg-gray-900 hover:bg-black text-white">Join as Individual</Button></a>
              </CardContent>
            </Card>

            {/* Corporate */}
            <Card className="bg-white border border-blue-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Corporate</CardTitle>
                <CardDescription>For SMEs and companies expanding across TAP</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                  <li>• Business matchmaking and delegations</li>
                  <li>• Co-branding and showcase opportunities</li>
                  <li>• Policy and market briefings</li>
                </ul>
                <a href="/become-a-member?type=corporate"><Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Join as Corporate</Button></a>
              </CardContent>
            </Card>

            {/* Institutional */}
            <Card className="bg-white border border-emerald-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-xl">Institutional</CardTitle>
                <CardDescription>Universities, chambers and public bodies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                  <li>• MoUs and program partnerships</li>
                  <li>• Joint research and capacity building</li>
                  <li>• Cross-border youth initiatives</li>
                </ul>
                <a href="/become-a-member?type=institutional"><Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Join as Institutional</Button></a>
              </CardContent>
            </Card>
          </div>

          {/* Leadership & Governance teaser */}
          <div className="mt-12 rounded-2xl border border-gray-200 p-6 md:p-8 bg-gray-50">
            <div className="grid md:grid-cols-4 gap-4 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800">Leadership & Governance</h3>
                <p className="text-gray-600">Meet our Board of Directors, Founders and Advisory Council—guiding TAPFF’s mission and values.</p>
              </div>
              <div className="flex gap-3 flex-col sm:flex-row md:col-span-2 justify-end">
                <a href="/board"><Button variant="outline" className="border-gray-300">Board Members</Button></a>
                <a href="/founders"><Button variant="outline" className="border-gray-300">Founders</Button></a>
                <a href="/advisory"><Button variant="outline" className="border-gray-300">Advisory Council</Button></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="relative py-24 bg-gray-50 overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800">Contact Us</h2>
          <div className="mx-auto h-1 w-28 bg-gradient-to-r from-red-600 via-blue-600 to-green-600 rounded-full mb-8"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have a question, partnership idea, or media inquiry? Send us a message and we’ll get back to you shortly.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
                <CardDescription>We typically respond within 2–3 business days.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault()
                  alert("Thank you! Your message has been sent.")
                }}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input id="name" name="name" type="text" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input id="email" name="email" type="email" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input id="subject" name="subject" type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900" placeholder="Write your message here..." />
                  </div>
                  <div className="pt-2">
                    <Button type="submit" className="bg-gray-900 hover:bg-black text-white w-full sm:w-auto">Send Message</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                  <CardDescription>Reach us via email or follow us on social media.</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="font-medium">Türkiye–Azerbaijan–Pakistan Friendship Forum</div>
                      <div className="text-sm text-gray-600">Istanbul • Baku • Islamabad</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      For partnerships and media, email us at
                      {" "}
                      <a href="mailto:info@tapff.org" className="text-gray-900 underline hover:no-underline">info@tapff.org</a>.
                    </div>
                  </div>
                  <div className="pt-2 flex items-center gap-4">
                    <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-900"><Facebook className="w-5 h-5" /></a>
                    <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900"><Twitter className="w-5 h-5" /></a>
                    <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-900"><Instagram className="w-5 h-5" /></a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      
      </div>
    )
  }
