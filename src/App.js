import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Header from './components/Header'
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import User from './pages/User';
import Templates from './pages/Templates';
import Roles from './pages/Roles';
import Groups from './pages/Groups';
import Media from './pages/Media';
import Clients from './pages/Clients';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/media" element={<Media />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;


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
//     <Router>      
//       <Header />
//         <Sidebar>
//           <Routes>
//             <Route exact to='/' element={<Dashboard />} />
//                 <Route exact to='/dashboard' element={<Dashboard />} />
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