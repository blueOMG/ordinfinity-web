<template>
  <div
    class="w-[90vw] lg:w-[34rem] bg-[#1A1B1D] rounded-[1.67rem] lg:rounded-[1.25rem] lg:ml-[16.5rem]"
  >
    <div
      class="px-[1.25rem] py-[1rem] lg:px-[1.88rem] lg:py-[1.3rem] border-b-[1px] border-[#272727] flex items-center justify-between"
    >
      <span class="text-white text-[2rem] lg:text-[1.88rem] font-bold"
        >Select a token</span
      >
      <img
        src="../../../assets/img/cross/close.png"
        alt=""
        class="w-[1.67rem] lg:w-[1.5rem] cursor-pointer"
        @click="$emit('close')"
      />
    </div>
    <div>
      <!-- <div class="h-[4.17rem] lg:h-[3.13rem] border border-[#272727] rounded-[1.33rem] lg:rounded-[1rem] flex items-center px-[0.9rem] mx-[1.88rem] mt-[1.88rem]">
        <img src="../../../assets/img/cross/search.png" alt="" class="w-[1.32rem] lg:w-4 mr-2" />
        <input type="text" class="flex-1 text-white text-[1.33rem] lg:text-[1rem] border-none outline-none bg-transparent " placeholder="Search name or paste address" />
      </div> -->
      <div class="py-[1.68rem]">
        <div
          class="px-[1.25rem] lg:px-[1.88rem] w-full flex items-center h-[4.17rem] lg:h-[3.13rem] cursor-pointer"
          v-for="item in tokenList"
          :key="item.name"
          :class="{ 'bg-[#212223]': tokenName == item.name }"
          :style="(item.name=='RATS' || item.name == 'SATS') && {cursor: 'not-allowed'}" 
          @click="select(item)"
        >
          <img
            :src="item.icon"
            alt=""
            class="w-[2rem] lg:w-[1.5rem] mr-[0.63rem] rounded-full"
          />
          <span class="text-[1.33rem] lg:text-[1rem] text-white font-bold">{{
            item.name
          }}</span>
          <span
            class="flex-1 text-right text-[1.33rem] lg:text-[1rem] text-white font-bold"
            >{{ dealBalance(item.balance) }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ORDI from "../../../assets/img/token/ORDI.png";
import RATS from "../../../assets/img/token/RATS.png";
import SATS from "../../../assets/img/token/SATS.png";
import ONFI from "../../../assets/img/token/ONFI.png";
export default {
  props: ["tokenName"],
  data() {
    return {
      tokenList: [
        { balance: '--', icon: ONFI, name: "ONFI" },
        { balance: '--', icon: ORDI, name: "ORDI" },
        { balance: '--', icon: RATS, name: "RATS" },
        { balance: '--', icon: SATS, name: "SATS" },
      ],
    };
  },
  watch: {
    "$store.state.tokenBalance"() {
      this.getBalance();
    }
  },
  mounted() {
    this.getBalance();
  },
  methods: {
    async getBalance() {
      const tokenba = this.$store.state.tokenBalance;
      console.log('tokenba@@',tokenba)
      const data = this.tokenList.reduce((acc,item)=>{
        const res = tokenba.filter(it=>it.name==item.name)[0];
        console.log(res)
        acc.push({
          ...item,
          balance: (res.balance*1) +  ((res.transferableBalance || 0)*1)
        });
        return acc;
      },[]);
      this.tokenList = data;
    },
    dealBalance(val) {
      console.log('dealBalance',typeof val)
      const data = val + '';
      if(data.includes('.')) {
        const array = data.split('.');
        let second = ''
        if(array[1].length > 3) {
          second = array[1].slice(0,4)
        } else {
          const addZeroNum = 4 - array[1].length;
          second = array[1] + new Array(2).fill(0).join('');
        }
        return `${array[0]}.${second}`
      } else {
        return data +'.0000'
      }
    },
    select(item) {
      if(item.name=='RATS' || item.name == 'SATS') { // test
        return 
      }
      this.$emit("choose", item);
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
</style>