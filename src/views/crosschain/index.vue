<template>
  <div class="cross bg-[#242527]">
    <!-- top -->
    <div class=" fixed top-0 left-0 w-full h-[4.8rem] items-center justify-end z-40 pr-[2.25rem] hidden lg:flex" :class="{'bg-[rgba(0,0,0,0.5)] backdrop-blur-md': overflow}">
      <a href="https://medium.com/@ordinfinity.org" target="_blank"><img src="../../assets/img/header/discord.png" alt="" class="hover-scale cursor-pointer w-6 mr-[2.5rem]"/></a>
      <a href="https://t.me/ordinfinity" target="_blank"><img src="../../assets/img/header/tg.png" alt="" class=" mr-[2.5rem] w-6 hover-scale cursor-pointer"/></a>
      <a href="https://twitter.com/ordinfinity" target="_blank"><img src="../../assets/img/header/x.png" alt="" class="w-5 mr-[2.5rem] hover-scale cursor-pointer"/></a>
      <a href="https://discord.gg/XAWvpdpw" target="_blank"><img src="../../assets/img/header/disc.png" alt="" class="w-6 mr-[2.5rem] hover-scale"/></a>
      <div
        class="hover-scale cursor-pointer px-8 h-[2.75rem] rounded-[0.75rem] bg-[rgba(247,147,26,0.1)] border border-[#F7931A] text-white text-[1rem] flex items-center justify-center"
        v-if="$store.state.userAddress"
        @click="showInfo=true"
      >
        <!-- <img src="../../assets/img/home/btc.png" alt="" class="w-[1.5rem] h-[1.5rem]" /> -->
        <span class=" flex-1 text-center">{{ $store.state.userAddress.slice(0,6)+'...'+$store.state.userAddress.slice(-4) }}</span>
        <!-- <img src="../../assets/img/cross/arrow_down.png" alt=""  class="w-4" /> -->
      </div>
      <div @click="showlink=true" v-else class="hover-scale cursor-pointer w-[11rem] h-[2.75rem] rounded-[0.75rem] bg-[rgba(247,147,26,0.1)] border border-[#F7931A] text-white text-[1rem] flex items-center justify-center">
        Connect Wallet
      </div>
    </div>
    <!-- left -->
    <div class="w-[17.5rem] h-[100vh] fixed left-0 top-0 z-50 bg-[#1A1B1D] px-[0.75rem] hidden lg:block">
      <div class="mt-4 mb-[3rem]">
        <img src="../../assets/img/header/logo.png" alt="" class="h-[1.5rem] cursor-pointer" @click="$router.replace('/app/home')"/>
      </div>
      <div
        class="w-full h-[2.75rem] flex items-center px-5 rounded-[0.75rem] cursor-pointer"
        :class="{'bg-[#30271D]': routeTab == 1}"
        @click="selectRoute(1)"
        >
        <img src="../../assets/img/header/bridge.png" alt="" class="w-6 mr-[0.6rem]" />
        <span class="text-[1rem] text-[#999999] font-bold" :class="{'text-[#F7931A]': routeTab==1}">Bridge</span>
      </div>
      <div
        class="w-full h-[2.75rem] flex items-center px-5 rounded-[0.75rem] cursor-pointer"
        :class="{'bg-[#30271D]': routeTab == 2}"
        @click="selectRoute(2)"
        >
        <img src="../../assets/img/header/borrow.png" alt="" class="w-6 mr-[0.6rem]" />
        <span class="text-[1rem] text-[#999999] font-bold" :class="{'text-[#F7931A]': routeTab==2}">borrowing</span>
      </div>
    </div>
    <!-- phone -->

    <div class="lg:hidden flex items-center justify-between py-8 px-6 fixed top-0 left-0 w-full z-40" :class="{'bg-[rgba(0,0,0,0.5)] backdrop-blur-md': overflow}">
      <img src="../../assets/img/header/logo2.png" alt="" class="h-[4rem]" @click="$router.replace('/app/home')"/>
      <div class="flex items-center">
        <div v-if="$store.state.userAddress" class="w-40 h-12 border border-[#F7931A] bg-[rgba(247,147,26,0.1)] rounded-2xl text-white text-[1.17rem] flex items-center justify-center cursor-pointer hover-scale"  @click="showInfo=true">{{ $store.state.userAddress.slice(0,6)+'...'+$store.state.userAddress.slice(-4) }}</div>
        <div v-else class="w-40 h-12 border border-[#F7931A] bg-[rgba(247,147,26,0.1)] rounded-2xl text-white text-[1.17rem] flex items-center justify-center cursor-pointer hover-scale"  @click="showlink=true">Connect Wallet</div>
        <img src="../../assets/img/header/menu.png" class="w-8 ml-[1.67rem]" alt="" @click="showDraw=true"/>
      </div>
    </div>  
    <!-- content -->
    <div class="main h-[100vh] lg:pl-[17.5rem] overflow-auto" ref="crossbody">
      <router-view ></router-view>
    </div>
  </div>
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
      <div class="flex items-center">
        <img src="../../assets/img/header/bridge.png" class="w-8 mr-[0.8rem]" alt="">
        <span class="text-[1.33rem] text-[#999999] font-bold" :class="{'text-[#F7931A]': routeTab == 1}">Bridge</span>
      </div>
      <img src="../../assets/img/header/right.png" alt="" class="w-[1rem]"/>
    </div>
    <div class="flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]">
      <div class="flex items-center">
        <img src="../../assets/img/header/borrow.png" class="w-8 mr-[0.8rem]" alt="" />
      <span class="text-[1.33rem] text-[#999999] font-bold" :class="{'text-[#F7931A]': routeTab == 2}">borrowing</span>
      </div>
      <img src="../../assets/img/header/right.png" alt="" class="w-[1rem]"/>
    </div>
    
    <div class=" absolute bottom-0 left-0 w-full h-[7rem] border-t-[2px] border-[#272727] flex items-center px-[1.67rem]">
      <img src="../../assets/img/header/discord1.png" alt="" class="w-[3.33rem] mr-[3.5rem] hover-scale"/>
    <img src="../../assets/img/header/tg1.png" alt="" class=" w-[2.67rem] mr-[3.5rem] hover-scale"/>
    <img src="../../assets/img/header/x1.png" alt="" class="h-[2.17rem]  hover-scale"/>
    </div>
  </div>   
  </el-drawer> 
  <el-dialog
      v-model="showlink"
      :show-close="false"
      custom-class="walletdialog"
      :close-on-click-modal="false"
    >
      <linkwallet @close="showlink=false" ref="linkwalletRef"/>
    </el-dialog>
  <el-dialog
    v-model="showInfo"
    :show-close="false"
    custom-class="walletdialog"
    :close-on-click-modal="false"
  >
    <walletinfo @close="showInfo=false"/>
  </el-dialog>
