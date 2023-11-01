import Image from "next/image";
import { latoBold, latoSemiBoldItalic } from "@/app/fonts";
import { Review, User } from "@Global/custom-types";
import { fetchUsers } from "@/utilities/fetchUsers";
import { importCover } from "@/utilities/importImage";

export default async function ReviewCard({ review }: { review: Review }) {
  const result = await fetchUsers(review.user);
  const user: User = result[0];
  const name = user.name ?? "User Name";
  let img: string;
  if (user.photo.startsWith("http")) {
    img = user.photo;
  } else {
    img = importCover(`users/${user.photo ?? "default.jpg"}`);
  }
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col text-zinc-500 bg-zinc-100 p-12 max-w-[420px] min-w-[380px] min-h-[320px] rounded-md snap-center">
      <div className="flex items-center mb-4 w-fit mx-auto ">
        <Image
          src={img}
          alt="user photo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="pl-6">
          <p className={latoBold.className + " text-[1.3rem]"}>{name}</p>
          <p
            className={latoSemiBoldItalic.className + " text-zinc-400 pl-2"}
          >{`Posted on ${review.createdAt.slice(0, 10)}`}</p>
        </div>
      </div>
      <p className={latoSemiBoldItalic.className + " text-[1.1rem] my-4"}>
        {review.review}
      </p>

      <div className="flex items-center w-fit mx-auto my-4">
        {stars.map((star, index) => {
          return (
            <svg
              className={
                "w-6 h-6 mr-1 relative bottom-[1px] " +
                (star <= review.rating ? "text-yellow-300" : "text-zinc-400")
              }
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
              key={index}
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          );
        })}
      </div>
    </div>
  );
}
