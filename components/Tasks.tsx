"use client"

import React ,{useContext} from 'react';

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

interface TasksProps {
  currentuser: {
    Post: {
      _id: string;
      title: string;
      description: string;
    }[];
    _id: string;
  } | null;
  Post: {
    title: string;
    description: string;
  };
  setPost: React.Dispatch<React.SetStateAction<{
    title: string;
    description: string;
  }>>;
  handleUpdateData: (id: string, title: string, description: string) => Promise<void>;
  deleteData: (userID: string, postID: string) => Promise<void>;
  handleNewDataSubmit: (e: React.FormEvent, userID: string) => Promise<void>;
}

const Tasks: React.FC<TasksProps> = ({
  currentuser,
  Post,
  setPost,
  handleUpdateData,
  deleteData,
  handleNewDataSubmit
}) => {
  
  
  const {mode} = useContext(ThemeContext)
  const color = mode === 'light' ? 'black' : 'white';
  return (
    <div className="flex flex-col w-full gap-4">
      <Table className={`w-full h-[300px] bg-inherit text-inherit border-[1px] border-${color} border-opacity-30`} >
        <TableHeader >
          <TableRow className={`border-b-${color} border-b-[1px] border-opacity-30`}>
            <TableHead className="">Title</TableHead>
            <TableHead className="w-1/2">Description</TableHead>
            <TableHead className="w-1/4">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-inherit text-inherit">
          {currentuser && currentuser.Post.map((post) => {
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Edit</Button>
                    </DialogTrigger>
                    <DialogContent className='w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md bg-slate-800 text-2xl font-semibold text-white'>
                      <DialogHeader>
                        <Textarea
                          className=" h-5"
                          defaultValue={post.title + Post.title}
                          onChange={(e) =>
                            setPost({ ...Post, title: e.target.value })} />
                      </DialogHeader>
                      <Separator />
                      <Textarea
                        defaultValue={post.description + Post.description}
                        onChange={(e) =>
                          setPost({ ...Post, description: e.target.value })} />
                      <Button onClick={() => handleUpdateData(post._id, Post.title, Post.description)}>Update</Button>
                    </DialogContent>
                  </Dialog>
                  <Button onClick={() => deleteData(currentuser._id, post._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* Input box user can use to add task */}
      {currentuser &&
        <Dialog>
          <DialogTrigger asChild>
            <Button className='w-max'>add new task</Button>
          </DialogTrigger>
          <DialogContent className='w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md bg-slate-800 text-2xl font-semibold text-white'>
            <DialogHeader>
              <DialogTitle className="py-2 text-2xl">
                <Textarea
                  value={Post.title}
                  onChange={(e) => setPost({ ...Post, title: e.target.value })}
                  className=" h-5" />
              </DialogTitle>
            </DialogHeader>
            <Separator />
            <Textarea
              className=" h-40"
              value={Post.description}
              onChange={(e) =>
                setPost({ ...Post, description: e.target.value })} />
            <DialogFooter>
              <Button
                onClick={(e) => handleNewDataSubmit(e, currentuser._id)}
                variant="outline"
                className='max-w'>add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      }
    </div>
  )
}

export default Tasks;
