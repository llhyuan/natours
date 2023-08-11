export default function SearchForm({ mobile }: { mobile: boolean }) {
  return (
    <div className={mobile ? "" : "hidden lg:block"}>
      <form action="/">
        <input
          type="text"
          placeholder="SEARCH TOURS"
          className={
            "appearance-none focus:outline-none bg-zinc-700 text-zinc-400 focus:text-white placeholder:text-zinc-500 border-zinc-400 focus:border-white border-solid border-b-[1px] px-8 " +
            (mobile ? "w-80 text-center placeholder:text-center" : "w-48")
          }
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}
