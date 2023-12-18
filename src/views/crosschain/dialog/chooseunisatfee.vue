<template>
  <div class="w-[90vw] lg:w-[34rem] bg-[#1A1B1D] rounded-[1.67rem] lg:rounded-[1.25rem] lg:ml-[16.5rem]">
    <div
      class="px-[1.25rem] py-[1rem] lg:px-[1.88rem] lg:py-[1.3rem] border-b-[1px] border-[#272727] flex items-center justify-between">
      <span class="text-white text-[2rem] lg:text-[1.88rem] font-bold">Transfer</span>
      <img src="../../../assets/img/cross/close.png" alt="" class="w-[1.67rem] lg:w-[1.5rem] cursor-pointer"
        @click="$emit('close')" />
    </div>
    <div>
      <div class="p-[1.68rem]">

          <div class="text-[1.2rem] lg:text-[1rem] text-[#59595A] mb-[0.5rem]">Address</div>
          <div
            class="flex-1 h-[4.17rem] lg:h-[3.13rem] flex items-center  border border-[#272727] px-[1.25rem] lg:px-[0.94rem] rounded-[0.5rem]">
            <input type="text" readonly v-model="address"
              class="border-none outline-none bg-transparent text-[#fff] text-[1.2rem] lg:text-[1rem] w-full"
              placeholder="Enter amount" />
          </div>

          <div class="text-[1.2rem] lg:text-[1rem] text-[#59595A] mb-[0.5rem] mt-[1.67rem] lg:mt-[1.25rem]">Amount</div>
          <div
            class="w-full h-[4.17rem] lg:h-[3.13rem] flex items-center  border border-[#272727] px-[1.25rem] lg:px-[0.94rem] rounded-[0.5rem]">
            <input type="text" readonly v-model="amount"
              class="border-none outline-none bg-transparent text-[#fff] text-[1.2rem] lg:text-[1rem] w-full"
              placeholder="Enter amount" />
          </div>
          <div class="text-[1.2rem] lg:text-[1rem] text-[#59595A]  mb-[0.5rem] mt-[2.67rem] lg:mt-[2.25rem]">Transfer Fee</div>
          <div class="flex lg:items-center flex-wrap">
            <!--  -->
            <div class="flex-1 min-w-[40%] max-w-[49%] lg:min-w-0 flex flex-col items-center justify-center h-[4.2rem] border border-[#272727] rounded-[1rem] cursor-pointer" :class="{'border-[#F7931A]': selectedFee == 1}" @click="selectFee(1)">
              <div class="flex items-center justify-center">
                <img src="../../../assets/img/cross/speed1.png" alt="" class="w-[0.75rem] mr-1"/>
                <span class="text-white lg:text-[0.88rem] text-[1.1rem]">Normal</span>
              </div>
              <div class="text-white lg:text-[0.88rem] text-[1.1rem]">{{ feeInfo.normal }} Sats/vb</div>
            </div>
            <!--  -->
            <div class="lg:mx-2 flex-1 min-w-[40%] max-w-[49%] lg:min-w-0 flex flex-col items-center justify-center h-[4.2rem] border border-[#272727] rounded-[1rem] cursor-pointer" :class="{'border-[#F7931A]': selectedFee == 2}" @click="selectFee(2)">
              <div class="flex items-center justify-center">
                <img src="../../../assets/img/cross/speed2.png" alt="" class="w-[0.75rem] mr-1"/>
                <span class="text-white lg:text-[0.88rem] text-[1.1rem]">Fast</span>
              </div>
              <div class="text-white lg:text-[0.88rem] text-[1.1rem]">{{ feeInfo.fast }} Sats/vb</div>
            </div>
            <!--  -->
            <div class="flex-1 min-w-[40%] max-w-[49%] lg:min-w-0 flex flex-col items-center justify-center h-[4.2rem] border border-[#272727] rounded-[1rem] cursor-pointer" :class="{'border-[#F7931A]': selectedFee == 3}" @click="selectFee(3)">
              <div class="flex items-center justify-center">
                <img src="../../../assets/img/cross/speed3.png" alt="" class="w-[0.75rem] mr-1"/>
                <span class="text-white lg:text-[0.88rem] text-[1.1rem]">Rapid</span>
              </div>
              <div class="text-white lg:text-[0.88rem] text-[1.1rem]">{{ feeInfo.rapid }} Sats/vb</div>
            </div>
          </div>
          <div
            class="w-full h-[4.17rem] lg:h-[3.44rem] bg-[#F7931A] rounded-full mt-[2.5rem] mb-[1.8rem] text-center leading-[4.17rem] lg:leading-[3.44rem] text-[1.5rem] lg:text-[1.13rem] text-[#ffffff] cursor-pointer"
            @click="transferFn">
            Confirm
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['info','feeData'],
  data() {
    return {
      amount: '',
      address: '',
      selectedFee: 1,
      fee: '',
      feeInfo: {
        normal: '',
        fast: '',
        rapid: ''
      }
    };
  },
  mounted() {
    this.amount = this.info.amount;
    this.address = this.info.reciveAddr;
    const data = this.feeData.fee_rate;
    this.feeInfo = {
      normal: data.economyFee,
      fast: data.hourFee,
      rapid: data.fastestFee 
    }
    this.fee = data.fastestFee;
  },
  methods: {
    selectFee(val) {
      this.selectedFee = val;
    },
    transferFn() {
      this.$emit('confirm',{...this.feeData,fee: this.fee})
    },
  },
};
</script>
<style scoped></style>