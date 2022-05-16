import React from 'react'

const TopStats = (props) => {
  return (
    <>
         <div className='col-auto flex-grow-1' key={props.id}>
           <div className="table_status_bar">
           <h3 className='title'>{props.title}</h3>
           <div className="stat">{props.value}</div>
           {props.value_1 ||  props.value_2 ? <div className="value"><span>{props.value_1}</span> {props.value_2 ? <span>{props.value_2}</span> : null }</div> : null}
           </div>
         </div>
    </>
  )
}

export default TopStats