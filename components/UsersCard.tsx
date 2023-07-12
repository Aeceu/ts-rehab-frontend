"use client"
import React, {useContext} from 'react'

import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
  } from "@/components/ui/dialog";

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { FaTrash } from 'react-icons/fa'
import { Label } from '@/components/ui/label'
import { ThemeContext } from '@/context/ThemeContext';


interface UsersCardProps {
    datas:any;
    handleClick:any;
    deleteUser:any;
    setNewUser:any;
    setNewEmail:any;
    handleNewUser:any;
    newuser:String;
    newemail:String;
}

export const UsersCard: React.FC<UsersCardProps> = ({
    datas,
    handleClick,
    deleteUser,
    handleNewUser,
    setNewUser,
    setNewEmail,
    newuser,
    newemail
}) => {
  const {mode} = useContext(ThemeContext)
  const color = mode === 'light' ? 'black' : 'white';

  return (
    <Card className={`w-full h-full lg:h-[500px] flex flex-col justify-between  text-inherit bg-inherit border-[1px] border-${color} shadow-lg border-opacity-10`}>
      <CardHeader className='w-1/4'>
        <CardTitle>
          Users
        </CardTitle>
      </CardHeader>
      <Separator className={`border-b-${color} border-b-[.5px] border-opacity-10`}/>
      <CardContent className="w-full h-full flex flex-col gap-0 p-0">
      {/* Display all the users in the MongoDB database name datas. */}
      {datas.map((data:any)=>(
        <div
        className={`flex justify-between items-center p-2 border-opacity-10 border-b-[.5px] ${color === 'black' ? 'border-b-black' : 'border-b-white'}`}
        key={data._id}
      >
          <div onClick={()=>{handleClick(data)}} className={`flex flex-col  items-start px-[8px] py-[8px] rounded-2xl cursor-pointer ${color === 'black' ? "hover:border-black hover:border-[1px] hover:border-opacity-10" : "hover:border-white hover:border-[1px] hover:border-opacity-50"}`}>
          <h1 className='text-1xl font-bold '>{data.name}</h1>
          <h1 className='text-[.8em] text-gray-500'>{data.email}</h1>
          </div>
          <div onClick={()=>deleteUser(data._id)} className={`bg-inherit p-4 ${color === 'black' ? "hover:border-black hover:border-[1px] hover:border-opacity-10" : "hover:border-white hover:border-[1px] hover:border-opacity-50"} rounded-full cursor-pointer`}>
          <FaTrash />
          </div>
        </div>
      ))}
      </CardContent>
      <CardFooter className='py-4 px-2'>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className={`w-max font-semibold text-inherit border-[1px] border-${color} border-opacity-10 ${color === 'black' ? 'hover:bg-black hover:text-white hover:border-white':""}`}>add new user</Button>
          </DialogTrigger>
          <DialogContent className='w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md bg-slate-800 text-2xl font-semibold text-white'>
            <DialogHeader >
              <DialogTitle  className='w-full flex flex-col gap-4'>
              <Label>Name:</Label>
              <Textarea placeholder='name' className='h-5' onChange={(e)=>setNewUser(e.target.value)}/>
              </DialogTitle>
            </DialogHeader>
            <DialogFooter >
              <DialogTitle  className='w-full flex flex-col gap-4'>
              <Label>Email:</Label>
              <Textarea placeholder='email' className='h-5' onChange={(e)=>setNewEmail(e.target.value)}/>
              </DialogTitle>
            </DialogFooter>
            <Button onClick={()=>handleNewUser(newuser,newemail)}>Submit</Button>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

export default UsersCard