import { createStore } from 'vuex';

import abi from "@/assets/js/XRC20abi";
import Utils from '@/utils/utils'
const state = {
  userAddress: '',
  config: {},
  userInfo: {},
  langList: [],
  usdtBalance: 0,
  tokenInfo: {

  },
  headerSearch: null
};

const store = createStore({
  state,
  mutations: {
    setUseraddress(state, data) {
      state.userAddress = data
    },
    setConfig(state, data) {
      state.config = data
    },
    setUserInfo(state, data) {
      state.userInfo = data
    },
    setLangList(state, data) {
      state.langList = data
    },
    setBalance(state, data) {
      state.usdtBalance = data
    },

    setToken(state, data) {
      state.tokenInfo[data.key] = data.value
    },
    setHeaderSearch(state, data) {
      console.log(222333);
      state.headerSearch = data
    }
  },
  actions: {
    
  }
});
export default store;