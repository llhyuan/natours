import { FootbarLink, FootbarNavsection } from "@Global/custom-types";
import Link from "next/link";
import { latoSemiBold } from "@/app/fonts";

const footbarNav: FootbarNavsection = {
  booking: [
    { label: "My Booking", href: "/me/bookings" },
    { label: "Submit trip feedback", href: "#" },
    { label: "Safe travel hub", href: "#" },
    { label: "Travel alerts", href: "#" },
    { label: "Booking Conditions", href: "#" },
  ],
  Company: [
    { label: "About us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy policy", href: "#" },

    { label: "Corporate culture", href: "#" },
  ],
  Contact: [
    { label: "Get in touch", href: "#" },
    { label: "Chat with us", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Newsroom", href: "#" },
  ],
  Purpose: [
    { label: "Responsible travel", href: "#" },
    { label: "Responsible business", href: "#" },
    { label: "B Corp", href: "#" },
    { label: "People", href: "#" },
    { label: "Planet", href: "#" },
    { label: "Wildlife", href: "#" },
  ],
};

export default function FootbarNav() {
  return (
    <nav className="w-full grid grid-cols-2 lg:grid-cols-4 place-content-around justify-items-center gap-y-6">
      {Object.entries(footbarNav).map((section, index) => {
        return <NavSection key={index} title={section[0]} links={section[1]} />;
      })}
    </nav>
  );
}

function NavSection({ title, links }: { title: string; links: FootbarLink[] }) {
  return (
    <div id="links" className="w-fit max-lg:text-center">
      <h3 className={latoSemiBold.className + " capitalize"}>{title}</h3>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className="block hover:text-green-400 my-2"
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
