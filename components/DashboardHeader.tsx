import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { useCookies } from 'react-cookie';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { FaUser } from 'react-icons/fa';


const DashboardHeader = () => {
  const { mode } = useContext(ThemeContext);
  const [cookies, setCookies] = useCookies(['access_token']);
  const color = mode === 'light' ? 'black' : 'white';

  const logout = () => {
    setCookies('access_token', '');
    window.localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    // This effect will run whenever the `access_token` cookie changes
    // You can add any additional logic or side effects here

  }, [cookies.access_token]);

  return (
    <header className={`flex justify-between items-center border-[1px]  border-${color} shadow-lg p-4 rounded-md border-opacity-10 `}>
      <div className="text-slate-500 flex flex-col gap-2 text-[.90rem]">
        <h1 className="text-3xl font-bold tracking-tight text_color">Dashboard</h1>
        <div className="flex gap-2">
          <Link href="/">Home</Link>
          <p>/ Our Dashboard</p>
        </div>
      </div>
      {!cookies.access_token ? (
        <div className={` gap-4 flex`}>
          <Button
            variant="outline"
            className={`font-semibold text-inherit border-[1px] 
              border-${color} border-opacity-50 
              ${color === 'black' ? 'hover:bg-black hover:text-white hover:border-white' : ''}`}
          >
            <Link href="/log-in">Log in</Link>
          </Button>
          <Button
            variant="outline"
            className={`font-semibold text-inherit border-[1px] 
              border-${color} border-opacity-50 
              ${color === 'black' ? 'hover:bg-black hover:text-white hover:border-white' : ''}`}
          >
            <Link href="/sign-in">Sign up</Link>
          </Button>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <p className={`text-[.8rem] ${color === 'black' ? 'text-black' : 'text-gray-300'}`}>email</p>
          <DropdownMenu>
            <DropdownMenuTrigger className={` text-2xl rounded-full border-2 border-slate-500 p-2 `}>
              <div>
                <FaUser />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={logout}>
                <h1>Sign-out</h1>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
