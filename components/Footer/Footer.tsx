import Image from "next/image";
import fb from "public/fb.png";
import insta from "public/insta.png";
import twitter from "public/twitter.png";
import yt from "public/yt.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex md:flex-row flex-col justify-between items-center px-[100px] py-8">
      <div className="flex flex-col sm:flex-row items-center text-[16px] gap-1 text-slate-600">
        @2023 <p className="text-[#25b953]">Rehabify.</p> All right reserved.
      </div>
      <div className="flex">
        <Link href="https://facebook.com/" rel="noopener noreferrer" target="_blank" passHref>
          <div className="opacity-70 cursor-pointer">
            <Image
              
        loading="lazy"
              src={fb}
              alt="fb"
              width={30}
              height={30}
            />
          </div>
        </Link>
        <Link href="https://instagram.com/" rel="noopener noreferrer" target="_blank" passHref>
          <div className="opacity-70 cursor-pointer">
            <Image
        loading="lazy"
              src={insta}
              alt="insta"
              width={30}
              height={30}
            />
          </div>
        </Link>
        <Link href="https://twitter.com/" rel="noopener noreferrer" target="_blank" passHref>
          <div className="opacity-70 cursor-pointer">
            <Image
        loading="lazy"
              src={twitter}
              alt="twitter"
              width={30}
              height={30}
            />
          </div>
        </Link>
        <Link href="https://youtube.com/" rel="noopener noreferrer" target="_blank" passHref>
          <div className="opacity-70 cursor-pointer">
            <Image
        loading="lazy"
              src={yt}
              alt="yt"
              width={30}
              height={30}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
