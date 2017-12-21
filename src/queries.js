import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

const getOneCountryQuery = gql`
query countryById($id: ID!) {
  countryById(id: $id) {
    id
    code
    name
  }
}`;

const getListCountryQuery = gql`
query countries {
  countries {
    id
    code
    name
  }
}`;

// const createCountryQuery = gql`
// mutation createCountry($code: String!, $name: String!){
//   createCountry(code: $code, name: $name){
//     id
//     code
//     name
//   }
// }`;

const createCountryQuery = gql`
mutation createCountry($code: String!, $name: String!){
  createCountry(code: $code, name: $name){
    id
    code
    name
  }
}`;

// const createCountryQuery = gql`
// mutation createCountry(
//   $data: String!
//   $code: String
//   $name: String) {
//   data: createCountry(data: $data, code: $data["code"], name: $data["name"]) {
//     id
//     code
//     name
//   }
// }`;


console.log(createCountryQuery);

export default {
  Country: {
    GET_LIST: getListCountryQuery,
    CREATE: createCountryQuery,
    GET_ONE: getOneCountryQuery,
  }
}