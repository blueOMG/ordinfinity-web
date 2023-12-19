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
      const type = localStorage.getItem('WALLETTYPE');
      console.log('wallettype*********',type)
      unisat.removeListener('accountsChanged',()=>{})
      if(type=='mask') {
        setTimeout(() => {
          window.ethereum && window.ethereum.on("accountsChanged", function () {
            window.location.reload();
          });
          window.ethereum && window.ethereum.on("chainChanged", function () {
            window.location.reload();
          });
        }, 1000);
      }
      if(type=='sat') {
        setTimeout(() => {
        unisat.on('accountsChanged', () => window.location.reload());
      }, 1000);
      }
      if(type=='okx') {
        setTimeout(() => {
          window.okxwallet.bitcoin.on('accountChanged', function (address) {
            if(address) {
              window.location.reload()
            }
        });
      }, 1000);
      }
      
    },
    setBalance(state, data) {
      console.log('setbbb@@@@',data)
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
      if(!address) {
        return 
      }
      try {
        const res = await getTokensBalance({chain: context.state.mainChain,address,token: 'ordi,rats,sats,onfi' });
        console.log('transferableBalance',res)
        const data = res.data.map(item=> ({
          balance: item.availableBalance || item.balance || 0, 
          name: (item.ticker || item.tick).toLocaleUpperCase(),
          transferableList: item.transferableList, 
          transferableBalance:item.transferableBalance
        }));
        console.log('transferableBalance',data)
        context.commit('setBalance',data)
      } catch (error) {
        console.log('error',error)
        const data = [{name:'ORDI',balance: 0,transferableList:[],transferableBalance:0},{name:'RATS',balance: 0,transferableList:[],transferableBalance:0},{name:'SATS',balance: 0,transferableList:[],transferableBalance:0},{name:'ONFI',balance: 0,transferableList:[],transferableBalance:0}]
        context.commit('setBalance',data)
      }
      
    },
  }
});
export default store;