import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    type: string,
    placeholder: string,
    className?: string,
    register?: UseFormRegister<T>
    registerName?: Path<T>
    id: string,
    tabIndex?: number;
    autocomplete?: string;
}

export default function Input<T extends FieldValues = FieldValues>({id, autocomplete, tabIndex = 0, type, placeholder, className, register, registerName}: InputProps<T>) {
    return (
      <input
        id={id}
        type={type}
        autoComplete={autocomplete}
        placeholder={placeholder}
        tabIndex={tabIndex}
        className={`${className} bg-(--color-brand-blue-dark) rounded-[40px] w-full h-full flex`}
        {...(register && registerName ? register(registerName) : {})}
      />
    );
}