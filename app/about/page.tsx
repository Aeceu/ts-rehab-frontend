import HeadLink from "@/components/HeadLink";
import Image from "next/image";
import pic1 from "public/bg4.jpg";
import Reveal from "@/components/Reveal";
const about = () => {
  return (
    <div className="w-full max-w-[1600px] flex justify-between flex-col gap-8 md:px-[60px] px-5 overflow-hidden">
      <HeadLink name="About" />

      <div className="relative w-full h-[300px]">
        <Image
          // as="image"
          placeholder="blur"
          src={pic1}
          alt="image"
          fill={true}
          className="object-cover object-center"
        loading="lazy"
        />
        <div className="absolute bg-[#53c28b] p-3 text-[#efefef]  md:bottom-5 md:left-5 bottom-5 left-0 md:w-auto w-full ">
          <h1 className="md:text-2xl text-1xl font-semibold">
            Let us at Rehabify help you throughout your addiction
          </h1>
        </div>
      </div>

      <div className="flex xl:gap-[70px] gap-[30px] xl:flex-row flex-col ">
        <Reveal className="flex-1 flex flex-col gap-[30px]">
          <h1 className="text-2xl font-semibold text-[#ff6347]">Who are we?</h1>
          <Reveal className="text-justify font-semibold">
            We are group 7, Composed of Fernando Jose Acebuche, Steven Glen
            Dalaygon, Renzybert Rotaquio, Justphine De Vera, and Czarina Mae
            Frias Señadan.
            <br />
            <br />
            We are second-year Computer Science students at EARIST (Eulogio
            &quot;Amang&quot; Rodriguez Institute of Science and Technology)
            currently taking up Computer Science.
            <br />
            <br />
            Our group shares a passion for technology and the endless
            possibilities it offers. With our combined skills in programming,
            design, and analysis, we aim to create innovative solutions to
            various problems.
          </Reveal>
        </Reveal>

        <Reveal className="flex-1 flex flex-col gap-[30px]">
          <h1 className="text-2xl font-semibold text-[#ff6347]">Mission</h1>
          <Reveal className="text-justify font-semibold">
            At Rehabify, our mission is to provide a comprehensive and
            personalized rehabilitation system that empowers individuals to take
            control of their physical, mental, and emotional well-being.
            <br />
            <br />
            Through our platform, we strive to offer support, guidance, and
            resources to those struggling with addiction, enabling them to
            overcome their challenges and achieve lasting recovery.
          </Reveal>
        </Reveal>

        <Reveal className="flex-1 flex flex-col gap-[30px]">
          <h1 className="text-2xl font-semibold text-[#ff6347]">Vision</h1>
          <Reveal className="text-justify font-semibold">
            We envision a world where all individuals, regardless of their
            circumstances, have access to quality rehabilitation services that
            promote independence, improve functionality, and enhance their
            overall quality of life.
            <br />
            <br />
            By leveraging technology and employing evidence-based approaches, we
            aim to break down barriers and create a supportive environment that
            fosters growth, healing, and lasting positive change.
          </Reveal>
        </Reveal>
      </div>
    </div>
  );
};

export default about;
