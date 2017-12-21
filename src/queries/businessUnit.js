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
mutation createBusinessUnit($id: ID,$code: String!, $name: String!, $countryId: ID!){
  createBusinessUnit(id: $id, code: $code, name: $name, countryId: $countryId){
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

export const updateBusinessUnitQuery = gql`
mutation updateBusinessUnit($id: ID!,$code: String!, $name: String!, $countryId: ID!){
  updateteBusinessUnit(id: $id, code: $code, name: $name, countryId: $countryId){
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

export const deleteBusinessUnitQuery = gql`
mutation deleteBusinessUnit($id: ID!){
  deleteBusinessUnit(id: $id){
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
