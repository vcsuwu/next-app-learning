import MyButton from "@/components/Button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed flex h-12 w-screen items-center justify-between bg-white text-black">
      <div className="flex w-screen items-center justify-between">
        <div className="pl-4 text-lg font-bold">vocus.dev</div>
        <div className=" flex items-center justify-center pr-4">
          <MyButton>
            <Image src={"/menu.svg"} width={32} height={32} alt="menu"></Image>
          </MyButton>
        </div>
      </div>
    </nav>
  );
}
