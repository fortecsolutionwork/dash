import React, {useState} from 'react'
import Sun from '../../images/sun.svg'
import Avatar from '../../images/avatar.png'
import Sunrise from '../../images/sunrise.svg'

const FleetList = ({id, fleetID, fleetName, address, image, risk, email, tel, dailyRate, hourlyRate, dateJoined}) => {
    const [showEdit, setShowEdit] = useState(false);
  return (
    <>
         <tr>
                   <td><span>{fleetID}</span></td>
                   <td> 
                     <div className="user_info" onClick={() => setShowEdit(!showEdit)}>
                       <img src={image} alt="" />
                       <div className="name"><b>{fleetName}</b></div>
                       <div className="address"><small>{address}</small></div>
                     </div>
                    </td>
                    <td>
                      <div className='status_wrap'><span className={`status ${risk}`}></span></div></td>
                    <td>
                      <div className="status-wrap">
                      <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
                      </div>
                    </td>
                    <td>
                    <div className="status-wrap">
                      <div className="radio_toggle"><input type="radio" name="available_tuesday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_tuesday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_tuesday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div>
                      </div> 
                    </td>
                   
                    <td>
                    <div className="status-wrap">
                      <div className="radio_toggle"><input type="radio" name="available_wednesday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_wednesday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_wednesday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
                      </div>
                    </td>
                    <td>
                    <div className="status-wrap">
                      <div className="radio_toggle"><input type="radio" name="available_thursday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_thursday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_thursday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
                      </div>
                    </td>
                    <td>
                    <div className="status-wrap">
                      <div className="radio_toggle"><input type="radio" name="available_friday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_friday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_friday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
                      </div>
                    </td>
                    <td>
                    <div className="status-wrap">
                      <div className="radio_toggle"><input type="radio" name="available_saturday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_saturday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_saturday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
                      </div>
                    </td>
                    <td>
                    <div className="status-wrap">
                      <div className="radio_toggle"><input type="radio" name="available_sunday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_sunday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
                      <div className="radio_toggle"><input type="radio" name="available_sunday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
                      </div>
                      {/* {showIcon ? <span className="material-icons delete_item">clear</span>: null} */}
                    </td>
                    
                    {showEdit ? 
                    <div className='slide_div'>

                     <div className="row">
                        <div className="col-md-1 text-center">
                           <div className="user_img">
                               
                             <img src={Avatar} alt=""/>
                             <span>Change Image</span>
                           </div>
                        </div>
                        <div className="col-md-4">
                          <table className='edit_table'>
                            <tbody>
                            <tr>
                              <td>Name</td>
                              <td>{fleetName} <i className='edit'>Edit</i></td>
                            </tr>
                            <tr>
                              <td>Address</td>
                              <td>{address} <i className='edit'>Edit</i></td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>{email} <i className='edit'>Edit</i></td>
                            </tr>
                            <tr>
                              <td>Phone</td>
                              <td>{tel} <i className='edit'>Edit</i></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-4">
                        <table className='edit_table'>
                            <tbody>
                            <tr>
                              <td>Billing</td>
                              <td><div className="radio_group"><label><input type="radio" name="billing" id="" defaultChecked/>Static </label><label><input type="radio" name="billing" id="" />Dynamic </label></div></td>
                            </tr>
                            <tr>
                              <td>Daily Rate</td>
                              <td>{dailyRate} <i className='edit'>Edit</i></td>
                            </tr>
                            <tr>
                              <td>Hourly Rate</td>
                              <td>{hourlyRate}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-3">
                        <table className='edit_table'>
                            <tbody>
                            <tr>
                              <td>Date Joined</td>
                              <td>{dateJoined} <i className='edit'>Edit</i></td>
                            </tr>
                            <tr>
                              <td>Flight Risk</td>
                              <td><span className={`risk ${risk}`}></span></td>
                            </tr>
                            </tbody>
                          </table>

                          <div className="actions_btns">
                          <button className='btn btn-primary'><span className="material-icons">check</span> Save</button>
                          <button className='btn btn-danger'><span className="material-icons">delete_outline</span> Delete Staff</button>
                          </div>
                        </div>
                     </div>

                    </div>

                    : null } 

                 </tr>
    </>
  )
}

export default FleetList