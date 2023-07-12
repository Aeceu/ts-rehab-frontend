import Link from "next/link";
import React from "react";

type ButtonProps = {
  url:string,
  text:string
  className?:string
}

const Button = ({ url, text,className }:ButtonProps) => {
  return (
    <Link
      href={url}
      className={ className + " border-none rounded-md py-2 px-4 w-max bg-[#35b953] text-[#efefef] font-semibold cursor-pointer"}
    >
      {text}
    </Link>
  );
};

export default Button;
