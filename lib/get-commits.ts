// lib/get-commits.ts
import type { Commit } from "@/lib/types";

export async function getCommits(): Promise<Commit[]> {
  const token = process.env.GITHUB_TOKEN;
  const username = "danskyvich";

  const res = await fetch(
    `https://api.github.com/users/${username}/events/public?per_page=30`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const events = await res.json();

  return events
    .filter((e: any) => e.type === "PushEvent")
    .flatMap((e: any) =>
      e.payload.commits.map((c: any) => ({
        sha: c.sha.substring(0, 7),
        message: c.message,
        repo: e.repo.name,
        date: e.created_at,
        url: `https://github.com/${e.repo.name}/commit/${c.sha}`,
      }))
    )
    .slice(0, 10);
}