import { ProjectInformation } from "@/features/my-works/types/types";
import Link from "next/link";

interface TechStackGridProps {
    icons: ProjectInformation[],
}

export default function TechStackGrid({icons}:TechStackGridProps) {
  return (
    <div className="grid w-full h-full grid-cols-2 md:grid-cols-4 grid-rows-2 auto-rows-1fr">
      {icons.map(({ icon, link }, index) => (
        <div className="flex border border-(--color-line)/50 hover:bg-[#232338] transition-all p-4" key={index}>
          <Link href={link} className="flex w-full h-full items-center justify-center" target="_blank" rel="noreferrer noopener">
            {icon}
          </Link>
        </div>
      ))}
      
    </div>
  );
}
