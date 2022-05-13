import React, {useState} from 'react'
import Edit from '../../images/edit.svg'
import Sun from '../../images/sun.svg'
import Sunrise from '../../images/sunrise.svg'
import Modal from 'react-bootstrap/Modal'
import Header from '../Header';



const Orders = () => {
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

  const updateSlot = () =>{

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


  return (
    <>
    <Header />
    <div className="container-fluid px-0">
     <div className="row gx-2 my-2 flex-nowrap head_stats">
       {Data.map((elem, index) =>{
         return(
         <div className='col-auto flex-grow-1' key={elem.id}>
           <div className="table_status_bar">
           <h3 className='title'>{elem.title}</h3>
           <div className="stat">{elem.value}</div>
           </div>
         </div>

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
                   <td className='mobile_filter'><div className="search_filter"><input type="text" name="" id="" placeholder='Today'/></div></td>
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
                 <tr>
                   <td><span onClick={editList}>LTGOA000001</span></td>
                   <td>11 April 2022</td>
                   <td>8:00 AM</td>
                   <td className='customer_name mobile_visible'>Jhon Show <span className='green_bg badge'>New</span></td>
                   <td className='customer_phone mobile_visible'><a href="tel:(416) 474-6019">(416) 474-6019</a></td>
                   <td className='customer_address mobile_visible'>263 Ossington Ove</td>
                   <td>10 lb</td>
                   <td>Wendey BUffey</td>
                   <td className='mobile_visible'><span className='order_status assigned btn'>Assigned</span> <span className="material-icons edit_icon">more_vert</span></td>
                    
                    {showEdit ? 
                    <div className='slide_div'>

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

                    </div>

                    : null }

                 </tr>
                 <tr>
                   <td><span onClick={editList}>LTGOA000001</span></td>
                   <td>11 April 2022</td>
                   <td>8:00 AM</td>
                   <td>Jhon Show</td>
                   <td><a href="tel:(416) 474-6019">(416) 474-6019</a></td>
                   <td>263 Ossington Ove</td>
                   <td>10 lb</td>
                   <td>Wendey BUffey</td>
                   <td><span className='order_status unassigned btn'>Unassigned</span> <span className="material-icons edit_icon">more_vert</span></td>
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
                 <div className="col-sm-9"><div className="radio_group"><label><input type="radio" name="billing" defaultChecked  onChange={updateSlot}/>8: 00 AM </label><label><input type="radio" name="billing" id="" onChange={updateSlot}/>11:30 AM </label></div></div>
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