<template>
  <div @click="closeSelect">
    <div class="pt-[8rem] lg:py-[7rem] flex justify-center px-[1.25rem]">
      <div
        class="w-full lg:w-[34rem] lg:rounded-[1.25rem] rounded-[1.67rem] bg-[#1A1B1D]"
      >
        <div
          class="w-full h-[5rem] text-[2rem] lg:text-[2.5rem] leading-[5rem] border-b-[1px] border-[#272727] font-bold text-[#ffffff] text-center"
        >
          Bridge
        </div>
        <div class="py-[2.5rem] px-[1.25rem] lg:p-[1.8rem]">
          <div class="flex items-center mb-5" @click="showChooseToken = true">
            <span
              class="text-[#59595A] text-[1.17rem] lg:text-[0.88rem] mr-[0.63rem]"
              >Token</span
            >
            <div
              class="px-[1.25rem] lg:px-[0.8rem] py-[0.5rem] flex items-center border border-[#272727] rounded-[1rem] lg:rounded-[0.75rem] cursor-pointer"
            >
              <img
                :src="tokenData.icon"
                alt=""
                class="w-[2rem] lg:w-[1.5rem] rounded-full"
              />
              <span
                class="text-[1.33rem] lg:text-[1rem] text-[white] font-bold ml-[0.6rem] mr-[0.8rem]"
                >{{ tokenData.name }}</span
              >
              <img
                src="../../../../assets/img/cross/arrow_down.png"
                alt=""
                class="w-[1rem]"
              />
            </div>
          </div>
          <!-- select -->
          <div
            class="border border-[#272727] lg:rounded-[1.33rem] rounded-[0.75rem] p-[1.25rem] lg:p-[0.94rem] relative cursor-pointer"
            :class="{ 'border-[#F7931A]': openSelect1 }"
          >
            <div
              class="flex justify-between items-center text-[#59595A] text-[1.17rem] lg:text-[0.88rem] mb-[1rem]"
            >
              <span>From</span>
              <span>Balance: {{ currentBalance }}</span>
            </div>
            <div
              class="flex items-center"
              @click.stop="openSelect1 = !openSelect1"
            >
              <img
                :src="chain1Data.icon"
                alt=""
                class="w-[2rem] lg:w-[1.5rem]"
              />
              <span
                class="text-[1.33rem] lg:text-[1rem] text-[white] font-bold ml-[0.6rem] mr-[0.8rem] flex-1 text-left"
                >{{ chain1Data.name }}</span
              >
              <img
                src="../../../../assets/img/cross/arrow_down.png"
                alt=""
                class="w-[1rem]"
              />
            </div>
            <!-- select content -->
            <div
              v-show="openSelect1"
              class="z-[10] absolute left-0 bottom-[-120px] w-full h-[120px] border border-[#F7931A] rounded-[1.33rem] bg-[#17181A] px-[1.25rem] py-[1rem] opacity-100"
            >
              <el-scrollbar height="120px">
                <div
                  class="w-full flex items-center mb-5"
                  v-for="item in chainList"
                  :key="item.name"
                  @click="selectedChain1(item)"
                >
                  <img :src="item.icon" class="w-8 mr-[0.83rem]" alt="" />
                  <span class="text-white text-[1.13rem] font-bold">{{
                    item.name
                  }}</span>
                </div>
              </el-scrollbar>
            </div>
          </div>
          <div
            class="w-[2.5rem] lg:w-[1.9rem] mx-auto my-[1.67rem] lg:my-[1.25rem]"
            @click="exchangeChain"
          >
            <img
              src="../../../../assets/img/cross/transfer.png"
              class="w-full"
              alt=""
            />
          </div>
          <!-- select -->
          <div
            class="border border-[#272727] lg:rounded-[1.33rem] rounded-[0.75rem] p-[1.25rem] lg:p-[0.94rem] relative cursor-pointer"
            :class="{ 'border-[#F7931A]': openSelect2 }"
          >
            <div
              class="flex justify-between items-center text-[#59595A] text-[1.17rem] lg:text-[0.88rem] mb-[1rem]"
            >
              <span>To</span>
              <span></span>
            </div>
            <div
              class="flex items-center"
              @click.stop="openSelect2 = !openSelect2"
            >
              <img
                :src="chain2Data.icon"
                alt=""
                class="w-[2rem] lg:w-[1.5rem]"
              />
              <span
                class="text-[1.33rem] lg:text-[1rem] text-[white] font-bold ml-[0.6rem] mr-[0.8rem] flex-1 text-left"
                >{{ chain2Data.name }}</span
              >
              <img
                src="../../../../assets/img/cross/arrow_down.png"
                alt=""
                class="w-[1rem]"
              />
            </div>
            <!-- select content -->

            <div
              v-show="openSelect2"
              class="z-[10] absolute left-0 bottom-[-120px] w-full h-[120px] border border-[#F7931A] rounded-[1.33rem] bg-[#17181A] px-[1.25rem] py-[1rem] opacity-100"
            >
              <el-scrollbar height="120px">
                <div
                  class="w-full flex items-center mb-5"
                  v-for="item in chainList"
                  :key="item.name"
                  @click="selectedChain2(item)"
                >
                  <img :src="item.icon" class="w-8 mr-[0.83rem]" alt="" />
                  <span class="text-white text-[1.13rem] font-bold">{{
                    item.name
                  }}</span>
                </div>
              </el-scrollbar>
            </div>
          </div>
          <!-- input -->
          <div
            class="w-full h-[4.17rem] lg:h-[3.13rem] flex items-center border border-[#272727] rounded-[1rem] px-[1.25rem] lg:px-[0.94rem] mt-[1.67rem] lg:mt-[1.25rem]"
          >
            <input
              type="text"
              class="flex-1 text-[1.33rem] lg:text-[1rem] text-white bg-transparent outline-none border-none"
              placeholder="Amount"
            />
            <span
              class="pl-0.5 text-[#F7931A] text-[1.33rem] lg:text-[1rem] font-bold flex-shrink-0 cursor-pointer"
              >Max</span
            >
          </div>
          <div
            class="flex flex-col lg:flex-row items-start lg:items-center justify-between text-[1.17rem] lg:text-[0.88rem] mt-[0.83rem] lg:mt-[0.66rem] text-[#59595A]"
          >
            <span>Service fees: <span class="text-white">{{ "0.00" }}</span></span>
            <span
              >Balance: <span class="text-white">{{ currentBalance }}</span></span
            >
          </div>
          <div
            class="w-full flex items-center h-[4.17rem] lg:h-[3.13rem] border border-[#272727] rounded-[1rem] px-[1.25rem] lg:px-[0.94rem] mt-[1.67rem] lg:mt-[1.25rem]"
          >
            <input
              type="text"
              class="w-full text-[1.33rem] lg:text-[1rem] text-white bg-transparent outline-none border-none"
              :placeholder="`Enter ${chain1Data.name=='Bitcoin' ? 'BRC-20' : 'ERC-20'} Recipient Address`"
            />
          </div>
          <div
            class="flex items-center justify-between text-[1.17rem] lg:text-[0.88rem] mt-[0.83rem] lg:mt-[0.66rem] text-[#59595A]"
          >
            <span>You will receive: <span class="text-white">{{ "0.00" }}</span></span>
            <span></span>
          </div>
          <div
            class="w-full h-[4.17rem] lg:h-[3.44rem] bg-[#F7931A] rounded-full mt-[2.5rem] mb-[1.8rem] text-center leading-[4.17rem] lg:leading-[3.44rem] text-[1.5rem] lg:text-[1.13rem] text-[#ffffff] cursor-pointer hover-scale"
          >
            Transfer
          </div>
          <div class="flex items-center justify-center">
            <img
              src="../../../../assets/img/cross/time.png"
              alt=""
              class="w-[1.33rem] lg:w-4"
            />
            <span
              class="text-[1.17rem] lg:text-[0.88rem] text-[#999999] font-bold ml-[0.35rem]"
              >Estimated 3 blocks to confirm.</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="lg:px-[1.88rem] px-[1.25rem] mt-[3.33rem] lg:mt-0">
      <div
        class="text-[2.5rem] lg:text-[1.88rem] text-[#ffffff] font-bold mb-[1.75rem] lg:mb-[1.56rem]"
      >
        History
      </div>
      <!-- phone list -->
      <div
        v-if="!hlist.length"
        class="lg:hidden w-full bg-[#1A1B1D] rounded-[1.67rem] mb-8"
      >
        <nodata />
      </div>
      <div
        v-else
        class="lg:hidden w-full bg-[#1A1B1D] rounded-[1.67rem]"
        v-for="item in hlist"
        :key="item"
      >
        <div
          class="p-[1.25rem] border-b-[1px] border-[#272727] flex items-center"
        >
          <div class="relative">
            <img
              src="../../../../assets/img/home/eth.png"
              alt=""
              class="w-[3.3rem] absolute left-0 top-0 z-[2]"
            />
            <img
              src="../../../../assets/img/home/btc.png"
              alt=""
              class="w-[3.3rem] absolute left-[2.3rem] top-0 z-[1]"
            />
          </div>
          <span class="text-white text-[1.67rem] flex-1 text-right font-bold"
            >BITCOIN-Ethereum</span
          >
        </div>

        <div class="px-[1.25rem] pb-[2.5rem] mb-[1.75rem]">
          <div
            class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
          >
            <span class="text-[#999999]">Time</span>
            <span class="text-white font-bold">2023.11.23 11:14:13</span>
          </div>
          <div
            class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
          >
            <span class="text-[#999999]">Amount</span>
            <span class="text-white font-bold">123564</span>
          </div>
          <div
            class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
          >
            <span class="text-[#999999]">Fee</span>
            <span class="text-white font-bold">13</span>
          </div>
          <div
            class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
          >
            <span class="text-[#999999]">Transfer TXID</span>
            <span class="text-white font-bold">3HxnEx*******TAddot</span>
          </div>
          <div
            class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
          >
            <span class="text-[#999999]">Receive TXID</span>
            <span class="text-white font-bold">3HxnEx*******TAddot</span>
          </div>
          <div
            class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
          >
            <span class="text-[#999999]">Status</span>
            <div class="text-white font-bold flex items-center">
              <img
                src="../../../../assets/img/cross/time.png"
                class="w-[1.3rem] mr-2"
                alt=""
              />
              <span>Unconfirmed</span>
            </div>
          </div>
          <div
            class="w-full h-[3.75rem] rounded-full bg-[#F7931A] text-center text-white text-[1.33rem] font-bold mt-[2.5rem] leading-[3.75rem]"
          >
            Withdraw
          </div>
        </div>
      </div>
      <!-- pc list -->
      <div class="bg-[#1A1B1D] rounded-[1.25rem] w-full hidden lg:block">
        <div
          class="flex items-center py-[1.25rem] px-[2rem] text-[#999999] text-[0.88rem] border-b-[1px] border-[#272727]"
        >
          <span class="w-[8.8rem] text-left mr-8">Time</span>
          <span class="flex-1 text-left mr-8">Amount</span>
          <span class="w-[8rem] text-left mr-8">Fee</span>
          <span class="flex-1 text-left mr-8">Transfer TXID</span>
          <span class="flex-1 text-left mr-8">Receive TXID</span>
          <span class="flex-1 text-left mr-8">Status</span>
          <span class="w-[8rem] text-center">Operation </span>
        </div>
        <div v-if="!hlist.length">
          <nodata />
        </div>
        <div
          v-else
          class="flex items-center py-[1.25rem] px-[2rem] text-[#ffffff] text-[0.88rem] border-b-[1px] border-[#272727]"
          v-for="item in hlist"
          :key="item"
        >
          <span class="w-[8.8rem] text-left mr-8">2023.11.23 11:14:13</span>
          <span class="flex-1 text-left mr-8">1,984.0 ORDI</span>
          <span class="w-[8rem] text-left mr-8">16.2</span>

          <div class="flex-1 flex items-center mr-8">
            <img
              src="../../../../assets/img/home/btc.png"
              class="w-[1.5rem] mr-[0.38rem]"
              alt=""
            />
            <span>3HxnEx*******TAddot</span>
          </div>
          <div class="flex-1 flex items-center mr-8">
            <img
              src="../../../../assets/img/home/eth.png"
              class="w-[1.5rem] mr-[0.38rem]"
              alt=""
            />
            <span>3HxnEx*******TAddot</span>
          </div>
          <div class="flex-1 flex items-center mr-8">
            <img
              src="../../../../assets/img/cross/success.png"
              class="w-[1rem] mr-[0.38rem]"
              alt=""
            />
            <span>Complete</span>
          </div>
          <span
            class="w-[8rem] h-[2.2rem] leading-[2.2rem] rounded-full bg-[#F7931A] text-[#ffffff] font-bold text-center cursor-pointer"
            >withDraw</span
          >
        </div>
      </div>
    </div>
    <!-- chooseToken -->
    <el-dialog
      v-model="showChooseToken"
      :show-close="false"
      custom-class="choosetokendialog"
      :close-on-click-modal="false"
    >
      <choosetoken
        @close="showChooseToken = false"
        :tokenName="tokenData.name"
        @choose="selected"
      />
    </el-dialog>
  </div>
