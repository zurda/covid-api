import fetch from 'node-fetch'

export const getCountryData = async ({ country }) => {
  const response = await fetch(
    `https://api.covid19api.com/total/country/${country}`
  )
  const json = await response.json()

  // return last item in array of data => which is latest data available
  const position = json.length ? json.length - 1 : 0

  return {
    country,
    province: json[position].Province,
    city: json[position].City,
    deaths: json[position].Deaths,
    confirmed: json[position].Confirmed,
    recovered: json[position].Recovered,
    active: json[position].Active,
    date: json[position].Date,
  }
}
