"use server"

import { getLatestCommit } from "@/api/get-commits";
import MainPortfolioPage from "./main/page";

export default async function Main() {
  const commits = await getLatestCommit();
  return (
    <div className="flex w-full h-full">
      <MainPortfolioPage commits={commits}/>
    </div>
  );
}
