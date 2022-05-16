import React, {useState} from 'react'
import { Link } from "react-router-dom";

const CustomersList = ({id, customerID, date, weight, customer, phone, address, total_orders, feedback}) => {
    const [slide, setSlide] = useState(false);

  return (
    <>
     <tr>
                   <td><span onClick={() => setSlide(!slide)}>{customerID}</span></td>
                   <td>{date}</td>
                   <td>{weight}</td>
                   <td>{customer}</td>
                   <td>{phone}</td>
                   <td>{address}</td>
                   <td>{total_orders}</td>
                   <td><span className={`status ${feedback}`}></span> <span className="material-icons edit_icon">more_vert</span></td>
                    
                    {slide ? 
                    <div className='slide_div'>

                     <div className="row">
                        <div className="col-auto">
                           <div className="customer_info">
                             <h5 className='mb-5'><b>{customer}</b> <br/><small>Privilege Customer</small></h5>
                             <h3 className='mb-5'><b>{total_orders}<br/>Bookings</b></h3>
                             <h3><b>100000 lb+<br/>Weights</b></h3>
                           </div>
                        </div>
                        <div className="col-md-6 ps-5">
                            <h5><b>Upcoming Order</b> <Link to="/EmpOrders"><i className='edit'>Details</i></Link></h5>
                          <table className='edit_table zero_cp'>
                            <tbody>
                            <tr>
                              <td>LTGOA000051</td>
                              <td>11 April 2022</td>
                              <td>8:00 AM</td>
                              <td>50 lb</td>
                              <td>Wendey Buffey</td>
                              <td><span className='order_status assigned btn'>Assigned</span></td>
                            </tr>
                            </tbody>
                          </table>
                          <h5 className='mt-3'><b>Past Order</b> <i className='edit'>Details</i></h5>
                          <table className='edit_table  zero_cp'>
                            <tbody>
                            <tr>
                              <td>LTGOA000051</td>
                              <td>11 April 2022</td>
                              <td>8:00 AM</td>
                              <td>50 lb</td>
                              <td>Wendey Buffey</td>
                              <td><span className='order_status completed btn'>Completed</span></td>
                            </tr>
                            <tr>
                              <td>LTGOA000051</td>
                              <td>11 April 2022</td>
                              <td>8:00 AM</td>
                              <td>50 lb</td>
                              <td>Wendey Buffey</td>
                              <td><span className='order_status completed btn'>Completed</span></td>
                            </tr>
                            <tr>
                              <td>LTGOA000051</td>
                              <td>11 April 2022</td>
                              <td>8:00 AM</td>
                              <td>50 lb</td>
                              <td>Wendey Buffey</td>
                              <td><span className='order_status completed btn'>Completed</span></td>
                            </tr>
                            <tr>
                              <td>LTGOA000051</td>
                              <td>11 April 2022</td>
                              <td>8:00 AM</td>
                              <td>50 lb</td>
                              <td>Wendey Buffey</td>
                              <td><span className='order_status completed btn'>Completed</span></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-4">
                          <div className="customer_stat">
                              <div>
                              <h5>Normal Pickup</h5>
                              <h3>Leaves at Door Buzzer #</h3>
                              </div>
                              <div>
                              <h3>Wendey Bufey</h3>
                              <h5>Mostly Served by</h5>
                              </div>
                              <div>
                              <h3>0</h3>
                              <h5>Complaints</h5>
                              </div>
                          </div>
                        </div>

                     </div>

                    </div>

                    : null }

                 </tr>
    </>
  )
}

export default CustomersList