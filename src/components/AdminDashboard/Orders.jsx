import React, {useState} from 'react'
import Edit from '../../images/edit.svg'
import Sun from '../../images/sun.svg'
import Sunrise from '../../images/sunrise.svg'
import Modal from 'react-bootstrap/Modal'
import Header from '../Header';
import OrdersList from './OrdersList'
import TopStats from '../TopStats'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Stats = [
  {
     id: 0,
     title: 'Orders Today',
     value: '40',
  },
  {
    id: 1,
    title: 'Serviced',
    value: '14',
 },
 {
  id: 2,
  title: 'Completed',
  value: '8',
},
{
id: 3,
title: 'Average ETA',
value: '180 mins',
},
{
id: 4,
title: 'Hottest Area',
value: 'Downtown',
},
{
id: 5,
title: 'Coldest Area',
value: 'New York',
},
{
id: 6,
title: 'Complaint Probability',
value: '10%',
},
]


const list = [
  {
      id: 0,
      orderId: 'LTGOA000001',
      date: '11 April 2022',
      time: '8:00 AM',
      customer: 'Jhon Show',
      phone : '(416) 474-6019',
      address: '263 Ossington Ove',
      weight: '10 lb',
      staff: 'Wendey BUffey',
      status: 'assigned'
  },
]

const Orders = () => {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(null); // Calendar Date

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Header />
    <div className="container-fluid px-0">
     <div className="row gx-2 my-2 flex-nowrap head_stats">
     {Stats.map((data, index) =>{
        return(
        <TopStats title={data.title} value={data.value} id={data.id} key={index}/>
      )})}
         
     </div>
     </div>

     <div className="table_wrap">
       <div className="container-fluid">
         <div className="row justify-content-between table_actions">
           <div className='col-auto'><h5><b>ORDERS</b></h5></div>
           <div className="actions col-auto">
             <button className='btn btn-primary' onClick={handleShow}>+ Add Order</button>
             <button href="" className='btn btn-light'>Export</button>
           </div>  
         </div>
             <table className='table'>
               <thead>
               <tr>
               <th>Order ID</th>
               <th>Date</th>
               <th>Time</th>
               <th>Customer</th>
               <th>Phone</th>
               <th>Address</th>
               <th>Weight</th>
               <th>Staff</th>
               <th>Status</th>
               </tr>
               <tr>
                   <td><div className="search_filter"><input type="text" name="" id="" placeholder='Search ID'/></div></td>
                   <td className='mobile_filter'><div className="search_filter"><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="11 Apr - 18 Apr" dateFormat="MMMM d"/></div></td>
                   <td className='mobile_filter'><div className="add_filter"><button className='btn btn-primary'>+ Add Filter</button></div></td>
                   <td><div className="search_filter"><input type="text" name="" id="" placeholder='Search Customer'/></div></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td><div className="search_filter"><input type="text" name="" id="" placeholder='Search Customer'/></div></td>
                   <td></td>
                 </tr>
               </thead>
               <tbody>
                   
                   {list.map(({id, orderId, date, time, customer, phone, address, weight, staff, status}, index) =>{
                          return <OrdersList key={index} id={id} orderId={orderId} date={date} time={time} customer={customer} phone={phone} address={address} weight={weight} staff={staff} status={status}/>
                   })}
               </tbody>
             </table>
         </div>
     </div>

     <Modal show={show} onHide={handleClose} className="w-60 staff_add" aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body>
          <h2>Enter Order Details</h2>
          <form className="row">
            <div className="col-md-6">
               <h3>Personal Details</h3>
               <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">Order ID</label>
                 <div className="col-sm-9"><input type="text" name="" placeholder='LTG22041' className='form-control'/></div>
                </div>
                <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">Name</label>
                 <div className="col-sm-9"><input type="text" name="" placeholder='Ex. Karl Smith' className='form-control'/></div>
                </div>
                <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">Address</label>
                 <div className="col-sm-9"><input type="text" name="" placeholder='263 Ossington Ove, Canada' className='form-control'/></div>
                </div>
                <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">Email</label>
                 <div className="col-sm-9"><input type="text" name="" placeholder='Test@gmail.com' className='form-control'/></div>
                </div>
                <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">Phone</label>
                 <div className="col-sm-9"><input type="text" name="" placeholder='(416) 474-6019' className='form-control'/></div>
                </div>
            </div>
            <div className="col-md-6">
            <h3>Order Details</h3>
                <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">Slot</label>
                 <div className="col-sm-9"><div className="radio_group"><label><input type="radio" name="billing" defaultChecked/>8: 00 AM </label><label><input type="radio" name="billing" id=""/>11:30 AM </label></div></div>
                </div>
                <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">Coupon</label>
                 <div className="col-sm-9"><input type="text" name="" placeholder='Ex. Freepick' className='form-control'/></div>
                </div>
                <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">User Notes</label>
                 <div className="col-sm-9"><textarea placeholder='Ex. Extra requests' className='form-control'/></div>
                </div>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
        <div className="actions_btns"><button className="btn btn-primary"><span className="material-icons">check</span> Add</button><button className="btn btn-danger" onClick={handleClose}><span className="material-icons delete_item">clear</span> Cancel</button></div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Orders