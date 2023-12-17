import { createStore } from 'vuex';

import abi from "@/assets/js/XRC20abi";
import Utils from '@/utils/utils'
import {getTokensBalance} from './../api/api'
const state = {
  userAddress: '',
  tokenBalance: [{name:'ORDI',balance: 0,transferableList:[],transferableBalance:0},{name:'RATS',balance: 0,transferableList:[],transferableBalance:0},{name:'SATS',balance: 0,transferableList:[],transferableBalance:0},{name:'ONFI',balance: 0,transferableList:[],transferableBalance:0}],
  mainChain: localStorage.getItem('WALLETTYPE') == 'mask' ? 2 :1, // 1btc 2erc
  web3js: null,
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
    setWeb3js(state, data) {
      state.web3js = data
    },
  },
  actions: {
    async getBalance(context,address) {
      try {
        const res = await getTokensBalance({chain: context.state.mainChain,address,token: 'ordi,RATS,sats,onfi' });
        const data =res.data.map(item=> ({balance: item.availableBalance || 0, name: item.ticker.toLocaleUpperCase(),transferableList: item.transferableList, transferableBalance:item.transferableBalance}));
        context.commit('setBalance',data)
      } catch (error) {
        const data = [{name:'ORDI',balance: 0,transferableList:[],transferableBalance:0},{name:'RATS',balance: 0,transferableList:[],transferableBalance:0},{name:'SATS',balance: 0,transferableList:[],transferableBalance:0},{name:'ONFI',balance: 0,transferableList:[],transferableBalance:0}]
        context.commit('setBalance',data)
      }
      
    },
  }
});
export default store;