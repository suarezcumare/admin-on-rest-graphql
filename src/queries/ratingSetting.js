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
mutation createRatingSetting($code: String!, $name: String!, $description: String!){
  createRatingSetting(code: $code, name: $name, description: $description){
    id
    code
    name
    description
  }
}`;
