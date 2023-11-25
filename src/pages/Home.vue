<template>
  <div>
      <!-- Home Area Start-->
      <section class="sample-text-area home-flex-col area-top">
        <div class="container">
          <div  class="home-img-padding">
            <img src="static/assets/images/home/make.png" class="home-img"/>
          </div>
          <div style="text-align: center; padding-top:70px;">
            <button class="button-docs" @click="jumpDocs">docs</button>
            <button class="button-docs" @click="jumpMint">mint</button>
          </div>
        </div>
        <div class="home-bottom">
          <!-- style="background-image: url('static/assets/images/home/home-bg.png');" -->
        </div>
      </section>
      <!-- home Area End -->
      <!-- Bridge Area Start-->
      <section class="sample-text-area">
        <div class="container">
          <div class="item-title" style="width: 40%;">
            <div style="display:flex;justify-content: space-around;">
              <span class="mode-title-item">
                <div class="mode-title-1">b</div>
                <div class="mode-title-2">b</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">r</div>
                <div class="mode-title-2">r</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">i</div>
                <div class="mode-title-2">i</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">d</div>
                <div class="mode-title-2">d</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">g</div>
                <div class="mode-title-2">g</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">e</div>
                <div class="mode-title-2">e</div>
              </span>
            </div>
          </div>
          <div class="item-other">
            <img src="static/assets/images/bridage/03.png"  class="bridge-img">
          </div>
          <div class="item-other">
            <div style="color: #f4f4f4;"  class="item-other-text-a">
              <p>
                <span class="item-other-text-b">F</span>ast, seamless bridging to smart chain
              </p>
              <p>
                Making BRC20 intelligent Controlled by lnfinity protocol
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Bridge Area End-->
      <!-- Swap Area Start-->
      <section class="sample-text-area sample-text-swap">
        <div class="container">
          <div class="item-title" style="width: 30%;">
            <div style="display:flex;justify-content: space-around;">
              <span class="mode-title-item">
                <div class="mode-title-1">s</div>
                <div class="mode-title-2">s</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">w</div>
                <div class="mode-title-2">w</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">a</div>
                <div class="mode-title-2">a</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">p</div>
                <div class="mode-title-2">p</div>
              </span>
            </div>
          </div>
          <div class="item-other">
            <div class="row" style="display: flex; align-items: center;">
              <div class="col-md-6">
                <div id="swapChange" class="swapChange">
                  <div class="d-flex justify-content-between">
                    <div class="swap-from-1">
                      <button onclick="javascript:void(0);">Swap</button>
                      <button onclick="javascript:void(0);">Buy</button>
                    </div>
                    <div class="swap-from-1">
                      <a href="javascript:void(0);">
                        <img style="width: 35px;" src="static/assets/images/swap/03_03.png">
                      </a>
                    </div>
                  </div>
                  <div class="swap-from-2">
                    <div class="d-flex justify-content-between">
                      <span style="text-align: left;">
                        0
                      </span>
                      <span style="position: relative;">
                        <img src="../../static/assets/images/swap/03_04.png" alt="" srcset="" class="sel-icon">
                        <select class="swap-select" style="padding-left: 10px;">
                          <option value="1">ORDI</option>
                          <!-- <option value="2">USDT</option> -->
                        </select>
                      </span>
                    </div>
                  </div>
                  <div class="swap-from-2">
                    <div class="d-flex justify-content-between">
                      <span style="text-align: left;">
                        0
                      </span>
                      <span>
                        <select class="swap-select">
                          <option value="1">Select token</option>
                          <!-- <option value="2">ORDI</option> -->
                        </select>
                      </span>
                    </div>
                  </div>
                  <div class="swap-from-3">
                    <button onclick="javascript:void(0);">Swap</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mt-40" style="margin-top:auto;">
                <div style="color: #f4f4f4;text-align: left;padding:20px;" class="item-other-text-a">
                  <p>
                    <span  class="item-other-text-b">U</span>sing the AMM model users can easily and
                    quickly complete Brc20 transactions
                  </p>
                  <p  class="swap-text-margin">
                    <span class="item-other-text-b">U</span>sers can provide liquidity to BRC20 to
                    earn tokens
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Swap Area End-->

      <!-- Lend Area Start-->
      <section class="sample-text-area">
        <div class="container">
          <div class="item-title" style="width: 30%;">
            <div style="display:flex;justify-content: space-around;">
              <span class="mode-title-item">
                <div class="mode-title-1">l</div>
                <div class="mode-title-2">l</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">e</div>
                <div class="mode-title-2">e</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">n</div>
                <div class="mode-title-2">n</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">d</div>
                <div class="mode-title-2">d</div>
              </span>
            </div>
          </div>
          <div class="item-other">
            <div class="row">
              <div class="col-md-7" style="margin-top:auto;">
                <div style="color:#555555; " class="lend-text-title">
                  <p>
                    INFINITY
                  </p>
                </div>
                <div style="color: #f4f4f4;" class="item-other-text-c">
                  <p>
                    <span class="item-other-text-d">P</span>eer-to-peer lending controlled by lnfinity
                  </p>
                  <p>
                    Dao,unlocking the full potential of BRC20
                  </p>
                </div>
              </div>
              <div class="col-md-5">
                <img src="static/assets/images/lend/02_02.png"  class="lend-img" />
                <div style="color: #e99d42;text-align: center;" class="lend-img-text">
                  <p>
                    Lend collateral
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Lend Area END-->

      <!-- Lend2 Area Start-->
      <section style="margin-top: 50px;">
        <div class="container">
          <!-- <div class="item-title" style="width: 40%;">
            <div style="display:flex;justify-content: space-around;" class="lend-no-title">
            </div>
          </div> -->
          <div class="item-other">
            <div class="row">
              <div class="col-md-5">
                <img src="static/assets/images/lend/03_01.png" class="lend-img" />
                <div style="color: #e99d42;text-align: center;"  class="lend-img-text">
                  <p>
                    Borrow & bridge cross-chain
                  </p>
                </div>
              </div>
              <div class="col-md-7" style="margin-top:auto;">
                <div style="color:#555555; " class="lend-text-title">
                  <p>
                    INFINITY
                  </p>
                </div>
                <div style="color: #f4f4f4;"  class="item-other-text-c">
                  <p>
                    <span   class="item-other-text-d">U</span>se of funds in any chain without selling any assets
                  </p>
                  <p>
                    <span   class="item-other-text-d">U</span>sers'assets can travel freely through
                  </p>
                  <p>
                    <span   class="item-other-text-d">O</span>rdinals and multiple public chains
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Lend2 Area End-->

      <!-- Governance Area Start-->
      <section class="sample-text-area">
        <div class="container">
          <div class="item-title" style="width: 60%;">
            <div style="display:flex;justify-content: space-around;">
              <span class="mode-title-item">
                <div class="mode-title-1">g</div>
                <div class="mode-title-2">g</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">o</div>
                <div class="mode-title-2">o</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">v</div>
                <div class="mode-title-2">v</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">e</div>
                <div class="mode-title-2">e</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">r</div>
                <div class="mode-title-2">r</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">a</div>
                <div class="mode-title-2">a</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">n</div>
                <div class="mode-title-2">n</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">c</div>
                <div class="mode-title-2">c</div>
              </span>
              <span class="mode-title-item">
                <div class="mode-title-1">e</div>
                <div class="mode-title-2">e</div>
              </span>
            </div>
          </div>
          <div class="item-other">
            <div style="color: #ffffff;" class="governance-brc">
              <p style="text-align: center;">
                BRC20S
              </p>
            </div>
          </div>
          <div class="item-other">
            <img src="static/assets/images/governance/02.png"  class="governance-img"/>
          </div>
          <div class="item-other">
            <div style="color: #f4f4f4;" class="item-other-text-a">
              <p>
                <span  class="item-other-text-b">I</span>nfinity Dao will use BRC20s as a governance token
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Governance Area End-->
      <!-- FAQ Area Start-->
      <section class="sample-text-area">
        <div class="container">
          <div class="item-title" style="width: 100%;">

            <div class="row">
              <div class="col-md-3">
                <div style="display:flex;justify-content: space-around;">
                  <span class="mode-title-item">
                    <div class="mode-title-1">w</div>
                    <div class="mode-title-2">w</div>
                  </span>
                  <span class="mode-title-item">
                    <div class="mode-title-1">h</div>
                    <div class="mode-title-2">h</div>
                  </span>
                  <span class="mode-title-item">
                    <div class="mode-title-1">y</div>
                    <div class="mode-title-2">y</div>
                  </span>
                </div>
              </div>
              <div class="col-md-9">
                <div style="display:flex;justify-content: space-around;">
                  <span class="mode-title-item">
                    <div class="mode-title-1">o</div>
                    <div class="mode-title-2">o</div>
                  </span>
                  <span class="mode-title-item">
                    <div class="mode-title-1">r</div>
                    <div class="mode-title-2">r</div>
                  </span>
                  <span class="mode-title-item">
                    <div class="mode-title-1">d</div>
                    <div class="mode-title-2">d</div>
                  </span>
                  <span class="mode-title-item">
                    <div class="mode-title-1">i</div>
                    <div class="mode-title-2">i</div>
                  </span>
                  <span class="mode-title-item">
                    <div class="mode-title-1">n</div>
                    <div class="mode-title-2">n</div>
                  </span>
                  <span class="mode-title-item">
                    <div class="mode-title-1">f</div>
                    <div class="mode-title-2">f</div>
                  </span>
                  <span class="mode-title-item">
                    <div class="mode-title-1">i</div>
                    <div class="mode-title-2">i</div>
                  </span>
                  <span class="mode-title-item">
                    <div class="mode-title-1">n</div>
                    <div class="mode-title-2">n</div>
                  </span>
                  <span class="mode-title-item">
                    <div class="mode-title-1">t</div>
                    <div class="mode-title-2">t</div>
                  </span>
                  <span class="mode-title-item">
                    <div class="mode-title-1">y</div>
                    <div class="mode-title-2">y</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="item-other"></div>
          <div class="item-other">
            <div class="row">
              <div class="col-md-3">
                <div class="faq-item faq-item-1">
                  <div>
                    <img src="static/assets/images/faq/f1.png" class="faq-img"/>
                  </div>
                  <p>
                    <span class="faq-message-f">E</span>asy and fast BRC20 transactions
                  </p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="faq-item faq-item-2">
                  <div>
                    <img src="static/assets/images/faq/f2.png" class="faq-img"/>
                  </div>
                  <p>
                    <span class="faq-message-f">B</span>ringing utility to BRC20, more token rewards system.
                  </p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="faq-item faq-item-3" >
                  <div>
                    <img src="static/assets/images/faq/f3.png" class="faq-img"/>
                  </div>
                  <p>
                    <span style="font-size: 30px;" class="faq-message-f">E</span>nables Defi users to seamlessly connect to Ordinals, bringing incremental growth to ordinals
                  </p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="faq-item faq-item-4">
                  <div>
                    <img src="static/assets/images/faq/f4.png" class="faq-img"/>
                  </div>
                  <p>
                    <span  class="faq-message-f">M</span>ore decentralized than Ordinals native
                  </p>
                </div>
              </div>
            </div>
            <div style="text-align: right;">
              <img src="static/assets/images/faq/yuan.png"  class="faq-bottom-img"/>
            </div>
          </div>
        </div>
      </section>
      <!-- FAQ Area End-->

      <!-- Footer Area Starts -->
      <div id="iviewUi"   class="iview-ui">
      </div>
      <footer class="footer-area section-padding footer-iview-margin" >
        <div class="footer-widget">
          <div>
            <div class="row" style="margin-left: 0px;margin-right: 0px;">
              <div class="col-md-5">
                <div class="single-table text-center mb-4 mb-md-0">
                  <div class="footer-logo">
                    <img src="static/assets/images/index/01.png" class="footer-logo-img"/>
                    <div style="color: #f4f4f4;text-transform: uppercase;" class="footer-logo-text">
                      <p>
                        © 2023 Ordinfinity. All rights reserved
                      </p>
                    </div>
                    <!-- <img src="static/assets/images/index/02.png"></img> -->
                  </div>
                  <div class="footer-icons">
                    <a href="https://twitter.com/ordinfinity/" target="_blank" class="login"><img src="static/assets/images/index/14.png"></a>
                    <a href="https://t.me/ordinfinity_community" target="_blank" class="login"><img src="static/assets/images/index/13.png"></a>
                    <a href="javascript:void(0);" class="login"><img src="static/assets/images/index/15.png"></a>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="single-table text-center mb-4 mb-md-0">
                  <div class="footer-item-title">
                    About
                  </div>
                  <div class="footer-item-other">
                    <a href="https://ordinfinity.gitbook.io/docs/" target="_blank">Docs</a>
                  </div>
                  <div class="footer-item-other">
                    <a href="javascript:void(0);" @click="gotoFAQ">FAQ</a>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="single-table text-center mb-4 mb-md-0">
                  <div class="footer-item-title">
                    Developers
                  </div>
                  <div class="footer-item-other">
                    <a href="javascript:void(0);">Github</a>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="single-table text-center mb-4 mb-md-0">
                  <div class="footer-item-title">
                    Product
                  </div>
                  <div class="footer-item-other">
                    <a href="https://app.ordinfinity.io/#/bridge"  target="_blank">Bridge</a>
                  </div>
                  <div class="footer-item-other">
                    <a href="https://app.ordinfinity.io/#/swap"  target="_blank">Swap</a>
                  </div>
                  <div class="footer-item-other">
                    <a href="https://app.ordinfinity.io/#/lending"  target="_blank">Lend</a>
                  </div>
                  <div class="footer-item-other">
                    <a href="javascript:void(0);"  >Governance</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- Footer Area End -->

