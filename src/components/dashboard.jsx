import React, { useState } from 'react'
import Close from '../images/close.svg'
import Sun from '../images/sun.svg'
import Sunrise from '../images/sunrise.svg'
import personData from '../components/personData'


const newMeta = personData.map((elem) =>{
    return elem.meta;
})

console.log(newMeta)

const Dashboard = () => {

const [item, setItem] = useState(personData);
const [info, setInfo] = useState(newMeta);

const deleteItem = (id) =>{
    const newData = personData.filter((elem, index) =>{
           return elem.meta;
    })
    setItem(newData);
}



  return (
    <>
      <div className="react_row justify-space-between">
       <div className="left_panel">
           <div className="schedule_timings widget">
               <div className='date'>January 20 2022</div>
               <div className="badges">8:00 AM</div>
               <div className="badges">11:30 AM</div>
           </div>
           <div className="widget order_smry">
             <h3>Order Summary</h3>
             <div className="react_row justify-space-between">
                 <div className="order_qty">
                    <p><strong>8</strong> * 8:00 AM Bookings</p>
                    <p><strong>12</strong> * 11:30 AM Bookings</p>
                 </div>
                 <div className="order_total">
                     <small>TOTAL</small><span>500 lb</span>
                 </div>
             </div>
             <div className="stats react_row justify-space-between">
                 <div className="total_staff">STAFF REQ <strong>10</strong></div>
                 <div className="assigned_staff">ASSIGNED <strong>5</strong></div>
                 <div className="unassigned_staff">UNASSIGNED <strong>280 lb</strong></div>
             </div>
           </div>

           <div className="widget available_person">
             <h3>Fleet</h3>
             <div className="items_wrap">
                 {  
                 item.map((elem, index) =>{
                     return(
                         <>
                <div className="single_item" key={index}>
                 <div className="react_row justify-space-between person_info">
                 <div>
                     <img src={elem.avatar} alt="" className='avatar'/>
                    <h3><strong>{elem.name}</strong></h3>
                    <p>{elem.address}</p>
                 </div>
                 <div className="order_total">
                     <h3>{elem.total}</h3>
                 </div>
                 </div>
                 <div className="timings_wrap">
                 {  
                 elem.meta.map((arr) =>{
                   return(
                       <>
                    <div className="timings" key={arr.index}>
                     <div className="react_row justify-space-between">
                     <div>
                     <div>{arr.pickup} </div>
                     <div><small>{arr.location} | {arr.time} </small></div>
                     </div>
                     <div className="action">
                         <span className="badges">{arr.per_ride}</span>
                         <span><img src={Close} alt="" onClick={() => deleteItem(index)}/></span>
                     </div>
                     </div>
                    </div>
                       </>
                   )})}

                 </div>
             </div>
                         </>
                     )})}
             

             </div>
             
           </div>
       </div>

         <div className="right_panel">
             <div className="widget status_wrap">
                 <div className="react_row head">
                     <div>
                         <h3>Fleet Status &amp; Weight Distribution (in Lbs)</h3>
                     </div>
                     <div>
                         <span className='green'>4 Online</span>
                         <span className='yellow'>3 Offline</span>
                     </div>
                 </div>
                 <div className="progress_wrap">
                     <div className="status_single">
                         <div>
                              <img src={Sunrise} alt="" />
                              <img src={Sun} alt="" />
                              <div><b>Jamal K</b></div>
                         </div>
                         <div className="progress_bars">
                             <div className="progress_bar yellow_bg" data-attr="100%"></div>
                             <span>220</span>
                         </div>
                     </div>
                     <div className="status_single">
                         <div>
                              <img src={Sunrise} alt="" />
                              <img src={Sun} alt="" />
                              <div><b>Wendy Buffey</b></div>
                         </div>
                         <div className="progress_bars">
                             <div className="progress_bar blue_bg" data-attr="30%"></div>
                             <span>60</span>
                         </div>
                     </div>
                     <div className="status_single">
                         <div>
                              <img src={Sunrise} alt="" />
                              <img src={Sun} alt="" />
                              <div><b>Karen Page</b></div>
                         </div>
                         <div className="progress_bars">
                             <div className="progress_bar green_bg" data-attr="80%"></div>
                             <span>175</span>
                         </div>
                     </div>
                     <div className="status_single">
                         <div>
                              <img src={Sunrise} alt="" />
                              <img src={Sun} alt="" />
                              <div><b>Willy Braun</b></div>
                         </div>
                         <div className="progress_bars">
                             <div className="progress_bar blue_bg" data-attr="50%"></div>
                             <span>220</span>
                         </div>
                     </div>
                     <div className="status_single">
                         <div>
                              <img src={Sunrise} alt="" />
                              <img src={Sun} alt="" />
                              <div><b>Jamal K</b></div>
                         </div>
                         <div className="progress_bars">
                             <div className="progress_bar yellow_bg" data-attr="100%"></div>
                             <span>220</span>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         </div>

    </>
  )
}

export default Dashboard