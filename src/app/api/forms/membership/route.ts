import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    // TODO: Persist to a database or send email via your provider
    // For now, just echo back
    return NextResponse.json({ ok: true, received: data })
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 })
  }
}


