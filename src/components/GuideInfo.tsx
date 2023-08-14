import { Guide } from "./customInterfaces";
import { fetchUsers } from "@/utilities/fetchUsers";
import Image from "next/image";
import { importCover } from "@/utilities/importImage";

export default async function GuideInfo({ guide }: { guide: Guide }) {
  const name = guide.name;
  const result = await fetchUsers(guide.id);
  const user = result.data.user[0];
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
      <p className="ml-4 sm:ml-6 w-[7rem] lg:w-[7.7rem] text-left capitalize">
        {user.role}
      </p>
      <p className="pl-4 capitalize">{name}</p>
    </div>
  );
}
