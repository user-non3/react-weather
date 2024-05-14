import { minicloud,minirain,sun,rain, sunrain,cloud } from "./exportImg";

export const  weatherName = {
    'дымка': minicloud,
    'ясно': sun,
    'небольшая облачность':  cloud,
    'пасмурно': cloud,
    'облачно с прояснениями' : sunrain,
    'небольшой дождь':  minirain,
    'дождь':  rain,
    'переменная облачность':  cloud,
}