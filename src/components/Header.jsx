import React, {useState } from 'react'
import Avatar from '../images/avatar.png'
import Search from '../images/search.svg'
import icon1 from '../images/manager.png'
import icon2 from '../images/order.png'
import icon3 from '../images/customer.png'
import icon4 from '../images/report.png'
import icon5 from '../images/help.png'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

const Header = () => {

  const [active, setActive] = useState('false');


  // Title Based on URL
  const location = useLocation();
  //console.log(location);

  const menuToggle = () =>{
    setActive(!active);
  }




  return (
    <>
      <div className="header">
          <div className="branding">
            <span className={`menu_toggle ${active ? "" : "active"}`} onClick={menuToggle}><span></span></span>
            
            {(() => {
                if (location.pathname === '/FleetManager') {
                  return (
                    <b>Fleet Manager </b>
                  )
                }
                if (location.pathname === '/Orders') {
                  return (
                    <b>Orders </b>
                  )
                }
                if (location.pathname === '/Customers') {
                  return (
                    <b>Customers </b>
                  )
                }
                if (location.pathname === '/EmpOrders') {
                  return (
                    <b>Orders </b>
                  )
                }
             })()}
         
            <div className={`menu_dropdown ${active ? "" : "active"}`}>
              <h3>MENU</h3>
              <ul>
              <li><Link to="/FleetManager"><img src={icon1} alt=""/>  Fleet Manager</Link></li>
                <li><Link to="/Orders"><img src={icon2} alt=""/>  Orders</Link></li>
                <li><Link to="/Customers"><img src={icon3} alt=""/> Customers</Link></li>
                <li><Link to="/StaffLogin"><img src={icon4} alt=""/> Staff Login</Link></li>
                <li><Link to="/AllOrders"><img src={icon5} alt=""/> Employee Orders</Link></li>
              </ul>
             
            </div>
            </div>
          <div className="search_bar">
              <div className="search_box" >
                  
                  <input type="text" name="" id="" placeholder='Search'/>
                  <img src={Search} alt="" />
              </div>
          </div>
          <div className="user_panel">
             <div className="langauge_dropdown">
             <DropdownButton id="dropdown-basic-button" title="EN">
                <Dropdown.Item href="">EN</Dropdown.Item>
                <Dropdown.Item href="">FR</Dropdown.Item>
              </DropdownButton>
             </div>
             <div className="city_dropdown">
             <DropdownButton id="dropdown-basic-button" title="Ontario">
                <Dropdown.Item href="">Ontario</Dropdown.Item>
                <Dropdown.Item href="">Albama</Dropdown.Item>
              </DropdownButton>
             </div>
             <div className="user_dropdown">
             <Dropdown>
             <Dropdown.Toggle>
             <img src={Avatar} alt="" />
            </Dropdown.Toggle>

             <Dropdown.Menu >
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
             </div>
          </div>
      </div>
    </>
  )
}

export default Header 