import fetch from 'node-fetch'

export const getCountryData = async ({ country }) => {
  const response = await fetch(
    `https://api.covid19api.com/total/country/${country}`
  )
  const json = await response.json()

  return {
    country,
    province: json[json.length - 1].Province,
    city: json[json.length - 1].City,
    deaths: json[json.length - 1].Deaths,
    confirmed: json[json.length - 1].Confirmed,
    recovered: json[json.length - 1].Recovered,
    active: json[json.length - 1].Active,
    date: json[json.length - 1].Date,
  }
}
