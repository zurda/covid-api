import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/web'
import CountryDataCell from 'src/components/CountryDataCell'

const HomePage = () => {
  const [country, setCountry] = useState()

  const onSubmit = (data) => {
    setCountry(data.country)
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <TextField name="country" placeholder="Country" maxLength="50" />
        <Submit>Go</Submit>
      </Form>
      {country && <CountryDataCell country={country} />}
    </>
  )
}

export default HomePage
