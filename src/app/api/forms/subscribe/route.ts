import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    if (!data?.email) return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 })
  }
}


