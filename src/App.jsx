import React from 'react';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Map from './components/Map';
import Dashboard from './components/dashboard'
import Login from './components/AdminDashboard/Login'
import FleetManager from './components/AdminDashboard/FleetManager'
import Orders from './components/AdminDashboard/Orders'
import Customers from './components/AdminDashboard/Customers'
import EmpOrders from './components/AdminDashboard/EmpOrders';
import StaffLogin from './components/EmployeeDashboard/StaffLogin';
import AllOrders from './components/EmployeeDashboard/AllOrders';

function App() {
 
  return (
    <>
    {/* <Login /> */}
    <div className="App">
      
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/StaffLogin" element={<StaffLogin/>}/>
      <Route exact path="/FleetManager" element={<FleetManager/>}/>
      <Route exact path="/Orders" element={<Orders/>}/>
      <Route exact path="/AllOrders" element={<AllOrders/>}/>
      <Route exact path="/Customers" element={<Customers/>}/>
      <Route exact path="/EmpOrders" element={<EmpOrders/>}/>
      </Routes>
      {/* <Dashboard /> */}
     
      {/* <Map /> */}
    </div>
    </>
  );
}

export default App;
