"use client"

import Breadcrumbs from "@/components/Breadcrumbs"

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Advisory Council</h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            The Advisory Council brings expertise across government, academia, industry and civil society to support TAPFF programs.
          </p>
          {/* TODO: Replace with real advisors data cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
                <div className="h-32 w-full rounded-lg bg-gray-100 mb-4" />
                <h3 className="font-semibold text-gray-900">Advisor Name</h3>
                <p className="text-sm text-gray-600">Field / Organization</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
