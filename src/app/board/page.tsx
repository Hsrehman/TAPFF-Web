"use client"

import { MapPin, Linkedin, Twitter } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import Image from "next/image"

type Member = {
  name: string
  role?: string
  org?: string
  country?: string
  initials: string
  image?: string
  linkedin?: string
  twitter?: string
}

const board: Member[] = [
  {
    name: "Muhammad Asif Noor",
    role: "Secretary General",
    org: "TAPFF",
    initials: "MN",
    image: "/images/Board Of Directors/Muhammad Asif Noor.jpeg",
    country: "Pakistan",
  },
  {
    name: "Ehtisham Abbasi",
    role: "Director of Business Relations",
    org: "TAPFF",
    initials: "EA",
    image: "/images/Board Of Directors/Ehitsham Abbasi.jpeg",
    country: "Pakistan",
  },
  {
    name: "Hussain Rehman",
    role: "Director of IT & Digital Development.",
    org: "TAPFF",
    initials: "HR",
    image: "",
    country: "Pakistan",
  },
  {
    name: "Burhan Kayaturk",
    role: "Patron-in-Chief",
    org: "Member of Parliament ",
    initials: "BY",
    image: "",
    country: "Turkiye",
  },
  {
    name: "Abdul Nasir Cetin ",
    role: "Co-Chairman",
    org: "?",
    initials: "AN",
    image: "",
    country: "Turkiye",
  },
  {
    name: "Ruslan Damirov",
    role: "Co-Chairman",
    org: "?",
    initials: "RD",
    image: "",
    country: "Azerbaijan",
  },
]

export default function BoardPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="pointer-events-none absolute -top-20 right-1/3 w-[28rem] h-[28rem] bg-red-500/5 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 w-[24rem] h-[24rem] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <Breadcrumbs />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Board Members</h1>
          <div className="h-1 w-28 bg-gradient-to-r from-red-600 via-green-600 to-blue-600 rounded-full my-4" />
          <p className="text-gray-600 max-w-3xl">
            The Board provides strategic guidance and governance for TAPFF, advancing trilateral cooperation across Türkiye, Azerbaijan and Pakistan.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="text-sm text-gray-600">Showing {board.length} directors</div>
            <div className="flex gap-3">
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200">
                <option value="all">All countries</option>
                <option>Türkiye</option>
                <option>Azerbaijan</option>
                <option>Pakistan</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200">
                <option value="rank">All roles</option>
                <option>Chairperson</option>
                <option>Vice Chair</option>
                <option>Secretary</option>
                <option>Treasurer</option>
                <option>Member</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {board.map((m, i) => (
              <article key={i} className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6 text-center">
                <div className="flex flex-col items-center">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={m.name}
                      width={160}
                      height={160}
                      className={`h-40 w-40 rounded-full object-cover shadow-sm ${m.name === "Ehtisham Abbasi" ? "object-top" : ""}`}
                    />
                  ) : (
                    <div className="h-40 w-40 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-semibold text-3xl shadow-sm">
                      {m.initials}
                    </div>
                  )}
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 leading-snug">{m.name}</h3>
                    {(m.role || m.org) && (
                      <p className="text-sm text-gray-600">
                        {m.role && m.org ? `${m.role} · ${m.org}` : (m.role || m.org)}
                      </p>
                    )}
                    {m.country && (
                      <p className="mt-1 text-sm text-gray-500 inline-flex items-center"><MapPin className="w-4 h-4 mr-1" /> {m.country}</p>
                    )}
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  Short professional bio goes here. Replace these placeholders with real profiles.
                </div>
                <div className="mt-5 flex gap-3">
                  <a aria-label="LinkedIn" href={m.linkedin || "#"} className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50" role="button">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a aria-label="Twitter" href={m.twitter || "#"} className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50" role="button">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold">Work with the TAPFF Board</h3>
              <p className="text-white/70">Partner with us on initiatives that strengthen trilateral cooperation.</p>
            </div>
            <div className="flex gap-3 flex-col sm:flex-row w-full md:w-auto">
              <a href="/founders" className="w-full sm:w-auto"><button className="px-4 py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 w-full sm:w-auto">Meet the Founders</button></a>
              <a href="#contact" className="w-full sm:w-auto"><button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white w-full sm:w-auto">Contact Us</button></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
