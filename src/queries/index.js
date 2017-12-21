import { getListCountryQuery, createCountryQuery, getOneCountryQuery } from './country'
import { getListBusinessUnitQuery, createBusinessUnitQuery, getOneBusinessUnitQuery } from './businessUnit'
import { getListCategorySettingQuery, createCategorySettingQuery, getOneCategorySettingQuery } from './categorySetting'
import { getListRatingSettingQuery, createRatingSettingQuery, getOneRatingSettingQuery } from './ratingSetting'
import { getListReviewSettingQuery, createReviewSettingQuery, getOneReviewSettingQuery } from './reviewSetting'
import { getListReviewCategorySettingQuery, createReviewCategorySettingQuery, getOneReviewCategorySettingQuery } from './reviewCategorySetting'

export default {
  Country: {
    GET_LIST: getListCountryQuery,
    GET_MANY: getListCountryQuery,
    GET_MANY_REFERENCE: getListCountryQuery,
    CREATE: createCountryQuery,
    GET_ONE: getOneCountryQuery,
  },
  BusinessUnit: {
    GET_LIST: getListBusinessUnitQuery,
    GET_MANY: getListBusinessUnitQuery,
    GET_MANY_REFERENCE: getListBusinessUnitQuery,
    CREATE: createBusinessUnitQuery,
    GET_ONE: getOneBusinessUnitQuery,
  },
  CategorySetting: {
    GET_LIST: getListCategorySettingQuery,
    GET_MANY: getListCategorySettingQuery,
    GET_MANY_REFERENCE: getListCategorySettingQuery,
    CREATE: createCategorySettingQuery,
    GET_ONE: getOneCategorySettingQuery,
  },
  RatingSetting: {
    GET_LIST: getListRatingSettingQuery,
    GET_MANY: getListRatingSettingQuery,
    GET_MANY_REFERENCE: getListRatingSettingQuery,
    CREATE: createRatingSettingQuery,
    GET_ONE: getOneRatingSettingQuery,
  },
  ReviewSetting: {
    GET_LIST: getListReviewSettingQuery,
    GET_MANY: getListReviewSettingQuery,
    GET_MANY_REFERENCE: getListReviewSettingQuery,
    CREATE: createReviewSettingQuery,
    GET_ONE: getOneReviewSettingQuery,
  },
  ReviewCategorySetting: {
    GET_LIST: getListReviewCategorySettingQuery,
    GET_MANY: getListReviewCategorySettingQuery,
    GET_MANY_REFERENCE: getListReviewCategorySettingQuery,
    CREATE: createReviewCategorySettingQuery,
    GET_ONE: getOneReviewCategorySettingQuery,

  }
}
