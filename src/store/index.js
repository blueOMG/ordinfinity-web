import { createStore } from 'vuex';

import { readContract } from '@wagmi/core';
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
    async updateBalance(context) {
      const res = await readContract({
        address: context.state.config.approveContractAddress,
        abi: abi.coinAbi,
        functionName: "balanceOf",
        args: [context.state.userAddress],
      });
      context.commit('setBalance', Utils.mathpow(res, 6))
      return context.state.usdtBalance
    }
  }
});
export default store;