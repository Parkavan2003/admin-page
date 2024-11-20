// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar'
import UsersPage from './pages/UsersPage'
import RolesPage from './pages/RolesPage'
import PermissionsPage from './pages/PermissionsPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Router>
    <div className="flex">
      {/* Sidebar */}
      <Sidebar/>
      <ToastContainer />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Routes>
          
          <Route path="/" element={<UsersPage/>}/>
          <Route path="/roles" element={<RolesPage/>}/>
          <Route path="/permissions" element={<PermissionsPage/>}/>
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
