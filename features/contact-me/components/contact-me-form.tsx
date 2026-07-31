import Input from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ContactMeData, ContactMeSchema } from "../schemas/contact-me-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactMeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactMeData>({
    resolver: zodResolver(ContactMeSchema),
  })

  const onSubmit = (data: ContactMeData) => {
    // resend api 
  }

  const firstError = Object.values(errors)[0]?.message;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-[32.25%_20px_1fr] grid-rows-1 border-t border-(--color-line)/50 my-10">
      {/* Your name */}
      <div className="flex font-mono border-b border-(--color-line)/50 p-3">
        <p>Your name</p>
      </div>
      <div className="flex border-x border-(--color-line)/50" />
      <div className="flex border-r border-b border-(--color-line)/50 py-0 text-[0.9rem]">
        <Input
          type="text"
          placeholder="e.g Juan dela Cruz"
          className="focus:outline-(--color-brand-blue-accent)/75 focus:outline-2"
          {...register("name")}
        />
      </div>

      {/* Your email */}
      <div className="flex row-start-2 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5">
        <p>Your email</p>
      </div>
      <div className="flex row-start-2 border-x border-(--color-line)/50" />
      <div className="flex row-start-2 border-r border-b border-(--color-line)/50 py-0 text-[0.9rem] mt-5 border-t">
        <Input
          type="email"
          placeholder="example@gmail.com"
          className="focus:outline-(--color-brand-blue-accent)/75 focus:outline-2"
          {...register("email")}
        />
      </div>

      {/* Your message */}
      <div className="flex row-start-3 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5 h-[calc(100%-20px)] items-center">
        <p>Your message</p>
      </div>
      <div className="flex row-start-3 border-x border-(--color-line)/50" />
      <div className="flex row-start-3 border-r border-b border-(--color-line)/50 py-0 text-[0.9rem] mt-5 border-t">
        <textarea
          placeholder="Hi! I would like to..."
          className="bg-(--color-brand-blue-dark) focus:outline-(--color-brand-blue-accent)/75 focus:outline-2 rounded-[20px] py-3 w-full h-40 flex px-5 resize-none"
          {...register("message")}
        />
      </div>

      {/* Submit */}
      <div className="flex row-start-4 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5 h-10 items-center" />
      <div className="flex row-start-4 border-x border-b border-(--color-line)/50" />
      <div className="flex row-start-4 border-r border-b border-(--color-line)/50 py-0 text-[0.9rem] mt-5 border-t">
        <button className="bg-(--color-brand-purple) w-full h-full rounded-[20px] hover:bg-(--color-brand-purple-dark) cursor-pointer active:bg-fuchsia-800 transitionall duration-100">
          <p className="font-normal text-white">Submit</p>
        </button>
      </div>

      <div className="flex row-start-5 col-span-3 w-full h-5 border-b border-(--color-line)/50" />
    </form>
  );
}
