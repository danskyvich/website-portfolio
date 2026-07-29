import { FacebookIcon, GithubIcon, LinkedinIcon } from "@/lib/icons";
import { Mail, Phone, Pin } from "lucide-react";

export default function Footer() {
  const personal = [
    { name: "Quezon City, Philippines", icon: <Pin size={15} /> },
    { name: "(+63)928-378-2089", icon: <Phone size={15} /> },
    { name: "danilopelinjr@gmail.com", icon: <Mail size={15} /> },
  ];
  const links = [
    { name: "My works", link: "#my-works" },
    { name: "About me", link: "#about-me" },
    { name: "Technical skills", link: "#technical-skills" },
    { name: "Contact me", link: "#contact-me" },
  ];

  const socials = [
    {
      name: "Facebook",
      link: "https://web.facebook.com/danilo.pelin",
      icon: <FacebookIcon width={20} height={20} />,
    },
    {
      name: "Github",
      link: "https://github.com/danskyvich",
      icon: <GithubIcon />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/danilo-pelin-220313322/",
      icon: <LinkedinIcon width={20} height={20} />,
    },
  ];
  return (
    <div className="flex relative w-full h-80 justify-end mt-6 gap-x-5">
      <div className="grid grid-cols-[34%_1fr_1fr] grid-rows-1 w-full h-full">
        <div className="flex flex-col border-r border-(--color-line)/50 mr-5 px-2 py-10 gap-6">
          <p className="text-[0.9rem] font-semibold">Danilo Pelin Jr.</p>
          {personal.map((item, key) => (
            <div
              className="flex w-full h-fit items-center gap-3 text-[0.9rem] text-(--color-text-primary)"
              key={key}
            >
              {item.icon}
              <p className="flex text-[0.9rem] line-clamp-1 whitespace-nowrap">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 border-x border-(--color-line)/50 px-2 pt-10 text-[0.9rem]">
          <p className="font-bold">This page</p>
          {links.map((item, key) => (
            <a
              href={item.link}
              className="font-light hover:underline cursor-pointer line-clamp-1 whitespace-nowrap"
              key={key}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-6 text-[0.9rem] border-l border-(--color-line)/50 ml-5 px-2 pt-10">
          <p className="row-start-1 col-span-2 font-bold">Socials</p>
          {socials.map((item, key) => (
            <div className="flex w-full h-fit" key={key}>
              <div className="flex w-[10%]">{item.icon}</div>
              <a
                href={item.link}
                className="hover:underline text-[0.9rem] font-light"
                target="_blank"
                rel="noreferrer noopener"
              >
                <p className="line-clamp-1 whitespace-nowrap">{item.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <p className="absolute font-mono text-[0.9rem] text-(--color-brand-purple) bottom-7 -left-10 rotate-270">
        footer
      </p>
    </div>
  );
}
