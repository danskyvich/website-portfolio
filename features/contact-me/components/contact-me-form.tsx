import Input from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ContactMeData, ContactMeSchema } from "../schemas/contact-me-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon } from "lucide-react";
import Modal from "@/components/ui/modal";
import { SendMessageToEmail } from "../api/send-email";
import { useEffect, useState } from "react";
import {AnimatePresence, motion} from "framer-motion"

export default function ContactMeForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    key: number;
    message: string;
    success: boolean;
  } | null>(null);
  const [errorKey, setErrorKey] = useState<number | undefined>(undefined);

  // zod validation code
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<ContactMeData>({
    resolver: zodResolver(ContactMeSchema),
  });

  // submit form
  const onSubmit = async (data: ContactMeData) => {
    setLoading(true);
    const result = await SendMessageToEmail(data);

    if (!result.success) {
      setToast({ key: Date.now(), message: result.error, success: false });
    } else {
      setToast({
        key: Date.now(),
        message: "Message sent successfully",
        success: true,
      });
    }
    setLoading(false);
  };

  // errors coalesced into one error
  const hasErrors = Object.keys(errors).length > 0;
  const combinedError =
    isSubmitted && hasErrors
      ? "Please fill out all fields correctly"
      : undefined;

  useEffect(() => {
    if (!combinedError) return;
    setErrorKey(Date.now());
    setToast({ key: Date.now(), message: combinedError, success: false });
  }, [combinedError]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (errors) => {
        console.log("Current errors:", errors);
      })}
      className="grid grid-cols-[32.25%_20px_1fr] grid-rows-1 border-t border-(--color-line)/50 my-10"
    >
      <Modal
        header={toast?.success ? "Message sent" : "Submission error"}
        message={toast?.message}
        icon={<InfoIcon size={20} />}
        toggleKey={toast?.key}
      />

      <Modal
        header="Form error"
        toggleKey={errorKey}
        message={combinedError}
        icon={<InfoIcon size={15}/>}
      />

      {/* Honeypot */}
      <div className="hidden font-mono border-b border-(--color-line)/50 p-3">
        <label htmlFor="website">Website</label>
      </div>
      <div className="hidden border-x border-(--color-line)/50" />
      <div className="hidden flex-col border-r border-b border-(--color-line)/50 py-0 text-[0.9rem]">
        <Input
          id="website"
          type="text"
          tabIndex={-1}
          placeholder="https://www.sample.com/..."
          className="focus:outline-(--color-brand-blue-accent)/75 focus:outline-2"
          register={register}
          registerName="honeypot"
        />
      </div>

      {/* Your email */}
      <div className="row-start-2 flex font-mono border-b border-(--color-line)/50 p-3">
        <label htmlFor="email">Your email</label>
      </div>
      <div className="row-start-2 flex border-x border-(--color-line)/50" />
      <div className="row-start-2 flex flex-col border-r border-b border-(--color-line)/50 py-0 text-[0.9rem]">
        <Input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          className="focus:outline-(--color-brand-blue-accent)/75 focus:outline-2"
          register={register}
          registerName="email"
        />
      </div>

      {/* Your subject */}
      <div className="flex row-start-3 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5">
        <label htmlFor="subject">Your subject</label>
      </div>
      <div className="flex row-start-3 border-x border-(--color-line)/50" />
      <div className="flex row-start-3 border-r border-b border-(--color-line)/50 py-0 text-[0.9rem] mt-5 border-t">
        <Input
          id="subject"
          type="text"
          placeholder="Re: project inquiry"
          className="focus:outline-(--color-brand-blue-accent)/75 focus:outline-2"
          register={register}
          registerName="subject"
        />
      </div>

      {/* Your message */}
      <div className="flex row-start-4 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5 h-[calc(100%-20px)] items-center">
        <label htmlFor="message">Your message</label>
      </div>
      <div className="flex row-start-4 border-x border-(--color-line)/50" />
      <div className="flex row-start-4 border-r border-b border-(--color-line)/50 py-0 text-[0.9rem] mt-5 border-t">
        <textarea
          id="message"
          placeholder="Hi! I would like to..."
          className="bg-(--color-brand-blue-dark) focus:outline-(--color-brand-blue-accent)/75 focus:outline-2 rounded-[20px] py-3 w-full h-40 flex px-5 resize-none"
          {...register("message")}
        />
      </div>

      {/* Submit */}
      <div className="flex row-start-5 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5 h-10 items-center" />
      <div className="flex row-start-5 border-x border-b border-(--color-line)/50" />
      <div className="flex row-start-5 border-r border-b border-(--color-line)/50 py-0 text-[0.9rem] mt-5 border-t">
        <button
          type="submit"
          className="bg-(--color-brand-purple) w-full h-full rounded-[20px] hover:bg-(--color-brand-purple-dark) cursor-pointer active:bg-fuchsia-800 transitionall duration-100"
        >
          <p className="font-normal text-white">
            {loading ? "Submitting" : "Submit"}
          </p>
        </button>
      </div>

      <div className="flex row-start-5 col-span-3 w-full h-5 border-b border-(--color-line)/50" />
    </form>
  );
}
