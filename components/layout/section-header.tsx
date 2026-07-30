
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id: string;
}

export default async function SectionHeader({
  title,
  subtitle,
  id,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col w-full h-fit">
      <div className="h-10 items-center w-full border-y border-(--color-line)/30 mt-10">
        <p id={id} className="text-4xl font-bold font-mono px-3">
          {title}
        </p>
      </div>
      <div className="w-full h-fit  border-y border-(--color-line)/30 mt-5">
        {subtitle && (
          <p className="text-(--color-text-secondary) text-lg/6 w-[50%] px-3 py-1 font-sans text-[1rem]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}