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
mutation createCountry($id: ID, $code: String!, $name: String!){
  createCountry(id: $id, code: $code, name: $name){
    id
    code
    name
  }
}`;

export const updateCountryQuery = gql`
mutation updateCountry($id: ID!, $code: String!, $name: String!){
  updateCountry(id: $id, code: $code, name: $name){
    id
    code
    name
  }
}`;

export const deleteCountryQuery = gql`
mutation deleteCountry($id: ID!){
  deleteCountry(id: $id){
    id
    code
    name
  }
}`;
