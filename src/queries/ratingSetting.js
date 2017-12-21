import gql from 'graphql-tag';

export const getOneRatingSettingQuery = gql`
query ratingSettingById($id: ID!) {
  ratingSettingById(id: $id) {
    id
    code
    name
    description
  }
}`;

export const getListRatingSettingQuery = gql`
query ratingSettings {
  ratingSettings {
    id
    code
    name
    description
  }
}`;


export const createRatingSettingQuery = gql`
mutation createRatingSetting($id: ID, $code: String!, $name: String!, $description: String!){
  createRatingSetting(id: $id,code: $code, name: $name, description: $description){
    id
    code
    name
    description
  }
}`;

export const updateRatingSettingQuery = gql`
mutation updateRatingSetting($id: ID!, $code: String!, $name: String!, $description: String!){
  updateRatingSetting(id: $id,code: $code, name: $name, description: $description){
    id
    code
    name
    description
  }
}`;


export const deleteRatingSettingQuery = gql`
mutation deleteRatingSetting($id: ID!){
  deleteRatingSetting(id: $id){
    id
    code
    name
    description
  }
}`;
