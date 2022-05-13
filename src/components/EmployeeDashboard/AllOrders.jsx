import React, {useState} from 'react'
import Header from '../EmployeeDashboard/Header'
import TopStats from '../TopStats'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Camera from '../../images/camera.svg'
import Modal from 'react-bootstrap/Modal'
import OrderList from './OrderList';

  const Data = [
    {
       id: 0,
       title: 'Pending Orders',
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
  title: 'Overall Status',
  value: 'On Time',
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
        name: 'Jhon Snow',
        address: '263 Ossington Ave',
        tel: '(416) 7890 235',
        status: 'assigned',
        order_number : 'LTGOA000001',
        pickup_type: 'Normal Pickup',
        comments: 'call 10 mins before pickup'
    },
    {
      id: 1,
      name: 'Eric White',
      address: '263 Ossington Ave',
      tel: '(416) 7890 295',
      status: 'completed',
      order_number : 'LTGOA000002',
        pickup_type: 'Normal Pickup',
        comments: 'call 10 mins before pickup'
  },
  {
    id: 2,
    name: 'Jhon Snow',
    address: '263 Ossington Ave',
    tel: '(416) 7890 235',
    status: 'servicing',
    order_number : 'LTGOA000003',
        pickup_type: 'Normal Pickup',
        comments: 'call 10 mins before pickup'
},
{
  id: 3,
  name: 'Eric White',
  address: '263 Ossington Ave',
  tel: '(416) 7890 235',
  status: 'completed',
  order_number : 'LTGOA000004',
        pickup_type: 'Normal Pickup',
        comments: 'call 10 mins before pickup'
},
{
  id: 4,
  name: 'Erica Smith',
  address: '263 Ossington Ave',
  tel: '(416) 7890 235',
  status: 'servicing',
  order_number : 'LTGOA000005',
        pickup_type: 'Normal Pickup',
        comments: 'call 10 mins before pickup'
},
  ]

const AllOrders = () => {

   const[datalist, setDataList] = useState(list);  // List Data
  const [startDate, setStartDate] = useState(null); // Calendar Date
  const [show, setShow] = useState(false); // Modal 1
  const [show2, setShow2] = useState(false); // Modal 2
  const handleClose = () => setShow(false); // Modal 1 Close
  const handleShow = () => setShow(true); // Modal 1 Open
  const handleClose2 = () => setShow2(false); // Modal 2 Close
  const handleShow2 = () => setShow2(true); // Modal 2 Open

  return (
    <>
      <Header />
      <div className="row gx-2 flex-nowrap head_stats mt-1">
      {Data.map((data, index) =>{
        return(
        <TopStats title={data.title} value={data.value} id={data.id} key={index}/>
      )})}
      </div>

      <div className="listing_wrap mt-3">
        <div className="row justify-content-between flex-nowrap gx-0">
          <div className="col-7">
              <div className="time_radio_group ">
                <div className="radio_single">
                  <input type="radio" name="time" id="radio1" defaultChecked/>
                  <label htmlFor='radio1'>8:00 AM</label>
                </div>
                <div className="radio_single">
                  <input type="radio" name="time" id="radio2"/>
                  <label htmlFor='radio2'>11:30 AM</label>
                </div>
              </div>
          </div>
          <div className="col-4 ps-0">
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="Today" dateFormat="MMMM d"/>
          </div>
        </div>

          <div className="listing_table mt-4">
          
          {datalist.map(({name, address, tel, status, order_number, pickup_type, comments, id}, index) =>{

            return(
              <OrderList name={name} address={address} tel={tel} status={status} key={index} order_number={order_number} pickup_type={pickup_type} comments={comments} handleShow={handleShow} id={id} handleShow2={handleShow2}/>
           )})}

          

            {/* <div className="listing_group">
              <div className="listing_row">
                 <div className='details'>
                   <h3 onClick={() => setSlide(!slide)}>Eric White</h3>
                   <p>263 Ossington AVe</p>
                 </div>
                 <div className='actions'>
                   <a href="tel: (416) 7890 235"><img src={Call} alt="" /></a>
                   <span className="order_status assigned btn" onClick={handleShow}>Assigned</span>
                 </div>
              </div>
             
             { slide ? <div className="listing_slide">
                  <div className="row gx-0">
                    <div className="col-5 pos_relative">
                       <button className='btn-primary direction_btn'><img src={Direction} alt="" /> Directions</button>
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.945248748257!2d114.1732937154152!3d22.28006374925834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13ff472207979395%3A0x14bb393f784a9b06!2sChina%20Resources%20Building!5e0!3m2!1sen!2sin!4v1652344330335!5m2!1sen!2sin"></iframe>

                    </div>
                    <div className="col-7 ps-4">
                       <div className="order_no">LTGOA000001</div>
                       <div className="pickup_type">Normal pickup</div>
                       <div className="comments">Call 10 mins before pick up</div>
                       <div className="d-flex mt-3">
                       <div className="upload_weight file me-3"><label onClick={handleShow2}><img src={Img} alt="" srcset="" /> weight uploaded</label></div>
                       <div className="upload_cost file"><label><img src={Cloud} alt="" srcset="" /> upload cost</label></div>
                       </div>
                    </div>
                  </div>
              </div>
              : null
              } 
            </div> */}

              <p className='text-center end_sep mt-5'><span>That's all for today</span></p>

          </div>
      </div>



      <Modal show={show} onHide={handleClose} className="w-60 staff_add" aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body className='text-center pt-4'>
        <div className="order_no mb-4 mt-2">LTGOA000001</div>
        <p>Set order #4 status to <b>Servicing</b></p>
        </Modal.Body>

        <Modal.Footer className='pt-0 pb-5'>
        <div className="actions_btns mt-0"><button className="btn btn-primary"><span className="material-icons">check</span> Yes</button><button className="btn btn-danger" onClick={handleClose}><span className="material-icons delete_item">clear</span> Cancel</button></div>
        </Modal.Footer>
      </Modal>


      <Modal show={show2} onHide={handleClose2} className="w-60 staff_add" aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body>
        <div className="order_no mb-4">LTGOA000001</div>
        <form action="">
          <div className="form-group row align-items-center">
          <label className='col-3'>Weight</label>
           <div className="col-9"><input type="text" name="" id="" placeholder='Ex. 40 lb' className='form-control'/></div>
          </div>

          <label className='my-4 file_upload'><input type="file" name="" id=""/><img src={Camera} alt="" srcset="" /> Upload Image</label>
        </form>
        <p className='text-center px-5'><small>Make sure the image is clear and the weight is visible</small></p>
        </Modal.Body>
      </Modal>


    </>
  )
}

export default AllOrders