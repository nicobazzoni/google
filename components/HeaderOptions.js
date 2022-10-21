
import HeaderOption from "./HeaderOption";
import {BsThreeDotsVertical} from 'react-icons/bs'
import { ImMap2 } from 'react-icons/im'
import { FaRegNewspaper} from 'react-icons/fa'
import {FaPlay} from 'react-icons/fa'
import {GiPhotoCamera} from 'react-icons/gi'
import {BiSearchAlt2} from 'react-icons/bi'


function HeaderOptions() {
    return (
      <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b font-OpenSans">
        <div className="flex space-x-6">
          <HeaderOption Icon={BiSearchAlt2} title="All" selected />
          <a href="https://www.google.co.in/imghp?hl=en&ogbl">
            {" "}
            <HeaderOption Icon={GiPhotoCamera} title="Images" />
          </a>
          <a href="https://www.youtube.com">
            {" "}
            <HeaderOption Icon={FaPlay} title="Videos" />
          </a>
          <a href="https://news.google.com">
            {" "}
            <HeaderOption Icon={FaRegNewspaper} title="News" />
          </a>
          <a href="https://www.google.com/maps">
            {" "}
            <HeaderOption Icon={ImMap2} title="Maps" />
          </a>
          <a href="">
            {" "}
            <HeaderOption Icon={BsThreeDotsVertical} title="More" />
          </a>
        </div>
  
        <div className="flex space-x-4">
          <a href="https://www.google.com/preferences?hl=en-IN&fg=1">
            <p className="link">Settings</p>
          </a>
          <p className="link">Tools</p>
        </div>
      </div>
    );
  }
  
  export default HeaderOptions;