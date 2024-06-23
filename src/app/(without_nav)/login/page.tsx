import LoginForm from "@/components/LoginForm";
import { latoExtraBold } from "../../fonts";

export default function Login() {
  return (
    <>
      <div className="flex items-center w-[100vw] justify-center h-full">
        <LoginForm />
      </div>
      <div
        className={
          latoExtraBold.className + " hidden lg:block flex-1 pr-[10vw] relative"
        }
      >
        <p className="relative top-[50vh] bg-gradient-to-br text-transparent bg-clip-text from-[#7dd56f]/90 to-[#28b487] text-[5.8vw] uppercase">
          Adventure
        </p>
        <p className="relative top-[50vh] right-[-12vw] bg-gradient-to-br text-transparent bg-clip-text from-[#7dd56f]/90 to-[#28b487] text-[6.5vw] uppercase">
          awaits.
        </p>
      </div>
    </>
  );
}
