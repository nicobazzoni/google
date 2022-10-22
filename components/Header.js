import Image from 'next/future/image'
import { useRouter } from "next/router"
import { FcGoogle } from 'react-icons/fc'
import { useRef } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { GiOldMicrophone} from 'react-icons/gi'
import { GoSearch } from 'react-icons/go'
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
  
    const search = (e) => {
      e.preventDefault();
      const term = searchInputRef.current.value;
  
      if (!term) return;
  
      router.push(`/search?term=${term}`);
    };
   

    return (

        

        <header className='sticky top-0 bg-white'> 
          <div className='flex w-full p-6 items-center'>
          
            <Image 
            src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            onClick={() => router.push("/")}
            height={40}
            width={150}
            className='cursor-pointer mr-2 '
             
            />
           

            <form className='flex flex-grow w-full px-5 py-3   border border-gray-200 rounded-full shadow-lg max-w-3 items-center '  >
                <input 
                ref={searchInputRef} 
                type="text"
                
                className='flex-grow w-full focus:outline-none' />
                
                <AiOutlineClose className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' 
                onClick={() => (searchInputRef.current.value = "")}
                />

            <button type="submit" onClick={search}>
            <GoSearch className=" mb-1 h-5 hidden sm:inline-flex text-gray-500 tarnsition duration-100 transform hover:scale-125 " />
          </button>
             
            </form> 

           
           </div>

           <HeaderOptions />
            
        </header>
    )

}

export default Header

