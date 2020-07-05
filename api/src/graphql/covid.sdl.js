export const schema = gql`
  type CountryData {
    country: String!
    province: String
    city: String
    confirmed: Int
    deaths: Int
    recovered: Int
    active: Int
    date: String
  }

  type Query {
    getCountryData(country: String!): CountryData!
  }
`
