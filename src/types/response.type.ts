interface IWeatherResponse {
  status: string             // 状态码
  count: string              // 响应数据的数量
  info: string               // 响应状态
  infocode: string           // 再一层状态码
  lives: ILive[]             // 具体响应数据
}

interface ILive {
  province: string           // 省份
  city: string               // 市
  adcode: string             // 区划代码
  weather: string            // 天气描述
  temperature: string        // 气温
  winddirection: string      // 风向
  windpower: string          // 风速
  humidity: string           // 舒适度
  reporttime: string         // 采集时间
}