import React from 'react'

const OrdersList = ({id, orderId, date, time, customer, phone, address, weight, staff, status}) => {
  return (
    <>
        <tr>
                   <td><span>{orderId}</span></td>
                   <td>{date}</td>
                   <td>{time}</td>
                   <td className='customer_name mobile_visible'>{customer} <span className='green_bg badge'>New</span></td>
                   <td className='customer_phone mobile_visible'><a href={`tel: ${phone}`}>{phone}</a></td>
                   <td className='customer_address mobile_visible'>{address}</td>
                   <td>{weight}</td>
                   <td>{staff}</td>
                   <td className='mobile_visible'><span className={`order_status ${status} btn`}>{status}</span> <span className="material-icons edit_icon">more_vert</span></td>
                    
                    
                    {/* <div className='slide_div'>

                     <div className="row">
                        <div className="col-md-1 text-center">
                           <div className="user_img">
                             <img src="images/avatar.png" alt=""/>
                             <span>Change Image</span>
                           </div>
                        </div>
                        <div className="col-md-4">
                          <table className='edit_table'>
                            <tbody>
                            <tr>
                              <td>Name</td>
                              <td>Jamal K <i className='edit'>Edit</i></td>
                            </tr>
                            <tr>
                              <td>Address</td>
                              <td>263 Ossington Ove, Canada <i className='edit'>Edit</i></td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>Test@gmail.com <i className='edit'>Edit</i></td>
                            </tr>
                            <tr>
                              <td>Phone</td>
                              <td>(416) 474-6019 <i className='edit'>Edit</i></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-4">
                        <table className='edit_table'>
                            <tbody>
                            <tr>
                              <td>Billing</td>
                              <td><div className="radio_group"><label><input type="radio" name="billing" id="" checked/>Static </label><label><input type="radio" name="billing" id="" />Dynamic </label></div></td>
                            </tr>
                            <tr>
                              <td>Daily Rate</td>
                              <td>$144 <i className='edit'>Edit</i></td>
                            </tr>
                            <tr>
                              <td>Hourly Rate</td>
                              <td>$18</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-3">
                        <table className='edit_table'>
                            <tbody>
                            <tr>
                              <td>Date Joined</td>
                              <td>10/02/2021 <i className='edit'>Edit</i></td>
                            </tr>
                            <tr>
                              <td>Flight Risk</td>
                              <td><span className='risk green'></span></td>
                            </tr>
                            </tbody>
                          </table>

                          <div className="actions_btns">
                          <button className='btn btn-primary'><span className="material-icons">check</span> Save</button>
                          <button className='btn btn-danger'><span className="material-icons">delete_outline</span> Delete Staff</button>
                          </div>
                        </div>
                     </div>

                    </div> */}

                    

         </tr>
    </>
  )
}

export default OrdersList