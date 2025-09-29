import Breadcrumbs from "@/components/Breadcrumbs"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <Breadcrumbs />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Thank You</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 via-blue-600 to-green-600 rounded-full my-4" />
          <p className="text-gray-600 max-w-2xl">We’ve received your submission. Our team will contact you shortly.</p>
        </div>
      </section>
    </main>
  )
}


