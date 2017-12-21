import gql from 'graphql-tag';

export const getOneBusinessUnitQuery = gql`
query businessUnitById($id: ID!) {
  businessUnitById(id: $id) {
    id
    code
    name
    countryId
    country {
      id
      code
      name
    }
  }
}`;

export const getListBusinessUnitQuery = gql`
query businessUnits {
  businessUnits {
    id
    code
    name
    countryId
    country {
      id
      code
      name
    }
  }
}`;


export const createBusinessUnitQuery = gql`
mutation createBusinessUnit($code: String!, $name: String!){
  createBusinessUnit(code: $code, name: $name){
    id
    code
    name
    countryId
    country {
      id
      code
      name
    }
  }
}`;
