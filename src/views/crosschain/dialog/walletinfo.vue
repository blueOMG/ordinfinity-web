<template>
  <div class="w-[90vw] lg:w-[34rem]  bg-[#1A1B1D] rounded-[1.67rem] lg:rounded-[1.25rem] lg:ml-[16.5rem]">
    <div class="px-[1.25rem] py-[1rem] lg:px-[1.88rem] lg:py-[1.3rem] border-b-[1px] border-[#272727] flex items-center justify-between">
      <span class="text-white text-[2rem] lg:text-[1.88rem] font-bold">Wallet connected</span>
      <img src="../../../assets/img/cross/close.png" alt="" class="w-[1.67rem] lg:w-[1.5rem] cursor-pointer" @click="$emit('close')"/>
    </div>
    <div class="px-[1.88rem] py-[2.5rem] flex flex-col items-center">
      <div class="flex items-center justify-center">
        <img :src="walletImg" alt="" class=" w-[3.33rem] lg:w-[2.5rem] " />
        <span class="text-white text-[1.5rem] lg:text-[1.13rem] font-bold mx-2">{{ $store.state.userAddress.slice(0,8)+'...'+$store.state.userAddress.slice(-6) }}</span>
        <div class="h-[3.33rem] lg:h-[2.5rem] cursor-pointer flex items-center justify-center" @click="copy">
          <img src="../../../assets/img/cross/copy.png" class="w-[1.33rem] lg:w-4" alt="">
        </div>
      </div>
      <div class="mt-[2.5rem] mb-[1.5rem] flex justify-center cursor-pointer">
        <span class="text-[#999999] text-[1.33rem] lg:text-[1rem] border-b-[1px]">View on Explorer</span>
      </div>
      <div class="w-full h-[4.17rem] lg:h-[3.44rem] rounded-full text-center leading-[4.17rem] lg:leading-[3.4rem] bg-[rgba(247,41,26,0.83)] text-white text-[1.5rem] lg:text-[1.13rem] font-bold cursor-pointer" @click="disconnect">Disconnect wallet</div>
    </div>
  </div>
</template>

<script>
import sat from '../../../assets/img/cross/sat.png';
import okx from '../../../assets/img/cross/okx.png';
import mask from '../../../assets/img/cross/mask.png';
import utils from '../../../utils/utils'

export default {
  data() {
    return {
      walletImg: okx
    }
  },
  mounted() {
    const type = localStorage.getItem('WALLETTYPE');
    if (type == "sat") {
      this.walletImg = sat;
    } else if(type=='okx') {
      this.walletImg = okx;
    } else {
      this.walletImg = mask;
    }
  },
  methods: {
    copy() {
      utils.copy(this.$store.state.userAddress);
      ElNotification.success('Copy success')
    },
    disconnect() {
      const type = localStorage.getItem('WALLETTYPE');
      if(type=='okx') {
        okxwallet.disconnect();
      }
      
      this.$store.commit('setUseraddress','')
      localStorage.clear();
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
</style>