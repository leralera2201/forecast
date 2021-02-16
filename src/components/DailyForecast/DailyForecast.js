const DailyForecast = ({forecast}) => {
  return <div>
      {new Date(forecast.time * 1000).toString()}
  </div>
}

export default DailyForecast;