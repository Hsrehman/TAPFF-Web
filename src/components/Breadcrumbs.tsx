"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Breadcrumbs() {
  const pathname = usePathname()
  // Split and filter empty segments
  const segments = pathname.split("/").filter(Boolean)

  const crumbs = [
    { label: "Home", href: "/" },
    ...segments.map((seg, idx) => {
      const href = "/" + segments.slice(0, idx + 1).join("/")
      const label = seg
        .replace(/-/g, " ")
        .replace(/\b\w/g, (m) => m.toUpperCase())
      return { label, href }
    }),
  ]

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center">
            {i > 0 && <span className="mx-2 text-gray-400">/</span>}
            {i < crumbs.length - 1 ? (
              <Link href={c.href} className="hover:text-gray-900 underline underline-offset-2">
                {c.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
