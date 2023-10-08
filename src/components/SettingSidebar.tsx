"use client";
import Link from "next/link";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { sidebarContext } from "@/app/(with_nav)/SidebarContextProvider";
import { usePathname } from "next/navigation";

const userSection = [
  [
    "settings",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
      className="fill-zinc-100"
      key={0}
    >
      <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
    </svg>,
  ],
  [
    "bookings",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
      className="fill-zinc-100"
      key={1}
    >
      <path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z" />
    </svg>,
  ],
  [
    "reviews",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 576 512"
      className="fill-zinc-100"
      key={2}
    >
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
    </svg>,
  ],
  [
    "billing",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 576 512"
      className="fill-zinc-100"
      key={3}
    >
      <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
    </svg>,
  ],
];

export default function SettingSidebar() {
  const { activeSection, setActiveSection } = useContext(sidebarContext);
  const [showSidebar, toggleSidebar] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const path = usePathname();

  useEffect(() => {
    const currentSection = path.slice(4);
    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  }, [path, setActiveSection, activeSection]);

  useEffect(() => {
    if (sidebarRef && sidebarRef.current) {
      if (showSidebar) {
        sidebarRef.current.classList.add("reveal-sidebar");
      } else {
        sidebarRef.current.classList.remove("reveal-sidebar");
      }
    }
  }, [showSidebar]);

  return (
    <div
      ref={sidebarRef}
      className="absolute min-w-[280px] md:relative flex flex-col py-10 bg-gradient-to-br from-[#7dd56f]/90 to-[#28b487]/90 rounded-sm shadow-[0.2rem_0.2rem_1rem_rgba(0,0,0,0.3)] left-[-280px] md:left-0 transition-all duration-300 ease-in-out"
    >
      {userSection.map((section, index) => {
        return (
          <SidebarComponent
            section={section[0] as string}
            activeSection={activeSection}
            key={index}
            toggleSidebar={toggleSidebar}
          >
            {section[1]}
          </SidebarComponent>
        );
      })}
      <div
        className={
          "pl-8 pr-4 py-4 absolute top-0 md:hidden bg-gradient-to-br from-[#7dd56f]/90 to-[#28b487]/90 shadow-[0.2rem_0.2rem_1rem_rgba(0,0,0,0.3)] rounded-sm transition-all duration-300 ease-in-out " +
          (showSidebar
            ? "right-[-4rem]"
            : "right-[-2.2rem] hover:right-[-4rem]")
        }
        onClick={() => {
          toggleSidebar(!showSidebar);
        }}
      >
        {showSidebar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2rem"
            viewBox="0 0 512 512"
            className="fill-zinc-100 rotate-180"
          >
            <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2rem"
            viewBox="0 0 512 512"
            className="fill-zinc-100"
          >
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
          </svg>
        )}
      </div>
    </div>
  );
}

function SidebarComponent(
  {
    section,
    children,
    activeSection,
    toggleSidebar,
  }: {
    children: ReactNode;
    activeSection: string;
    section: string;
    toggleSidebar: Dispatch<SetStateAction<boolean>>;
  },
  key: number,
) {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (indicatorRef && indicatorRef.current) {
      if (activeSection === section) {
        indicatorRef.current.classList.add("reveal-sidebar-indicator");
      } else {
        indicatorRef.current.classList.remove("reveal-sidebar-indicator");
      }
    }
  });
  return (
    <div key={key} className="flex overflow-hidden my-3">
      <div
        ref={indicatorRef}
        className="w-3 bg-white rounded-full relative left-[-12px] transition-all duration-150 ease-in-out"
      ></div>
      <div className="flex ml-6 md:ml-14 hover:translate-x-3 py-3 items-center transition-all duration-150 ease-in-out">
        <div className="mr-6 scale-125">{children}</div>
        <Link
          href={`/me/${section}`}
          className="uppercase text-zinc-100 text-[1.2rem] block"
          onClick={() => {
            toggleSidebar(false);
          }}
        >
          {section}
        </Link>
      </div>
    </div>
  );
}
