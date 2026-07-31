import Image from "next/image";

export default function Browser() {
    return (
      <div className="flex w-full h-125 bg-[#433d5a3b] p-2">
        <div className="flex flex-col rounded-2xl w-full bg-[#56507164] p-2">
          {/* Browser top bar */}
          <div className="flex w-full h-fit">
            {/* Buttons */}
            <div className="flex w-fit h-full px-5 py-2 gap-2">
              <div className="flex rounded-[50%] p-1.5 bg-red-500" />
              <div className="flex rounded-[50%] p-1.5 bg-yellow-300" />
              <div className="flex rounded-[50%] p-1.5 bg-emerald-400" />
            </div>
          </div>

          {/* Content */}
          <div className="flex relative w-full h-full bg-[#231f31ad] rounded-xl overflow-hidden">
            <Image src="/grad-pic.png" alt="alt" fill className="object-cover rounded-xl" />
          </div>
        </div>
      </div>
    );
}