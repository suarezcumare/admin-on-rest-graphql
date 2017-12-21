import gql from 'graphql-tag';

export const getOneCategorySettingQuery = gql`
query categorySettingById($id: ID!) {
  categorySettingById(id: $id) {
    id
    code
    name
    title
    description
  }
}`;

export const getListCategorySettingQuery = gql`
query categorySettings {
  categorySettings {
    id
    code
    name
    title
    description
  }
}`;


export const createCategorySettingQuery = gql`
mutation createCategorySetting($code: String!, $name: String!, $title: String!, $description: String!){
  createCategorySetting(code: $code, name: $name, title: $title, description: $description){
    id
    code
    name
    title
    description
  }
}`;
