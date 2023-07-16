"use client"
import React, {useState, useContext, useEffect} from 'react'
import { 
Tabs,
TabsTrigger,
TabsList,
TabsContent 
} from '@/components/ui/tabs'

import Todos from '@/components/Todos'
import { ThemeContext } from '@/context/ThemeContext'
import Completed from './Completed';
import Pending from './Pending';
import { Button } from './ui/button'
import axios from 'axios'
import { useGetUserID } from '@/hooks/useGetUserID'
import Activities from "@/Data/Activities.json";

interface TabelTaskProps {
pending: any[];
completed:any[];
todos:any[];
}

interface Activity {
  id: number;
  title: string;
  description: string;
}

interface Frequency {
  frequency: string;
  tasks: Activity[];
}

interface Category {
  category: string;
  activities: Frequency[];
}

interface ActivitiesData {
  activities: Category[];
}



const TableTask: React.FC<TabelTaskProps> = ({pending,completed,todos }) => {
  const [randomTasks, setRandomTasks] = useState<Activity[]>([]);
  const {mode} = useContext(ThemeContext)
  const color = mode === 'light' ? 'black' : 'white';
  const id = useGetUserID();
  
  useEffect(() => {
    const getRandomTasks = () => {
      const tasks: Activity[] = [];
      const activitiesData = Activities as ActivitiesData;
    
      // Get random tasks for daily frequency
      const dailyActivities = activitiesData.activities.find((category: any) => category.category === 'Mental Well-being');
      const dailyTasks = dailyActivities?.activities.find((activity: any) => activity.frequency === 'Daily')?.tasks;
      if (dailyTasks) {
        const randomDailyTasks = getRandomElements(dailyTasks, 2);
        tasks.push(...randomDailyTasks);
      }
      
    
      // Get random tasks for weekly frequency
      const weeklyActivities = activitiesData.activities.find((category: any) => category.category === 'Mental Well-being');
      const weeklyTasks = weeklyActivities?.activities.find((activity: any) => activity.frequency === 'Weekly')?.tasks;
      if (weeklyTasks) {
        const randomWeeklyTasks = getRandomElements(weeklyTasks, 2);
        tasks.push(...randomWeeklyTasks);
      }
    
      // Get random tasks for monthly frequency
      const monthlyActivities = activitiesData.activities.find((category: any) => category.category === 'Mental Well-being');
      const monthlyTasks = monthlyActivities?.activities.find((activity: any) => activity.frequency === 'Monthly')?.tasks;
      if (monthlyTasks) {
        const randomMonthlyTasks = getRandomElements(monthlyTasks, 2);
        tasks.push(...randomMonthlyTasks);
      }   
      setRandomTasks(tasks);
    };
    getRandomTasks();
  }, []);

  const getRandomElements = (array: any[], count: number) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handlePostTasks = async () => {
    try {
      const baseUrl = "https://ts-rehab-api.onrender.com" || "http://localhost:4200";  
      const res = await axios.post(`${baseUrl}/uncomplete`,{id,randomTasks})
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className='flex flex-col gap-4'>
    {/* Cards */}
      <div className='flex gap-4 lg:flex-row flex-col-reverse'>
      {/*  Table that display the todo list of the user */}
        <div className='w-full lg:flex-col xl:flex-row flex gap-4'>
          <div className={`lg:w-full xl:w-1/2 bg-inherit text-inherit   flex flex-col gap-4`}>
            <Tabs defaultValue="pending" className={`w-full bg-inherit text-inherit   flex flex-col gap-4`}>
              <TabsList className='bg-inherit text-inherit border-[1px] border-slate-400 w-max gap-2'>
                <TabsTrigger value='pending' className={`${color === 'black'? "data-[state=active]:bg-black data-[state=active]:text-white":"data-[state=active]:bg-background data-[state=active]:text-foreground"}`} >Pending Task</TabsTrigger>
                <TabsTrigger value='completed' className={`${color === 'black'? "data-[state=active]:bg-black data-[state=active]:text-white":"data-[state=active]:bg-background data-[state=active]:text-foreground"}`}>Completed Task</TabsTrigger>
              </TabsList>
              <TabsContent value='pending'>
                <Pending pending={pending}/>
              </TabsContent>
              <TabsContent value='completed'>
                <Completed complete={completed}/>
              </TabsContent>
            </Tabs>
            <Button onClick={handlePostTasks}>Display Tasks</Button>
            </div>
            <Tabs defaultValue="todos" className={`lg:w-full xl:w-1/2 bg-inherit text-inherit   flex flex-col gap-4`}>
            <TabsList className='bg-inherit text-inherit border-[1px] border-slate-400 w-max gap-2'>
              <TabsTrigger value='todos' className={`${color === 'black'? "data-[state=active]:bg-black data-[state=active]:text-white":"data-[state=active]:bg-background data-[state=active]:text-foreground"}`}>Todos</TabsTrigger>
            </TabsList>
            <TabsContent value='todos'>
              <Todos todos={todos}/>
            </TabsContent>
          </Tabs>
        </div>
      </div>
  </main>
    )
}


export default TableTask;
