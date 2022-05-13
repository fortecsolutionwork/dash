import React, {useState } from 'react'
import Avatar from '../../images/avatar.png'
import Search from '../../images/search.svg'
import icon1 from '../../images/manager.png'
import icon2 from '../../images/order.png'
import icon3 from '../../images/customer.png'
import icon4 from '../../images/report.png'
import icon5 from '../../images/help.png'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import Form from 'react-bootstrap/Form'

const Header = () => {
    const [active, setActive] = useState('false');
    const [seachForm, setSeachForm] = useState('false');


    // Title Based on URL
    const location = useLocation();
    //console.log(location);
  
    const menuToggle = () =>{
      setActive(!active);
    }

    const toggleSearchForm = () =>{
        setSeachForm(!seachForm);
    }

    

  return (
    <>
    <div className="header mobile_header">
          <div className="branding">
            <span className={`menu_toggle ${active ? "" : "active"}`} onClick={menuToggle}><span></span></span>
            
            {(() => {

                if (location.pathname === '/AllOrders') {
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
           <div className="menu_extras">
           <div className="city_dropdown">
           <Form.Select aria-label="Default select example">
            <option value="1">ON</option>
            <option value="2">AL</option>
            </Form.Select>
            </div>
            <div className="search_mobile">
            <img src={Search} alt="" onClick={toggleSearchForm}/>
            <div className= {`search_form ${seachForm ? "" : "active"}`} ><input type="text" name="" id="" placeholder='Search' className='form-control'/><i className='fas fa-times' onClick={toggleSearchForm}></i></div>
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