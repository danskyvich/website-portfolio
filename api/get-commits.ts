import { Commit } from "../features/name-header/types/user";

export async function getLatestCommit(): Promise<Commit | null> {
  const token = process.env.GITHUB_TOKEN;
  const username = "danskyvich";

  const eventsRes = await fetch(
    `https://api.github.com/users/${username}/events?per_page=10`,
    { 
      headers: 
      { 
        Authorization: `Bearer ${token}`, 
        Accept: "application/vnd.github+json" 
      } 
    }
  );

  if (!eventsRes.ok) throw new Error(`GitHub API error: ${eventsRes.status}`);

  const events = await eventsRes.json();
  const latestPush = events.find((e: any) => e.type === "PushEvent");
  if (!latestPush) return null;

  const commitRes = await fetch(
    `https://api.github.com/repos/${latestPush.repo.name}/commits/${latestPush.payload.head}`,
    { 
      headers: { 
        Authorization: `Bearer ${token}`, 
        Accept: "application/vnd.github+json" 
      } 
    }
  );
  
  if (!commitRes.ok) throw new Error(`GitHub API error: ${commitRes.status}`);

  const commitData = await commitRes.json();

  return {
    sha: latestPush.payload.head.substring(0, 7),
    message: commitData.commit.message,
    repo: latestPush.repo.name,
    date: latestPush.created_at,
    url: `https://github.com/${latestPush.repo.name}/commit/${latestPush.payload.head}`,
  };
}