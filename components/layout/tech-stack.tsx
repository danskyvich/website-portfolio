import { Database, Laptop, Toolbox } from "lucide-react";
import {
  CanvaIcon,
  CSSIcon,
  GithubIcon,
  GitIcon,
  HTMLWeb3Icon,
  InkscapeIcon,
  JavascriptIcon,
  MySQLIcon,
  NextJSIcon,
  PHPIcon,
  PostgrestSQL,
  SupabaseIcon,
  TailwindCSSIcon,
  TypescriptIcon,
  VercelIcon,
  ViteIcon,
  VSCodeIcon,
} from "@/lib/icons";
import Link from "next/link";

export default function TechStack() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-x-5 mt-10 border-t border-(--color-line)">
      {/* header */}
      <div className="flex flex-col md:flex-row px-5 border border-(--color-brand-purple) gap-4 items-center justify-center py-3 bg-[#1E1128]">
        <Laptop size={40} className="w-[40%] md:w-[20%]" />
        <div className="w-full h-full gap-2">
          <p className="font-mono font-medium text-xl">Frontend</p>
          <p className="text-[0.7rem] md:text-[0.9rem] w-[80%] font-mono text-(--color-text-secondary)">
            UI/UX Design, client-side development, etc.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-5 border border-(--color-brand-blue-accent) gap-4 items-center justify-center py-3 bg-[#202137]">
        <Database size={40} className="w-[40%] md:w-[20%]" />
        <div className="w-full h-full gap-2">
          <p className="font-mono font-medium text-xl">Backend</p>
          <p className="text-[0.9rem] w-[60%] font-mono text-(--color-text-secondary)">
            Database management SSR, etc.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-5 border border-[#00D9FF] gap-4 items-center justify-center py-3 bg-[#092D3A]">
        <Toolbox size={40} className="w-[40%] md:w-[20%]" />
        <div className="w-full h-full gap-2">
          <p className="font-mono font-medium text-xl">Tools</p>
          <p className="text-[0.9rem] w-[60%] font-mono text-(--color-text-secondary)">
            IDE’s, Software, Frameworks, etc.
          </p>
        </div>
      </div>

      {/* content */}
      <div className="flex row-start-2 items-center justify-center border-b border-r border-(--color-line)/50">
        <Link
          href="https://www.tailwindcss.com"
          rel="noreferrer noopenner"
          target="_blank"
        >
          <TailwindCSSIcon />
        </Link>
      </div>
      <div className="row-start-2 border-b border-x border-(--color-line)/50 items-center justify-center flex">
        <Link
          href="https://www.supabase.com"
          rel="noreferrer noopenner"
          target="_blank"
        >
          <SupabaseIcon />
        </Link>
      </div>
      <div className="row-start-2 border-b border-l border-(--color-line)/50">
        <div className="flex flex-col lg:flex-row w-full h-full gap-1 xl:gap-5 items-center justify-center">
          <Link
            href="https://code.visualstudio.com/"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <VSCodeIcon />
          </Link>
          <Link
            href="https://inkscape.org/"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <InkscapeIcon />
          </Link>
          <Link
            href="https://www.canva.com/"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <CanvaIcon />
          </Link>
        </div>
      </div>
      <div className="row-start-3 border-b border-r border-(--color-line)/50">
        <div className="flex w-full h-full items-center justify-center">
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <HTMLWeb3Icon />
          </Link>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <CSSIcon />
          </Link>
        </div>
      </div>
      <div className="row-start-3 border-x border-b border-(--color-line)/50">
        <div className="flex flex-col lg:flex-row w-full h-full gap-5 items-center justify-center">
          <Link
            href="https://www.postgresql.org/"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <PostgrestSQL />
          </Link>
          <Link
            href="https://www.mysql.com/"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <MySQLIcon />
          </Link>
        </div>
      </div>
      <div className="row-start-3 border-b border-l border-(--color-line)/50">
        <div className="flex flex-col lg:flex-row w-full h-full items-center justify-center gap-5">
          <Link
            href="https://vite.dev/"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <ViteIcon />
          </Link>
          <Link
            href="https://nextjs.org/"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <NextJSIcon />
          </Link>
        </div>
      </div>
      <div className="row-start-4 border-b border-r border-(--color-line)/50">
        <div className="flex w-full h-full items-center justify-center gap-5">
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <JavascriptIcon />
          </Link>
          <Link
            href="https://www.typescriptlang.org"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <TypescriptIcon />
          </Link>
        </div>
      </div>
      <div className="flex row-start-4 border-b border-x border-(--color-line)/50 items-center justify-center">
        <Link href="https://www.php.net/">
          <PHPIcon />
        </Link>
      </div>
      <div className="flex row-start-4 border-b border-l border-(--color-line)/50 items-center justify-center">
        <Link
          href="https://www.vercel.com"
          rel="noreferrer noopenner"
          target="_blank"
        >
          <VercelIcon />
        </Link>
      </div>
      <div className="row-start-5 border-r border-(--color-line)/50"></div>
      <div className="row-start-5 border-x border-(--color-line)/50"></div>
      <div className="row-start-5 border-l border-(--color-line)/50">
        <div className="flex flex-col lg:flex-row w-full h-full items-center justify-center gap-5">
          <Link
            href="https://github.com"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://git-scm.com/"
            rel="noreferrer noopenner"
            target="_blank"
          >
            <GitIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
