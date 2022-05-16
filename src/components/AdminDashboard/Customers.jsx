import React, {useState} from 'react'
import Header from '../Header';
import TopStats from '../TopStats'
import CustomersList from './CustomersList'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Stats = [
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
  value_1 : '550'
},
{
id: 3,
title: 'Highest Order Week',
value: '4 Apr - 10 Apr',
value_1 : '300'
},
{
id: 4,
title: 'Complaint Probability',
value: '10%',

},
]

const list = [
  {
      id: 0,
      customerID: 'LTGOA000001',
      date: '11 April 2022',
      weight: '10 lb',
      customer: 'Jhon Show',
      phone : '(416) 474-6019',
      address: '263 Ossington Ove',
      total_orders: '500',
      feedback: 'red'
  },
  {
    id: 1,
    customerID: 'LTGOA000002',
    date: '11 April 2022',
    weight: '10 lb',
    customer: 'Micheal Clarke',
    phone : '(416) 474-6019',
    address: '263 Ossington Ove',
    total_orders: '700',
    feedback: 'red'
},
{
  id: 2,
  customerID: 'LTGOA000003',
  date: '11 April 2022',
  weight: '50 lb',
  customer: 'Micheal Clarke',
  phone : '(416) 474-6019',
  address: '263 Ossington Ove',
  total_orders: '700',
  feedback: 'red'
},
]


const Customers = () => {
  const [startDate, setStartDate] = useState(null); // Calendar Date

  return (
    <>
    <Header />
    <div className="container-fluid">
     <div className="row gx-2 my-2 flex-nowrap">
     {Stats.map((data, index) =>{
        return(
        <TopStats title={data.title} value={data.value} id={data.id} key={index} value_1={data.value_1}/>
      )})}
     </div>
     </div>

     <div className="table_wrap">
       <div className="container-fluid">
         <div className="row justify-content-between align-items-center">
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
                   <td><div className="search_filter"><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="11 Apr - 18 Apr" dateFormat="MMMM d"/></div></td>
                   <td><div className="add_filter"><button className='btn btn-primary w-100'>+ Add Filter</button></div></td>
                   <td><div className="search_filter"><input type="text" name="" id="" placeholder='Search Customer'/></div></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                 </tr>
               </thead>
               <tbody>
                
               {list.map(({id, customerID, date, weight, customer, phone, address, total_orders, feedback}, index) =>{
                          return <CustomersList key={index} id={id} customerID={customerID} date={date} weight={weight} customer={customer} phone={phone} address={address} total_orders={total_orders} feedback={feedback}/>
                   })}
               </tbody>
             </table>
         </div>
     </div>

    </>
  )
}

export default Customers