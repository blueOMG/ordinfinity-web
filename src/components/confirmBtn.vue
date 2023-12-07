<template>
  <div
    class="h-full text-white text-2xl flex items-center justify-center font-bold rounded-full cursor-pointer"
    :class="{ 
      'bg-primary' : !disabled,
      'bg-[#b68af1]': disabled
    }"
    @click="clickbtn"
  >
    <van-loading v-if="loadingState" />
    <span v-else>{{ text }}</span>
  </div>
</template>

<script>
import { Loading } from "vant";
export default {
  props: {
    loadingState: {
      default: false
    },
    text: {
      default: ''
    },

    disabled: {
      default: false
    }
  },
  components: {
    [Loading.name]: Loading,
  },
  data() {
    return {};
  },

  mounted() {},
  methods: {
    clickbtn() {
      if (this.loadingState || this.disabled) {
        return;
      }
      this.$emit("onclick");
    },
  },
};
</script>
 
