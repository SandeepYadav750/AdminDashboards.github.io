import { MdKeyboardArrowDown} from "react-icons/md"
import { NavLink } from 'react-router-dom';

const SidebarMenu = (isOpen,item) => {
  return (
    <>
        <div className="menu">
            <div className="menu-item ">
                <div className="sidebarbox sidearrowdis">
                    <div className="icon_name">
                        <div className="sidebaricon">{item.icon}</div>
                        { isOpen && <div className="sidebartext">{item.name}</div> }
                    </div>
                    <span className='sidedownarrow'><MdKeyboardArrowDown /></span>
                </div>                                        
            </div>
            {/* {item.subRoutes.map((subitem, index) => (
                <NavLink activeClassName="active" to={subitem.path} key={index}>
                    <div className="sidebarbox">
                            <div className="sidebaricon">{subitem.icon}</div>
                            { isOpen && <div className="sidebartext">{subitem.name}</div>}
                        </div>
                </NavLink>
            ))} */}
        </div>
    </>
  )
}

export default SidebarMenu
