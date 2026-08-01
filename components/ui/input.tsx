import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    type: string,
    placeholder: string,
    className?: string,
    register?: UseFormRegister<T>
    registerName?: Path<T>
    id: string,
    tabIndex?: number;
}

export default function Input<T extends FieldValues = FieldValues>({id, tabIndex = 0, type, placeholder, className, register, registerName}: InputProps<T>) {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        tabIndex={tabIndex}
        className={`${className} bg-(--color-brand-blue-dark) rounded-[40px] w-full h-full flex px-5`}
        {...(register && registerName ? register(registerName) : {})}
      />
    );
}