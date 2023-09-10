import { Guide } from "@Global/custom-types";
import Image from "next/image";
import { cookies } from "next/headers";
import { getCookieString } from "@/utilities/cookieString";
import { importCover } from "@/utilities/importImage";

export default async function GuideInfo({
  guide,
  view,
}: {
  guide: Guide;
  view: string;
}) {
  const name = guide.name;
  const cookieStr: string = getCookieString(cookies().getAll());
  const result = await fetch(`${process.env.SERVER_HOST}/api/userinfo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStr,
    },
    body: JSON.stringify({ id: guide.id }),
    credentials: "include",
  });

  const resData = await result.json();
  console.log(resData);
  const user = resData.data.user;
  const url: string = `users/${user.photo ?? "default.jpg"}`;

  const img = await importCover(url);

  return (
    <div className="flex my-2 w-fit justify-center items-center pl-2">
      <Image
        src={img}
        alt="user photo"
        width={50}
        height={50}
        className="rounded-full"
      />
      <p
        className={
          "ml-4 sm:ml-6 w-[7rem] lg:w-[7.7rem] text-left capitalize " +
          (view === "booking" ? "hidden" : "")
        }
      >
        {user.role}
      </p>
      <p className="pl-4 capitalize">{name}</p>
    </div>
  );
}
