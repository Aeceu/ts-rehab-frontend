import Image from "next/image";
import Button from "@/components/Button";
import pic from "public/bg3.png";
const contact = () => {
  return (
    <div className="max-w-[1600px] w-full flex flex-col items-center justify-center gap-4 px-4">
      <h1 className=" text_color text-center w-full lg:text-[80px] text-[60px]">
        Let&apos;s keep in touch
      </h1>

      <div className="w-full flex relative justify-between items-center gap-[100px]">
        {/* Image */}
        <div className="flex-1 w-[500px] h-[500px] relative animate-moving lg:flex hidden">
          <Image
            
        loading="lazy"
            src={pic}
            alt="image"
            fill={true}
            className="object-cover"
          />
        </div>

        {/* form */}
        <form className="flex-1 flex flex-col gap-4 py-8  ">
          {/* NAME */}
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="w-full p-5  outline-none bg-transparent border-[3px] border-[#333] text-[20px] text-inherit"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              className="w-full p-5  outline-none bg-transparent border-[3px] border-[#333] text-[20px] text-inherit"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id=""
              cols={30}
              rows={10}
              placeholder="message"
              className="w-full p-5  outline-none bg-transparent border-[3px] border-[#333] text-[20px] text-inherit"
            ></textarea>
          </div>

          {/* Button */}
          <Button url="/" text="send" />
        </form>
      </div>
    </div>
  );
};

export default contact;
