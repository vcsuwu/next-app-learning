import Image from "next/image";
import Icon from "@mdi/react";
import { mdiReact, mdiLanguageJavascript, mdiTailwind  } from "@mdi/js";

export default function About() {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">About me</h1>
      <p className="mt-4">I'm a beginner at web industry, but still</p>
      <p>i can pull of good products!</p>
      <h2 className="mt-8 text-4xl font-bold">My tech stack:</h2>
      <div className="mt-10 flex flex-row gap-12">
        <Icon path={mdiReact} size={3} color="rgb(20 158 202)" />
        <Icon path={mdiLanguageJavascript} size={3} color="rgb(240 219 79)" />
        <Icon path={mdiTailwind} size={3} color="rgb(56 189 248)" />
      </div>
    </section>
  );
}
