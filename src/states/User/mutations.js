import * as types from './mutation-types';

const mutations = {
  [types.SET_CURRENT_USER](state, setCurrentUser) {
    state.current_user = setCurrentUser;
  },
  [types.SET_USER_DETAILS](state, setUserDetails) {
    state.set_user_details = setUserDetails;
  },
};

export default mutations;
