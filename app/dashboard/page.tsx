"use client"
import Link from 'next/link'
import { Button} from '@/components/ui/button'
import { FaUser } from 'react-icons/fa'
import { useContext,useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import axios from 'axios'
import TableTask from '@/components/Table'

const dashboard =  () => {
  const {mode} = useContext(ThemeContext)
  const color = mode === 'light' ? 'black' : 'white';


  return (
    <div className='w-full max-w-[1600px] flex flex-col gap-8 p-4'>
      <header className={`flex justify-between items-center border-[1px]  border-${color} shadow-lg p-4 rounded-md border-opacity-10 `}>
        <div className="text-slate-500 flex flex-col gap-2 text-[.90rem]">
          <h1 className='text-3xl font-bold tracking-tight text_color'>Dashboard</h1>
          <div className='flex gap-2'>
          <Link href="/">Home</Link>
          <p>/ Our Dashboard</p>
          </div>
        </div>
        {/* <div className='flex gap-4'>
          <Button
          onClick={()=>handleForm(true)} 
          variant="outline" 
          className={`font-semibold text-inherit border-[1px] border-${color} border-opacity-50 ${color === 'black' ? 'hover:bg-black hover:text-white hover:border-white':""}`}>
            Log in
          </Button>
          <Button 
          onClick={()=>handleForm(false)} 
          variant="outline" 
          className={`font-semibold text-inherit border-[1px] border-${color} border-opacity-50 ${color === 'black' ? 'hover:bg-black hover:text-white hover:border-white':""}`}>
            Sign up
          </Button>
        </div> */}
        <div className='hidden text-2xl rounded-full border-2 border-slate-500 p-2'>
          <FaUser/>
        </div>
      </header>

      <TableTask/>
    </div>
  )
}
export default dashboard;
