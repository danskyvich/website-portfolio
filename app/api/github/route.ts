import { NextResponse } from "next/server";
import { getLatestCommit } from "@/api/get-commits";

export async function GET() {
  try {
    const commits = await getLatestCommit();
    return NextResponse.json(commits);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch commits" }, { status: 500 });
  }
}