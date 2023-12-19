<template>
  <div
    class="w-[90vw] lg:w-[34rem] bg-[#1A1B1D] rounded-[1.67rem] lg:rounded-[1.25rem] lg:ml-[16.5rem]"
  >
    <div
      class="px-[1.25rem] py-[1rem] lg:px-[1.88rem] lg:py-[1.3rem] border-b-[1px] border-[#272727] flex items-center justify-between"
    >
      <span class="text-white text-[2rem] lg:text-[1.88rem] font-bold"
        >Connect Wallet</span
      >
      <img
        src="../../../assets/img/cross/close.png"
        alt=""
        class="w-[1.67rem] lg:w-[1.5rem] cursor-pointer"
        @click="$emit('close')"
      />
    </div>
    <div class="p-[1.67rem] lg:p-[1.87rem] flex">
      <div
      v-if="$store.state.mainChain==1"
        @click="link('sat')"
        class="w-[9rem] h-[9rem] lg:w-[8rem] lg:h-[8rem] rounded-[1.5rem] lg:rounded-[1rem] flex flex-col items-center justify-center mr-[1.6rem] lg:mr-[1.87rem] bg-[#212223] cursor-pointer"
      >
        <img
          src="../../../assets/img/cross/sat.png"
          class="w-[3rem] lg:w-[2.5rem]"
          alt=""
        />
        <span
          class="mt-[0.33rem] text-white text-[1.2rem] font-bold lg:text-[1rem]"
          >Unisat Wallet</span
        >
      </div>
      <div
        @click="link('okx')"
        v-if="$store.state.mainChain==1"
        class="w-[9rem] h-[9rem] lg:w-[8rem] lg:h-[8rem] rounded-[1.5rem] lg:rounded-[1rem] flex flex-col items-center justify-center mr-[1.6rem] lg:mr-[1.87rem] bg-[#212223] cursor-pointer"
      >
        <img
          src="../../../assets/img/cross/okx.png"
          class="w-[3rem] lg:w-[2.5rem]"
          alt=""
        />
        <span
          class="mt-[0.33rem] text-white text-[1.2rem] font-bold lg:text-[1rem]"
          >OKX Wallet</span
        >
      </div>
      <div
        @click="link('metamask')"
        v-if="$store.state.mainChain==2"
        class="w-[9rem] h-[9rem] lg:w-[8rem] lg:h-[8rem] rounded-[1.5rem] lg:rounded-[1rem] flex flex-col items-center justify-center mr-[1.6rem] lg:mr-[1.87rem] bg-[#212223] cursor-pointer"
      >
        <img
          src="../../../assets/img/cross/mask.png"
          class="w-[3rem] lg:w-[2.5rem]"
          alt=""
        />
        <span
          class="mt-[0.33rem] text-white text-[1.2rem] font-bold lg:text-[1rem]"
          >MetaMask</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import utils from "../../../utils/utils";
import { getTokensBalance } from './../../../api/api';
import web3 from 'web3'
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    link(type) {
      if (type == "sat") {
        this.linkSat();
      } else if(type=='okx') {
        this.linkOkx();
      } else {
        this.linkMask();
      }
    },
    async linkSat() {
      if (typeof window.unisat == "undefined") {
        ElNotification.error("Not found unisat wallet");
        return;
      }
      try {
        let accounts = await window.unisat.requestAccounts();
        localStorage.setItem("WALLETTYPE", "sat");
        this.$store.commit("setUseraddress", accounts[0]);
        this.$emit("close");
        // this.getBalance(accounts[0]);
        utils.accountChange();
      } catch (e) {
        console.log("connect failed");
      }
    },
    async linkOkx() {
      if (!window.okxwallet) {
        ElNotification.error("Not found OKX wallet");
        return;
      }
      try {
        const ctype = this.$store.state.mainChain == 1 ? 0 : 60;
        let account = '';
        if(ctype==0) {
          const result = await okxwallet.bitcoin.connect()
          account = result.address;
        } else {
          const res = await okxwallet.request({ method: 'eth_requestAccounts' });
          account = res[0]
        }
        localStorage.setItem('WALLETTYPE','okx');
        this.$store.commit('setUseraddress',account);
        this.$emit("close");
        utils.accountChange();
      } catch (error) {}
    },
    async linkMask() {
      window.ethereum.on('chainChanged', () => window.location.reload());
      const data = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3Object = new web3(window.ethereum);
      const chainId = await web3Object.eth.getChainId();
      if (chainId != 11155111) { // 网路判断
        try {
          await await window.ethereum.request({
            "method": "wallet_switchEthereumChain",
            "params": [
              {
                "chainId": "0xaa36a7"
              }
            ]
          });
          localStorage.setItem('WALLETTYPE','mask');
        } catch (addError) {
        // handle "add" error
        }
        return 
      }
      localStorage.setItem('WALLETTYPE','mask');
      this.$store.commit('setWeb3js',web3Object);
      this.$store.commit("setUseraddress", web3.utils.toChecksumAddress(data[0]));
      this.$emit("close");
      utils.accountChange();
    },
    async getBalance(address) {
      const res = getTokensBalance({address,token: 'ordi,rats,sats,onfi' });
      console.log(res)
      this.$store.commit()
    },
  },
};
</script>
<style scoped>
</style>