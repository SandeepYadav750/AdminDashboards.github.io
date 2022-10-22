import React from 'react';
import avatar from '../../images/avatar.jpg'
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'
import {TbArrowsShuffle2} from 'react-icons/tb'
import {IoIosMail,IoIosNotifications} from 'react-icons/io'
import {BiSearchAlt2} from 'react-icons/bi'
import {BsCheckCircleFill} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'
import {MdComputer,MdAutorenew} from 'react-icons/md'
import {RiDropboxFill,RiCheckboxMultipleBlankFill} from 'react-icons/ri'
import {FaBookReader} from 'react-icons/fa'
import {GiArmorUpgrade} from 'react-icons/gi'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Header = () => {
  return (
    <>
        <div className='navgeader'>
            <div className=''>
            <nav className="navbar navbar-expand-lg">
                <div className='navlogo'>
                    <a className="navbar-brand" href="#">AdminPanel</a>                    
                    <div className="dropdown ">
                            <a href='#' className="dropdown-toggle santoggle navmailnoticon" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <TbArrowsShuffle2 />
                            </a>
                            <div className="dropdown-menu sansetdrop" aria-labelledby="dropdownMenuButton">
                                <ul className="ullist">
                                    <li><a className="dropdown-item" href="#">
                                        <div className='aboutcompanyhead'>
                                            <RiDropboxFill />
                                            <div className='comName'>
                                                <p>Ibtikar<span className="sr-only commember">&nbsp;(Active)</span></p>
                                                <span className='commember'>720 Members</span>
                                            </div>
                                            <span className='ticksvg'><BsCheckCircleFill /></span>
                                        </div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="#">
                                        <div className='aboutcompanyhead'>
                                            <RiCheckboxMultipleBlankFill/>
                                            <div className='comName'>
                                                <p>Company Name</p>
                                                <span className='commember'>350 Members</span>
                                            </div>
                                            {/* <BsCheckCircleFill /> */}
                                        </div>
                                    </a></li>
                                    <div className="dropdown-divider"></div>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <div className='aboutcompanybottom'>
                                                <span>Create or Join Company</span>
                                                <span><HiArrowNarrowRight /></span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>                                
                            </div>      
                    </div>
                </div>                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='navavtar'>
                        <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li> */}
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle santoggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className='avatardropdown'>
                                <span className='avatarimg'><img src={avatar} alt="avatarimage" /></span>
                                <div className='avatartext'>
                                    <h5>sandeep yadav</h5>
                                    <p>Company Owner</p>
                                </div>
                            </div>
                            </a>
                            <div className="dropdown-menu sandropdown" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item " href="#">Profile Settings</a>
                                <a className="dropdown-item" href="#">Switch Companies</a>
                                <a className="dropdown-item" href="#">Messages</a>
                                <a className="dropdown-item" href="#">Documents</a>
                                <a className="dropdown-item" href="#">Billing</a>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown ">
                            <a href='#' className="dropdown-toggle santoggle navmailnoticon" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <IoIosMail />
                            </a>
                            <div className="dropdown-menu sandropdown" aria-labelledby="dropdownMenuButton">
                                    <ul className="ullist">
                                        <li><a className="dropdown-item" href="#">
                                            <div className='aboutmail'>
                                                <div className='maildropimg'>
                                                    <img src={avatar} alt=" mail profile image" />
                                                </div>
                                                <div className='mailName'>
                                                    <span className='mailtitle'>Rinku Sharma</span>
                                                    <span className='mailcol'>Completed <a href='' className='mailmember'>vacation Docs</a> notice</span>
                                                    <span className='mailcol'>at <span className="mailtime">10:00pm</span></span>
                                                </div>
                                            </div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <div className='aboutmail'>
                                                <div className='maildropimg'>
                                                    <img src={avatar2} alt=" mail profile image" />
                                                </div>
                                                <div className='mailName'>
                                                    <span className='mailtitle'>Prachi Taneja</span>
                                                    <span className='mailcol'>Completed <a href='' className='mailmember'>vacation Docs</a> notice</span>
                                                    <span className='mailcol'>at <span className="mailtime">10:00pm</span></span>
                                                </div>
                                            </div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <div className='aboutmail'>
                                                <div className='maildropimg'>
                                                    <img src={avatar1} alt=" mail profile image" />
                                                </div>
                                                <div className='mailName'>
                                                    <span className='mailtitle'>Gaurav Yadav</span>
                                                    <span className='mailcol'>Completed <a href='' className='mailmember'>vacation Docs</a> notice</span>
                                                    <span className='mailcol'>at <span className="mailtime">10:00pm</span></span>
                                                </div>
                                            </div>
                                        </a></li>
                                        <div className="dropdown-divider"></div>
                                        <li>
                                        <a className="dropdown-item" href="#">
                                            <div className='mailallmess'>
                                                <span>View All Messages</span>
                                                <span><HiArrowNarrowRight /></span>
                                            </div>
                                        </a>
                                    </li>
                                    </ul>                                
                                </div> 
                        </li>
                        <li className="nav-item">
                            <div className="dropdown ">
                                
                                    
                            </div>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span className='navmailnoticon'><IoIosNotifications /></span></a>
                        </li>
                        </ul>
                    </div>
                    <div className='search_nnotification ms-auto d-flex'>
                        <form className="form-inline d-flex position-relative">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="navsearchbtn" type="submit"><BiSearchAlt2 /></button>
                        </form>
                        <div className="dropdown ">
                            <a href='#' className="dropdown-toggle santoggle navmailnoticon" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <AiFillSetting />
                            </a>
                            <div className="dropdown-menu sansetdrop" aria-labelledby="dropdownMenuButton">
                                <ul className="ullist">
                                    <li><a className="dropdown-item" href="#"><span className='seticon'><MdComputer /></span> Design Options</a></li>
                                    <li><a className="dropdown-item" href="#"><span className='seticon'><FaBookReader /></span> About Company</a></li>
                                    <li><a className="dropdown-item" href="#"><span className='seticon'><MdAutorenew /></span> Renew Plan</a></li>
                                    <li><a className="dropdown-item" href="#"><span className='seticon'><GiArmorUpgrade /></span> Upgrade Plan</a></li>
                                </ul>
                                
                            </div>      
                        </div>
                    </div>
                </div>
            </nav>
            </div>
    </div>
    </>
  )
}

export default Header;
