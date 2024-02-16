import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "@/hooks/useGetUserID";
import { cn } from "@/lib/utils";
import { ThemeContext } from "@/context/ThemeContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { Button, buttonVariants } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Task {
  _id: string;
  title: string;
  description: string;
}

interface TasksProps {
  todos: Task[];
}

const Todos: React.FC<TasksProps> = ({ todos }) => {
  const [Todos, setTodos] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });
  const id = useGetUserID();

  const addNewTodos = async () => {
    try {
      const baseUrl = "https://ts-rehab-backend.vercel.app";
      const res = await axios.post(`${baseUrl}/todos`, { id: id, Todos });
      console.log(res.data);

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const editTodos = async (todosID: String) => {
    try {
      const baseUrl = "https://ts-rehab-backend.vercel.app";
      const res = await axios.put(`${baseUrl}/todos`, { id: todosID, Todos });
      console.log(res.data);

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodos = async (todosID: string) => {
    try {
      const baseUrl = "https://ts-rehab-backend.vercel.app";
      await axios.request({
        url: `${baseUrl}/todos`,
        method: "DELETE",
        data: { userID: id, postID: todosID },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const { mode } = useContext(ThemeContext);
  const color = mode === "light" ? "black" : "white";

  return (
    <div className="flex flex-col w-full gap-4">
      <Table
        className={`w-full h-[300px] bg-inherit text-inherit border-[1px] border-${color} border-opacity-30`}
      >
        <TableHeader>
          <TableRow
            className={`border-b-${color} border-b-[1px] border-opacity-30`}
          >
            <TableHead className="">Title</TableHead>
            <TableHead className="w-1/2">Description</TableHead>
            <TableHead className="w-1/4">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-inherit text-inherit">
          {todos &&
            todos.map((post) => {
              return (
                <TableRow
                  key={post._id}
                  className={`border-b-${color} border-b-[1px] border-opacity-30`}
                >
                  <TableCell>{post.title}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <h1 className="p-4 cursor-pointer">...</h1>
                      </DialogTrigger>
                      <DialogContent className="w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md bg-slate-800 text-2xl font-semibold text-white">
                        <DialogHeader>
                          <DialogTitle className="py-2 text-2xl">
                            {post.title}
                          </DialogTitle>
                        </DialogHeader>
                        <Separator />
                        <DialogDescription className="py-8 text-inherit">
                          {post.description}
                        </DialogDescription>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell className="flex gap-8 h-full w-full items-center">
                    <Dialog>
                      <DialogTrigger>
                        <div
                          className={`text-2xl bg-inherit p-4 rounded-full cursor-pointer`}
                        >
                          <FaEdit
                            className={`${
                              color === "white"
                                ? "hover:text-gray-500 text-white"
                                : "hover:text-slate-800 text-gray-600"
                            }`}
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="flex flex-col gap-4">
                        <div>
                          <label>Title:</label>
                          <Textarea
                            className="h-[10px]"
                            value={Todos.title}
                            onChange={(e) =>
                              setTodos((prevTodos) => ({
                                ...prevTodos,
                                title: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="flex flex-col">
                          <label>Description:</label>
                          <Textarea
                            className="min-h-[80px]"
                            value={Todos.description}
                            onChange={(e) =>
                              setTodos((prevTodos) => ({
                                ...prevTodos,
                                description: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <Button onClick={() => editTodos(post._id)}>
                          Edit
                        </Button>
                      </DialogContent>
                    </Dialog>
                    <div
                      className={`text-2xl bg-inherit p-4 rounded-full cursor-pointer`}
                    >
                      <FaTrash
                        onClick={() => deleteTodos(post._id)}
                        className={`${
                          color === "white"
                            ? "hover:text-gray-500 text-white"
                            : "hover:text-slate-800 text-gray-600"
                        }`}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <Dialog>
        <DialogTrigger>
          <h1 className={cn(buttonVariants(), "w-full")}>ADD</h1>
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-4">
          <div>
            <label>Title:</label>
            <Textarea
              className="h-[10px]"
              value={Todos.title}
              onChange={(e) =>
                setTodos((prevTodos) => ({
                  ...prevTodos,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col">
            <label>Description:</label>
            <Textarea
              className="min-h-[80px]"
              value={Todos.description}
              onChange={(e) =>
                setTodos((prevTodos) => ({
                  ...prevTodos,
                  description: e.target.value,
                }))
              }
            />
          </div>
          <Button onClick={addNewTodos}>Submit</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Todos;
