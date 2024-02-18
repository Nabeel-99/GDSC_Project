import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./components/Form"
import GoogleMap from "./components/GoogleMap"
import Result from "./components/Result"
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <Header/>
      <div className="">
        <div className="grid grid-rows-3 gap-10 p-5 md:w-screen xl:grid-cols-3 "> 
        <Form/>
        <GoogleMap/>
        <Result/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
