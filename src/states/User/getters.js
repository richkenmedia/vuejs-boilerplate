/* eslint-disable import/no-extraneous-dependencies */
const isObj = require('lodash.get');

export const getLoadingStatus = state => isObj(state, 'isLoading', false);

export const getUserRegister = state => isObj(state, 'userRegister.results', false);
export const getBaseUrl = state => isObj(state, 'featuredBusiness.status.base_url', false);
export const getImageUrl = state => isObj(state, 'nonFeaturedBusiness.status.image_url', false);
export const getFeaturedBusiness = state => isObj(state, 'featuredBusiness.results', false);
export const getNonFeaturedBusiness = state => isObj(state, 'nonFeaturedBusiness.results', false);
export const getBusinessDetails = state => isObj(state, 'businessDetails', false);
export const getBusinessAddress = state => isObj(state, 'businessAddress.results', false);
export const getBusinessDeals = state => isObj(state, 'businessDeals.results', false);
export const getBusinessRewards = state => isObj(state, 'businessRewards.results', false);
export const getCategoryList = state => isObj(state, 'categoryDetails.results', false);

// Category List
export const getRestaurantCategoryList = state => isObj(state, 'restaurantCategoryList.results', false);
export const getOtherCategoryList = state => isObj(state, 'otherCategoryList.results', false);

export const getCategoryBusinessList = state => isObj(state, 'categoryBusinessList', false);
export const getOfferHistoryList = state => isObj(state, 'offerHistoryList', false);

export const getUserInfo = state => isObj(state, 'user', false);

export const getAccountInfo = state => isObj(state, 'accountInfoList', false);
export const getAboutData = state => isObj(state, 'settingsData.about_us', false);
export const getShareText = state => isObj(state, 'settingsData.share_text', false);
export const getAccountAdditionalInfo = state => isObj(state, 'accountInfoList.user_detail', false);
// export const getUserInfo = state => isObj(state, 'userInfo.results.user_detail', false);
export const getSearchResults = state => isObj(state, 'searchResult', false);
export const getCityList = (state) => {
  if (isObj(state, 'cityDetails.results', false)) {
    const result = state.cityDetails.results.map(el => el.city);
    return result;
  }
  return false;
};

export const getCityInfo = state => (cityName) => {
  if (isObj(state, 'cityDetails.results', false)) {
    const result = state.cityDetails.results.filter(el => el.city === cityName);
    return result;
  }
  return false;
};

export const getUserId = state => isObj(state, 'user.results.id', false);
export const getRewardQrCode = state => isObj(state, 'rewardQrCodeResult', false);
export const getRewardPointQrCode = state => isObj(state, 'rewardQrcode', false);
export const getPhoneLocation = state => isObj(state, 'phoneLocation', false);
export const getRewardPoints = state => isObj(state, 'totalRewardPoints', false);
