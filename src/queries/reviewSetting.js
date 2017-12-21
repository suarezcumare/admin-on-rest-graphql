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
mutation createReviewSetting ($id: ID, $detailed: Boolean!, $businessUnitId: ID!, $ratingSettingId: ID!) {
  createReviewSetting (id: $id, detailed: $detailed, businessUnitId: $businessUnitId, ratingSettingId: $ratingSettingId) {
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

export const updateReviewSettingQuery = gql`
mutation updateReviewSetting ($id: ID!, $detailed: Boolean!, $businessUnitId: ID!, $ratingSettingId: ID!) {
  updateReviewSetting (id: $id, detailed: $detailed, businessUnitId: $businessUnitId, ratingSettingId: $ratingSettingId) {
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

export const deleteReviewSettingQuery = gql`
mutation deleteReviewSetting ($id: ID!) {
  deleteReviewSetting (id: $id) {
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
