"use client";
import { usePathname, useRouter } from "next/navigation";
import { searchContext } from "@/app/(with_nav)/SearchContextProvider";
import { useContext } from "react";

export default function SearchForm({ mobile }: { mobile: boolean }) {
  const { searchParams, setSearchParams } = useContext(searchContext);

  const path = usePathname();
  const router = useRouter();
  console.log(path);
  return (
    <div className={path === "/" ? "hidden" : mobile ? "" : "hidden lg:block"}>
      <form>
        <input
          type="text"
          placeholder="Search Tours"
          value={searchParams.value}
          className={
            "appearance-none focus:outline-none bg-zinc-700 text-zinc-400 text-center placeholder:text-zinc-500 border-zinc-400 border-[1px] px-1 py-[0.09rem] rounded-sm focus:border-zinc-200 focus:bg-zinc-200 focus:text-zinc-800 border-solid " +
            (mobile ? "w-[19rem] placeholder:text-center" : "w-52")
          }
          onChange={(e) => {
            setSearchParams({
              ...searchParams,
              value: e.target.value,
              submit: true,
            });
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
