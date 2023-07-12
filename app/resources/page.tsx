import HeadLink from "@/components/HeadLink"
import Books from "../../Data/Books.json";
import Image from "next/image";

function page() {
  return (
    <div className="max-w-[1600px] flex flex-col gap-14 lg:px-[60px] px-[10px] justify-center ">
      <header>
        <HeadLink name="Resources" />
      </header>
        <div className="flex gap-8 flex-wrap items-center justify-center ">
          {
            Books.map((book)=>{
              return(
                <div className="w-[250px] h-[350px] relative flex flex-col justify-center  shadow-lg hover:scale-[110%] transition duration-500 hover:z-10" key={book.id}>
                  <div className="relative h-3/4 overflow-hidden"
                  >
                  <Image
                  blurDataURL="blur"
                  alt="image"
                  src={book.image }
                  fill={true}
                  className="rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  </div>
                  <div className="h-1/4 w-full flex flex-col justify-center items-center text-center p-2 text-[.9rem]  border-x-[1px] border-b-[1px] border-[#242424] rounded-b-lg gap-2">
                  <h1 className="">{book.title}</h1>
                  <a 
                  rel="noopener noreferrer" 
                  target="_blank"
                  href={book.url}
                  className="border-[1px] border-[#242424] rounded-xl px-2 py-1"
                  >read book</a>
                  </div>
                </div>
              )
            })
          }
        </div>
        
    </div>
  )
}

export default page