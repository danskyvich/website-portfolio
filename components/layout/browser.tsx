import { X } from "lucide-react";
import Image from "next/image";

export default function Browser() {
  return (
    <div className="flex flex-col w-full h-125">
      {/* tab */}
      <div className="flex w-full h-[7%] rounded-t-4xl bg-(--color-brand-blue-dark) px-20 gap-5 py-2">
        <div className="flex flex-1 w-full h-full items-center justify-center gap-3">
          <div className="rounded-[50%] w-3 h-3 bg-red-400" />
          <div className="rounded-[50%] w-3 h-3 bg-amber-200" />
          <div className="rounded-[50%] w-3 h-3 bg-green-300" />
        </div>

        <div className="flex flex-auto px-3 w-full h-full rounded-2xl bg-(--color-brand-blue-soft) items-center">
          <p className="text-white text-[0.7rem]">http://localhost:3000</p>
        </div>

        <div className="flex w-auto h-full items-center justify-end">
          <X size={20} />
        </div>
      </div>

      <div className="flex flex-col w-full h-[93%] rounded-b-4xl bg-(--color-brand-blue-super-dark) px-3">
        {/* animated console-like text gif */}
        <div className="flex w-full h-[7%]">

        </div>
        <div className="flex w-full h-[80%]">
            <div className="grid grid-cols-[200px_1fr] grid-rows-2 w-full h-full">
                <div className="row-span-2 col-start-1">
                    <div className="flex w-full h-full bg-(--color-brand-blue-dark)">
                        <Image src="/grad-pic.png" alt={"danilo's picture grad"} width={200} height={400} className="rounded-[20px]"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
