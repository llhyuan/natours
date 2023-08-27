"use client";
import { usePathname, useRouter } from "next/navigation";

export default function SearchForm({ mobile }: { mobile: boolean }) {
  const path = usePathname();
  const router = useRouter();
  return (
    <div className={mobile ? "" : "hidden lg:block"}>
      <form action="/">
        <input
          type="text"
          placeholder="Search Tours"
          className={
            "appearance-none focus:outline-none bg-zinc-700 text-zinc-400 text-center placeholder:text-zinc-500 border-zinc-400 border-[1px] p-1 rounded-md focus:border-zinc-200 focus:bg-zinc-200 focus:text-zinc-800 border-solid " +
            (mobile ? "w-[19rem] placeholder:text-center" : "w-52")
          }
          onChange={() => {
            if (!path.endsWith("search")) {
              router.push("/tours/search");
            }
          }}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}
