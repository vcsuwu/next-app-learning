import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Contact me</h1>
      <div className="mt-4">My social links:</div>
      <ul className="flex flex-row mt-4 gap-4">
        <li>
          <Link href={"#"}>
            <Image
              src={"/tg_icon.svg"}
              width={50}
              height={50}
              alt="github"
            ></Image>
          </Link>
        </li>
        <li>
          <Link href={"https://vk.com/robloxanimepro"}>
            <Image
              src={"/vk_icon.svg"}
              width={50}
              height={50}
              alt="github"
            ></Image>
          </Link>
        </li>
      </ul>
    </section>
  );
}
