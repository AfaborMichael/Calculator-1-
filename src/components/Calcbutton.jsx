import './Calcbutton.css'
import React from 'react'
import * as math from 'mathjs'
export default function Button({ symbol, color, handleClick }) {
  return (
    <div
      className='Button--cover'
      onClick={() => handleClick(symbol)}
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  )
}
