export default function DoubleLineBorder({className}:{className?:string}) {
    return (
      <div
        className={`${className} absolute w-dvw left-1/2 -translate-x-1/2 py-3 border-y border-(--color-line) bg-[repeating-linear-gradient(315deg,var(--color-line)_0,var(--color-line)_1px,transparent_0px,transparent_50%)] bg-size-[8px_8px]`}
      />
    );
}