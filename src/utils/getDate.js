export function getDate(dt, type) {
    const data = new Date(dt * 1000)

    if (!type) {
        let hours = data.getHours()
        let minutes = data.getMinutes()

        return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes}`
    }

    return type == 'weekDay' ? data.toLocaleString('ru-RU', { weekday: 'short' }) : 
           type == 'month' ? data.toLocaleString('ru-RU', { month: 'short' }) :
           type == 'day' ? data.toLocaleString('ru-RU', { day: 'numeric' }) : ''
}