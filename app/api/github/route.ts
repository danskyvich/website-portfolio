// app/api/github/route.ts
import { NextResponse } from "next/server";
import { getCommits } from "@/lib/get-commits";

export async function GET() {
  try {
    const commits = await getCommits();
    return NextResponse.json(commits);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch commits" }, { status: 500 });
  }
}