import React, { useState } from 'react';
import {motion} from 'framer-motion'
import SidebarMenu from './SidebarMenu'
import { FaCriticalRole }from "react-icons/fa";
import {MdCloseFullscreen} from "react-icons/md"
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {BiGroup} from 'react-icons/bi'
import {BsClipboardCheck,BsVolumeDown} from "react-icons/bs"
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaHome/>
        },
        {
            path:"/user",
            name:"Users",
            icon:<AiOutlineUser/>,
            subRoutes:[
                {
                    path:"/user/user-list",
                    name:"Users List",
                    icon:<FaHome/>
                },
                {
                    path:"/user/user-group",
                    name:"Users Group",
                    icon:<FaHome/>
                },
            ]
        },
        {
            path:"/documents",
            name:"Documents",
            icon:<HiOutlineDocumentText/>
        },
        {
            path:"/templates",
            name:"Templates",
            icon:<HiOutlineDocumentText/>
        },
        {
            path:"/roles",
            name:"Roles",
            icon:<FaCriticalRole/>
        },
        {
            path:"/groups",
            name:"Groups",
            icon:<BiGroup/>
        },
        {
            path:"/media",
            name:"Media",
            icon:<BsVolumeDown/>
        },
        {
            path:"/clients",
            name:"Clients",
            icon:<BsClipboardCheck/>
        }
    ]
    return (
        <div className="main-container">
            <motion.div animate={{width: isOpen ? "21%" : "4%", transition:{duration:0.5, type:"spring", damping:11},}} className="sidebar" >
                <div className="dashline"></div>
                    <div className="mainmenu">
                        {isOpen && <h6>Main Menu</h6>} 
                        <div className="mainmenuicon" onClick={toggle}><MdCloseFullscreen /></div>
                    </div>
                    <div className="routes">
                    {
                        menuItem.map((item, index)=>{
                            {/* if(item.subRoutes){
                                return (
                                    <SidebarMenu 
                                        isOpen = {isOpen}
                                        item = {item}
                                        key = {item.name}
                                        icon = {item.icon}
                                        name = {item.name}
                                    />
                                );
                            } */}
                               return( <NavLink activeClassName="active" to={item.path} key={index}>
                                <div className="sidebarbox">
                                        <div className="sidebaricon">{item.icon}</div>
                                        { isOpen && <div className="sidebartext">{item.name}</div>}
                                    </div>
                            </NavLink>)
                    })
                    }
                </div>
            </motion.div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;