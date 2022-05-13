import React, {useState} from 'react'
import Cloud from '../../images/cloud-upload.svg'
import Call from '../../images/call.svg'
import Direction from '../../images/directions.svg'
import Img from '../../images/image.svg'

const OrderList = ({name, address, tel, status, order_number, pickup_type, comments, handleShow, handleShow2}) => {
  const [slide, setSlide] = useState(false); // Sliding Div
  return (
    <>
    <div className="listing_group">
              <div className="listing_row">
                   <div className='details'>
                     <h3 onClick={() => setSlide(!slide)}>{name}</h3>
                     <p>{address}</p>
                   </div>
                   <div className='actions'>
                     <a href={`tel: ${tel}`}><img src={Call} alt="" /></a>
                     <span className={`order_status ${status} btn`} onClick={() => handleShow()}>{status}</span>
                   </div>
                </div>

              {slide &&  <div className="listing_slide">
                  <div className="row gx-0">
                    <div className="col-5 pos_relative">
                       <button className='btn-primary direction_btn'><img src={Direction} alt="" /> Directions</button>
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.945248748257!2d114.1732937154152!3d22.28006374925834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13ff472207979395%3A0x14bb393f784a9b06!2sChina%20Resources%20Building!5e0!3m2!1sen!2sin!4v1652344330335!5m2!1sen!2sin"></iframe>

                    </div>
                    <div className="col-7 ps-4">
                       <div className="order_no">{order_number}</div>
                       <div className="pickup_type">{pickup_type}</div>
                       <div className="comments">{comments}</div>
                       <div className="d-flex mt-3">
                       <div className="upload_weight file me-3"><label onClick={() => handleShow2()}><img src={Img} alt="" /> upload weight</label></div>
                       <div className="upload_cost file"><label onClick={() => handleShow2()}><img src={Cloud} alt="" /> upload cost</label></div>
                       </div>
                    </div>
                  </div>
              </div>

} 
              

            </div>
    </>
  )
}

export default OrderList