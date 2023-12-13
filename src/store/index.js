import { createStore } from 'vuex';

import abi from "@/assets/js/XRC20abi";
import Utils from '@/utils/utils'
import {getTokensBalance} from './../api/api'
const state = {
  userAddress: '',
  usdtBalance: 0,
};

const store = createStore({
  state,
  mutations: {
    setUseraddress(state, data) {
      state.userAddress = data
      store.dispatch('getBalance',data);
    },
    setBalance(state, data) {
      state.usdtBalance = data
    },

  },
  actions: {
    async getBalance(context,address) {
      console.log(state)
      const res = getTokensBalance({address,token: 'ordi,rats,sats,onfi' });
      console.log(res)
      context.commit('setBalance',res.data)
    },
  }
});
export default store;