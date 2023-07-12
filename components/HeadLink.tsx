import Link from "next/link";

type HeadLinkProps ={
  name:string
}

const HeadLink = ( {name}:HeadLinkProps ) => {
  return (
    <div className="flex flex-col gap-8 ">
      <h1 className={`text_color sm:text-[80px] text-[55px] `}>{name}</h1>
      <div className="text-slate-500 flex gap-4">
        <Link href="/">Home</Link>
        <p>/ Our {name}</p>
      </div>
    </div>
  );
};

export default HeadLink;
