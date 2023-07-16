"use client"
import { useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import { FaUser } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Tabs,
  TabsTrigger,
  TabsList,
  TabsContent 
} from '@/components/ui/tabs'

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useCookies } from 'react-cookie';
import React, { useContext } from 'react';
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { useGetUserID } from '@/hooks/useGetUserID';
import axios from 'axios';
import TableTask from '@/components/Table';


const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [cookies, setCookies] = useCookies(['access_token']);
  const { mode } = useContext(ThemeContext);
  const color = mode === 'light' ? 'black' : 'white';
  const [isClient, setIsClient] = useState(false);
  const id = useGetUserID();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id === null) {
          return;
        }
        const res = await axios.get(`https://ts-rehab-api.onrender.com/${id}`||`http://localhost:4200/user/${id}`);
        setUserData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const logout = () => {
    setCookies('access_token', '');
    window.localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  

  return (
    <div className="w-full  max-w-[1600px] justify-start flex flex-col gap-8 p-4">
      {isClient && (
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
              <h1 className={`text-[.8rem] ${color === 'black' ? 'text-black' : 'text-gray-300'}`}>{userData?.email}</h1>
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
      )}
      {isClient && (
        <>
          {!cookies.access_token ? (
            <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-3">
              <Card className={`text-inherit bg-inherit border-[1px] border-${color} shadow-lg border-opacity-10 relative rounded-md`}>
                <CardHeader>
                  <CardTitle>
                    Physical and Mental Therapy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Addresses both the physical and mental aspects of recovery and reintegration. It helps restore physical function, manage pain, and improve overall well-being, while also providing a safe space to address addiction and mental health challenges, equipping individuals with coping strategies and fostering emotional well-being.</p>
                </CardContent>
              </Card>
              <Card className="text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10 relative">
                <CardContent className="w-full h-full flex flex-col justify-center items-start gap-16 py-8 relative">
                  <Image
                    alt="image"
                    src="/contact.jpg"
                    fill={true}
                    blurDataURL="blur"
                    className="object-center object-cover rounded-md"
                  />
                  <CardTitle className="z-10 w-full text-center md:text-1xl lg:text-2xl text-white font-semibold">
                    We, at Rehabify can help you throughout your journey
                  </CardTitle>
                  <CardDescription className="z-10 w-full flex gap-8 justify-center items-center">
                    <Link href="/contact" className={cn(buttonVariants(), "bg-[#eb4a2e] hover:bg-[tomato]")}>
                      Contact us
                    </Link>
                    <Link href="/about" className={cn(buttonVariants(), " bg-blue-700 hover:bg-blue-600")}>
                      About us
                    </Link>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className={`text-inherit bg-inherit border-[1px] border-${color} shadow-lg border-opacity-10 relative rounded-md`}>
                <CardHeader>
                  <CardTitle>
                    Speech and Occupational Therapy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Combines speech therapy and occupational therapy to support recovery and successful reintegration. It improves communication skills, addressing speech and language difficulties caused by substance abuse. Additionally, it helps individuals develop life skills, regain independence, and find purpose, enhancing functional abilities and facilitating successful reintegration into the community.</p>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className='flex flex-col gap-8'>
              <div className="grid gap-3 lg:grid-cols-1 xl:grid-cols-3">
              <Tabs  defaultValue="physical" className={`w-full bg-inherit text-inherit   flex flex-col gap-4 border-[1px] rounded-md`}>
                <TabsList className='w-full bg-inherit text-inherit border-[1px] border-slate-400 gap-2'>
                  <TabsTrigger className={`w-full ${color === 'black'? "data-[state=active]:bg-black data-[state=active]:text-white":"data-[state=active]:bg-background data-[state=active]:text-foreground"}`} value='physical'>Physical Well-Being</TabsTrigger>
                  <TabsTrigger className={`w-full ${color === 'black'? "data-[state=active]:bg-black data-[state=active]:text-white":"data-[state=active]:bg-background data-[state=active]:text-foreground"}`} value='mental'>Mental Well-Being</TabsTrigger>
                </TabsList>
                  <TabsContent value='physical'>
                    <p className='p-2 text-justify'>
                    Taking care of your body is an essential aspect of your recovery journey. Engaging in activities that promote physical well-being can help restore balance and support your overall health. Regular physical exercise helps improve cardiovascular fitness, release endorphins, and reduce stress. Embracing healthy eating habits provides your body with vital nutrients and supports its healing process.
                    </p>
                  </TabsContent>
                  <TabsContent value='mental'>
                    <p className='p-2 text-justify'>
                    Mental and Emotional Well-being Activities: Nurture your mind and emotions to foster personal growth and resilience. Explore the power of reading, journaling, engaging in creative hobbies, continuous learning, setting meaningful goals, and cultivating gratitude. These activities promote self-reflection, emotional expression, and overall well-being, supporting your journey towards lasting recovery.
                    </p>
                  </TabsContent>
              </Tabs>

              <Card className="text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10 relative">
                <CardContent className="w-full h-full flex flex-col justify-center items-start gap-16 py-8 relative">
                  <Image
                    alt="image"
                    src="/contact.jpg"
                    fill={true}
                    blurDataURL="blur"
                    className="object-center object-cover rounded-md"
                  />
                  <CardTitle className="z-10 w-full text-center md:text-1xl lg:text-2xl text-white font-semibold">
                    We at Rehabify can help you throughout your journey
                  </CardTitle>
                  <CardDescription className="z-10 w-full flex gap-8 justify-center items-center">
                    <Link href="/contact" className={cn(buttonVariants(), "bg-[#eb4a2e] hover:bg-[tomato]")}>
                      Contact us
                    </Link>
                    <Link href="/about" className={cn(buttonVariants(), " bg-blue-700 hover:bg-blue-600")}>
                      About us
                    </Link>
                  </CardDescription>
                </CardContent>
              </Card>

              <Tabs defaultValue='psychological' className={`w-full bg-inherit text-inherit   flex flex-col gap-4 border-[1px] rounded-md`}>
                <TabsList className='w-full bg-inherit text-inherit border-[1px] border-slate-400 gap-2'>
                  <TabsTrigger className={`w-full ${color === 'black'? "data-[state=active]:bg-black data-[state=active]:text-white":"data-[state=active]:bg-background data-[state=active]:text-foreground"}`} value='psychological'>Psychological Well-Being</TabsTrigger>
                  <TabsTrigger className={`w-full ${color === 'black'? "data-[state=active]:bg-black data-[state=active]:text-white":"data-[state=active]:bg-background data-[state=active]:text-foreground"}`} value='social'>Social Well-Being</TabsTrigger>
                </TabsList>
                  <TabsContent value='psychological'>
                    <p className='p-2 text-justify'>
                    Focus on nurturing your psychological well-being to enhance self-awareness and inner strength. Engage in mindfulness and meditation practices to cultivate present-moment awareness and reduce stress. Develop a self-care routine that addresses your emotional needs. Embrace socializing and volunteer work to foster a sense of purpose and connection.
                    </p>
                  </TabsContent>
                  <TabsContent value='social'>
                    <p className='p-2 text-justify'>
                    Embrace the power of social connections to enhance your well-being and support your recovery journey. Engage in group therapy and support groups to share experiences, gain support, and build a network of understanding individuals. Participate in family therapy to mend relationships and foster communication. Take part in recreational activities and outings to promote socialization, enjoyment, and a sense of belonging.
                    </p>
                  </TabsContent>
              </Tabs>
              
              </div>
              {userData && <TableTask pending={userData.uncomplete_task} completed={userData.complete_task} todos={userData.Todos} />}
              
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
