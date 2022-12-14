import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { GiOldMicrophone} from 'react-icons/gi'
import {BsGrid} from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home({term}) {
  const router = useRouter()

  const searchInputRef = useRef(null)

  
  const search = (e) => {
   
    e.preventDefault()
    const term = searchInputRef.current.value;
   
    if (!term) return;

    router.push(`/search?term=${term}`)

   
    
  }
  
  
  return (
    <div className='flex flex-col items-center h-screen sm:w-screen ' >
      <Head>
        <title>Noodle</title>
        <meta name="Google Clone" content="Generated by create next app" />
        
      </Head>

      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-800">
       <div className="flex space-x-4 items-center font-Ubuntu" >
       <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">
            <p className="link">About</p>
          </a>

          <a href="https://chrome.google.com/webstore">
            <p className="link">Webstore</p>
          </a>
       

       <div className="flex space-x-4 font-Ubuntu items-center ">
       <a href="https://mail.google.com">
            <p className="link">Gmail</p>
          </a>
          <a href="https://www.google.com/imghp?hl=en">
            <p className="link">Images</p>
          </a>

        
       </div></div>

       <a href="https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=act&pli=1">
            <Avatar url="https://tenor.com/view/white-guy-what-blinking-shocked-shook-gif-8605657.gif" />
          </a>

    

     
      </header>



      {/* body */}
         <form className='flex flex-col items-center mt-44 flex-grow w-4/5 ' >

          <Image 
          className='cursor-pointer'
          src="https://tenor.com/view/google-gif-4571231.gif"
          height={300}
          width={700}
          priority
        />
        
   

          <div className='flex focus-within:shadow-lg w-full mt-5 max-w-md rounded-full border border-gray-200 
          px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
            <GoSearch className='h-5 mr-3 text-gray-500 ' />
            <input 
            ref={searchInputRef}
            type='text' 
            className='focus:outline-none flex-grow  ' />
            
          </div>

          <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 
          sm:flex-row sm:space-x-4 '>
            <button onClick={search} className='btn'>Google Search</button>
           
          </div>

         </form>

      {/* footer */}

      <Footer />
    </div>
  )
}