</template>

<script>
import linkwallet from './dialog/linkwallet.vue'
import walletinfo from './dialog/walletinfo.vue'
import utils from '../../utils/utils'
import web3 from 'web3'
export default {
  components: {
    linkwallet,
    walletinfo
  },
  data() {
    return {
      routeTab: 1,
      showDraw: false,
      overflow: false,
      //
      showlink: false,
      showInfo: false,
    }
  },
  watch: {
    "$store.state.mainChain"(pre,now) {
      console.log(pre,now)
      if(pre !=now) {
        // const type = localStorage.getItem('WALLETTYPE');
        // if(type=='okx') {
        //   this.linkOkx();
        //   return 
        // }
        this.showlink = true;
      }
    }
  },
  mounted() {
    this.$refs.crossbody.addEventListener("scroll", (e) => {
      this.overflow = e.srcElement.scrollTop > 70;
    });
    const type = localStorage.getItem('WALLETTYPE');
    if(type) {
      this.link(type)
    }
  },
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
      if (typeof window.unisat == 'undefined') {
        ElNotification.error("Not found unisat wallet");
        return 
      }
      try {
        let accounts = await window.unisat.requestAccounts();
        localStorage.setItem('WALLETTYPE','sat');
        this.$store.commit('setUseraddress',accounts[0]);
        utils.accountChange();
      } catch (e) {
        console.log('connect failed');
      }
    },
    async linkOkx() {
      if(!window.okxwallet) {
        ElNotification.error("Not found OKX wallet");
        return 
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
        utils.accountChange();
      } catch (error) {
        
      }
    },
    async linkMask() {
      const data = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3Object = new web3(window.ethereum);
      const chainId = await web3Object.eth.getChainId();
      if (chainId != 1) {
        ElNotification.error("Please switch ETH network");
        return 
      }
      localStorage.setItem('WALLETTYPE','mask');
      this.$store.commit('setWeb3js',web3Object);
      this.$store.commit("setUseraddress", data[0]);
      this.$emit("close");
      utils.accountChange();
    },
    selectRoute(val) {
      // this.routeTab = val;
      // if(val==1 && this.routeTab == 2) {
      //   this.$router.push('/cross/bridge')
      // }
      // if(val==2 && this.routeTab == 1) {
      //   this.$router.push('/cross/borrow')
      // }
    }
  }
}
</script>
<style lang="scss">
.walletdialog {
  background: transparent !important;
  display: flex;
  align-items: center;
  justify-content: center;
  .el-dialog__header {
    display: none !important;
  }
  .el-dialog__body {
    background: transparent !important;
  }
}
</style>