export const QUERY = gql`
  query($country: String!) {
    coutryData: getCountryData(country: $country) {
      country
      city
      deaths
      confirmed
      date
      recovered
      province
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ coutryData }) => {
  return JSON.stringify(coutryData)
}
