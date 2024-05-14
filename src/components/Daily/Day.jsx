import React from 'react'
import s from './Daily.module.scss'
import { weatherName } from '../../utils/getImg'
import { getDate } from '../../utils/getDate'

const Day = ({ day }) => {
    
    const description = day.weather[0].description
    const img = weatherName[description] || weatherName['пасмурно']
    const weekDay = getDate(day.dt, 'weekDay')
    const monthDay = getDate(day.dt, 'day')
    const month = getDate(day.dt, 'month')
    const sunrise = getDate(day.sunrise, '')
    const sunset = getDate(day.sunset, '')
    
    
  return (
    <div className={s.daily__item}>
        <p className={s.daily__item_day}>{weekDay}</p>
        <p className={s.daily__item_date}>{monthDay} {month}</p>
        <img src={img} alt="Img" className={s.daily__item_img} />
        <p className={s.daily__item_temp}>+{Math.round(day.temp.max)}°</p>
        <p className={s.daily__item_temp2}>+{Math.round(day.temp.min)}°</p>  
        <p className={s.daily__item_info}>{description}</p>
        <p className={s.daily__item_info}>Восход: {sunrise}</p>
        <p className={s.daily__item_info}>Закат: {sunset}</p>
    </div>
  )
}

export default Day