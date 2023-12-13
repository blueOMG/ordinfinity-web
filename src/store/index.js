import { createStore } from 'vuex';

import abi from "@/assets/js/XRC20abi";
import Utils from '@/utils/utils'
import {getTokensBalance} from './../api/api'
const state = {
  userAddress: '',
  tokenBalance: [{name:'ORDI',balance: 0},{name:'RATS',balance: 0},{name:'SATS',balance: 0},{name:'ONFI',balance: 0}],
  mainChain: 1, // 1btc 2erc
};

const store = createStore({
  state,
  mutations: {
    setUseraddress(state, data) {
      state.userAddress = data
      store.dispatch('getBalance',data);
    },
    setBalance(state, data) {
      state.tokenBalance = data
    },
    setMainChain(state, data) {
      console.log(data)
      state.mainChain = data
    },
  },
  actions: {
    async getBalance(context,address) {
      console.log(state)
      const res = await getTokensBalance({address,token: 'ordi,rats,sats,onfi' });
      const data =res.data.map(item=> ({balance: item.availableBalance, name: item.ticker.toLocaleUpperCase()}));
      context.commit('setBalance',data)
    },
  }
});
export default store;