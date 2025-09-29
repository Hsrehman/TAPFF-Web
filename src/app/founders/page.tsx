"use client"

import Breadcrumbs from "@/components/Breadcrumbs"

export default function FoundersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Founders</h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            TAPFF was founded by leaders dedicated to strengthening trilateral friendship and cooperation. Learn about the people and vision behind the forum.
          </p>
          {/* TODO: Replace with real founders data cards */}
          <div className="grid gap-6 md:grid-cols-3">

              <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
                <div className="h-32 w-full rounded-lg bg-gray-100 mb-4" />
                <h3 className="font-semibold text-gray-900">Muhammad Arshad</h3>
                <p className="text-sm text-gray-600">Short bio or role</p>
              </div>
            
              <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
                <div className="h-32 w-full rounded-lg bg-gray-100 mb-4" />
                <h3 className="font-semibold text-gray-900">Founder Name</h3>
                <p className="text-sm text-gray-600">Short bio or role</p>
              </div>
            
              <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
                <div className="h-32 w-full rounded-lg bg-gray-100 mb-4" />
                <h3 className="font-semibold text-gray-900">Founder Name</h3>
                <p className="text-sm text-gray-600">Short bio or role</p>
              </div>
            
          </div>
        </div>
      </section>
    </main>
  )
}
