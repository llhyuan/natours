import ChangePassword from "@/components/ChangePassword";
import ChangeUserInfo from "@/components/ChangeUserInfo";

export default function Settings() {
  const email = "safew";
  const name = "wdfgwe";
  return (
    <div className="">
      <ChangeUserInfo name={name} email={email} />
      <div
        aria-hidden={true}
        className="border-gray-300 border-t-[1px] border-solid "
      ></div>
      <ChangePassword />
    </div>
  );
}
