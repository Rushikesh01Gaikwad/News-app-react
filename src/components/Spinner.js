import React, { Component } from 'react'
import loading from '../Spinner.gif'

const Spinner=()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt='loading'></img>
      </div>
    )
}

export default Spinner
