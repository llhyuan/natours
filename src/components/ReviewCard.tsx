import Image from "next/image";
import img from "../../public/img/users/default.jpg";
import { Lato } from "next/font/google";

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

export default function ReviewCard() {
  return (
    <div className="text-zinc-500 bg-zinc-100 p-12 max-w-[380px] min-w-[380px] rounded-md">
      <div
        className={latoBold.className + " flex items-center mb-8 w-fit mx-auto"}
      >
        <Image src={img} alt="user photo" width={60} className="rounded-full" />
        <p className="text-[1.3rem] px-8">User Name</p>
      </div>

      <p className={latoItalic.className + " text-[1.1rem]"}>
        Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
        reiciendis provident deleniti cumque similique itaque animi, sapiente
        obcaecati beatae accusantium.
      </p>
    </div>
  );
}
