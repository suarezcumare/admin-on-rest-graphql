import gql from 'graphql-tag';

export const getOneReviewCategorySettingQuery = gql`
query reviewCategorySettingById($id: ID!) {
  reviewCategorySettingById(id: $id) {
    id
    reviewSettingId
    categorySettingId
  }
}`;

export const getListReviewCategorySettingQuery = gql`
query reviewCategorySettings {
  reviewCategorySettings {
    id
    reviewSettingId
    categorySettingId
  }
}`;


export const createReviewCategorySettingQuery = gql`
mutation createReviewCategorySetting($id: ID, $reviewSettingId: ID!, $categorySettingId: ID!){
  createReviewCategorySetting(id: $id, reviewSetting: $reviewSettingId, categorySettingId: $categorySettingId){
    id
    reviewSettingId
    categorySettingId
  }
}`;

export const updateReviewCategorySettingQuery = gql`
mutation updateReviewCategorySetting($id: ID!, $reviewSettingId: ID!, $categorySettingId: ID!){
  updateReviewCategorySetting(id: $id, reviewSettingId: $reviewSettingId, categorySettingId: $categorySettingId){
    id
    reviewSettingId
    categorySettingId
  }
}`;

export const deleteReviewCategorySettingQuery = gql`
mutation deleteReviewCategorySetting($id: ID!){
  deleteReviewCategorySetting(id: $id){
    id
    reviewSettingId
    categorySettingId
  }
}`;
