interface InputProps {
    type: string,
    placeholder: string,
    className?: string,
}

export default function Input({type, placeholder, className}:InputProps) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`${className} bg-(--color-brand-blue-dark) rounded-[40px] w-full h-full flex px-5`}
      />
    );
}