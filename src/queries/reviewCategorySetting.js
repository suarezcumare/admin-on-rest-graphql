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
mutation createReviewCategorySetting($reviewSetting: Id!, $categorySetting: Id!){
  createReviewCategorySetting(reviewSetting: $reviewSetting, categorySetting: $categorySetting){
    id
    reviewSettingId
    categorySettingId
  }
}`;
