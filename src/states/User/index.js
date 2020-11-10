import Vuex from 'vuex';

import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  state: {},
  mutations,
  actions,
  getters,
  strict: debug,
});

export default store;
