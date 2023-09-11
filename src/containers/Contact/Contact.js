import Particles from "@/assets/Particles/Particles";
import { Card } from "@/components/Card/Card";
import Glass from "@/components/Glass/Glass";
import { Navigation } from "@/components/Nav/Nav";
import { Github, Twitter, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    icon: <Facebook size={20} />,
    href: "https://www.facebook.com/CreativeMindsGraphic/",
    label: "Facebook",
    handle: "CreativeMindsGraphic",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:cmg@graphic-designer.com",
    label: "Email",
    handle: "cmg@graphicdesigner.com",
  },
  {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/creativemindsgraphic_cmg/?hl=en",
    label: "Instagram",
    handle: "@creativemindsgraphic_cmg",
  },
];

export default function Example() {
  return (
    <>
      <Navigation />
      <Glass>
        <div className="m-auto py-20 p-6 ">
          <div className="grid grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
            {socials.map((s) => (
              <div key={s.label}>
                <Card>
                  <Link href={s.href} target="_blank">
                    <li className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16">
                      <span className="z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                        {s.icon}
                      </span>
                      <div className="z-10 flex flex-col items-center">
                        <span className="text-lg font-medium duration-150 lg:text-1xl text-zinc-200 group-hover:text-white font-display">
                          {s.handle}
                        </span>
                        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                          {s.label}
                        </span>
                      </div>
                    </li>
                  </Link>
                </Card>
              </div>
            ))}
          </div>
          <Particles />
        </div>
      </Glass>
    </>
  );
}
