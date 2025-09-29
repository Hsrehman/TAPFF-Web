"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function SubscribeInline() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle")
  const [email, setEmail] = useState("")
  return (
    <div>
      {status === "ok" ? (
        <div className="rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm p-3">
          Thank you! You’re subscribed.
        </div>
      ) : (
        <form
          className="space-y-3"
          onSubmit={async (e) => {
            e.preventDefault()
            setStatus("loading")
            const res = await fetch("/api/forms/subscribe", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            })
            setStatus(res.ok ? "ok" : "error")
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900"
          />
          <Button disabled={status === "loading"} className="w-full bg-gray-900 hover:bg-black text-white">
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
          {status === "error" && (
            <div className="text-sm text-red-600">Something went wrong. Please try again.</div>
          )}
        </form>
      )}
    </div>
  )
}


