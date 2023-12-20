<template>
  <div @click="closeSelect" class="infinite-list-wrapper relative">
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
              <span v-show="chain1Data.name == 'Ethereum'"
                >Balance: {{ dealBalance(currentBalance) }}</span
              >
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
            class="w-full h-[4.17rem] lg:h-[3.13rem] flex items-center mt-[1.67rem] lg:mt-[1.25rem]"
            v-show="chain1Data.name == 'Bitcoin'"
          >
            <div
              class="flex-1 relative border border-[#272727] h-[4.17rem] lg:h-[3.13rem] px-[1.25rem] lg:px-[0.94rem] flex items-center rounded-[1rem]"
            >
              <div
                class="flex items-center justify-between w-full cursor-pointer"
                @click.stop="showSelectBalance = !showSelectBalance"
              >
                <span
                  class="text-[#fff] text-[1.2rem] lg:text-[1rem] flex-1 text-left"
                  v-show="transferAmountData"
                  >{{
                    transferAmountData ? transferAmountData.amount : ""
                  }}</span
                >
                <span
                  class="text-[#666] text-[1.2rem] lg:text-[1rem] flex-1 text-left"
                  v-show="!transferAmountData"
                  >{{ "please select amount" }}</span
                >
                <img
                  src="../../../../assets/img/cross/arrow_down.png"
                  class="w-[1rem]"
                  alt=""
                />
              </div>
              <div
                class="absolute left-0 top-[2rem] w-full bg-[#272727] rounded-xl overflow-y-auto"
                v-show="showSelectBalance"
              >
                <el-scrollbar height="120px">
                  <div
                    class="rounded-[0.2rem] py-[0.3rem] leading-8 mx-[0.5rem] px-[0.5rem] mb-1 hover:bg-[#333333] cursor-pointer flex items-center"
                    v-for="item in currentInscriptList"
                    @click="selectBalance(item)"
                  >
                    <div
                      class="w-3 h-3 rounded-full border border-[#999] mr-4 p-[2px]"
                    >
                      <div
                        class="w-full h-full rounded-full bg-[#F7931A]"
                        v-show="
                          (transferAmountData ? transferAmountData.inId : '') ==
                          item.inscriptionId
                        "
                      ></div>
                    </div>
                    <div>
                      <div class="text-[1.2rem] lg:text-[1rem] leading-6">
                        <span class="text-[#F7931A] pr-1">{{
                          item.amount
                        }}</span>
                        <span class="text-[#999]">{{ tokenData.name }}</span>
                      </div>
                      <div
                        class="text-[1rem] lg:text-[0.8rem] text-[#999] leading-4"
                      >
                        #{{ item.inscriptionNumber }}
                      </div>
                    </div>
                  </div>
                  <div
                    class="m-[0.5rem] lg:h-[2.5rem] h-[3rem] flex items-center justify-center text-[#fff] text-[1.2rem] lg:text-[1rem] cursor-pointer bg-[#F7931A] rounded-lg"
                    @click="customAdd"
                  >
                    New inscription
                  </div>
                </el-scrollbar>
              </div>
            </div>
            <div
              class="h-[4.17rem] lg:h-[3.13rem] w-10 flex items-center justify-end cursor-pointer"
            >
              <img
                src="../../../../assets/img/cross/refresh.png"
                alt=""
                class="w-7 lg:w-5"
                @click="refreshBalance"
                v-if="!refreshLoading"
              />
              <img
                src="../../../../assets/img/cross/loading.png"
                alt=""
                class="w-7 lg:w-5 refresh_balance"
                v-if="refreshLoading"
              />
            </div>
          </div>
          <div
            class="w-full h-[4.17rem] lg:h-[3.13rem] flex items-center mt-[1.67rem] lg:mt-[1.25rem] border border-[#272727] px-[1.25rem] lg:px-[0.94rem] rounded-[1rem]"
            v-show="chain1Data.name != 'Bitcoin'"
          >
            <input
              type="text"
              v-model="ercAmount"
              class="border-none outline-none bg-transparent text-[#fff] text-[1.2rem] lg:text-[1rem] w-full"
              placeholder="Enter amount"
            />
          </div>
          <div
            class="flex flex-col lg:flex-row items-start lg:items-center justify-between text-[1.17rem] lg:text-[0.88rem] mt-[0.83rem] lg:mt-[0.66rem] text-[#59595A]"
          >
            <span
              >Service fees:
              <span class="text-white">{{ feeData.fee }}</span></span
            >
            <span></span>
          </div>
          <div
            class="w-full flex items-center h-[4.17rem] lg:h-[3.13rem] border border-[#272727] rounded-[1rem] px-[1.25rem] lg:px-[0.94rem] mt-[1.67rem] lg:mt-[1.25rem]"
          >
            <input
              type="text"
              v-model.trim="reciveAddr"
              class="w-full text-[1.33rem] lg:text-[1rem] text-white bg-transparent outline-none border-none"
              :placeholder="`Enter ${
                chain1Data.name == 'Bitcoin' ? 'ERC-20' : 'BRC-20'
              } Recipient Address`"
            />
          </div>
          <div
            class="flex items-center justify-between text-[1.17rem] lg:text-[0.88rem] mt-[0.83rem] lg:mt-[0.66rem] text-[#59595A]"
          >
            <span
              >You will receive:
              <span class="text-white">{{ feeData.receive }}</span></span
            >
            <span></span>
          </div>
          <div
            class="w-full h-[4.17rem] lg:h-[3.44rem] bg-[#F7931A] rounded-full mt-[2.5rem] mb-[1.8rem] text-center leading-[4.17rem] lg:leading-[3.44rem] text-[1.5rem] lg:text-[1.13rem] text-[#ffffff] cursor-pointer hover-scale"
            @click="transferFn"
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
      <div v-infinite-scroll="loadhlist" :infinite-scroll-disabled="finished">
        <!-- phone list -->
        <div
          v-if="!hlist.length && !hlistloading"
          class="lg:hidden w-full bg-[#1A1B1D] rounded-[1.67rem] mb-8"
        >
          <nodata />
        </div>
        <div v-if="hlist.length">
          <div
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
              <span
                class="text-white text-[1.67rem] flex-1 text-right font-bold"
                >{{
                  item.from_chain == "btc"
                    ? "Bitcoin-Ethereum"
                    : "Ethereum-Bitcoin"
                }}</span
              >
            </div>

            <div class="px-[1.25rem] pb-[2.5rem] mb-[1.75rem]">
              <div
                class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
              >
                <span class="text-[#999999]">Time</span>
                <span class="text-white font-bold">{{
                  new Date(item.create_time * 1000).toLocaleString()
                }}</span>
              </div>
              <div
                class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
              >
                <span class="text-[#999999]">Order ID</span>
                <span class="text-white font-bold">
                  {{ item.id }}
                </span>
              </div>
              <div
                class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
              >
                <span class="text-[#999999]">Amount</span>
                <span class="text-white font-bold"
                  >{{ dealBalance(item.amount) }} {{ item.token }}</span
                >
              </div>
              <div
                class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
              >
                <span class="text-[#999999]">Fee</span>
                <span class="text-white font-bold">{{ item.fee || "--" }}</span>
              </div>
              <div
                class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
              >
                <span class="text-[#999999]">Txid</span>
                <span class="text-white font-bold" @click="copytxid(item)">{{
                  item.txid
                    ? item.txid.slice(0, 4) + "***" + item.txid.slice(-4)
                    : "--"
                }}</span>
              </div>
              <div
                class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
              >
                <span class="text-[#999999]">Transfer Address</span>
                <span class="text-white font-bold">{{
                  item.from_address.slice(0, 4) +
                  "***" +
                  item.from_address.slice(-4)
                }}</span>
              </div>
              <div
                class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
              >
                <span class="text-[#999999]">Receive Address</span>
                <span class="text-white font-bold">{{
                  item.to_address.slice(0, 4) +
                  "***" +
                  item.to_address.slice(-4)
                }}</span>
              </div>
              <div
                class="flex items-center justify-between text-[1.17rem] mt-[1.67rem]"
              >
                <span class="text-[#999999]">Status</span>
                <div class="text-white font-bold flex items-center">
                  <img
                    :src="
                      item.status == 'Verifying'
                        ? hlistStatusImg.verifyImg
                        : hlistStatusImg.successImg
                    "
                    class="w-[1.3rem] mr-2"
                    alt=""
                  />
                  <span>{{ item.status }}</span>
                </div>
              </div>
              <!-- <div
              class="w-full h-[3.75rem] rounded-full bg-[#F7931A] text-center text-white text-[1.33rem] font-bold mt-[2.5rem] leading-[3.75rem]">
              Withdraw
            </div> -->
            </div>
          </div>
        </div>
        <!-- pc list -->
        <div class="bg-[#1A1B1D] rounded-[1.25rem] w-full hidden lg:block">
          <div
            class="flex items-center py-[1.25rem] px-[2rem] text-[#999999] text-[0.88rem] border-b-[1px] border-[#272727]"
          >
            <span class="w-[9rem] text-left mr-8">Time</span>
            <span class="w-[4rem] text-left mr-8">Order ID</span>
            <span class="flex-1 text-left mr-8">Amount</span>
            <span class="w-[8rem] text-left mr-8">Fee</span>
            <span class="flex-1 text-left mr-8">Txid</span>
            <span class="flex-1 text-left mr-8">Transfer Address</span>
            <span class="flex-1 text-left mr-8">Receive Address</span>
            <span class="flex-1 text-right">Status</span>
            <!-- <span class="w-[8rem] text-center">Operation </span> -->
          </div>
          <div v-if="!hlist.length && !hlistloading">
            <nodata />
          </div>
          <div v-if="hlist.length">
            <div
              class="flex items-center py-[1.25rem] px-[2rem] text-[#ffffff] text-[0.88rem] border-b-[1px] border-[#272727]"
              v-for="item in hlist"
              :key="item"
            >
              <span class="w-[9rem] text-left mr-8">{{
                new Date(item.create_time * 1000).toLocaleString()
              }}</span>
              <span class="w-[4rem] text-left mr-8">{{
                item.id
              }}</span>
              <span class="flex-1 text-left mr-8"
                >{{ dealBalance(item.amount) }} {{ item.token }}</span
              >
              <span class="w-[8rem] text-left mr-8">{{
                item.fee || "--"
              }}</span>
              <div class="flex-1 flex items-center mr-8">
                <span class="cursor-pointer" @click="copytxid(item)">{{
                  item.txid
                    ? item.txid.slice(0, 4) + "***" + item.txid.slice(-4)
                    : "--"
                }}</span>
                <!-- <img src="../../../../assets/img/cross/copy.png" class="w-[1rem] ml-[0.38rem]" alt="" /> -->
              </div>
              <div class="flex-1 flex items-center mr-8">
                <img
                  :src="
                    item.from_chain == 'btc'
                      ? hlistChainImg.btcimg
                      : hlistChainImg.ethimg
                  "
                  class="w-[1.5rem] mr-[0.38rem]"
                  alt=""
                />
                <span>{{
                  item.from_address.slice(0, 4) +
                  "***" +
                  item.from_address.slice(-4)
                }}</span>
              </div>
              <div class="flex-1 flex items-center mr-8">
                <img
                  :src="
                    item.to_chain == 'btc'
                      ? hlistChainImg.btcimg
                      : hlistChainImg.ethimg
                  "
                  class="w-[1.5rem] mr-[0.38rem]"
                  alt=""
                />
                <span>{{
                  item.to_address.slice(0, 4) +
                  "***" +
                  item.to_address.slice(-4)
                }}</span>
              </div>
              <div class="flex-1 flex items-center justify-end">
                <img
                  :src="
                    item.status == 'Verifying'
                      ? hlistStatusImg.verifyImg
                      : hlistStatusImg.successImg
                  "
                  class="w-[1rem] mr-[0.38rem]"
                  alt=""
                />
                <span>{{ item.status }}</span>
              </div>
              <!-- <span
                class="w-[8rem] h-[2.2rem] leading-[2.2rem] rounded-full bg-[#F7931A] text-[#ffffff] font-bold text-center cursor-pointer">withDraw</span> -->
            </div>
          </div>
        </div>

        <div
          class="flex items-end justify-center h-12 my-16 bg-transparent"
          v-show="hlistloading"
        >
          <img
            src="../../../../assets/img/cross/loading.png"
            alt=""
            class="w-10 lg:w-12 refresh_balance"
          />
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
        v-if="showChooseToken"
      />
    </el-dialog>
    <!-- btc to erc fee unisat -->
    <el-dialog
      v-model="showUnisatChoosefee"
      :show-close="false"
      custom-class="choosetokendialog"
      :close-on-click-modal="false"
    >
      <chooseunisatfee
        @close="closeChooseFee"
        :info="{ amount: transferAmountData.amount, reciveAddr }"
        :feeData="unisatfeeData"
        v-if="showUnisatChoosefee"
        @confirm="unisatfeetransfer"
      />
    </el-dialog>
  </div>
</template>

<script>
import choosetoken from "../../dialog/choosetoken.vue";
import chooseunisatfee from "../../dialog/chooseunisatfee.vue";
import btcimg from "../../../../assets/img/home/btc.png";
import ethimg from "../../../../assets/img/home/eth.png";
import ORDIimg from "../../../../assets/img/token/ORDI.png";
import ONFIimg from "../../../../assets/img/token/ONFI.png";
import nodata from "../../../../components/Nodata.vue";
import successImg from "../../../../assets/img/cross/success.png";
import verifyImg from "../../../../assets/img/cross/time.png";
import {
  getHistory,
  preorder,
  crorder,
  getTokensBalance,
  getFee,
} from "../../../../api/api";
import { ElMessage } from "element-plus";
import { showLoadingToast, closeToast } from "vant";
import web3 from "web3";
import abi from "./../../../../assets/js/XRC20abi";
import utils from "../../../../utils/utils";
export default {
  components: {
    choosetoken,
    nodata,
    chooseunisatfee,
  },
  data() {
    const btcchain = { icon: btcimg, name: "Bitcoin", chainStr: "btc" };
    const ertchain = { icon: ethimg, name: "Ethereum", chainStr: "eth" };
    return {
      openSelect1: false,
      openSelect2: false,
      showChooseToken: false,
      tokenData: {
        icon: ONFIimg,
        name: "ONFI",
      },
      chainList: [
        { icon: btcimg, name: "Bitcoin" },
        { icon: ethimg, name: "Ethereum" },
      ],
      chain1Data:
        localStorage.getItem("WALLETTYPE") == "mask" ? ertchain : btcchain,
      chain2Data:
        localStorage.getItem("WALLETTYPE") == "mask" ? btcchain : ertchain,

      // 当前所选的币所在的余额
      currentBalance: "--",
      currentInscriptList: [],
      // 输入框
      refreshLoading: false,
      showSelectBalance: false,
      // 转账数量
      transferAmountData: null,
      // 接收地址
      reciveAddr: "",
      // erc 输入数量
      ercAmount: "",
      // 费用数据
      feeData: {
        service: "",
        receive: "",
      },
      // unisat跨链 选择手续费
      showUnisatChoosefee: false,
      unisatfeeData: {},
      // 列表数据
      hlist: [],
      hlistChainImg: {
        btcimg,
        ethimg,
      },
      hlistStatusImg: {
        successImg,
        verifyImg,
      },
      hlistloading: true,
      finished: false,
      page: 1,
    };
  },
  watch: {
    chain1Data() {
      this.resetInfo();
      if (this.chain1Data.name == "Bitcoin") {
        this.$store.commit("setMainChain", 1);
      } else {
        this.$store.commit("setMainChain", 2);
      }
    },
    "$store.state.tokenBalance"() {
      this.getCurrentTokenBalance();
    },
    tokenData() {
      this.transferAmountData = null;
      this.ercAmount = "";
      this.feeData = {
        service: "",
        receive: "",
      };
      this.getCurrentTokenBalance();
    },
    "$store.state.userAddress"() {
      
      if (this.$store.state.userAddress) {
        this.getTransferList();
      } else {
        this.resetInfo();
      }
    },
    // 获取服务费
    ercAmount() {
      if (this.ercAmount && !isNaN(this.ercAmount * 1)) {
        this.$nextTick(() => {
          this.getFeeData();
        });
      }
    },
    transferAmountData() {
      if (this.transferAmountData && this.chain1Data.name == "Bitcoin") {
        this.$nextTick(() => {
          this.getFeeData();
        });
      }
    },
  },
  mounted() {
    if (this.$store.state.userAddress) {
      this.getCurrentTokenBalance();
      this.getTransferList();
    }
  },
  methods: {
    // 处理余额
    dealBalance(val) {
      if(val=='--') {
        return '--'
      }
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
    // 关闭unisat选择手续费
    closeChooseFee() {
      this.showUnisatChoosefee = false;
    },
    // 复制
    copytxid(item) {
      if (!item.txid) {
        return;
      }
      utils.copy(item.txid);
      ElNotification.success("Copy success");
    },
    // 重置数据
    resetInfo() {
      console.log(1111)
      this.$store.commit("setUseraddress", "");
      this.transferAmountData = null;
      this.ercAmount = "";
      this.reciveAddr= '';
      this.feeData = {
        service: "",
        receive: "",
      };
      this.tokenData = {
        icon: ONFIimg,
        name: "ONFI",
      }
      this.hlist = [];
      this.hlistloading = true;
      this.finished = false;
      this.page = 1;
      this.$store.commit('setBalance',[{name:'ORDI',balance: 0,transferableList:[],transferableBalance:0},{name:'RATS',balance: 0,transferableList:[],transferableBalance:0},{name:'SATS',balance: 0,transferableList:[],transferableBalance:0},{name:'ONFI',balance: 0,transferableList:[],transferableBalance:0}],)
    },
    // 费用接口
    async getFeeData() {
      let amount = "";
      if (this.chain1Data.name == "Bitcoin") {
        amount = this.transferAmountData.amount * 1;
      } else {
        amount = this.ercAmount * 1;
      }
      const res = await getFee({
        from_chain: this.chain1Data.chainStr,
        to_chain: this.chain2Data.chainStr,
        amount,
        token: this.tokenData.name
      });
      if (res.data) {
        this.feeData = res.data;
      }
    },
    // 列表接口
    loadhlist() {
      if (this.hlistloading) {
        return;
      }
      this.hlistloading = true;
      setTimeout(() => {
        this.getTransferList(true);
      }, 1000);
    },
    // 获取记录
    getTransferList(more) {
      getHistory({
        address: this.$store.state.userAddress,
        page: more ? this.page + 1 : this.page,
      })
        .then((res) => {
          if (res.data) {
            if (more) {
              this.page = this.page + 1;
              this.hlist = this.hlist.concat(res.data);
            } else {
              this.hlist = res.data;
            }
            this.finished = res.data.length < 10;
            this.hlistloading = false;
          } else {
            this.finished = true;
          }
        })
        .catch(() => {
          this.finished = true;
          this.hlistloading = false;
        });
    },
    // 获取当前余额
    getCurrentTokenBalance() {
      const tokenba = this.$store.state.tokenBalance;
      console.log(tokenba);
      const currentBalance = tokenba.reduce(
        (acc, item) => {
          if (item.name == this.tokenData.name) {
            acc.a = item.balance;
            acc.b = item.transferableList;
          }
          return acc;
        },
        { a: 0, b: [] }
      );
      console.log("currentBalance", currentBalance);
      this.currentBalance = currentBalance.a;
      this.currentInscriptList = currentBalance.b;
    },
    // 切换链
    exchangeChain() {
      const { chain1Data, chain2Data } = this;
      const data1 = JSON.parse(JSON.stringify(chain1Data));
      const data2 = JSON.parse(JSON.stringify(chain2Data));
      this.chain1Data = data2;
      this.chain2Data = data1;
    },
    // 点击其他区域 关闭select
    closeSelect() {
      this.openSelect1 = false;
      this.openSelect2 = false;
      this.showSelectBalance = false;
    },
    // 选择币
    selected(item) {
      console.log(item);
      this.tokenData = item;
    },
    // 选主链
    selectedChain1(item) {
      if (item.name == this.chain1Data.name) {
        return;
      }
      this.chain1Data = item;
      if (item.name == "Ethereum") {
        this.chain2Data = { icon: btcimg, name: "Bitcoin", chainStr: "btc" };
      } else {
        this.chain2Data = { icon: ethimg, name: "Ethereum", chainStr: "eth" };
      }
    },
    // 选次链
    selectedChain2(item) {
      if (item.name == this.chain2Data.name) {
        return;
      }
      this.chain2Data = item;
      if (item.name == "Ethereum") {
        this.chain1Data = { icon: btcimg, name: "Bitcoin", chainStr: "btc" };
      } else {
        this.chain1Data = { icon: ethimg, name: "Ethereum", chainStr: "eth" };
      }
    },
    //选择金额
    selectBalance(item) {
      this.transferAmountData = {
        amount: item.amount,
        inId: item.inscriptionId,
      };
    },
    // 自定添加 需要弹窗提示用户
    async customAdd() {
      const type = localStorage.getItem("WALLETTYPE");
      if (type == "sat") {
        await unisat.inscribeTransfer(this.tokenData.name.toLocaleLowerCase());
        this.refreshBalance();
      } else {
        console.log(this.tokenData.name);
        const res = await okxwallet.bitcoin.inscribe({
          type: 51,
          from: this.$store.state.userAddress,
          tick: this.tokenData.name == 'ONFI' ?"ONFI" : this.tokenData.name.toLocaleLowerCase(),
        });
        this.refreshBalance();
      }
    },
    // 刷新余额，主要目的是 刷新用户的铭文
    async refreshBalance() {
      this.refreshLoading = true;
      const { userAddress, mainChain } = this.$store.state;
      try {
        const res = await getTokensBalance({
          chain: mainChain,
          address: userAddress,
          token: "ordi,rats,sats,onfi",
        });
        const data = res.data.map((item) => ({
          balance: item.availableBalance || item.balance || 0,
          name: item.ticker.toLocaleUpperCase(),
          transferableList: item.transferableList,
          transferableBalance: item.transferableBalance,
        }));
        console.log("刷新用户的铭文", data);
        this.$store.commit("setBalance", data);
        this.refreshLoading = false;
      } catch (error) {
        const data = [
          { name: "ORDI", balance: 0, transferableList: [] },
          { name: "RATS", balance: 0, transferableList: [] },
          { name: "SATS", balance: 0, transferableList: [] },
          {
            name: "ONFI",
            balance: 0,
            transferableList: [],
            transferableBalance: 0,
          },
        ];
        this.$store.commit("setBalance", data);
        this.refreshLoading = false;
      }
    },
    // 调用跨链
    async transferFn() {
      const fromType = this.chain1Data.name;
      if (fromType == "Bitcoin" && !this.transferAmountData) {
        ElNotification.warning("Please Choose an inscription");
        return;
      }
      if (
        fromType != "Bitcoin" &&
        (!this.ercAmount || isNaN(this.ercAmount * 1))
      ) {
        ElNotification.warning("Please input token amount");
        return;
      }
      if (this.reciveAddr == "") {
        ElNotification.warning("Please input recive address");
        return;
      }
      if(this.chain1Data.name == "Bitcoin") { // 检测以太坊地址正确性
        if(!web3.utils.isAddress(this.reciveAddr)) {
          ElNotification.warning("Invalid address");
          return 
        }
      }
      if(this.chain1Data.name != "Bitcoin") { // 检测比特币地址正确性
        const str = this.reciveAddr.slice(0,1);
        if(str!='3'&& str!='b'&& str!='1' && str!='B') {
          ElNotification.warning("Invalid address");
          return 
        }
        if(this.currentBalance== '--' || this.currentBalance == 0) {
          ElNotification.warning("Insufficient balance");
          return 
        }
        if(this.ercAmount*1 > this.currentBalance*1) {
          ElNotification.warning("Insufficient balance");
          return 
        }
        // const 
      }
      // loading 开始
      showLoadingToast({ duration: 0 });
      if (this.chain1Data.name == "Bitcoin") {
        // to erc
        const type = localStorage.getItem("WALLETTYPE");
        if (type == "sat") {
          this.unisatTransfer();
        } else {
          this.okxTransferToerc();
        }
      } else {
        this.transferTobtc();
      }
    },
    // unisat btc to erc
    async unisatTransfer() {
      try {
        const res = await preorder({
          from_chain: this.chain1Data.chainStr,
          to_chain: this.chain2Data.chainStr,
          from_address: this.$store.state.userAddress,
          to_address: this.reciveAddr,
          token: this.tokenData.name,
          amount: this.transferAmountData.amount,
          inscriptionId: this.transferAmountData.inId,
        });
        console.log("preorder返回数据:", res);
        const data = res.data;
        if (data) {
          closeToast();
          this.showUnisatChoosefee = true;
          this.unisatfeeData = data;
        }
      } catch (error) {
        console.log(error);
        closeToast();
        ElNotification.error("跨链失败,请重试！");
      }
    },
    async unisatfeetransfer(data) {
      console.log(data)
      this.showUnisatChoosefee = false;
      showLoadingToast({ duration: 0 });
      try {
        let { txid } = await window.unisat.sendInscription(
          data.bridgeAddress,
          this.transferAmountData.inId,
          { feeRate: data.fee }
        );
        console.log(txid);
        this.createOrder(txid, data.order_id);
      } catch (error) {
        closeToast();
        ElNotification.error("跨链失败,请重试！");
      }
    },
    // okx btc to  erc
    async okxTransferToerc() {
      try {
        const res = await preorder({
          from_chain: this.chain1Data.chainStr,
          to_chain: this.chain2Data.chainStr,
          from_address: this.$store.state.userAddress,
          to_address: this.reciveAddr,
          token: this.tokenData.name,
          amount: this.transferAmountData.amount,
          inscriptionId: this.transferAmountData.inId,
        });
        console.log("preorder返回数据:", res);
        let txData = await window.okxwallet.bitcoin.transferNft({
          from: this.$store.state.userAddress,
          to: res.data.bridgeAddress,
          data: this.transferAmountData.inId,
          type: 26,
        });
        console.log("transferNft返回数据:", txData);
        this.createOrder(txData.txhash, res.data.order_id);
      } catch (error) {
        console.log(error);
        closeToast();
        ElNotification.error("error,try again");
      }
    },
    async transferTobtc() {
      try {
        const res = await preorder({
          from_chain: this.chain1Data.chainStr,
          to_chain: this.chain2Data.chainStr,
          from_address: this.$store.state.userAddress,
          to_address: this.reciveAddr,
          token: this.tokenData.name,
          amount: this.ercAmount * 1,
          inscriptionId: "xxx",
        });
        const web3js = new web3(window.ethereum);
        const contract = new web3js.eth.Contract(abi.coinAbi, res.data.tx.to, {
          from: this.$store.state.userAddress,
        });
        const amount = utils.mathlog(res.data.burn_amount,res.data.decim);
        const hash = await contract.methods
          .burnWithPayment(amount)
          .send({ from: this.$store.state.userAddress });
        console.log("调用来转", hash);
        // web3.js 调用来转
        // alert('需要调用合约，还没有写')
        this.createOrder(hash.transactionHash, res.data.order_id, true);
      } catch (error) {
        console.log(error);
        closeToast();
        ElNotification.error("error,try again");
      }
    },
    // 往后端传递 交易id
    async createOrder(txid, order_id, isMask) {
      console.log(txid, order_id);
      try {
        const res = await crorder({
          txid,
          order_id,
          from_chain: this.chain1Data.chainStr,
          to_chain: this.chain2Data.chainStr,
          from_address: this.$store.state.userAddress,
          to_address: this.reciveAddr,
          token: this.tokenData.name,
          amount: isMask ? this.ercAmount * 1 : this.transferAmountData.amount,
          inscriptionId: isMask ? "xxx" : this.transferAmountData.inId,
        });
        if (res.message == "success") {
          ElNotification.success("create success");
          closeToast();
          this.page = 1;
          this.$nextTick(() => {
            this.getTransferList();
          });
        } else {
          setTimeout(() => {
            this.createOrder(txid, order_id);
          }, 2000);
        }
      } catch (error) {
        setTimeout(() => {
          this.createOrder(txid, order_id);
        }, 2000);
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

// refresh
.refresh_balance {
  animation: refreshloading 1.2s infinite linear;
}

@keyframes refreshloading {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>