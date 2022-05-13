import React from 'react'

const TopStats = (props) => {
  return (
    <>
         <div className='col-auto flex-grow-1' key={props.id}>
           <div className="table_status_bar">
           <h3 className='title'>{props.title}</h3>
           <div className="stat">{props.value}</div>
           </div>
         </div>
    </>
  )
}

export default TopStats