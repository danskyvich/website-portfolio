"use client"
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id: string;
}

export default function SectionHeader({
  title,
  subtitle,
  id,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col w-full h-fit">
      <div className="h-10 items-center w-full border-y border-(--color-line)/30 mt-10">
        <p
          id={id}
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-mono px-3"
        >
          {title}
        </p>
      </div>
      <div className="w-full h-fit border-y border-(--color-line)/30 mt-5">
        {subtitle && (
          <p className="text-(--color-text-secondary) w-[70%] sm:w-[50%] px-3 py-1 font-sans text-[0.775rem] md:text-[0.95rem] lg:text-[1rem]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}