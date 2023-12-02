import Image from "next/image";

export default function About() {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">About me</h1>
      <p className="mt-4">I'm a beginner at web industry, but still</p>
      <p>i can pull of good products!</p>
      <h2 className="mt-8 text-4xl font-bold">My tech stack:</h2>
      <div className="mt-10 flex flex-row gap-12">
        <Image
          src={"/react_icon.svg"}
          width={50}
          height={50}
          alt="react"
        ></Image>
        <Image
          src={"/react_icon.svg"}
          width={50}
          height={50}
          alt="react"
        ></Image>
        <Image
          src={"/react_icon.svg"}
          width={50}
          height={50}
          alt="react"
        ></Image>
      </div>
    </section>
  );
}
