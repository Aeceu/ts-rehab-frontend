"use client"
import React,{useState,useEffect} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useGetUserID } from '@/hooks/useGetUserID';
import axios from 'axios';


function PDF() {
  const [WholeData,setWholeData] = useState();
  const [userData,setUserData] = useState();
  const [loader, setLoader] = useState(false);
  const id = useGetUserID();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id === null) {
          return;
        }
        const baseUrl = "https://ts-rehab-api.onrender.com" || "http://localhost:4200";  
        const res = await axios.get(`${baseUrl}/user/${id}`);
        setUserData(res.data);
        console.log(res.data.email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id === null) {
          return;
        }
        const baseUrl = "https://ts-rehab-api.onrender.com" || "http://localhost:4200";  
        const res = await axios.get(`${baseUrl}/user`);
        setWholeData(res.data);
        // console.log(res.data.email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const downloadPDF = () =>{
    const capture = document.querySelector('.receipt');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }

  const convertToTxt = () => {
    const userDataTxt = WholeData.map((user) => {
      return `Username: ${user.email}\n\nTODOS:\n${user.Todos
        .map((item) => `- Title: ${item.title}, Description: ${item.description}, Time: ${createdDate(item.createdAt)}`)
        .join('\n')}\n\nPending Tasks:\n${user.uncomplete_task
        .map((item) => `- Title: ${item.title}, Description: ${item.description}, Time: ${createdDate(item.createdAt)}`)
        .join('\n')}\n\nCompleted Tasks:\n${user.complete_task
        .map((item) => `- Title: ${item.title}, Description: ${item.description}, Time: ${createdDate(item.createdAt)}`)
        .join('\n')}\n`;
    });

    const txtData = userDataTxt.join('\n\n');
    const element = document.createElement('a');
    const file = new Blob([txtData], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'whole-database.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const createdDate = (date) =>{
    let time = date.split("T")[0];
    return time;
  }
  return (
    <div>
        <div>
            <div className='w-full flex item-center justify-center p-2'>
              <button
                className=" bg-slate-900 text-white font-bold px-4 py-2 border-2 border-white rounded-md"
                onClick={downloadPDF}
                disabled={!(loader===false)}
              >
                {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download Receipt</span>
                )}

              </button> 
            </div>
            <div className='w-full flex item-center justify-center p-2'>
            {
              userData?.email  === 'admin' ?
              (
                <button
                className=" bg-slate-900 text-white font-bold px-4 py-2 border-2 border-white rounded-md"
                onClick={convertToTxt}
                disabled={!(loader===false)}
              >
                {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download Whole Data in Text</span>
                )}

                </button> 
              ):(
                null
              ) 
            }
            </div>
        </div>
        <div className="receipt text-black bg-white w-full h-auto flex justify-center items-center overflow-x-hidden p-32">
        {
        userData &&
        <div className="w-[450px] flex flex-col m-t-[20px] border-2 border-[#e4e4e4]">
            <header className='flex flex-col items-center gap-2'>
                <h1>Bridges of Hope Rehabilitation Center</h1>
                <h1>Mariposa Street, 12 Orestes Ln, Quezon City, Metro Manila</h1>
                <h1>09175098826</h1>
            </header>
            <main>
                <div className='flex justify-between items-center py-4 px-2 bg-[#63afe6] text-white font-bold my-4'>
                    <h1>Username</h1>
                    <h1>{userData.email}</h1>
                </div>
                <div className='flex flex-col'>
                    <h1 className='border-b-2 p-4 px-2 border-black'>TODOS</h1>
                    {
                        userData.Todos?.map((item)=>{
                            return(
                            <div key={item._id} className='flex border-b-2 px-2 text-[.8rem]'>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-gray-500 h-[50px] w-[100px] border-r-2 flex items-center justify-center'>title</h1>
                                    <h1 className='text-gray-500 h-[50px] w-[100px] border-r-2 flex items-center justify-center'>description</h1>
                                    <h1 className='text-gray-500 h-[50px] w-[100px] border-r-2 flex items-center justify-center'>time</h1>
                                </div>
                                <div  className='flex flex-col w-full h-full text-[.8rem]'>
                                    <p className='flex items-center px-2 h-[50px]'>{item.title}</p>  
                                    <p className='flex items-center px-2 h-[50px]'>{item.description}</p>    
                                    <p className='flex items-center px-2 h-[50px]'>{createdDate(item.createdAt)}</p>    
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
                <div className='flex flex-col'>
                    <h1 className='border-b-2 p-4 px-2 border-black'>PENDING TASKS</h1>
                    {
                        userData.uncomplete_task?.map((item)=>{
                            return(
                            <div key={item._id} className='flex border-b-2 px-2 text-[.8rem]'>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-gray-500 h-[50px] w-[100px] border-r-2 flex items-center justify-center'>title</h1>
                                    <h1 className='text-gray-500 h-[50px] w-[100px] border-r-2 flex items-center justify-center'>description</h1>
                                    <h1 className='text-gray-500 h-[50px] w-[100px] border-r-2 flex items-center justify-center'>time</h1>
                                </div>
                                <div  className='flex flex-col w-full h-full text-[.8rem]'>
                                    <p className='flex items-center px-2 h-[50px]'>{item.title}</p>  
                                    <p className='flex items-center px-2 h-[50px]'>{item.description}</p>    
                                    <p className='flex items-center px-2 h-[50px]'>{createdDate(item.createdAt)}</p>    
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
                <div className='flex flex-col'>
                    <h1 className='border-b-2 p-4 px-2 border-black'>COMPLETED TASKS</h1>
                    {
                        userData.complete_task?.map((item)=>{
                            return(
                            <div key={item._id} className='flex border-b-2 px-2 text-[.8rem]'>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-gray-500 h-[50px] w-[100px] border-r-2 flex items-center justify-center'>title</h1>
                                    <h1 className='text-gray-500 h-[50px] w-[100px] border-r-2 flex items-center justify-center'>description</h1>
                                    <h1 className='text-gray-500 h-[50px] w-[100px] border-r-2 flex items-center justify-center'>time</h1>
                                </div>
                                <div  className='flex flex-col w-full h-full text-[.8rem]'>
                                    <p className='flex items-center px-2 h-[50px]'>{item.title}</p>  
                                    <p className='flex items-center px-2 h-[50px]'>{item.description}</p>    
                                    <p className='flex items-center px-2 h-[50px]'>{createdDate(item.createdAt)}</p>    
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </main>
            <footer>
                <div className="flex  justify-center items-center text-[16px] gap-2 p-4 text-slate-600">
                @2023 <p className="text-[#25b953]">Rehabify.</p> All right reserved.
                </div>
            </footer>

        </div>
        }
        </div>
        
        

    </div>
  );
}

export default PDF;