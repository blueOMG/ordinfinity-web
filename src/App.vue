<template>
  <div>
  <!-- header -->
  <div class="headerbox" :class="{'headerbg': showHeaderbg}">
    <img src="./assets/img/header/logo.png" alt="" class="h-logo"/>
    <div class="rightbox">
      <img src="./assets/img/header/discord.png" alt="" class="h-discord hover-scale"/>
      <img src="./assets/img/header/tg.png" alt="" class="h-tg hover-scale"/>
      <img src="./assets/img/header/x.png" alt="" class="h-x hover-scale"/>
      <div class="h-lunchapp hover-scale">LAUNCH APP</div>
    </div>
  </div>
  <!-- content -->
  <div>
    <div class="mintbox">
      <img src="./assets/img/home/bg1.png" alt="" style="width: 100%; " />
      <div class="mintcontentbox">
        <div class="minttext1">MAKE ORDINALS INFINITY</div>
        <div class="minttext2">THE FIRST</div>
        <div class="minttext2">BRC20 Multi-Chain Liquidity Protocol</div>
        <div class="mintbtn hover-scale">MINT</div>
      </div>
    </div>
    <div class="buildbox">
      <div class="buildtext1">Build BRC20 liquidity</div>
      <div class="buildtext2">The Ultimate Router for</div>
      <div class="buildtext2">Ordinals BRC20</div>
      <div class="chainbox">
        <div class="chainitem">
          <img src="./assets/img/home/eth.png" alt="" />
          <span>Ethereum</span>
        </div>
        <div class="chainitem">
          <img src="./assets/img/home/bnb.png" alt="" />
          <span>Binance</span>
        </div>
        <div class="chainitem">
          <img src="./assets/img/home/btc.png" alt="" />
          <span>Bitcoin</span>
        </div>
        <div class="chainitem">
          <img src="./assets/img/home/zks.png" alt="" />
          <span>zkSync</span>
        </div>
        <div class="chainitem">
          <img src="./assets/img/home/arb.png" alt="" />
          <span>Arbitrum</span>
        </div>
      </div>
    </div>
    <div class="earnbox">
      <div class="earnboxleft">
        <span class="earntext1">Earn Interest </span>
        <span class="earntext2">Borrow Assets Cross-Chain</span>
        <span class="earntext2">Seamlessly</span>
      </div>
      <img src="./assets/img/home/img1.png" alt="" class="earnboximg" />
    </div>
    <div class="worksbox">
      <div class="workstitle">How It Works</div>
      <div class="workscontent">
        <div class="worksitem">
          <img src="./assets/img/home/works1.png" alt="" style="width: 120px; margin-bottom: 30px;"/>
          <div class="itemtext1">Stake $ONFI</div>
          <div class="itemtext2">Receive revenue from interest and flash loan fees</div>
        </div>
        <div class="worksitem">
          <img src="./assets/img/home/works2.png" alt="" style="height: 120px; margin-bottom: 22px;"/>
          <div class="itemtext1">Access boosted emissions</div>
          <div class="itemtext2">Locked liquidity activates lending and borrowing RDNT emissions</div>
        </div>
        <div class="worksitem">
          <img src="./assets/img/home/works3.png" alt="" style="width: 120px; margin-bottom: 40px;"/>
          <div class="itemtext1">Accumulate tokens</div>
          <div class="itemtext2">Paid in blue chip assets such as BTC, ETH, ORDI, SATS, etc.</div>
        </div>
      </div>
      <div class="worksbtn">
        <div class="workbtn1 hover-scale">ONFI STAKERS</div>
        <div class="workbtn2 hover-scale">Lenders & Borrowers</div>
      </div>
    </div>
    <div class="ordinbox">
      <div class="ordintitle">WHY ORDINFINITY</div>
      <div class="ordincontent">
        <div class="ordinitem hover-scale">
          <img src="./assets/img/home/ordin1.png" alt="" style="width: 120px;margin-bottom: 24px;margin-top: 69px;" />
          <span>Easy and fast BRC20 transactions</span>
        </div>
        <div class="ordinitem hover-scale">
          <img src="./assets/img/home/ordin2.png" alt="" style="width: 120px;margin-bottom: 20px;margin-top: 65px;" />
          <span>Bringing utility to BRC20, more token rewards system.</span>
        </div>
        <div class="ordinitem hover-scale">
          <img src="./assets/img/home/ordin3.png" alt="" style="height: 95px;margin-bottom: 29px;margin-top: 75px;" />
          <span>Enables Defi users to seamlessly connect to Ordinals, bringing incremental growth to ordinals</span>
        </div>
        <div class="ordinitem hover-scale">
          <img src="./assets/img/home/ordin4.png" alt="" style="width: 120px;margin-bottom: 24px;margin-top: 69px;" />
          <span>More decentralized than Ordinals native</span>
        </div>
      </div>
    </div>
    <div class="footerbox">
      <img src="./assets/img/header/logo.png" style="height: 32px;" alt="" />
      <div class="f-right">
        <div class="f-right-info">
          <span class="hover-scale">About</span>
          <span class="hover-scale">Docs</span>
          <span class="hover-scale">FAQ</span>
        </div>
        <div class="f-right-info">
          <span class="hover-scale">Developers</span>
          <span class="hover-scale">Github</span>
        </div>
        <div class="f-right-info">
          <span class="hover-scale">Product</span>
          <span class="hover-scale">Bridge</span>
          <span class="hover-scale">Swap</span>
          <span class="hover-scale">Lend</span>
          <span class="hover-scale">Governance</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      showHeaderbg: false
    };
  },
  created() {
    const self= this;
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        self.showHeaderbg = true; // 改变背景颜色
      } else {
        self.showHeaderbg = false;  // 恢复初始背景颜色
      }
    });
  },
  methods: {
    launch(){
      //this.isLogin = true;
    },
    connect(){
      //console.log(11)
    },
    connect2(){
      //console.log(22)
    },
    init(){

      // const firebaseConfig = {
      //   apiKey: "AIzaSyDvR2BOv_7fA5C04o9FuzggleQZIimPYqk",
      //   authDomain: "ordinfinity.firebaseapp.com",
      //   projectId: "ordinfinity",
      //   storageBucket: "ordinfinity.appspot.com",
      //   messagingSenderId: "555146281830",
      //   appId: "1:555146281830:web:72204b35c530427e873ea7",
      //   measurementId: "G-FLKLX9HEST"
      // };

      // // Initialize Firebase
      // const app = initializeApp(firebaseConfig);
      // getAnalytics(app);


      // if (typeof window.ethereum !== 'undefined') {
      //   console.log('MetaMask is installed!');
      //   this.isMetaMaskInstall = true;
      // } else {
      //   console.log('MetaMask is not installed.');
      //   this.isMetaMaskInstall = false;
      // }
    }
  },
}
</script>
<style>
.headerbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 32px 0;
  padding-left: 38px;
  padding-right: 28px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 50;
}
.headerbg {
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(10px);
}
.h-logo {
  height: 32px;
  width: auto;
}
.rightbox {
  display: flex;
  align-items: center;
}
.h-discord {
  width: 50px;
  height: auto;
  margin-right: 50px;
  cursor: pointer;
}
.h-tg {
  width: 32px;
  margin-right: 50px;
  cursor: pointer;
}
.h-x {
  width: 28px;
  margin-right: 50px;
  cursor: pointer;
}
.h-lunchapp {
  width: 200px;
  height: 50px;
  background: #F7931A;
  box-shadow: inset 0px -3px 0px 0px rgba(0,0,0,0.6);
  border-radius: 12px 12px 12px 12px;
  line-height: 50px;
  text-align: center;
  font-size: 22px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 400;
  color: #FFFFFF;
  cursor: pointer;
}
.mintbox {
  position: relative;
}
.mintcontentbox {
  background: rgba(0,0,0,0.5);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.minttext1 {
  margin-top: 100px;
  font-size: 72px;
  font-family: Montserrat, Montserrat;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 88px;
  letter-spacing: 7px;
  margin-bottom: 23px;
}
.minttext2 {
  font-size: 50px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 300;
  color: #FFFFFF;
  line-height: 72px;
  text-align: center;
}
.mintbtn {
  width: 236px;
  height: 60px;
  background: #F7931A;
  box-shadow: inset 0px -3px 0px 0px rgba(0,0,0,0.6);
  border-radius: 316px 316px 316px 316px;
  line-height: 60px;
  text-align: center;
  font-size: 22px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 700;
  color: #FFFFFF;
  margin-top: 55px;
}
.buildbox {
  width: 100%;
  height: 766px;
  background: url('./assets/img/home/bg2.png') no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.buildtext1 {
  font-size: 86px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 700;
  line-height: 125px;
  background: linear-gradient(90deg, #FF9D01 0%, #FFDBA2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 7px;
}
.buildtext2 {
  font-size: 64px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 400;
  color: rgba(0,0,0,0);
  line-height: 93px;
  -webkit-text-stroke: 1px #FFFFFF;
  text-stroke: 1px #FFFFFF;
}
.chainbox {
  margin-top: 55px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.chainitem {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 60px;
  background: rgba(247,147,26,0.1);
  border-radius: 68px 68px 68px 68px;
  opacity: 1;
  border: 1px solid #F7931A;
  margin-right: 20px;
  cursor: pointer;
}
.chainitem:last-child {
  margin-right: 0;
}
.chainitem img {
  width: 40px;
  margin-right: 10px;
}
.chainitem span {
  font-size: 20px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 400;
  color: #FFFFFF;
}
.earnbox {
  width: 100%;
  height: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.earnboxleft {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.earnboximg {
  width: 664px;
  height: auto;
  margin-left: 24px;
}
.earntext1 {
  font-size: 100px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 145px;
}
.earntext2 {
  font-size: 50px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 72px;
}
.worksbox {
  width: 100%;
  height: 810px;
  background: url('./assets/img/home/bg3.png') no-repeat;
  background-color: #171717;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.workstitle {
  font-size: 60px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 87px;
  margin-bottom: 110px;
}
.workscontent {
  display: flex;
  justify-content: center;
}
.worksitem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.worksitem:nth-child(2) {
  margin: 0 150px;
}
.itemtext1 {
  font-size: 30px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 500;
  color: #FF8C00;
  line-height: 43px;
  margin-bottom: 20px;
}
.itemtext2 {
  width: 322px;
  font-size: 18px;
  font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
  font-weight: 250;
  color: #FFFFFF;
  line-height: 28px;
  text-align: center;
}
.worksbtn {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
.workbtn1 {
  width: 260px;
  height: 60px;
  background: #F7931A;
  box-shadow: inset 0px -3px 0px 0px rgba(0,0,0,0.6);
  border-radius: 316px 316px 316px 316px;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 700;
  color: #FFFFFF;
  cursor: pointer;
}
.workbtn2 {
  margin-left: 40px;
  width: 260px;
  height: 60px;
  background: rgba(247,147,26,0.1);
  border-radius: 68px 68px 68px 68px;
  border: 1px solid #F7931A;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 700;
  color: #FFFFFF;
  cursor: pointer;
}
.ordinbox {
  width: 100%;
  height: 750px;
  background: url('./assets/img/home/bg4.png') no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ordintitle {
  font-size: 60px;
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 87px;
  margin-bottom: 100px;
}
.ordincontent {
  display: flex;
  justify-content: center;
  align-items: stretch;
}
.ordinitem {
  width: 331px;
  height: 400px;
  background: #171717;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  margin-right: 30px;
  cursor: pointer;
}
.ordinitem:last-child {
  margin-right: 0;
}
.ordinitem span {
  width: 294px;
  font-size: 20px;
  font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 28px;
  text-align: center;
}
.footerbox {
  display: flex;
  justify-content: space-between;
  padding: 80px 252px;
  background: url('./assets/img/home/bg5.png') no-repeat;
  background-size: cover;
}
.f-right {
  display: flex;
}
.f-right-info {
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-right: 65px;
}
.f-right-info:last-child {
  margin-right: 0;
}
.f-right-info span {
  font-size: 16px;
  font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
  font-weight: 250;
  color: #E0E0E0;
  line-height: 38px;
  cursor: pointer;
  text-align: left;
}
.f-right-info span:first-child {
  font-size: 20px;
  font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 30px;
  margin-bottom: 20px;
}
.hover-scale:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease
}
</style>


