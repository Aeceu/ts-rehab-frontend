import Reveal from "@/components/Reveal";
import { FaStar } from "react-icons/fa";
import HeadLink from "@/components/HeadLink";

const Acts = [
  {
    text: "Regular meetings and discussions for addressing and resolving personal challenges and evaluating behavior.",
  },
  {
    text: "Coping skills workshops that provide essential tools for managing triggers and are assessed for effectiveness.",
  },
  {
    text: "Community government framework that establishes a structured environment with collective decision-making for the community's greater good.",
  },
  {
    text: "Shared responsibility and community problem-solving, fostering accountability and teamwork.",
  },
  {
    text: "Open communication through dialogues and constructive confrontation to promote understanding and growth.",
  },
  {
    text: "Group therapy sessions focusing on identifying and understanding the connection between negative emotions and destructive behaviors, as well as developing resolutions.",
  },
  {
    text: "Regular feedback on individual behavior to ensure ongoing progress and support in the recovery journey.",
  },
];
const services = () => {
  return (
    <div className="max-w-[1600px] flex flex-col gap-14 lg:px-[60px] px-[10px] justify-center overflow-hidden">
      {/* header */}
      <HeadLink name="Service" />
      {/* main content */}
      <div className="flex flex-col gap-8">
        <p className="w-full font-semibold text-justify">
          Rehabify primary objective is to facilitate successful reintegration
          of former substance abusers back into society, while adopting a
          holistic approach to rehabilitation. By incorporating medical,
          psychological, and social interventions, it empowers recovered
          individuals to become functional members of the wider community.
          <br />
          <br />
          Within this system, residents engage in a variety of therapeutic
          activities and services that foster growth and healing, including:
        </p>
        {Acts.map((act, index) => (
          <Reveal key={index} className="flex items-center gap-3">
            <FaStar className="text-[#ff6347] text-[40px] animate-rotating" />
            <p className="w-full font-semibold text-justify">{act.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default services;
