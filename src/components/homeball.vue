<template>
  <div class="w-[100vw] h-[100vh] relative overflow-hidden">
    <!-- ball -->
    <div
      class=" absolute left-[50%] top-[50%] w-[26rem] h-[26rem] ml-[-13rem] mt-[-13rem] flex items-center justify-center z-20 ">
      <img src="../assets/img/home/ball.png" alt="" class="ballanimate w-full h-full" />
    </div>
    <!-- content -->
    <div
        class="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0)]  z-30"
      >
        <div
          class="hidden lg:block text-[4.5rem] text-white font-bold tracking-[7px] mb-[1.44rem]"
        >
          MAKE ORDINALS INFINITY
        </div>
        <div class="lg:hidden text-[6rem] text-white font-bold">MAKE</div>
        <div
          class="lg:hidden text-[2.17rem] text-[white] font-bold mb-[2.8rem]"
        >
          ORDINALS INFINITY
        </div>
        <div
          class="text-[3rem] lg:text-[3.13rem] text-[#FFFFFF] leading-[3.5rem]"
        >
          THE FIRST
        </div>
        <div
          class="text-[3rem] lg:text-[3.13rem] text-[#FFFFFF] leading-[3.5rem] mb-[3rem] text-center"
        >
          BRC20 Multi-Chain Liquidity Protocol
        </div>
        <a href="https://comsats.io/brc-20" target="_blank">
          <div
            class="w-[19rem] lg:[14rem] h-[5rem] lg:h-[3.75rem] bg-[#F7931A] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover-scale"
          >
            <span class="text-white text-[1.83rem]">MINT</span>
          </div>
        </a>
      </div>
    <!-- bg -->
    <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
      url="http://foo.bar/particles.json" />

    <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="opts" />
  </div>
</template>

<script>
import { loadSlim } from "tsparticles-slim";
export default {
  data() {
    return {
      opts: {
        background: {
          color: {
            value: '#0a0a0a'
          }
        },
        fpsLimit: 120,
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 515.4845154845156,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 239.76023976023976,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "particles": {
          "number": {
            "value": 199,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        detectRetina: true
      }
    }
  },
  methods: {
    async particlesInit(aa) {
      await loadSlim(aa)
    },
    async particlesLoaded(aa) {
      console.log(aa)
    },

  }
}
</script>
<style>
.ballanimate {
  transform-style: preserve-3d;
  animation: rotateSphere 20s infinite linear;
}

@keyframes rotateSphere {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg)
  }
}
</style>