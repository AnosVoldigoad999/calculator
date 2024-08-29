import { useState, useEffect } from 'react'
import './App.css'

export default function App(){
  let values = []
  const [firstFilled, setFirstFilled] = useState(false)
  const [operation, setOperation] = useState()
  const [answered, setAnswered] = useState(false)
  const[slideron, setSliderOn] = useState(()=>{
    let gottenslider = JSON.parse(localStorage.getItem('sliderOn'))
    if(!gottenslider){
      return 1
    } else{
      return gottenslider
    }
  })
  useEffect(()=>{
    localStorage.setItem('sliderOn', JSON.stringify(slideron))
  }, [slideron])
  const [containerTheme, setContainerTheme] = useState(()=>{
    if(slideron === 1){
      return 'containerOne'
    }
    if (slideron === 2){
      return 'containerTwo'
    }
    if (slideron === 3){
      return 'containerThree'
    }
  })
  const [headerTheme, setHeaderTheme] = useState(()=>{
    if(slideron === 1){
      return "headerOne"
    }
    if (slideron === 2){
      return "headerTwo"
    }
    if (slideron === 3){
      return "headerThree"
    }
  })
  const [themeTheme, setThemeTheme] = useState(()=>{
    if(slideron === 1){
      return "themeOne"
    }
    if (slideron === 2){
      return "themeTwo"
    }
    if (slideron === 3){
      return "themeThree"
    }
  })
  const [themeNumbersTheme, setThemeNumbersTheme] = useState(()=>{
    if(slideron === 1){
      return 'themenumbersone'
    }
    if (slideron === 2){
      return 'themenumberstwo'
    }
    if (slideron === 3){
      return 'themenumbersthree'
    }
  })
  const [sliderTheme, setSliderTheme] = useState(()=>{
    if(slideron === 1){
      return 'sliderOne'
    }
    if (slideron === 2){
      return 'sliderTwo'
    }
    if (slideron === 3){
      return 'sliderThree'
    }
  })
  const [calculatorTheme, setCalculatorTheme] = useState(()=>{
    if(slideron === 1){
      return 'calculatorOne'
    }
    if (slideron === 2){
      return 'calculatorTwo'
    }
    if (slideron === 3){
      return 'calculatorThree'
    }
  })
  const [circle, setCircle] = useState(()=>{
    if(slideron === 1){
      return 'circleOne'
    }
    if (slideron === 2){
      return 'circleTwo'
    }
    if (slideron === 3){
      return 'circleThree'
    }
  })
  /*const [values, setVaules] = useState([])*/
  const [input, setInput] = useState("")
  const [first, setFirst] = useState()
  const [second, setSecond] = useState()

  useEffect(()=>{
  if(!firstFilled){
    setFirst(input)
  }
   else{
    setSecond(input)
  }
  }, [input])

  useEffect(()=>{
    if(slideron === 1){
      document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
    }
    if (slideron === 2){
      document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
    }
    if (slideron === 3){
      document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
    }
  }, [])



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
    setAnswered(false)
  }
  function del(){
    if(answered){
      reset()
    }else{
      setInput( input.substring(0, input.length-1))
    }
  }
  /*numbers*/

  /*operations*/


  const Addition = ()=>{
    if(second){ //if you've inputed the second number and still want to add a third number
      setFirst(Equal())//call the equal function and save the returned value to the "first state"-representing the first number
      setFirstFilled(true) //set firstfilled to true indicating that there's something in the "first" state, so whatever you're inputing next would be saved to the "Second" state
      setOperation('addition') //set the operation to addition, letting the equal function know what you want to do
      setInput('') //clear the "input" state
    }else{ //if not
      setOperation('addition') //set the operation to addition letting the "equal" function know what you want to do
      setFirstFilled(true) //set first filled to true indicating that there's something in the "first" state
      setInput('') //clear the "input" state
    }
  }

  const Subtraction = ()=>{
    if(second){ //if you've inputed the second number and still want to add a third number
      setFirst(Equal()) //call the equal function and save the returned value to the "first state"-representing the first number
      setFirstFilled(true)  //set firstfilled to true indicating that there's something in the "first" state
      setOperation('subtraction') //set the operation to subtraction, letting the equal function know what you want to do
      setInput('') //clear the "input" state
    } else if(!input){ //if there's nothing in input
      setInput(input + "-") //put a minus sign(in case you want to do something like -10+2 or something)
    }
    else{ //if not
      setOperation('subtraction') //set the operation to subtraction, letting the equal function know what you want to do
      setFirstFilled(true) //set firstfilled to true indicating that there's something in the "first" state
      setInput('') //clear the "input" state
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
    if(operation==='addition'){ //if the "operarion" state is set to addition
      setFirstFilled(false) //set firstfilled to false, so the next time you input stuff it gets saved to the "first" state instead of the second
      let ans = Number(first) + Number(second) //perform the operation
      setInput(ans.toString()) //convert your answer back to a string and set the "input" state to its value (also saving the answer to the first state in the process...)
      setSecond('') //reset the "second" state
      setAnswered(true) //set the "answered" state to true(mainly used for the reset and delete functionalities)
      return ans //return the answer(used in the various operations...check out the Addition() function to get a better understanding) 
    }

    if(operation==='subtraction'){
      setFirstFilled(false)
      let ans = Number(first) - Number(second)
      setInput(ans.toString())
      setSecond('')
      setAnswered(true)
      return ans
    }

    if(operation==='multiplication'){
      setFirstFilled(false)
      let ans = Number(first) * Number(second)
      setInput(ans.toString())
      setSecond('')
      setAnswered(true)
      return ans
    }

    if(operation==='division'){
      setFirstFilled(false)
      let ans = Number(first) / Number(second)
      setInput(ans.toString())
      setSecond('')
      setAnswered(true)
      return ans
    }

  }

  /*operations*/

  /*slider*/
function moveSlider(){ //changing some states for the themes sha
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