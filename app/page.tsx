import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import bg from "/public/bg.png";

const Home = () => {
  return (
    <div className="max-w-[1600px] w-full flex flex-row-reverse items-center justify-between gap-[100px] sm:px-16 px-0">
      <div className="relative md:opacity-100 opacity-50">
        <Image
        placeholder="blur"
        alt="image"
        src={bg}
        className="w-full h-[500px] object-cover object-center animate-moving"
        />
      </div>
      <div className="flex-1 flex flex-col gap-[50px] w-full md:relative right-0 md:text-left text-center absolute">
        <h1 className="text-[60px] sm:text-[100px] text_color ">Rehabify</h1>
        <p className="text-[25px]">
          Holistic Drug and Alcohol Rehabilitation and Improved Reintegration of
          Recovered Addicts in the Community
        </p>
        <div className="flex gap-8 justify-center md:justify-start">
          <Button url="/about" text="about us" />
          <Button url="/contact" text="contact us" />
        </div>
      </div>
    </div>
  );
};

export default Home;
