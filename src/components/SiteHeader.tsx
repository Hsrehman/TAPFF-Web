"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    if (!isHome) return
    const ids = ["about", "focus", "initiatives", "events", "partners", "membership", "contact"]
    const elements = ids
      .map((id) => ({ id, el: document.getElementById(id) as HTMLElement | null }))
      .filter((x): x is { id: string; el: HTMLElement } => x.el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible && visible.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    elements.forEach(({ el }) => observer.observe(el))

    // Sync with hash changes
    const onHash = () => setActiveSection(window.location.hash.replace("#", "") || null)
    window.addEventListener("hashchange", onHash)

    // Initialize from current hash
    onHash()

    return () => {
      observer.disconnect()
      window.removeEventListener("hashchange", onHash)
    }
  }, [isHome])

  const linkClass = (active: boolean) =>
    `text-sm transition-colors font-medium ${active ? "text-red-600" : "text-gray-700 hover:text-red-600"}`
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-16 md:h-16">
              <Image
                src="/hero-logo.png"
                alt="TAPFF Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">TAPFF</h1>
          </div>

          <nav className="hidden lg:flex space-x-6">
            <a href="/" className={linkClass(isHome && !activeSection)}>HOME</a>
            <a href="/#about" className={linkClass(isHome && activeSection === "about")}>ABOUT</a>
            <a href="/#focus" className={linkClass(isHome && activeSection === "focus")}>FOCUS AREAS</a>
            <a href="/#initiatives" className={linkClass(isHome && activeSection === "initiatives")}>INITIATIVES</a>
            <a href="/#events" className={linkClass(isHome && activeSection === "events")}>EVENTS</a>
            <a href="/#partners" className={linkClass(isHome && activeSection === "partners")}>PARTNERS</a>
            <a href="/#membership" className={linkClass(isHome && activeSection === "membership")}>MEMBERSHIP</a>
            <a href="/#contact" className={linkClass(isHome && activeSection === "contact")}>CONTACT</a>
          </nav>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/#about" className="text-gray-700 hover:text-red-600 font-medium py-2">ABOUT</a>
              <a href="/#focus" className="text-gray-700 hover:text-red-600 font-medium py-2">FOCUS AREAS</a>
              <a href="/#initiatives" className="text-gray-700 hover:text-red-600 font-medium py-2">INITIATIVES</a>
              <a href="/#events" className="text-gray-700 hover:text-red-600 font-medium py-2">EVENTS</a>
              <a href="/#partners" className="text-gray-700 hover:text-red-600 font-medium py-2">PARTNERS</a>
              <a href="/#membership" className="text-gray-700 hover:text-red-600 font-medium py-2">MEMBERSHIP</a>
              <a href="/#contact" className="text-gray-700 hover:text-red-600 font-medium py-2">CONTACT</a>
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <Button asChild variant="outline" className="border-gray-300"><a href="/#contact">CONTACT US</a></Button>
                <Button asChild className="bg-red-600 hover:bg-red-700"><a href="/become-a-member">JOIN TAPFF</a></Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
