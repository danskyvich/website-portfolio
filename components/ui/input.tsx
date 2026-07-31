import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    type: string,
    placeholder: string,
    className?: string,
    register?: UseFormRegister<T>
    registerName?: Path<T>
}

export default function Input<T extends FieldValues = FieldValues>({type, placeholder, className, register, registerName}: InputProps<T>) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`${className} bg-(--color-brand-blue-dark) rounded-[40px] w-full h-full flex px-5`}
        {...(register && registerName ? register(registerName) : {})}
      />
    );
}