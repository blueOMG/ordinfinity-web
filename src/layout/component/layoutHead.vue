<template>
 <div class="hidden lg:flex pl-[2.38rem] pr-[1.75rem] py-8 justify-between items-center fixed top-0 left-0 w-full z-50" :class="{'bg-[rgba(0,0,0,0.5)] backdrop-blur-md': overflow}">
  <img src="../../assets/img/header/logo.png" alt="" class="h-8"/>
  <div class="flex items-center">
    <img src="../../assets/img/header/discord.png" alt="" class="hover-scale w-[3.13rem] mr-[3.13rem]"/>
    <img src="../../assets/img/header/tg.png" alt="" class=" mr-[3.13rem] w-8 hover-scale"/>
    <img src="../../assets/img/header/x.png" alt="" class="h-[1.75rem] mr-[3.13rem] hover-scale"/>
    <div class="hover-scale w-[12.5rem] h-[3.13rem] rounded-[0.75rem] bg-[#F7931A] text-white text-[1.38rem] flex items-center justify-center">LAUNCH APP</div>
  </div>
 </div>
 <div class="lg:hidden flex items-center justify-between py-8 px-6 fixed top-0 left-0 w-full z-50" :class="{'bg-[rgba(0,0,0,0.5)] backdrop-blur-md': overflow}">
  <img src="../../assets/img/header/logo2.png" alt="" class="w-[3.83rem]"/>
  <div class="flex items-center">
    <div class="w-40 h-12 bg-[#F7931A] rounded-2xl text-white text-[1.17rem] flex items-center justify-center cursor-pointer hover-scale">LAUNCH APP</div>
    <img src="../../assets/img/header/menu.png" class="w-8 ml-[1.67rem]" alt="" @click="showDraw=true"/>
  </div>
 </div>                                                                                   
 <!-- <van-popup v-model="showDraw" position="right" :style="{ height: '100vh',width:'100vw' }" />  -->
 <el-drawer
    v-model="showDraw"
    direction="rtl"
    :show-close="false"
    size="100vw"
    :withHeader="false"
  >     
  <div class="w-full h-full bg-[#1A1B1D] relative">
    <div class="flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]">
      <img src="../../assets/img/header/logo3.png" alt="" class="h-[2.25rem]"/>
      <img src="../../assets/img/header/close.png" alt="" class="w-[1.67rem]" @click="showDraw=false"/>
    </div>
    <div class="flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]">
      <span class="text-[1.33rem] text-[#999999] font-bold">Bridge</span>
      <img src="../../assets/img/header/right.png" alt="" class="w-[1rem]"/>
    </div>
    <div class="flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]">
      <span class="text-[1.33rem] text-[#999999] font-bold">Lend</span>
      <img src="../../assets/img/header/right.png" alt="" class="w-[1rem]"/>
    </div>
    <div class="flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]">
      <span class="text-[1.33rem] text-[#999999] font-bold">Governance</span>
      <img src="../../assets/img/header/right.png" alt="" class="w-[1rem]"/>
    </div>
    <div class="flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]">
      <span class="text-[1.33rem] text-[#999999] font-bold">swap</span>
      <img src="../../assets/img/header/right.png" alt="" class="w-[1rem]"/>
    </div>
    <div class="flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]">
      <span class="text-[1.33rem] text-[#999999] font-bold">Docs</span>
      <img src="../../assets/img/header/right.png" alt="" class="w-[1rem]"/>
    </div>
    <div class="flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]">
      <span class="text-[1.33rem] text-[#999999] font-bold">Github</span>
      <img src="../../assets/img/header/right.png" alt="" class="w-[1rem]"/>
    </div>
    <div class="flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]">
      <span class="text-[1.33rem] text-[#999999] font-bold">FAQ</span>
      <img src="../../assets/img/header/right.png" alt="" class="w-[1rem]"/>
    </div>
    <div class=" absolute bottom-0 left-0 w-full h-[7rem] border-t-[2px] border-[#272727] flex items-center px-[1.67rem]">
      <img src="../../assets/img/header/discord1.png" alt="" class="w-[3.33rem] mr-[3.5rem] hover-scale"/>
    <img src="../../assets/img/header/tg1.png" alt="" class=" w-[2.67rem] mr-[3.5rem] hover-scale"/>
    <img src="../../assets/img/header/x1.png" alt="" class="h-[2.17rem]  hover-scale"/>
    </div>
  </div>   
  </el-drawer>                          
</template>


<script>
import { publicProvider } from "@wagmi/core/providers/public";
import {
  createWeb3Modal,
  useWeb3Modal,
  defaultWagmiConfig,
} from "@web3modal/wagmi/vue";
import {
  configureChains,
  createConfig,
  watchAccount,
  getNetwork,
  signMessage,
  writeContract,
  waitForTransaction,
  disconnect,
  InjectedConnector,
  fetchBalance,
  readContract,
} from "@wagmi/core";
import { walletConnectProvider, EIP6963Connector } from "@web3modal/wagmi";
import { mainnet, goerli } from "viem/chains";
import { CoinbaseWalletConnector } from "@wagmi/core/connectors/coinbaseWallet";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { showLoadingToast, closeToast } from "vant";

const projectId = "4868cb7800121e84b0b359f1389401a9";
export default {
  components: {
    
  },
  props: {
    overflow: { default: false },
  },

  data() {
    return {
      showDraw: false,
      loginParams: {
        sign: "",
        address: "",
      },
      web3jsProvider: null,
      //
      walletConnectModal: null,
      account: null,
      config: null,
     
    };
  },
 
  mounted() {
    
  },
  methods: {
   
  },
};
</script>
<style lang="scss">
.el-drawer__body {
  padding: 0 !important;
}
</style>