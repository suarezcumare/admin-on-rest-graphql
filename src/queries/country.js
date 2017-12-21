import gql from 'graphql-tag';

export const getOneCountryQuery = gql`
query countryById($id: ID!) {
  countryById(id: $id) {
    id
    code
    name
  }
}`;

export const getListCountryQuery = gql`
query countries {
  countries {
    id
    code
    name
  }
}`;

export const createCountryQuery = gql`
mutation createCountry($code: String!, $name: String!){
  createCountry(code: $code, name: $name){
    id
    code
    name
  }
}`;
