
import React from 'react'
import './App.css'
import Button from './components/Calcbutton'
import Input from './components/Cal-input'
import * as math from 'mathjs'


const App = () => {
  const [text, setText] = React.useState('')
  const [result, setResult] = React.useState('')

  const newadd = (e) => {
    setText((text) => [...text, e + ''])
  }
  const Resetall = function resetall() {
    setText('')
    setResult('')
  }
  const getResult = () => {
    const Allinput = text.join('') 
    setResult(math.evaluate(Allinput))
  }
 
  return (
    <div className='App'>
      <div className='whole--calc'>
        <Input text={text} result={result} />
        <div className='Calc--row'>
          <Button symbol='7' handleClick={newadd} />
          <Button symbol='8' handleClick={newadd} />
          <Button symbol='9' handleClick={newadd} />
          <Button symbol='/' handleClick={newadd} color='#FF873A' />
        </div>
        <div className='Calc--row'>
          <Button symbol='4' handleClick={newadd} />
          <Button symbol='5' handleClick={newadd} />
          <Button symbol='6' handleClick={newadd} />
          <Button symbol='*' handleClick={newadd} color='#FF873A' />
        </div>
        <div className='Calc--row'>
          <Button symbol='1' handleClick={newadd} />
          <Button symbol='2' handleClick={newadd} />
          <Button symbol='3' handleClick={newadd} />

          <Button symbol='+' handleClick={newadd} color='#FF873A' />
        </div>
        <div className='Calc--row'>
          <Button symbol='0' handleClick={newadd} />
          <Button symbol='.' handleClick={newadd} />
          <Button symbol='=' handleClick={getResult} />
          <Button symbol='-' handleClick={newadd} color='#FF873A' />
        </div>
        <Button symbol='Clear' handleClick={Resetall} />
      </div>
    </div>
  )
}

export default App
