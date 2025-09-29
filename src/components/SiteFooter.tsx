import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded overflow-hidden">
                <Image src="/hero-logo.png" alt="TAPFF Logo" width={40} height={40} className="object-contain" />
              </div>
              <div className="text-xl font-bold">TAPFF</div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Türkiye–Azerbaijan–Pakistan Friendship Forum
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white/80 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/#about" className="hover:text-white">About</a></li>
              <li><a href="/#focus" className="hover:text-white">Areas of Focus</a></li>
              <li><a href="/#initiatives" className="hover:text-white">Key Initiatives</a></li>
              <li><a href="/#events" className="hover:text-white">Events</a></li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white/80 mb-4">Events</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/#events" className="hover:text-white">Workshops & Conferences</a></li>
              <li><a href="/#events" className="hover:text-white">Cultural Events</a></li>
              <li><a href="/#events" className="hover:text-white">Scholarships & Exchanges</a></li>
              <li><a href="/#events" className="hover:text-white">Startup & E‑commerce</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white/80 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Email: <a href="mailto:info@apff.org" className="hover:text-white underline underline-offset-2">info@apff.org</a></li>
              <li>Website: <a href="https://www.tapff.org" target="_blank" rel="noreferrer" className="hover:text-white underline underline-offset-2">tapff.org</a></li>
              <li className="flex items-center">Regional presence across TAP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} TAPFF. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
