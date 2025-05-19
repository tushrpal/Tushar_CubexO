import {Counter} from "./components/Counter"
import './App.css'
import {useContext, useState} from "react"
import {CounterContext} from "./context/Counter"
function App() {

  const counterState=useContext(CounterContext);
  console.log(counterState)
  return (
    <>
      <h1>Counter is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App
