import React, {useState} from 'react'
import Edit from '../../images/edit.svg'
import Sun from '../../images/sun.svg'
import Sunrise from '../../images/sunrise.svg'
import Modal from 'react-bootstrap/Modal'
import Header from '../Header';



const FleetManager = () => {
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
       title: 'Fleet Size',
       value: '15',
    },
    {
      id: 1,
      title: 'Under Capacity',
      value: 'Thursday',
      value_1 : '40',
      value_2 : '35',
   },
   {
    id: 2,
    title: 'Over Capacity',
    value: 'Tuesday',
    value_1 : '40',
    value_2 : '35',
 },
 {
  id: 3,
  title: 'Most Active Staff',
  value: 'Karen Page',

},
{
  id: 4,
  title: 'Least Active Staff',
  value: 'Jamal K',
  
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
           {elem.value_1 &&  elem.value_1 ? <div className="value"><span>{elem.value_1}</span><span>{elem.value_2}</span></div> : null}
           </div>
         </div>

          )})}
     </div>
     </div>

     <div className="table_wrap">
       <div className="container-fluid">
         <div className="row justify-content-between">
           <div className='col-auto'><h5><b>FLEET</b></h5></div>
           <div className="actions col-auto">
           <button href="" className='btn btn-light' onClick={editItem}><img src={Edit} alt="" /></button>
             <button className='btn btn-primary' onClick={handleShow}>+ Add Staff</button>
             <button href="" className='btn btn-light'>Export</button>
           </div>  
         </div>
             <table className='table scroll_table'>
               <thead>
               <tr>
               <th>ID</th>
               <th>Names</th>
               <th>Flight Risk</th>
               <th>Monday</th>
               <th>Tuesday</th>
               <th>Wednesday</th>
               <th>Thursday</th>
               <th>Friday</th>
               <th>Saturday</th>
               <th>Sunday</th>
               </tr>
               <tr>
                   <td><div className="search_filter"><input type="text" name="" id="" placeholder='Search ID'/></div></td>
                   <td><div className="search_filter"><input type="text" name="" id="" placeholder='Search Names'/></div></td>
                   <td><div className="add_filter"><button className='btn btn-primary'>+ Add Filter</button></div></td>
                   <td>18</td>
                   <td>19</td>
                   <td>20</td>
                   <td>21</td>
                   <td>22</td>
                   <td>23</td>
                   <td>24</td>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td><span onClick={editList}>LTG22041</span></td>
                   <td> 
                     <div className="user_info">
                       <img src="/images/avatar.png" alt="" />
                       <div className="name"><b>Jamal K</b></div>
                       <div className="address"><small>263 Ossington Ove</small></div>
                     </div>
                    </td>
                    <td>
                      <div className='status_wrap'><span className='status red'></span></div></td>
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
                      {showIcon ? <span className="material-icons delete_item">clear</span>: null}
                    </td>
                    
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
                   <td><span onClick={editList}>LTG22041</span></td>
                   <td>
                     <div className="user_info">
                       <img src="/images/avatar.png" alt="" />
                       <div className="name"><b>Jamal K</b></div>
                       <div className="address"><small>263 Ossington Ove</small></div>
                     </div>
                    </td>
                    <td><div className='status_wrap all'><span className='status red'></span><span className='status green'></span><span className='status yellow'></span></div></td>
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
                      {showIcon ? <span className="material-icons delete_item">clear</span>: null}
                    </td>
                 </tr>
               </tbody>
               <tfoot>
                 <tr>
                   <td></td>
                   <td><b>Bookings</b></td>
                   <td></td>
                   <td><span>42</span></td>
                   <td><span>40</span></td>
                   <td><span>53</span></td>
                   <td><span>40</span></td>
                   <td><span>41</span></td>
                   <td><span>38</span></td>
                   <td><span>33</span></td>
                 </tr>
                 <tr>
                   <td></td>
                   <td><b>Capacity</b></td>
                   <td></td>
                   <td><span><b>42</b></span></td>
                   <td><span className='capacity bg_green'><b>40</b></span></td>
                   <td><span><b>53</b></span></td>
                   <td><span className='capacity bg_red'><b>40</b></span></td>
                   <td><span><b>41</b></span></td>
                   <td><span><b>38</b></span></td>
                   <td><span><b>33</b></span></td>
                 </tr>
                 <tr>
                   <td></td>
                   <td><b>Staff Count</b></td>
                   <td></td>
                   <td><span><b>42</b></span></td>
                   <td><span className='capacity bg_green'><b>40</b></span></td>
                   <td><span><b>53</b></span></td>
                   <td><span className='capacity bg_red'><b>40</b></span></td>
                   <td><span><b>41</b></span></td>
                   <td><span><b>38</b></span></td>
                   <td><span><b>33</b></span></td>
                 </tr>
                 </tfoot>
             </table>
         </div>
     </div>

     <Modal show={show} onHide={handleClose} className="w-80 staff_add" aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body>
          <h2>Enter Staff Details</h2>
          <form className="row">
            <div className="col-md-4">
               <h3>Personal Details</h3>
               <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">ID</label>
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
            <div className="col-md-4">
            <h3>Pay Details</h3>
                <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">Billing</label>
                 <div className="col-sm-9"><div className="radio_group"><label><input type="radio" name="billing" id="" checked="" />Static </label><label><input type="radio" name="billing" id="" />Dynamic </label></div></div>
                </div>
                <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">Daily Rate</label>
                 <div className="col-sm-9"><input type="text" name="" placeholder='Ex. $144' className='form-control'/></div>
                </div>
                <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">Hourly Rate</label>
                 <div className="col-sm-9"><input type="text" name="" placeholder='Ex. $18' className='form-control'/></div>
                </div>
                <h3>Misc</h3>
                <div className="row mb-2">
                 <label className="form-label col-form-label col-sm-3">Date Joined</label>
                 <div className="col-sm-9"><input type="text" name="" placeholder='Ex. 10/02/2021' className='form-control'/></div>
                </div>
            </div>
            <div className="col-md-4 text-center">
             <label for="file" className='custom_file'><input type="file" name="" id="file" onChange={imageChange}
             /> Upload Image   {selectedImage && (
              <div className='uploaded_pic'>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Thumb"
                />
                <button onClick={removeSelectedImage}>
                  Remove This Image
                </button>
              </div>
            )}</label>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
        <div className="actions_btns"><button className="btn btn-primary"><span className="material-icons">check</span> Save</button><button className="btn btn-danger" onClick={handleClose}><span className="material-icons delete_item">clear</span> Cancel</button></div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FleetManager