import Image from "next/image";
import React from "react";

const Headline = ({ children }) => (
  <h1 className="font-cursive animate-fade-in-down text-6xl transition-all text-teal-50 mix-blend-exclusion">
    {children}
  </h1>
);

const Arrow = (
  <div className="animate-bounce absolute bg-teal-50 p-2 w-10 h-10 ring-1 shadow-lg rounded-full bottom-20 transition-all">
    <svg
      className="w-6 h-6 text-slate-800 "
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
);

export default function Landing() {
  const [collectionSwitch, setCollectionSwitch] = React.useState(false);
  const [yearSwitch, setYearSwitch] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setCollectionSwitch(true);
      setTimeout(() => {
        setYearSwitch(true);
      }, 1000);
    }, 1000);
  }, []);

  return (
    <div className="bg-slate-800 h-screen flex justify-center">
      <div className="mt-[10vh] flex flex-col items-start z-10 w-[360px]">
        <Headline>NEW</Headline>
        {collectionSwitch && <Headline>COLLECTION</Headline>}
        {yearSwitch && <Headline>2022</Headline>}
      </div>
      <Image src="/images/clothes1.jpg" alt="clothes hanging" layout="fill" className="absolute" />
      {yearSwitch && Arrow}
    </div>
  );
}
