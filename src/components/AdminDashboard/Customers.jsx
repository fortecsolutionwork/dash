import React, {useState} from 'react'
import Edit from '../../images/edit.svg'
import Sun from '../../images/sun.svg'
import Sunrise from '../../images/sunrise.svg'
import Modal from 'react-bootstrap/Modal'
import Header from '../Header';
import { Link } from "react-router-dom";


const Customers = () => {
  const [show, setShow] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editItem = () =>{
    setShowIcon(!showIcon);
  }

  const editList = () =>{
    setShowEdit(!showEdit);
  }


  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const Data = [
    {
       id: 0,
       title: 'Total Customers',
       value: '1000',
    },
    {
      id: 1,
      title: 'New Customers This Week',
      value: '8',
   },
   {
    id: 2,
    title: 'Highest number of Bookings',
    value: 'Jhon Snow',
    number : '550'
 },
 {
  id: 3,
  title: 'Highest Order Week',
  value: '4 Apr - 10 Apr',
  number : '300'
},
{
  id: 4,
  title: 'Complaint Probability',
  value: '10%',
  
},
  ]



  return (
    <>
    <Header />
    <div className="container-fluid">
     <div className="row gx-2 my-2 flex-nowrap">
     {Data.map((elem, index) =>{
         return(
         <div className='col-auto flex-grow-1' key={elem.id}>
           <div className="table_status_bar">
           <h3 className='title'>{elem.title}</h3>
           <div className="stat">{elem.value}</div>
           {elem.number ? <div class="value"><span>300</span></div> : null}
           </div>
         </div>

          )})}
     </div>
     </div>

     <div className="table_wrap">
       <div className="container-fluid">
         <div className="row justify-content-between">
           <div className='col-auto'><h5><b>CUSTOMERS</b></h5></div>
           <div className="actions col-auto">
             <button href="" className='btn btn-light'>Export</button>
           </div>  
         </div>
             <table className='table'>
               <thead>
               <tr>
               <th>Customer ID</th>
               <th>Created</th>
               <th>Avg Weight</th>
               <th>Customer</th>
               <th>Phone</th>
               <th>Address</th>
               <th>Total Orders</th>
               <th>Feedback</th>
               </tr>
               <tr>
                   <td><div className="search_filter"><input type="text" name="" id="" placeholder='Search ID'/></div></td>
                   <td><div className="search_filter"><input type="text" name="" id="" placeholder='11 Apr - 18 Apr'/></div></td>
                   <td><div className="add_filter"><button className='btn btn-primary'>+ Add Filter</button></div></td>
                   <td><div className="search_filter"><input type="text" name="" id="" placeholder='Search Customer'/></div></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td><span onClick={editList}>LTGOA000001</span></td>
                   <td>11 April 2022</td>
                   <td>44 lb</td>
                   <td>Jhon Show</td>
                   <td>(416) 474-6019</td>
                   <td>263 Ossington Ove, Toronto, Canada</td>
                   <td>550</td>
                   <td><span className="status red"></span> <span className="material-icons edit_icon">more_vert</span></td>
                    
                    {showEdit ? 
                    <div className='slide_div'>

                     <div className="row">
                        <div className="col-auto">
                           <div className="customer_info">
                             <h5 className='mb-5'><b>Jhon Snow</b> <br/><small>Privilege Customer</small></h5>
                             <h3 className='mb-5'><b>550<br/>Bookings</b></h3>
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
                 <tr>
                 <td><span onClick={editList}>LTGOA000001</span></td>
                   <td>11 April 2022</td>
                   <td>44 lb</td>
                   <td>Jhon Show</td>
                   <td>(416) 474-6019</td>
                   <td>263 Ossington Ove, Toronto, Canada</td>
                   <td>550</td>
                   <td><span className="status red"></span> <span className="material-icons edit_icon">more_vert</span></td>
                   </tr>

                   
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
                 <div className="col-sm-9"><div className="radio_group"><label><input type="radio" name="billing" id="" checked="" />8: 00 AM </label><label><input type="radio" name="billing" id="" />11:30 AM </label></div></div>
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

export default Customers