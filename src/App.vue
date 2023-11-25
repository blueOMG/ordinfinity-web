<template>
<div>
  <!-- Preloader Starts -->
  <div class="preloader">
    <div class="spinner"></div>
  </div>
  <!-- Preloader End -->

  <!-- Header Area Starts -->
  <header class="header-area single-page">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo-area">
              <router-link to="/"><img id="logo" src="static/assets/images/logo/logo.png" alt="logo"></router-link>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="custom-navbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="main-menu main-menu-light">
              <ul>
                <li class="menu-btn">
                  <a href="https://twitter.com/ordinfinity/" target="_blank" style="padding-left: 2px;"><img src="static/assets/images/index/04.png"/></a>
                  <a href="https://t.me/ordinfinity_community" target="_blank" style="padding-left: 2px;"><img src="static/assets/images/index/05.png"/></a>
                  <a href="javascript:void(0);" style="padding-left: 2px;"><img src="static/assets/images/index/06.png"/></a>
                  <a href="javascript:void(0);" style="padding-left: 2px;"></a>

                  <a class="ahr" href="https://app.ordinfinity.io/#/" target="_blank">
                    <button class="login-btn">LAUNCH APP</button>
                  </a>
                </li>
                <!-- <li><button class="login-btn">LAUNCH APP</button>
                  <ul class="sub-menu">
                    <li><router-link to="/">Swap</router-link></li>
                    <li><router-link to="/">Farm</router-link></li>
                    <li><router-link to="/">LP pools</router-link></li>
                    <li><router-link to="/">Lending</router-link></li>
                    <li><router-link to="/">Launchpad</router-link></li>
                  </ul>
                </li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <vue-particles
    color="#ffffff"
    :particleOpacity="0.2"
    :particlesNumber="60"
    shapeType="circle"
    :particleSize="6"
    linesColor="#ffffff"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.2"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push">
  </vue-particles>
  <!-- Header Area End -->
  <router-view></router-view>

  <!-- Modal -->
  <div class="modal fade" id="connModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Connect</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="connDiv" @click="connect" v-if="isMetaMaskInstall">
            <div><img src="static/assets/images/index/1.svg" style="width: 50px;"/></div>
            <div class="connDiv-name">MetaMask</div>
            <div class="connDiv-desc">Connect to your MetaMask Wallet</div>
          </div>
          <div class="connDiv" @click="connect2">
            <div><img src="static/assets/images/index/2.svg" style="width: 50px;"/></div>
            <div class="connDiv-name">WalletConnect</div>
            <div class="connDiv-desc">Scan with WalletConnect to connect</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
export default {
  name: 'app',
  data() {
    return {
      isLogin: false,
      isMetaMaskInstall: false,
    };
  },
  created: function() {
    this.init();
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


      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        this.isMetaMaskInstall = true;
      } else {
        console.log('MetaMask is not installed.');
        this.isMetaMaskInstall = false;
      }
    }
  },
}
</script>
<style>

#particles-js {
  width: 100%;
  height: calc(100% - 100px);
  position: absolute;
}

#logo{
  width: 110px;
  height: auto;
}
.header-area.single-page{
  background-color: #000000;
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
}

.header-top{
  padding-bottom: 0px;
}
.top-one{
  padding-top: 100px;
}

.main-menu ul li a img{
  width: 45px;
}

.main-menu ul li a{
  padding: 8px;
}

.login-btn {
  width: 150px;
  height: 45px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  font-size: large;
  background-color: #000000;
}

.login-btn:hover{
  border: 1px solid #e99d42;
  background-color: #e99d42;
  color: #000000;
}

.launch-btn{
  width: 160px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  background-color: #000000;
}

.launch-btn:hover{
  border: 1px solid #e99d42;
  background-color: #e99d42;
}



.connDiv{
  width: 100%;
  text-align: center;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
}

.connDiv:hover{
  background-color: #CCCCCC;
}

.connDiv-name{
  padding-top: 10px;
  font-size: 30px;
  color: #ff9f55;
}

.connDiv-desc{
  padding-top: 10px;
  font-size: 20px;
  color: black;
}

@media (min-width: 768px) and (max-width: 991.98px) {

  .login-btn {
    width: 180px;
    height: 50px;
  }
  #logo{
    width: 120px;
  }
  .main-menu ul li a img{
    width: 45px;
  }

}

@media (min-width: 576px) and (max-width: 767.98px) {

  .login-btn {
    width: 160px;
    height: 40px;
  }
  #logo{
    width: 110px;
  }

  .main-menu ul li a img{
    width: 40px;
  }

}

@media (max-width: 575.98px) {
  .login-btn {
    width: 140px;
    height: 30px;
  }
  #logo{
    width: 100px;
  }

  .main-menu ul li a img{
    width: 30px;
  }
}
.ahr{
  border: none;
}
ahr:link{
	color: #fff;
}
ahr:visited{
	color: #fff;
}
ahr:hover{
	color: #fff;
}
ahr:active{
	color: #fff;
}


</style>


