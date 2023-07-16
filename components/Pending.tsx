"use client"

import React ,{useEffect, useContext} from 'react';

import { ThemeContext } from '@/context/ThemeContext';
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "./ui/separator";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FaCheckSquare, FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { useGetUserID } from '@/hooks/useGetUserID';

interface TasksProps {
  pending: {
    _id: string;
    title: string;
    description: string;
  }[];
}

const Pending: React.FC<TasksProps> = ({
  pending
}) => {
  const id = useGetUserID();

  const handleTaskComplete = async (postID:String) =>{
    try {
      const baseUrl = "https://ts-rehab-api.onrender.com" || "http://localhost:4200";  
      const res = await axios.post(`${baseUrl}/complete`,{userID:id,postID:postID})
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }


  const {mode} = useContext(ThemeContext)
  const color = mode === 'light' ? 'black' : 'white';
  return (
    <div className="flex flex-col w-full gap-4">
      <Table className={`w-full h-[300px] bg-inherit text-inherit border-[1px] border-${color} border-opacity-30`} >
        <TableHeader >
          <TableRow className={`border-b-${color} border-b-[1px] border-opacity-30`}>
            <TableHead className="">Title</TableHead>
            <TableHead className="">Description</TableHead>
            <TableHead className="">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-inherit text-inherit">
          {pending && pending.map((post) => {
            return (
              <TableRow key={post._id} className={`border-b-${color} border-b-[1px] border-opacity-30`}>
                <TableCell>{post.title}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <h1 className="p-4 cursor-pointer">...</h1>
                    </DialogTrigger>
                    <DialogContent className='w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md bg-slate-800 text-2xl font-semibold text-white'>
                      <DialogHeader>
                        <DialogTitle className="py-2 text-2xl">{post.title}</DialogTitle>
                      </DialogHeader>
                      <Separator />
                      <DialogDescription className='py-8 text-inherit'>
                        {post.description}
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell className='flex gap-8 h-full w-full items-center'>
                  <Button onClick={()=>handleTaskComplete(post._id)} className='w-max p-2 rounded-lg '>Mark as done</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table> 
    </div>
  )
}

export default Pending;
