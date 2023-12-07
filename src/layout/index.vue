<template>
  <div>
    <layoutHead :overflow="overflow" />
    <div class="main h-[100vh] overflow-auto" ref="body">
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
    this.$refs.body.addEventListener("scroll", (e) => {
      this.overflow = e.srcElement.scrollTop > 70;
    });
  },
};
</script>
<style lang="scss" scoped>
</style>