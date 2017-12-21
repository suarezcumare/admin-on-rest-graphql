import gql from 'graphql-tag';

export const getOneReviewSettingQuery = gql`
query reviewSettingById($id: ID!) {
  reviewSettingById(id: $id) {
    id
    detailed
    businessUnitId
    ratingSettingId
  }
}`;

export const getListReviewSettingQuery = gql`
query reviewSettings {
  reviewSettings {
    id
    detailed
    businessUnitId
    ratingSettingId
  }
}`;


export const createReviewSettingQuery = gql`
mutation createReviewSetting(detailed: Boolean!, $businessUnitId: Id!, $ratingSettingId: Id!){
  createReviewSetting(detailed: $detailed, businessUnitId: $businessUnitId, ratingSettingId: $ratingSettingId){
    id
    detailed
    businessUnitId
    ratingSettingId
  }
}`;
