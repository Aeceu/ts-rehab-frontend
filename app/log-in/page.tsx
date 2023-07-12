"use client"
import { Button } from '@/components/ui/button'
import { useContext,useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {mode} = useContext(ThemeContext)
  const color = mode === 'light' ? 'border-black' : 'border-white';
  return (
    <div className='w-full max-w-[1600px] flex items-center justify-center '>
      <form className={`flex flex-col gap-8 p-8 border-2 ${color} rounded-md`}>
        <h1 className='w-full text-center text-3xl'>LOG-IN YOUR ACCOUNT</h1>
        <div className='flex flex-col gap-1 w-full '>
          <label htmlFor="email" className='text-[.9rem]'>Email:</label>
          <input type="text" placeholder='email' className='rounded-md px-4 py-2 outline-none text-black' />
        </div>
        <div  className='flex flex-col gap-1 w-full'>
          <label htmlFor="password" className='text-[.9rem]'>Password:</label>
          <input type="password" placeholder='password' className='rounded-md px-4 py-2 outline-none text-black'/>
        </div>
        <Button variant="outline" 
          className={`font-semibold text-inherit border-[1px] ${color} border-opacity-50 ${color === 'border-black' ? 'hover:bg-black hover:text-white hover:border-white':""}`}>Submit</Button>
      </form>
    </div>
  )
}

export default Login