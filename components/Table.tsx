"use client"
import Link from 'next/link'
import React, {useState,useEffect, useContext} from 'react'
import axios from 'axios';
import { 
  Tabs,
  TabsTrigger,
  TabsList,
  TabsContent 
} from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import Tasks from '@/components/Tasks'
import UsersCard from "@/components/UsersCard";

import { ThemeContext } from '@/context/ThemeContext'


async function getData() {
  // Fetch data from the appropriate API route.
  try {
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
    const res = await axios.get(`${baseUrl}/user`);
    return res.data;
  } catch (error) {
    console.error(error);
  }

}


export default function TableTask() {
  const [currentuser,setCurrentUser] = useState<any>(null);
  const [Post, setPost] = useState({title:"", description:""});
  const [datas, setDatas] = useState<any[]>([]);

  const [newuser, setNewUser] = useState<String>('');
  const [newemail,setNewEmail] = useState<String>('');

  
  const {mode} = useContext(ThemeContext)
  const color = mode === 'light' ? 'black' : 'white';

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await getData();
      setDatas(data);
      
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
  
}, []);


const handleClick = (index: any) => {
  setCurrentUser(index);
  console.log(index);
  
};


const handleNewDataSubmit = async (e:React.FormEvent,userID:String) =>{
  e.preventDefault();
  let name = currentuser.name;
  const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
  await axios.post(`${baseUrl}/user/tasks`,{name,Post})
  setPost({title:"",description:""});
  window.location.reload();
}

const handleUpdateData = async (id:any,title:String,description:String)=>{
    try 
    {
      const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
      const res =  await axios.put(`${baseUrl}/user`,{id,title,description})    
      const data = await res.data;
      setPost({ title: data.title, description: data.description });
   } 
   catch (error) 
   {
      console.error(error);
   } 
   window.location.reload();
   
};

const deleteData = async (userID:String,postID:String) => {
  try {
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
    await axios.delete(`${baseUrl}/user/tasks`,{data:{userID,postID}})
  } catch (error) {
    console.error(error);
  }
  window.location.reload();
};

const deleteUser = async (userID:any)=>{
  try {
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
    await axios.delete(`${baseUrl}/user`,{data:{userID}})
  } catch (error) {
    console.error(error);
  }
  window.location.reload();
};

const handleNewUser = async (name:String,email:String) => {
  try {
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
    await axios.post(`${baseUrl}/user`,{name,email})
  } catch (error) {
    console.error(error);
  }
  window.location.reload();
}

  return (
    <main className='flex flex-col gap-4'>
    {/* Cards */}
      <div className='grid gap-3 md:grid-cols-1 lg:grid-cols-3'>
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
        <Card className='text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10 relative'>
          <CardContent className='w-full h-full flex flex-col justify-center items-start gap-16 py-8 relative'>
          <Image
          alt='image'
          src="/contact.jpg"
          fill={true}
          blurDataURL='blur'
          className='object-center object-cover rounded-md'/>
            <CardTitle className=' z-10 w-full text-center md:text-1xl lg:text-2xl text-white font-semibold'>
              We, at Rehabify can help you throughout your journey
            </CardTitle>
            <CardDescription className='z-10 w-full flex gap-8 justify-center items-center'>
              <Link href="/contact" className={cn(buttonVariants(),"bg-[#eb4a2e] hover:bg-[tomato]")}>Contact us</Link>
              <Link href="/about" className={cn(buttonVariants()," bg-blue-700 hover:bg-blue-600")}>About us</Link>
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
        </Card >
      </div>

      <div className='flex gap-4 lg:flex-row flex-col-reverse'>
      {/*  Table that display the todo list of the user */}
        <div className='w-full h-full'>
          <Tabs defaultValue="task" className={`bg-inherit text-inherit   flex flex-col gap-4`}>
            <TabsList className='bg-inherit text-inherit border-[1px] border-slate-400 w-max'>
              <TabsTrigger value='task'>Tasks</TabsTrigger>
              <TabsTrigger value='graphs'>Graph</TabsTrigger>
            </TabsList>
            <TabsContent value='task'>
              <Tasks
              currentuser={currentuser}
              Post={Post}
              setPost={setPost}
              handleUpdateData={handleUpdateData}
              deleteData={deleteData}
              handleNewDataSubmit={handleNewDataSubmit}/>
            </TabsContent>
            <TabsContent value='graphs'>
              <h1>Graph...?</h1>
            </TabsContent>
          </Tabs>
        </div>

        <div className='w-full lg:w-1/3 h-full'>
          <UsersCard
          datas={datas}
          handleClick={handleClick}
          deleteUser={deleteUser}
          handleNewUser={handleNewUser}
          setNewUser={setNewUser}
          setNewEmail={setNewEmail}
          newuser={newuser}
          newemail={newemail}
          />
        </div>
      </div>
  </main>
    )
}




{/* <div className='w-full lg:w-1/3 h-full'>
  <UsersCard
  datas={datas}
  handleClick={handleClick}
  deleteUser={deleteUser}
  handleNewUser={handleNewUser}
  setNewUser={setNewUser}
  setNewEmail={setNewEmail}
  newuser={newuser}
  newemail={newemail}
  />
</div> */}
