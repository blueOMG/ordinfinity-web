<template>
  <div>
    <div class="pt-[8rem] lg:py-[7rem] flex justify-center px-[1.25rem]">
      <div class="w-full lg:w-[34rem] lg:h-[39rem] lg:rounded-[1.25rem] rounded-[1.67rem] bg-[#1A1B1D]">
        <div class=" w-full h-[5rem] text-[2.5rem] leading-[5rem] border-b-[1px] border-[#272727] font-bold text-[#ffffff] text-center">
          Bridge
        </div>
        <div class="p-[1.8rem]">
          <div class="flex items-center mb-5">
            <span class="text-[#59595A] text-[0.88rem] mr-[0.63rem]">Token</span>
            <div class="px-[0.8rem] py-[0.5rem] flex items-center border border-[#272727] rounded-[0.75rem] cursor-pointer">
              <img src="../../../../assets/img/home/btc.png" alt="" class="w-[1.5rem]" />
              <span class="text-[1rem] text-[white] font-bold ml-[0.6rem] mr-[0.8rem]">ORDI</span>
              <img src="../../../../assets/img/cross/arrow_down.png" alt="" class="w-[0.9rem]" />
            </div>
          </div>
          <div class="border border-[#272727] rounded-[0.75rem] p-[0.94rem]">
            <div class="flex justify-between items-center text-[#59595A] text-[0.88rem] mb-[1rem]">
              <span>From</span>
              <span>Balance: {{ 4545.015 }}</span>
            </div>
            <div class="flex items-center">
              <img src="../../../../assets/img/home/btc.png" alt="" class="w-[1.5rem]" />
              <span class="text-[1rem] text-[white] font-bold ml-[0.6rem] mr-[0.8rem] flex-1 text-left">ORDI</span>
              <img src="../../../../assets/img/cross/arrow_down.png" alt="" class="w-[0.9rem]" />
            </div>
          </div>
          <div class="w-[1.9rem] mx-auto my-[1.25rem]">
            <img src="../../../../assets/img/cross/transfer.png" class="w-full" alt="">
          </div>
          <div class="border border-[#272727] rounded-[0.75rem] p-[0.94rem]">
            <div class="flex justify-between items-center text-[#59595A] text-[0.88rem] mb-[1rem]">
              <span>To</span>
              <span>Balance: {{ 4545.015 }}</span>
            </div>
            <div class="flex items-center">
              <img src="../../../../assets/img/home/btc.png" alt="" class="w-[1.5rem]" />
              <span class="text-[1rem] text-[white] font-bold ml-[0.6rem] mr-[0.8rem] flex-1 text-left">ORDI</span>
              <img src="../../../../assets/img/cross/arrow_down.png" alt="" class="w-[0.9rem]" />
            </div>
          </div>
          <div class="w-full h-[3.44rem] bg-[#F7931A] rounded-full mt-[2.5rem] mb-[1.8rem] text-center leading-[3.44rem] text-[1.13rem] text-[#ffffff] cursor-pointer hover-scale">Transfer</div>
          <div class="flex items-center justify-center">
            <img src="../../../../assets/img/cross/time.png" alt="" class="w-4" />
            <span class="text-[0.88rem] text-[#999999] font-bold ml-[0.35rem]">Estimated 3 blocks to confirm.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:px-[1.88rem] px-[1.25rem]">
      <div class="text-[2.5rem] lg:text-[1.88rem] text-[#ffffff] font-bold mb-[1.75rem] lg:mb-[1.56rem]">History</div>
      <div class="bg-[#1A1B1D] rounded-[1.25rem] w-full hidden lg:block">
        <div class="flex items-center py-[1.25rem] px-[2rem] text-[#999999] text-[0.88rem] border-b-[1px] border-[#272727]">
          <span class="w-[8.8rem] text-left mr-8">Time</span>
          <span class="flex-1 text-left mr-8">Amount</span>
          <span class="w-[8rem] text-left mr-8">Fee</span>
          <span class="flex-1 text-left mr-8">Transfer TXID</span>
          <span class="flex-1 text-left mr-8">Receive TXID</span>
          <span class="flex-1 text-left mr-8">Status</span>
          <span class="w-[8rem] text-center">Operation </span>
        </div>
        <div class="flex items-center py-[1.25rem] px-[2rem] text-[#ffffff] text-[0.88rem] border-b-[1px] border-[#272727]" v-for="item in 10">
          <span class="w-[8.8rem] text-left mr-8">2023.11.23 11:14:13</span>
          <span class="flex-1 text-left mr-8">1,984.0 ORDI</span>
          <span class="w-[8rem] text-left mr-8">16.2</span>
          
          <div class="flex-1 flex items-center mr-8">
            <img src="../../../../assets/img/home/btc.png" class="w-[1.5rem] mr-[0.38rem]" alt="">
            <span>3HxnEx*******TAddot</span>
          </div>
          <div class="flex-1 flex items-center mr-8">
            <img src="../../../../assets/img/home/eth.png" class="w-[1.5rem] mr-[0.38rem]" alt="">
            <span>3HxnEx*******TAddot</span>
          </div>
          <div class="flex-1 flex items-center mr-8">
            <img src="../../../../assets/img/cross/success.png" class="w-[1rem] mr-[0.38rem]" alt="">
            <span>Complete</span>
          </div>
          <span class="w-[8rem] h-[2.2rem] leading-[2.2rem] rounded-full bg-[#F7931A] text-[#ffffff] font-bold text-center cursor-pointer">withDraw</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
<style scoped>
</style>