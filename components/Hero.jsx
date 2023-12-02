import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex justify-center h-screen flex-col items-center">
      <h2 className="text-center text-3xl font-bold">Eugene</h2>
      <h1 className="mt-2 text-center text-4xl font-bold">
        A Front-End Web Developer
      </h1>
      <Image
        src={"https://github.com/vcsuwu.png"}
        width={200}
        height={200}
        alt="pfp"
        className="mt-10 rounded-full"
      ></Image>
      <p className="mt-10 text-center text-4xl font-bold">
        Creating a new expirience
      </p>
      <p className="mt-2 text-center text-4xl font-bold">in the web</p>
    </section>
  );
}
