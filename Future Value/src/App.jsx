import './App.css'
import Header from "./Components/Header"
import Content from "./Components/Content"
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
 

  return (
    <>
      <div className='app'>
        <div className='main-content'>
          <Header/>
          <Content/>
          <SpeedInsights/>
        </div>
      </div>
    
    </>
  )
}
