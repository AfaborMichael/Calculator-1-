import React from 'react'
import './Cal-input.css'

export default function Input(props) {
  return (
    <div className='Input--wrapper'>
      <div className='Input--cover'>
      <div className='results'>
        <h1> {props.result}</h1>
      </div>
      <div className='text'>
        <h3>{props.text}</h3>
      </div>
      </div>
    </div>
     
  )
}
