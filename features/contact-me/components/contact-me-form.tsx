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
  const [visible, setVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<{
    success: true | false,
    message: string,
  } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<ContactMeData>({
    resolver: zodResolver(ContactMeSchema),
  });

  const onSubmit = async (data: ContactMeData) => {
    setLoading(true)
    
    const result = await SendMessageToEmail(data);
    console.log("SendMessageToEmail result:", result);


    if (!result.success) {
      setSuccess({ success: false, message: result.error});
    } else {
      setSuccess({ success: true, message: "Message sent successfully"});
    }
    
    setLoading(false)
  };

  // errors coalesced into one error
  const hasErrors = Object.keys(errors).length > 0;
  const combinedError =
    isSubmitted && hasErrors
      ? "Please fill out all fields correctly"
      : undefined;

  // for modal appearance control
  useEffect(() => {
    if (!combinedError) return;
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 4000)
    return () => clearTimeout(timer)
  }, [combinedError])

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (errors) => {
        console.log("Current errors:", errors);
      })}
      className="grid grid-cols-[32.25%_20px_1fr] grid-rows-1 border-t border-(--color-line)/50 my-10"
    >
      <Modal
        header={success?.success ? "Message sent" : "Submission error"}
        message={success?.message}
        icon={<InfoIcon size={20} />}
        toggle={success?.message}
      />

      <AnimatePresence>
        {combinedError && visible && (
          <motion.div
            className="flex flex-col fixed z-50 w-fit h-fit items-center gap-2 bg-(--color-background) border border-(--color-line) bottom-5 right-5 text-md rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div className="flex w-full items-center text-[0.95rem] font-mono gap-2 border-b border-(--color-line) px-5 py-2">
              <InfoIcon size={15} />
              <p>Form error</p>
            </div>
            <p className=" text-red-400 text-[0.875rem] font-mono px-5 py-1">
              {combinedError}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Your email */}
      <div className="flex font-mono border-b border-(--color-line)/50 p-3">
        <p>Your email</p>
      </div>
      <div className="flex border-x border-(--color-line)/50" />
      <div className="flex flex-col border-r border-b border-(--color-line)/50 py-0 text-[0.9rem]">
        <Input
          type="email"
          placeholder="example@gmail.com"
          className="focus:outline-(--color-brand-blue-accent)/75 focus:outline-2"
          register={register}
          registerName="email"
        />
      </div>

      {/* Your subject */}
      <div className="flex row-start-2 font-mono border-b border-t border-(--color-line)/50 p-3 mt-5">
        <p>Your subject</p>
      </div>
      <div className="flex row-start-2 border-x border-(--color-line)/50" />
      <div className="flex row-start-2 border-r border-b border-(--color-line)/50 py-0 text-[0.9rem] mt-5 border-t">
        <Input
          type="text"
          placeholder="Re: project inquiry"
          className="focus:outline-(--color-brand-blue-accent)/75 focus:outline-2"
          register={register}
          registerName="subject"
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
