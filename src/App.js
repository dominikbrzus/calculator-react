import './App.scss';
import React, {useState} from 'react'

function App() {
  const [numbers, setNumbers] = useState('')
  const alert = 'Choose the numbers!'

  // Function responsible for add numbers and symbols to the useState
  const handleClickAddNumber = e => {
    const addNumbers = numbers.concat(e.target.value)
    setNumbers(addNumbers)
  }

  // Clear the function
  const handleClickClear = () => {
    setNumbers('')
  }

  // Back to the previous state
  const handleClickBack = () => {
    const back = numbers.slice(0, numbers.length -1)
    setNumbers(back)
  }

  // The function responsible for the calculate. I used eval() function temporary. Let me know if you know any better function to calculate.
  const handleClickCalculate = () => {
    try {
    const calculate = eval(numbers).toString()
    setNumbers(calculate)
    } catch (error) {
        console.log('Error')
    }
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='calculator__score'>
          <p>{numbers}{numbers === '' ? alert : null}</p>
        </div>
        <div className='calculator__btns'>
          <button className='calculator__back' onClick={handleClickBack}>BACK</button>
          <button className='calculator__btn' onClick={handleClickClear}>DEL</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='/'>÷</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='1'>1</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='2'>2</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='3'>3</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='*'>*</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='4'>4</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='5'>5</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='6'>6</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='+'>+</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='7'>7</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='8'>8</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='9'>9</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='-'>-</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='.'>.</button>
          <button className='calculator__btn' onClick={handleClickAddNumber} value='0'>0</button>
          <button className='calculator__equal' onClick={handleClickCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
