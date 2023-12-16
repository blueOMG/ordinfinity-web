<template>
  <div>
    <layoutHead :overflow="overflow" />
    <div class="main overflow-x-hidden relative z-[1]" ref="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import layoutHead from "./component/layoutHead.vue";
export default {
  data() {
    return {
      overflow: false,
    };
  },
  components: {
    layoutHead,
  },
  mounted() {
    window.addEventListener("scroll", (e) => {
      console.log('@@@@@',e)
      this.overflow = window.scrollY > 70;
    });
  },
};
</script>
<style lang="scss" scoped>
</style>