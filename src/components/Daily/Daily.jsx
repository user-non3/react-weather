import React from 'react'
import { useSelector } from 'react-redux'
import s from './Daily.module.scss'
import Day from "./Day"

const Daily = () => {
    
    const { daily } = useSelector(state => state.weather.data)
    
  return (
   <div className={s.daily}>
    {daily.map((day) => (
        <Day
            key={day.dt}
            day={day}
        />
    ))}
   </div>
  )
}

export default Daily