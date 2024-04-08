import React from 'react'
import loading from "./spinner.gif"

const Spin= ()=>{
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading" className='text-center m-auto' />
      </div>
    )
}

export default Spin