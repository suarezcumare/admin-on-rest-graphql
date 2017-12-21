import { getListCountryQuery, createCountryQuery, getOneCountryQuery } from './country'
import { getListBusinessUnitQuery, createBusinessUnitQuery, getOneBusinessUnitQuery } from './businessUnit'
import { getListCategorySettingQuery, createCategorySettingQuery, getOneCategorySettingQuery } from './categorySetting'
import { getListRatingSettingQuery, createRatingSettingQuery, getOneRatingSettingQuery } from './ratingSetting'
import { getListReviewCategorySettingQuery, createReviewCategorySettingQuery, getOneReviewCategorySettingQuery } from './reviewCategorySetting'


export default {
  Country: {
    GET_LIST: getListCountryQuery,
    CREATE: createCountryQuery,
    GET_ONE: getOneCountryQuery,
  },
  BusinessUnit: {
    GET_LIST: getListBusinessUnitQuery,
    CREATE: createBusinessUnitQuery,
    GET_ONE: getOneBusinessUnitQuery,
  },
  CategorySetting: {
    GET_LIST: getListCategorySettingQuery,
    CREATE: createCategorySettingQuery,
    GET_ONE: getOneCategorySettingQuery,
  },
  RatingSetting: {
    GET_LIST: getListRatingSettingQuery,
    CREATE: createRatingSettingQuery,
    GET_ONE: getOneRatingSettingQuery,
  },
  ReviewCategorySetting: {
    GET_LIST: getListReviewCategorySettingQuery,
    CREATE: createReviewCategorySettingQuery,
    GET_ONE: getOneReviewCategorySettingQuery,
  }
}
