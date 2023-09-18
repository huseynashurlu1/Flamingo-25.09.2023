import React from 'react'

const AlertBox = (props) => {
  return (
    <div className='alert alert-danger w-50 mx-auto mt-3 text-center'>
        <p>{props.text}</p>
    </div>
  )
}

export default AlertBox