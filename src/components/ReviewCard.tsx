import Image from "next/image";
import { Lato } from "next/font/google";
import { Review, User } from "./customInterfaces";
import { fetchUsers } from "@/utilities/fetchUsers";
import { importCover } from "@/utilities/importImage";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

const latoItalic = Lato({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default async function ReviewCard({ review }: { review: Review }) {
  const result = await fetchUsers(review.user);
  const user: User = result.data.user[0];
  const name = user.name ?? "User Name";
  const img = importCover(`users/${user.photo ?? "default.jpg"}`);

  return (
    <div className="flex flex-col text-zinc-500 bg-zinc-100 p-12 max-w-[420px] min-w-[380px] min-h-[320px] rounded-md">
      <div
        className={
          latoBold.className + " flex items-center mb-4 w-fit mx-auto "
        }
      >
        <Image src={img} alt="user photo" width={60} className="rounded-full" />
        <p className="text-[1.3rem] pl-6">{name}</p>
      </div>
      <div className="flex items-center w-fit mx-auto mb-4">
        <svg
          className="w-6 h-6 text-yellow-300 mr-1 relative bottom-[1px]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <p className={latoBold.className + " text-[1.1rem] mr-4"}>
          {review.rating}
        </p>
        <p>{`Posted on ${review.createdAt.slice(0, 10)}`}</p>
      </div>
      <p className={latoItalic.className + " text-[1.1rem] my-auto"}>
        {review.review}
      </p>
    </div>
  );
}