</template>

<script>
  import * as THREE from 'three'
  export default {
    data() {
            return {
                count: 0,
                // 用来跟踪鼠标水平位置
                mouseX: 0,

                windowHalfX: null,
                // 相机
                camera: null,
                // 场景
                scene: null,
                // 批量管理粒子
                particles: null,
                // 渲染器
                renderer: null,
                //参数
                amountX:90,
                amountY:50,
                color:'#e6b880',
                top:200,
              }
            },
    mounted() {
      // var info = navigator.userAgent;
      // var isPhone = /mobile/i.test(info);
      // if(!isPhone){
      //   this.init()
      //   this.animate()
      // }

      let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
        if(flag == null){
          this.init()
          this.animate()
        }


    },
    methods: {
      gotoBridge(){
        //this.$refs.fullpage.api.moveTo(2);
      },
      gotoSwap(){
       // this.$refs.fullpage.api.moveTo(3);
      },
      gotoLend(){
        //this.$refs.fullpage.api.moveTo(4);
      },
      gotoGovernance(){
        //this.$refs.fullpage.api.moveTo(6);
      },
      gotoFAQ(){
        //this.$refs.fullpage.api.moveTo(7);
      },
      jumpDocs(){
        //window.location.href="https://ordinfinity.gitbook.io/docs/";
        window.open('https://ordinfinity.gitbook.io/docs/','_blank');
      },
      jumpMint(){
        window.open('https://blueomg.github.io/ordinfinity-mint/','_blank');
      },
      init: function() {
        const SEPARATION = 100
        const SCREEN_WIDTH = window.innerWidth
        const SCREEN_HEIGHT = window.innerHeight
        const container = document.createElement('div')
        this.windowHalfX = window.innerWidth / 2
        container.style.position = 'relative'
        container.style.top = `${this.top}px`
        container.style.height = `${(SCREEN_HEIGHT - this.top)}px`
        //container.style.height = `100 px`
        document.getElementById('iviewUi').appendChild(container)

        this.camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000)
        this.camera.position.z = 1000

        this.scene = new THREE.Scene()

        const numParticles = this.amountX * this.amountY
        const positions = new Float32Array(numParticles * 3)
        const scales = new Float32Array(numParticles)
        // 初始化粒子位置和大小
        let i = 0
        let j = 0
        for (let ix = 0; ix < this.amountX; ix++) {
          for (let iy = 0; iy < this.amountY; iy++) {
            positions[i] = ix * SEPARATION - ((this.amountX * SEPARATION) / 2)
            positions[i + 1] = 0
            positions[i + 2] = iy * SEPARATION - ((this.amountY * SEPARATION) / 2)
            scales[j] = 1
            i += 3
            j++
          }
        }

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))

        // 初始化粒子材质
        const material = new THREE.ShaderMaterial({
          uniforms: {
            color: { value: new THREE.Color(this.color) }
          },
          vertexShader: `
            attribute float scale;
            void main() {
              vec4 mvPosition = modelViewMatrix * vec4( position, 2.0 );
              gl_PointSize = scale * ( 300.0 / - mvPosition.z );
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            uniform vec3 color;
            void main() {
              if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
              gl_FragColor = vec4( color, 1.0 );
            }
          `
        })

        this.particles = new THREE.Points(geometry, material)
        this.scene.add(this.particles)

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setSize(container.clientWidth, container.clientHeight)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setClearAlpha(0)
        container.appendChild(this.renderer.domElement)

        window.addEventListener('resize', this.onWindowResize, { passive: false })
        document.addEventListener('mousemove', this.onDocumentMouseMove, { passive: false })
        document.addEventListener('touchstart', this.onDocumentTouchStart, { passive: false })
        document.addEventListener('touchmove', this.onDocumentTouchMove, { passive: false })
      },
      render: function() {
        this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05
        this.camera.position.y = 400
        this.camera.lookAt(this.scene.position)
        const positions = this.particles.geometry.attributes.position.array
        const scales = this.particles.geometry.attributes.scale.array
        // 计算粒子位置及大小
        let i = 0
        let j = 0
        for (let ix = 0; ix < this.amountX; ix++) {
          for (let iy = 0; iy < this.amountY; iy++) {
            positions[i + 1] = (Math.sin((ix + this.count) * 0.3) * 100) + (Math.sin((iy + this.count) * 0.5) * 100)
            scales[j] = (Math.sin((ix + this.count) * 0.3) + 1) * 8 + (Math.sin((iy + this.count) * 0.5) + 1) * 8
            i += 3
            j++
          }
        }
        // 重新渲染粒子
        this.particles.geometry.attributes.position.needsUpdate = true
        this.particles.geometry.attributes.scale.needsUpdate = true
        this.renderer.render(this.scene, this.camera)
        this.count += 0.1
      },
      animate: function() {
        requestAnimationFrame(this.animate)
        this.render()
      },
      onDocumentMouseMove: function(event) {
        this.mouseX = event.clientX - this.windowHalfX
      },
      onDocumentTouchStart: function(event) {
        if (event.touches.length === 1) {
          this.mouseX = event.touches[0].pageX - this.windowHalfX
        }
      },
      onDocumentTouchMove: function(event) {
        if (event.touches.length === 1) {
          event.preventDefault()
          this.mouseX = event.touches[0].pageX - this.windowHalfX
        }
      },
      onWindowResize: function() {
        this.windowHalfX = window.innerWidth / 2
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
      }
    },
  }
