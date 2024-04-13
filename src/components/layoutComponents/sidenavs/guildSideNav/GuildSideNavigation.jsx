'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CgMenuRight } from "react-icons/cg";
import { FaUserGroup } from "react-icons/fa6";
import { GrMailOption } from "react-icons/gr";
import { GrInProgress } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";


export default function GuildSideNavigation() {
    const [isSideBarOpen, setIsSideBareOpen] = useState(true);
    const activateSideNav = () => {
        setIsSideBareOpen(!isSideBarOpen);
        console.log(isSideBarOpen)
    }

  return (

    <div className={`side-nav-wrapper ${isSideBarOpen ? '': 'side-nav-wrapper--mobile'}` }>
    
    {/* <div className='side-nav-wrapper'> */}
        <div className='side-nav--toggle-btn'>
            <button>
                <CgMenuRight 
                    size={30} 
                    style={{color: '#BB883A', marginLeft: '0px'}}
                    onClick={activateSideNav}
                />
            </button>
        </div>
        <nav>
            <ul>
                <li>
                    <Link className='link' href="/guildmember/dashboard/overview">
                        <div className='icon-container'>
                            <MdOutlineDashboard  size={18} style={{marginRight: "1rem"}}/>
                            <span className='span-text'>Overview</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='link' href="/user">
                    <div className='icon-container'>
                        <GrMailOption  size={18} style={{marginRight: "1rem"}}/>
                      
                        <span className='span-text'>Messages</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='link' href="/user">
                        <Image className='icon--20-sided-dice'
                                src="/assets/images/CoinBag.svg"
                                alt=""
                                width={18}
                                height={18} 
                                style={{marginRight: "1rem"}}
                        />
                        <span className='span-text'>Account</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
