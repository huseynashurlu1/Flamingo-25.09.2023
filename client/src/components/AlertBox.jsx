import React from 'react'

const AlertBox = (props) => {
  return (
    <div className='alert alert-danger mx-auto mt-3 text-center'>
        <p>{props.text}</p>
    </div>
  )
}

export default AlertBox