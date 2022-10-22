import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import {MdCloseFullscreen} from "react-icons/md"
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {HiOutlineDocumentText} from 'react-icons/hi'
import { useState } from 'react'


const Slider = ({Children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const  toggle = () => setIsOpen(!isOpen)


const routes=[
    {
        path:"/",
        name:"Dashboard",
        icons:<FaHome />,
    },
    {
        path:"/user",
        name:"Users",
        icons:<AiOutlineUser />,
    },
    {
        path:"/document",
        name:"Documents",
        icons:<HiOutlineDocumentText />,
    },
    {
        path:"/template",
        name:"Template",
        icons:<HiOutlineDocumentText />,
    },
]

  return (
    <>
      <div className="main-container">
        <motion.div animate={{width: isOpen ? "233px" : "50px", transition:{duration:0.5, type:"spring", damping:11},}} className="sidebar" >
        <div className="dashline"></div>
        <div className="mainmenu">
            {isOpen && <h6>Main Menu</h6>} 
            <div className="mainmenuicon" onClick={toggle}><MdCloseFullscreen /></div>
        </div>
        <div className="routes">
            {routes.map((item, index) =>(
                <NavLink activeClassName="active" to={item.path} key={index}>
                    <div className="sidebarbox">
                        <div className="sidebaricon">{item.icons}</div>
                        { isOpen && <div className="sidebartext">{item.name}</div>}
                    </div>
                </NavLink>
            ))}
        </div>
        </motion.div>
        
        <main>{Children}</main>
      </div>
    </>
  );
};

export default Slider



// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import Header from './components/Header'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Dashboard from './pages/Dashboard';
// import Documents from './pages/Documents';
// import User from './pages/User';
// import Templates from './pages/Templates';
// import Sidebar from './components/Slider'

// function App() {
//   return (
//     <>
//       <Header />
//       <Router>      
//         <Sidebar>
//           <Routes>
//             <Route exact to='/' element={<Dashboard />} />
//                <Route exact to='/dashboard' element={<Dashboard />} />
//             <Route exact to='/document' element={<Documents />} />
//             <Route exact to='/user' element={<User />} />
//             <Route exact to='/template' element={<Templates />} /> 
//           </Routes>
//         </Sidebar>
//       </Router>

//     </>
//   );
// }

// export default App;
