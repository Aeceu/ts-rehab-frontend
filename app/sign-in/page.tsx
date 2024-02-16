"use client";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoadig] = useState(false);
  const router = useRouter();

  const { mode } = useContext(ThemeContext);
  const color = mode === "light" ? "border-black" : "border-white";

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoadig(true);
      const baseUrl = "https://ts-rehab-backend.vercel.app";
      const res = await axios.post(`${baseUrl}/user/register`, {
        email,
        password,
      });
      console.log(res);
      alert("Registered Complete!");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setLoadig(false);
    }
  };

  return (
    <div className="w-full max-w-[1600px] flex items-center justify-center ">
      <form
        onSubmit={onSubmit}
        className={`flex flex-col gap-8 p-8 border-2 ${color} rounded-md`}
      >
        <h1 className="w-full text-center text-3xl">SIGN UP AN ACCOUNT</h1>
        <div className="flex flex-col gap-1 w-full ">
          <label htmlFor="email" className="text-[.9rem]">
            Email:
          </label>
          <input
            type="text"
            placeholder="email"
            className="rounded-md px-4 py-2 outline-none text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password" className="text-[.9rem]">
            Password:
          </label>
          <input
            type="password"
            placeholder="password"
            className="rounded-md px-4 py-2 outline-none text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          disabled={loading}
          type="submit"
          variant="outline"
          className={`font-semibold text-inherit border-[1px] ${color} border-opacity-50 ${
            color === "border-black"
              ? "hover:bg-black hover:text-white hover:border-white"
              : ""
          }`}
        >
          {loading ? "Loading...." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
