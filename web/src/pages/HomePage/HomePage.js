import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/web'

const HomePage = () => {
  const [countryData, setCountryData] = useState()

  const onSubmit = (data) => {
    fetch(`https://api.covid19api.com/country/${data.country}/status/confirmed/live?from=2020-07-01T00:00:00Z&to=2020-07-05T00:00:00Z
`)
      .then((response) => response.json())
      .then((json) => setCountryData(json))
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <TextField name="country" placeholder="Country" maxLength="50" />
        <Submit>Go</Submit>
      </Form>
      {countryData && <section>{JSON.stringify(countryData)}</section>}
    </>
  )
}

export default HomePage
