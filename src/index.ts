import commander from 'commander'
import { IWeatherResponse } from './types/response.type'
import axios from 'axios'

const BASE_URL = 'http://restapi.amap.com/v3/weather/weatherInfo'
const KEY = 'YOU_APP_KEY'

const command = commander
  .version('0.1.0')
  .option('-c --city [name]', 'Add city name')
  .parse(process.argv)

if (!command.city) command.outputHelp()

const url = BASE_URL + '?city=' + global.encodeURI(command.city) + '&key=' + KEY
axios.get(url).then(res => {
  const data: IWeatherResponse = res.data
  // tslint:disable-next-line:no-console
  console.log(data.lives[0].temperature)
}).catch(() => {
  // tslint:disable-next-line:no-console
  console.log('服务异常')
})