</template>

<script>
import choosetoken from "../../dialog/choosetoken.vue";
import btcimg from "../../../../assets/img/home/btc.png";
import ethimg from "../../../../assets/img/home/eth.png";
import ORDIimg from "../../../../assets/img/token/ORDI.png";
import nodata from "../../../../components/Nodata.vue";
import {getHistory} from '../../../../api/api'
export default {
  components: {
    choosetoken,
    nodata,
  },
  data() {
    return {
      openSelect1: false,
      openSelect2: false,
      showChooseToken: false,
      tokenData: {
        icon: ORDIimg,
        name: "ORDI",
      },
      chainList: [
        { icon: btcimg, name: "Bitcoin" },
        { icon: ethimg, name: "Ethereum" },
      ],
      chain1Data: { icon: btcimg, name: "Bitcoin" },
      chain2Data: { icon: ethimg, name: "Ethereum" },
      
      // 当前所选的币所在的余额
      currentBalance: '--',
      // 
      hlist: [],
      page: 1
    };
  },
  watch: {
    chain1Data() {
      if(this.chain1Data.name == 'Bitcoin') {
        this.$store.commit('setMainChain',1);
      } else {
        console.log(1222)
        this.$store.commit('setMainChain',2);
      }
    },
    "$store.state.tokenBalance"() {
      this.getCurrentTokenBalance()
    },
    tokenData() {
      this.getCurrentTokenBalance()
    }
  },
  mounted() {
    if(this.$store.state.userAddress) {
      this.getCurrentTokenBalance();
      this.getTransferList()
    }
    
  },
  methods: {
    getTransferList(more) {
      getHistory({
        address: this.$store.state.userAddress,
        page: this.page
      }).then(res=>{
        console.log(res)
      })
    },
    getCurrentTokenBalance(){
      const tokenba = this.$store.state.tokenBalance;
      const currentBalance = tokenba.reduce((acc,item)=>{
        if(item.name == this.tokenData.name) {
          acc = item.balance
        }
        return acc
      },'0');
      this.currentBalance = currentBalance;
    },
    exchangeChain() {
      const { chain1Data,chain2Data } = this;
      const data1 = JSON.parse(JSON.stringify(chain1Data));
      const data2 = JSON.parse(JSON.stringify(chain2Data));
      this.chain1Data = data2;
      this.chain2Data = data1;
    },
    closeSelect() {
      this.openSelect1 = false;
      this.openSelect2 = false;
    },
    selected(item) {
      console.log(item);
      this.tokenData = item;
    },
    selectedChain1(item) {
      this.chain1Data = item;
      if (item.name == "Ethereum") {
        this.chain2Data = { icon: btcimg, name: "Bitcoin" };
      } else {
        this.chain2Data = { icon: ethimg, name: "Ethereum" };
      }
    },
    selectedChain2(item) {
      this.chain2Data = item;
      if (item.name == "Ethereum") {
        this.chain1Data = { icon: btcimg, name: "Bitcoin" };
      } else {
        this.chain1Data = { icon: ethimg, name: "Ethereum" };
      }
    },
  },
};
</script>
<style lang="scss">
.content {
  /* 设置默认高度为0，实现初始时的折叠效果 */
  height: 0;
  overflow: hidden;
  /* 设置过渡效果 */
  transition: height 0.5s ease-in-out;
}
.content-enter-active,
.content-leave-active {
  /* 过渡过程中的高度变化 */
  transition: height 0.5s ease-in-out;
}
.content-enter,
.content-leave-to {
  /* 进入和离开时的高度 */
  height: 0;
}
.choosetokendialog {
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