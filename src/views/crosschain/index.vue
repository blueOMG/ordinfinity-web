<template>
  <div class="cross bg-[#242527]">
    <!-- top -->
    <div class=" fixed top-0 left-0 w-full h-[4.8rem] items-center justify-end z-40 pr-[1.25rem] hidden lg:flex">
      <img src="../../assets/img/header/discord.png" alt="" class="hover-scale cursor-pointer w-6 mr-[2.5rem]"/>
      <img src="../../assets/img/header/tg.png" alt="" class=" mr-[2.5rem] w-6 hover-scale cursor-pointer"/>
      <img src="../../assets/img/header/x.png" alt="" class="w-5 mr-[2.5rem] hover-scale cursor-pointer"/>
      <div
        class="hover-scale cursor-pointer w-[11rem] h-[2.75rem] rounded-[0.75rem] bg-[rgba(247,147,26,0.1)] border border-[#F7931A] text-white text-[1rem] flex items-center justify-center px-[0.6rem]"
        v-if="$store.state.userAddress"
      >
        <img src="../../assets/img/home/btc.png" alt="" class="w-[1.5rem] h-[1.5rem]" />
        <span class=" flex-1">BITCOIN</span>
        <img src="../../assets/img/cross/arrow_down.png" alt=""  class="w-4" />
      </div>
      <div v-else class="hover-scale cursor-pointer w-[11rem] h-[2.75rem] rounded-[0.75rem] bg-[rgba(247,147,26,0.1)] border border-[#F7931A] text-white text-[1rem] flex items-center justify-center">
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
      <img src="../../assets/img/header/logo2.png" alt="" class="h-[4rem]"/>
      <div class="flex items-center">
        <div class="w-40 h-12 bg-[#F7931A] rounded-2xl text-white text-[1.17rem] flex items-center justify-center cursor-pointer hover-scale">LAUNCH APP</div>
        <img src="../../assets/img/header/menu.png" class="w-8 ml-[1.67rem]" alt="" @click="showDraw=true"/>
      </div>
    </div>  
    <!-- content -->
    <div class="w-[100vw] h-[100vh] lg:pl-[17.5rem] overflow-y-auto">
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
</template>

<script>
export default {
  data() {
    return {
      routeTab: 1,
      showDraw: false, 
    }
  },
  methods: {
    selectRoute(val) {
      this.routeTab = val;
    }
  }
}
</script>
<style scoped>
</style>