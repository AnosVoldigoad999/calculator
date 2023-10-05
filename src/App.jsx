import { useState, useEffect } from 'react'
import './App.css'

export default function App(){
  let values = []
  const [firstFilled, setFirstFilled] = useState(false)
  const [operation, setOperation] = useState()
  const[slideron, setSliderOn] = useState(1)
  const [containerTheme, setContainerTheme] = useState('containerOne')
  const [headerTheme, setHeaderTheme] = useState("headerOne")
  const [themeTheme, setThemeTheme] = useState("themeOne")
  const [themeNumbersTheme, setThemeNumbersTheme] = useState('themenumbersone')
  const [sliderTheme, setSliderTheme] = useState('sliderOne')
  const [calculatorTheme, setCalculatorTheme] = useState('calculatorOne')
  const [circle, setCircle] = useState('circleOne')
  /*const [values, setVaules] = useState([])*/
  const [input, setInput] = useState("")
  const [first, setFirst] = useState()
  const [second, setSecond] = useState()

  useEffect(()=>{
  if(!firstFilled){
    setFirst(input)
  } else{
    setSecond(input)
  }
  }, [input])

  /*numbers*/
  function inputOne(){
    setInput(input+"1")
  }
  function inputTwo(){
    setInput(input+"2")
  }
  function inputThree(){
    setInput(input+"3")
  }
  function inputFour(){
    setInput(input+"4")
  }
  function inputFive(){
    setInput(input+"5")
  }
  function inputSix(){
    setInput(input+"6")
  }
  function inputSeven(){
    setInput(input+"7")
  }
  function inputEight(){
    setInput(input+"8")
  }
  function inputNine(){
    setInput(input+"9")
  }
  function inputZero(){
    setInput(input+"0")
  }
  function inputDot(){
    setInput(input+".")
  }
  function reset(){
    setInput("")
    setFirst('')
    setSecond('')
    setFirstFilled(false)
  }
  function del(){
 setInput( input.substring(0, input.length-1))
  }
  /*numbers*/

  /*operations*/


  const Addition = ()=>{
    if(second){
      setFirst(Equal())
      setFirstFilled(true)
      setOperation('addition')
      setInput('')
    }else{
      setOperation('addition')
      setFirstFilled(true)
      setInput('')
    }
  }

  const Subtraction = ()=>{
    if(second){
      setFirst(Equal())
      setFirstFilled(true)
      setOperation('subtraction')
      setInput('')
    } else if(!input){
      setInput(input + "-")
    }
    else{
      setOperation('subtraction')
      setFirstFilled(true)
      setInput('')
    }
  }

  const Multiplication = ()=>{
    if(second){
      setFirst(Equal())
      setFirstFilled(true)
      setOperation('multiplication')
      setInput('')
    }else{
      setOperation('multiplication')
      setFirstFilled(true)
      setInput('')
    }
  }

  const Division = ()=>{
    if(second){
      setFirst(Equal())
      setFirstFilled(true)
      setOperation('division')
      setInput('')
    }else{
      setOperation('division')
      setFirstFilled(true)
      setInput('')
    }
  }


  function Equal(){
    if(operation==='addition'){
      setFirstFilled(false)
      let ans = Number(first) + Number(second)
      setInput(ans.toString())
      console.log(first)
      setSecond('')
      return ans
    }

    if(operation==='subtraction'){
      setFirstFilled(false)
      let ans = Number(first) - Number(second)
      setInput(ans.toString())
      console.log(first)
      return ans
    }

    if(operation==='multiplication'){
      setFirstFilled(false)
      let ans = Number(first) * Number(second)
      setInput(ans.toString())
      return ans
    }

    if(operation==='division'){
      setFirstFilled(false)
      let ans = Number(first) / Number(second)
      setInput(ans.toString())
      return ans
    }
  }

  /*operations*/

  /*slider*/
function moveSlider(){
  if(slideron === 1){
    setCircle('circleTwo')
    setSliderOn(2)
    setContainerTheme('containerTwo')
    setHeaderTheme('headerTwo')
    setThemeTheme('themeTwo')
    setThemeNumbersTheme('themenumberstwo')
    setSliderTheme('sliderTwo')
    setCalculatorTheme('calculatorTwo')
    document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
  }
  if(slideron === 2){
    setCircle('circleThree')
    setSliderOn(3)
    setContainerTheme('containerThree')
    setHeaderTheme('headerThree')
    setThemeTheme('themeThree')
    setThemeNumbersTheme('themenumbersthree')
    setSliderTheme('sliderThree')
    setCalculatorTheme('calculatorThree')
    document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
  }
  if(slideron === 3){
    setCircle('circleOne')
    setSliderOn(1)
    setContainerTheme('containerOne')
    setHeaderTheme('headerOne')
    setThemeTheme('themeOne')
    setThemeNumbersTheme('themenumbersone')
    setSliderTheme('sliderOne')
    setCalculatorTheme('calculatorOne')
    document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
  }
}


  /*slider*/
  return <>
 <div className={containerTheme}>
    <div className={headerTheme}>
      <h5>calc</h5>
      <div className={themeTheme}>
      <p className={themeNumbersTheme}>123</p>
        <h5>Theme {/*come back here later*/} </h5>
        <div className={sliderTheme} onClick={()=>{moveSlider()}}>
          <div className={circle}></div>
        </div>
      </div>
    </div>
    <div className={calculatorTheme}>
      {/*<input  value={!input?"0":input}   />*/}
      <div className="input">{!input?"0":input}</div>
      <br />
      <div className="buttons">
        <button onClick={()=>inputSeven()}>7</button>
        <button onClick={()=>inputEight()}>8</button>
        <button onClick={()=>inputNine()}>9</button>
        <button className='del'onClick={()=>del()} >DEL</button>
        <button onClick={()=>inputFour()}>4</button>
        <button onClick={()=>inputFive()}>5</button>
        <button onClick={()=>inputSix()}>6</button>
        <button onClick={()=>Addition()}>+</button>
        <button onClick={()=>inputOne()}>1</button>
        <button onClick={()=>inputTwo()}>2</button>
        <button onClick={()=>inputThree()}>3</button>
        <button onClick={()=>Subtraction()}>-</button>
        <button onClick={()=>inputDot()}>.</button>
        <button onClick={()=>inputZero()}>0</button>
        <button onClick={()=>Division()}>/</button>
        <button onClick={()=>Multiplication()}>x</button>
        <button className='reset' onClick={()=>reset()}>RESET</button>
        <button className='equals' onClick={()=>Equal()}>=</button>
      </div>
    </div>
  </div>
  </>
}