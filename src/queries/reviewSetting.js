import gql from 'graphql-tag';

export const getOneReviewSettingQuery = gql`
query reviewSettingById($id: ID!) {
  reviewSettingById(id: $id) {
    id
    detailed
    businessUnitId
    ratingSettingId
    ratingSetting {
      id
      code
      name
      description
    }
    businessUnit {
      id
      code
      name
      countryId
    }
  }
}`;

export const getListReviewSettingQuery = gql`
query reviewSettings {
  reviewSettings {
    id
    detailed
    businessUnitId
    ratingSettingId
    ratingSetting {
      id
      code
      name
      description
    }
    businessUnit {
      id
      code
      name
      countryId
    }
  }
}`;

export const createReviewSettingQuery = gql`
mutation createReviewSetting ($id: ID,  $businessUnitId: ID!, $ratingSettingId: ID!) {
  createReviewSetting (id: $id, businessUnitId: $businessUnitId, ratingSettingId: $ratingSettingId) {
    id
    detailed
    businessUnitId
    ratingSettingId
    ratingSetting {
      id
      code
      name
      description
    }
    businessUnit {
      id
      code
      name
      countryId
    }
  }
}`;
