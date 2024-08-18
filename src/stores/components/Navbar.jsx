import React from 'react';
import {Link} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { IoWatch } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { GrRestroomMen } from "react-icons/gr";
import { GrRestroomWomen } from "react-icons/gr";
import { GiSpeaker } from "react-icons/gi";
import { MdOutlineKitchen } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { RiSofaFill } from "react-icons/ri";
import { TbAirConditioningDisabled } from "react-icons/tb";


const Navbar = () => {
  return (
    <div className='navbar-section'>

    <div className='NavSection'>
        <div className="title">
            <Link to='/' className='link'>
            <h2> <FaHome /> Flip-Mart</h2>
            </Link>
        </div>
        <div className="search">
        <FaSearch /> <input type='text' placeholder='Search...'/>
        </div>
        <div className="user">
            <div className="user-detail">
                Signin / Signup
            </div>
            <div>
            <Link to='/cart' className='link'>
              <h2 className='cart'> <FaCartPlus />  Cart</h2>
            </Link>
            </div>
        </div>
    </div>
    <div className="subMenu">
       <ul>
        <Link to='/mobiles' className='link'>
        <li> <FaMobile /> Mobiles</li>
        </Link>
        <Link to='/computers' className='link'>
        <li> <GrPersonalComputer /> Computers</li>
        </Link>
        <Link to='/watches' className='link'>
        <li> <IoWatch /> Watches</li>
        </Link>
        <Link to='/men' className='link'>
        <li> <GrRestroomMen /> Men Fashion</li>
        </Link>
        <Link to='/women' className='link'>
        <li> <GrRestroomWomen /> Women Dressing</li>
        </Link>
        <Link to='/furnitures' className='link'>
        <li> <RiSofaFill /> Furniture</li>
        </Link>
        <Link to='/acs' className='link'>
        <li> <TbAirConditioningDisabled /> Ac</li>
        </Link>
        <Link to='/books' className='link'>
        <li> <MdLibraryBooks /> Books</li>
        </Link>
        <Link to='/tvs' className='link'>
        <li> <PiTelevisionSimpleBold /> Television</li>
        </Link>
        <Link to='/kitchens' className='link'>
        <li> <MdOutlineKitchen /> Kitchens</li>
        </Link>
        <Link to='/speakers' className='link'>
        <li> <GiSpeaker /> speakers</li>
        </Link>
        </ul>
    </div>
    </div>
  )
}

export default Navbar