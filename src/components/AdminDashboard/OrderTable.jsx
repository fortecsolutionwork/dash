import React, {useState} from 'react'
import DataTable from 'react-data-table-component';
import Avatar from '../../images/avatar.png'
import Sun from '../../images/sun.svg'
import Sunrise from '../../images/sunrise.svg'

const OrderTable  = () => {
    const [showIcon, setShowIcon] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
  
  
    const editItem = () =>{
      setShowIcon(!showIcon);
    }
  
    const editList = () =>{
      setShowEdit(!showEdit);
    }
    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
                borderBottomWidth: '0'
            },
        },
        headCells: {
            style: {
                paddingLeft: '1rem', // override the cell padding for head cells
                paddingRight: '1rem',
            },
        },
        cells: {
            style: {
                paddingLeft: '1rem', // override the cell padding for data cells
                paddingRight: '1rem',
                fontSize: '1.25rem'
            },
        },
    };

    const columns = [
        {
            name: 'ID',
            selector: row => row.unique_id,
        },
        {
            name: 'Names',
            width: "15vw" ,
            selector: (row) => <div className="user_info">
            <img src={Avatar} alt="" />
            <div className="name"><b>{row.names}</b></div>
            <div className="address"><small>{row.address}</small></div>
          </div>,
        },
        {
            name: 'Flight Risk',
            selector: (row) => <div className='status_wrap'><span className='status red'></span></div>,
        },
        {
            name: 'Monday',
            selector: (row) => <div className="status-wrap">
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
            </div>,
        },
        {
            name: 'Tuesday',
            selector: (row) => <div className="status-wrap">
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
            </div>,
        },
        {
            name: 'Wednesday',
            selector: (row) => <div className="status-wrap">
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
            </div>,
        },
        {
            name: 'Thursday',
            selector: (row) => <div className="status-wrap">
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
            </div>,
        },
        {
            name: 'Friday',
            selector: (row) => <div className="status-wrap">
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
            </div>,
        },
        {
            name: 'Saturday',
            selector: (row) => <div className="status-wrap">
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
            </div>,
        },
        {
            name: 'Sunday',
            selector: (row) => <div className="status-wrap">
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-1"><img src={Sunrise} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-2"><img src={Sun} alt="" /></div></div> 
            <div className="radio_toggle"><input type="radio" name="available_monday" id="" /><div className="icon-3"><img src={Sunrise} alt="" /></div></div> 
            </div>
            ,
    
        },
    ];
    
    const data = [
        {
            id: 1,
            unique_id: 'LTG22041',
            names: 'Jamal K',
            address: '263 Ossington Ove',
            image: Avatar
        },
        {
            id: 2,
            unique_id: 'LTG22041',
            names: 'Jamal K',
            address: '263 Ossington Ove',
            image: Avatar
        },
    ]


  return (
    <>
    <div className="table">
    <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles} 
        />
        </div>
    </>
  )
}

export default OrderTable