</script>
<style scoped>

.iview-ui{
  margin-top: -400px;
}
.footer-iview-margin{
  margin-top: -100px;
}

.sel-icon{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  z-index: 998;
  width: 16px;
  height: 16px;
  margin-top: 2px;
}
.home-img-padding{
  padding-top: 180px;
}
.home-flex-col{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mode-title-item {
  padding: 0px;
}

.mode-title-1 {
  font-size: 80px;
  line-height: 0.6;
  color: #e99d42;
  font-family: Corbel;
  text-transform: uppercase;

  /*发光样式*/
  /*
  -webkit-animation: Glow 0.5s ease infinite alternate;
  animation: Glow 0.5s ease infinite alternate;
  */
}

.mode-title-2 {
  font-size: 20px;
  color: #222222;
  font-family: Corbel;
  text-transform: lowercase;
}

.sample-text-area{
  padding-top: 180px;
}
.sample-text-area p {
  line-height: 35px;
}

.home-img{
  width: 760px;
}

.home-text {
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.home-text-right {
  width: 50%;
  padding-left: 10px;
}
.home-text-right span{
  font-size: 16px;
}

.home-text-left {
  font-size: 40px;
}

.home-docs {
  width: 100%;
  text-align: center;
  padding-top: 50px;
}

.home-docs button {
  width: 300px;
  height: 60px;
  border: 2px solid #3b0e7b;
  border-radius: 60px;
  text-transform: uppercase;
  color: white;
  background-color: black;
}

.home-docs button:hover {
  border: 2px solid #3b0e7b;
  background-color: #3b0e7b;
}

.home-bottom {
  width: 100%;
  height: 100px;
  /*
  background-image: url('../../static/assets/images/home/home-bg.png');
  */
  text-align: center;
}

.item-title {
  height: auto;
  text-align: center;
  margin: 0 auto;
}

.item-other {
  width: 100%;
  height: auto;
  text-align: center;
  padding-top: 60px;
}

.item-other-text-a{
  color: #f4f4f4;
  font-size:32px;
  font-family: Corbel;
}

.item-other-text-b{
  font-size: 50px;
  font-family: Corbel;
}

.item-other-text-c{
  color: #f4f4f4;
  font-size:30px;
  font-family: Corbel;
  text-align: left;
}

.item-other-text-d{
  font-size: 50px;
  font-family: Corbel;
}

.bridge-img{
 height: 320px;
}

.lend-img{
  height: 340px;
}


.lend-no-title{
  height: 100px;
}

.lend-img-text{
  color: #e99d42;
  font-size:30px;
  font-family: Corbel;
  text-align: center;
}

.lend-text-title{
  color:#555555;
  letter-spacing:30px;
  font-size:20px;
  text-align: left;
}

.governance-img{
  height: 350px;
}

.governance-brc{
  font-size: 72px;
  font-family: 微软雅黑;
  font-weight: bold;
  letter-spacing: 5px;

}

.faq-img{
  height: 25px;
}

.swapChange {
  max-width: 460px;
  border: 2px solid #ff9f55;
  border-radius: 20px;
}

.swap-from-1 {
  padding-left: 10px;
  padding-top: 30px;
  padding-right: 10px;
}

.swap-from-1 a {
  color: white;
  border: black;
}

.swap-from-1 button {
  background-color: black;
  color: white;
  font-size: 30px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
}

.swap-from-1 button:hover {
  background-color: #ff9f55;
  color: white;
  border: 1px solid #ff9f55;
}

.swap-from-2 {
  background-color: #201f24;
  height: 100px;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 15px;
}

.swap-from-2 span {
  font-size: 40px;
  color: white;
  width: 100%;
  vertical-align: middle;
}

.swap-from-3 {
  background-color: #201f24;
  height: 80px;
  border-radius: 10px;
  margin: 30px 15px;
  text-align: center;
}

.swap-from-3 button {
  width: 100%;
  height: 100%;
  color: white;
  background-color: #201f24;
  border-radius: 10px;
  border: 0px;
  font-size: 30px;
}

.swap-from-3 button:hover {
  background-color: #ff9f55;
}

.swap-text-margin{
  margin-top: 110px;
}

.faq-item {
  border: 1px solid #8d8d8d;
  border-radius: 20px;
  color: #f4f4f4;
  font-size: 20px;
  font-family: Corbel;
  padding: 10px;
  /*height: 325px;*/
  height: 100%;
  text-align: left;
  max-width: 220px;
  min-height: 280px;
}

.faq-item div {
  padding: 10px;
}
.faq-item p{
  padding-top: 8px;
}

.faq-bottom-img{
  padding-top:140px;
  width:100px;
}

.faq-message-f{
  font-size: 30px;
}


/*  边框动画  */
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.faq-item {
  position: relative;
  z-index: 0;
  overflow: hidden;
  padding: 10px;
}

.faq-item:before {
  content: '';
  position: absolute;
  z-index: -2;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background-color: #1a232a;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-image: conic-gradient(transparent, rgba(233, 157, 66, 1), transparent 30%);
}
.faq-item-1:before{
  animation: rotate 1.8s linear infinite;
}

.faq-item-2:before{
  animation: rotate 2.2s linear infinite;
}

.faq-item-3:before{
  animation: rotate 3.2s linear infinite;
}

.faq-item-4:before{
  animation: rotate 1.5s linear infinite;
}


.faq-item:after {
  content: '';
  position: absolute;
  z-index: -1;
  left: 3px;
  top: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  background: #000;
  border-radius: 15px;
}

/*标题发光样式*/
@-webkit-keyframes Glow {
  from {
    text-shadow: 0 0 10px #fff,
      0 0 20px #fff,
      0 0 30px #fff,
      0 0 40px #e99d42,
      0 0 70px #e99d42,
      0 0 80px #e99d42,
      0 0 100px #e99d42,
      0 0 150px #e99d42;
  }

  to {
    text-shadow: 0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #fff,
      0 0 20px #e99d42,
      0 0 35px #e99d42,
      0 0 40px #e99d42,
      0 0 50px #e99d42,
      0 0 75px #e99d42;
  }
}

@keyframes Glow {
  from {
    text-shadow: 0 0 10px #fff,
      0 0 20px #fff,
      0 0 30px #fff,
      0 0 40px #e99d42,
      0 0 70px #e99d42,
      0 0 80px #e99d42,
      0 0 100px #e99d42,
      0 0 150px #e99d42;
  }

  to {
    text-shadow: 0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #fff,
      0 0 20px #e99d42,
      0 0 35px #e99d42,
      0 0 40px #e99d42,
      0 0 50px #e99d42,
      0 0 75px #e99d42;
  }
}


/*按钮样式*/
.button-docs {
  display: inline-block;
  width: 355px;
  height: 65px;
  margin: 30px 20px;
  background-color: #000000;
  color: #fff;
  border-radius: 60px;
  text-transform: uppercase;
  border: 2px solid #3b0e7b;
  font-size: 24px;
  cursor: pointer;
  position: relative;
  /*
  box-shadow: 0 2px 25px rgba(233, 30, 99, 0.5);
  */
  outline: 0;
  transition: transform ease-in 0.1s, background-color ease-in 0.1s,
    box-shadow ease-in 0.25s;
  transition: -webkit-transform ease-in 0.1s, background-color ease-in 0.1s,
    box-shadow ease-in 0.25s;
  transition: -o-transform ease-in 0.1s, background-color ease-in 0.1s,
    box-shadow ease-in 0.25s;
  transition: -moz-transform ease-in 0.1s, background-color ease-in 0.1s,
    box-shadow ease-in 0.25s;
}

.button-docs::before {
  position: absolute;
  content: "";
  left: -2em;
  right: -2em;
  top: -2em;
  bottom: -2em;
  pointer-events: none;
  transition: ease-in-out 0.5s;
  background-repeat: no-repeat;
  /* 按钮泡沫效果 */
  background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%, 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
    20% 20%;
  background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
    65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
    64% 70%, 80% 71%;
  animation: bubbles ease-in-out 0.75s forwards;
  -webkit-animation: bubbles ease-in-out 0.75s forwards;
  -o-animation: bubbles ease-in-out 0.75s forwards;
  -moz-animation: bubbles ease-in-out 0.75s forwards;
}

.button-docs:active {
  transform: scale(0.95);
  background-color: #f3037c;
  box-shadow: 0 2px 25px rgba(233, 30, 99, 0.5);
}

.button-docs:active::before {
  animation: none;
  background-size: 0;
}

@keyframes bubbles {
  0% {
    background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
      65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
      64% 70%, 80% 71%;
  }

  50% {
    background-position: 10% 44%, 0% 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%,
      75% 0%, 95% -2%, 0% 80%, 95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%,
      68% 96%, 95% 100%;
  }

  100% {
    background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%,
      100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%,
      100% 100%;
    background-size: 0% 0%;
  }
}

@-webkit-keyframes bubbles {
  0% {
    background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
      65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
      64% 70%, 80% 71%;
  }

  50% {
    background-position: 10% 44%, 0% 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%,
      75% 0%, 95% -2%, 0% 80%, 95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%,
      68% 96%, 95% 100%;
  }

  100% {
    background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%,
      100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%,
      100% 100%;
    background-size: 0% 0%;
  }
}

@-o-keyframes bubbles {
  0% {
    background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
      65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
      64% 70%, 80% 71%;
  }

  50% {
    background-position: 10% 44%, 0% 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%,
      75% 0%, 95% -2%, 0% 80%, 95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%,
      68% 96%, 95% 100%;
  }

  100% {
    background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%,
      100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%,
      100% 100%;
    background-size: 0% 0%;
  }
}

@-moz-keyframes bubbles {
  0% {
    background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%,
      65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%,
      64% 70%, 80% 71%;
  }

  50% {
    background-position: 10% 44%, 0% 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%,
      75% 0%, 95% -2%, 0% 80%, 95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%,
      68% 96%, 95% 100%;
  }

  100% {
    background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%,
      100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%,
      100% 100%;
    background-size: 0% 0%;
  }
}


.home-text-title span{
  font-size: 100px;
  text-transform: uppercase;
  margin-left: 10px;
  font-family: 'CONSOLA'
}
.faq-width{
  width: 260px;
}



.footer-area{
  background: #000000;
}

.footer-logo-img{
  width: 180px;
  height: auto;
  margin-top: -20px;
  padding-top: 15px;
}

.footer-logo-text{
  font-size:12px;
  text-transform: uppercase;
}

.footer-item-logo{
  width: 40%;
  float: left;
}

.footer-item{
  width: 20%;
  float: left;
}

.footer-item div{
  padding-top: 20px;
}

.footer-item-title{
  color: #d79444;
  font-size: 30px;
  text-align: left;
}

.footer-item-other{
  color: #FFFFFF;
  font-size: 16px;
  margin-top: 8px;
  text-align: left;
}

.footer-icons img{
  width: auto;
  height: 30px;
  margin-right: 20px;
}

.footer-icons{
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .img-width {
      width: 60%;
      height: auto
  }

  .faq-width{
    width: 220px;
  }

  .home-bottom{
    height: 0 !important;
  }
  .sample-text-area{
    padding-top: 70px;
  }
  .home-text-title span{
    font-size: 65px;
    text-transform: uppercase;
    margin-left: 10px;
  }
  .home-text-left{
    font-size: 35px;
  }

  .mode-title-1{
    font-size: 60px;
    -webkit-animation: none;
    animation: none;
  }
  .bridge-img{
    height: 300px;
   }
   .lend-img{
    height: 400px;
  }

  .lend-img-text{
    font-size:30px;
  }

  .lend-text-title{
    letter-spacing:26px;
    font-size:18px;
    text-align: center;
  }

  .governance-img{
    height: 290px;
  }

  .item-other {
    padding-top: 40px;
  }

  .item-other-text-a{
    font-size:30px;
  }

  .item-other-text-b{
    font-size: 35px;
  }

  .item-other-text-c{
    font-size:25px;
    text-align: center;
  }

  .item-other-text-d{
    font-size: 30px;
  }
  .faq-item {
    border-radius: 10px;
    font-size: 24px;
    padding: 8px;
   /* height: 180px;*/
    text-align: left;
    max-width: none;
    min-height: 10px;
  }
  .col-md-3{
    margin-top: 10px;
  }
  .faq-img{
    height: 20px;
  }

  .swap-from-1 {
    padding-left: 5px;
    padding-top: 15px;
    padding-right: 5px;
  }

  .swap-from-1 button {
    font-size: 15px;
  }

  .swap-from-2 {
    height: 80px;
    border-radius: 5px;
    padding: 10px;
    margin: 15px 10px;
  }

  .swap-from-2 span {
    font-size: 20px;
  }


  .swap-from-3 {
    height: 40px;
    margin: 15px 10px;
  }

  .swap-from-3 button {
    font-size: 20px;
  }

  .footer-logo-img{
    width: 160px;
  }
  .footer-logo-text{
    font-size:10px;
  }
  .footer-icons img{
    height: 28px;
  }
  .footer-item-title{
    font-size: 25px;
    text-align: center;
  }
  .footer-item-other{
    color: #FFFFFF;
    font-size: 15px;
    margin-top: 6px;
    text-align: center;
  }
  .single-table{
    padding-bottom: 20px;
  }

  .lend-no-title{
    height: 80px;
  }

  .governance-brc{
    font-size: 60px;
  }
  .home-bottom{
    background-image:none;
  }
  .home-text-right span{
    font-size: 15px;
  }
  .sample-text-area p {
    line-height: 30px;
  }

  .faq-bottom-img{
    padding-top:80px;
    width:80px;
  }

  .area-top{
    padding-top: 100px;
  }

  .faq-message-f{
    font-size: 26px;
  }

  .swap-text-margin{
    margin-top: 90px;
  }

  .home-img{
    width: 80%;
  }
  .home-img-padding{
    padding-top: 150px;

  }
  .iview-ui{
    margin-top: 0px;
    display: none;
  }
  .footer-iview-margin{
    margin-top: 0px;
  }

}

@media (min-width: 576px) and (max-width: 767.98px) {
.img-width {
      width: 80%;
      height: auto
  }
  .faq-width{
    width: 80%;
  }
  .home-bottom{
    height: 0 !important;
  }
  .sample-text-area{
    padding-top: 50px;
  }
  .home-text-title span{
    font-size: 60px;
    text-transform: uppercase;
    margin-left: 10px;
  }
  .home-text-left{
    font-size: 30px;
  }
  .mode-title-1{
    font-size: 45px;
    -webkit-animation: none;
    animation: none;
  }
  .bridge-img{
    height: 280px;
   }

   .lend-img{
    height: 350px;
  }

  .lend-text-title{
    letter-spacing:22px;
    font-size:16px;
    text-align: center;
  }
  .lend-img-text{
    font-size:25px;
  }

  .governance-img{
    height: 280px;
  }
  .item-other {
    padding-top: 30px;
  }
  .item-other-text-a{
    font-size:25px;
  }

  .item-other-text-b{
    font-size: 30px;
  }

  .item-other-text-c{
    font-size:20px;
    text-align: center;
  }

  .item-other-text-d{
    font-size: 25px;
  }
  .faq-item {
    border-radius: 5px;
    font-size: 20px;
    padding: 8px;
    /*height: 140px;*/
    text-align: left;
    max-width: none;
    min-height: 10px;
  }
  .col-md-3{
    margin-top: 10px;
  }
  .faq-img{
    height: 18px;
  }

  .swap-from-1 {
    padding-left: 5px;
    padding-top: 15px;
    padding-right: 5px;
  }

  .swap-from-1 button {
    font-size: 15px;
  }

  .swap-from-2 {
    height: 60px;
    border-radius: 5px;
    padding: 10px;
    margin: 15px 10px;
  }

  .swap-from-2 span {
    font-size: 20px;
  }



  .swap-from-3 {
    height: 40px;
    margin: 15px 10px;
  }

  .swap-from-3 button {
    font-size: 25px;
  }

  .footer-logo-img{
    width: 140px;
  }
  .footer-logo-text{
    font-size:10px;
  }
  .footer-icons img{
    height: 26px;
  }
  .footer-item-title{
    font-size: 22px;
    text-align: center;
  }
  .footer-item-other{
    color: #FFFFFF;
    font-size: 13px;
    margin-top: 4px;
    text-align: center;
  }
  .single-table{
    padding-bottom: 10px;
  }
  .lend-no-title{
    height: 60px;
  }
  .governance-brc{
    font-size: 50px;
  }
  .home-bottom{
    background-image:none;
  }

  .home-text-right span{
    font-size: 14px;
  }

  .area-top{
    padding-top: 120px;
  }

  .sample-text-area p {
    line-height: 25px;
  }

  .faq-bottom-img{
    padding-top:60px;
    width:60px;
  }
  .faq-message-f{
    font-size: 22px;
  }

  .swap-text-margin{
    margin-top: 70px;
  }

  .home-img{
    width: 80%;
  }
  .home-img-padding{
    padding-top: 120px;
  }

  .iview-ui{
    margin-top: 0px;
    display: none;
  }
  .footer-iview-margin{
    margin-top: 0px;
  }

}

@media (max-width: 575.98px) {
.img-width {
      width: 100%;
      height: auto
  }

  .mt-40{
    margin-top: 40px;
  }

  .home-bottom{
    height: 0 !important;
  }

  .sample-text-area{
    padding-top: 30px;
  }
  .faq-width{
    width: 100%;
  }
  .home-text-title span{
    font-size: 30px;
    text-transform: uppercase;
    margin-left: 2px;
  }

  .home-bottom{
    height: 120px;
  }

  .home-text-right{
    display: flex;
    flex: 1;
  }

  .home-text-left{
    font-size: 20px;
  }

  .mode-title-1{
    font-size: 35px;
    -webkit-animation: none;
    animation: none;
  }
  .bridge-img{
    height: 260px;
   }

   .lend-img{
    height: 300px;
  }

  .lend-img-text{
    font-size:20px;
  }

  .lend-text-title{
    letter-spacing:18px;
    font-size:14px;
    text-align: center;
  }

  .governance-img{
    height: 270px;
  }
  .item-other {
    padding-top: 20px;
  }

  .item-other-text-a{
    font-size:20px;
  }

  .item-other-text-b{
    font-size: 25px;
  }

  .item-other-text-c{
    font-size:15px;
    text-align: center;
  }

  .item-other-text-d{
    font-size: 20px;
  }
  .faq-item {
    border-radius: 2px;
    font-size: 14px;
    padding: 8px;
    /*height: 120px;*/
    text-align: left;
    max-width: none;
    min-height: 10px;
  }
  .col-md-3{
    margin-top: 10px;
  }
  .faq-img{
    height: 16px;
  }

  .swap-from-1 {
    padding-left: 5px;
    padding-top: 15px;
    padding-right: 5px;
  }

  .swap-from-1 button {
    font-size: 15px;
  }

  .swap-from-2 {
    height: 60px;
    border-radius: 5px;
    padding: 10px;
    margin: 15px 10px;
  }

  .swap-from-2 span {
    font-size: 20px;
  }


  .swap-from-3 {
    height: 40px;
    margin: 15px 10px;
  }

  .swap-from-3 button {
    font-size: 20px;
  }

  .footer-logo-img{
    width: 120px;
  }
  .footer-logo-text{
    font-size:10px;
  }
  .footer-icons img{
    height: 24px;
  }
  .footer-item-title{
    font-size: 18px;
    text-align: center;
  }
  .footer-item-other{
    color: #FFFFFF;
    font-size: 11.5px;
    margin-top: 2px;
    text-align: center;
  }
  .single-table{
    padding-bottom: 0px;
  }

  .lend-no-title{
    height: 40px;
  }
  .governance-brc{
    font-size: 40px;
  }

  .home-bottom{
    background-image:none;
  }

  .home-text-right span{
    font-size: 13px;
  }

  .sample-text-area p {
    line-height: 20px;
  }

  .sel-icon{

    top:20px;
  }

  .area-top{
    padding-top: 100px;
  }

  .faq-bottom-img{
    padding-top:40px;
    width:40px;
  }

  .home-img{
    width: 80%;
  }

  .button-docs {
    display: inline-block;
    width: 80%;
    height: 50px;
  }
  .faq-message-f{
    font-size: 18px;
  }

  .swap-text-margin{
    margin-top: 50px;
  }

  .home-img-padding{
    padding-top: 90px;
  }

  .iview-ui{
    margin-top: 0px;
    display: none;
  }
  .footer-iview-margin{
    margin-top: 0px;
  }
}
</style>




