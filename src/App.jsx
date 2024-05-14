import Current from "./components/Current/Current"
import Navbar from "./components/Navbar/Navbar"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { getLatLon, weatherSelector } from "./store/weather/weatherSlice"
import Loader from "./components/Loader"
import Daily from "./components/Daily/Daily"

function App() {
  
  const dispatch = useDispatch()
  const { data } = useSelector(weatherSelector)
  
  useEffect(() => {
    setTimeout(() => dispatch(getLatLon('Москва')), 1000)
  }, [])
  
  return (
    <>
     <div className="wrapper">
        {data ? (
          <div className="container">
            <Navbar/>
            <main className="main">
              <Current/>
              <Daily/>
            </main>
          </div>
        ) : <Loader/> }
      
     </div>
    </>
  )
}

export default App
