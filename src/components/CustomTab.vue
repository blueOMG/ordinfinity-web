<template>
  <div class="tabs mx-8">
    <div
      v-for="(item, index) in tabs"
      :class="{ tabItem: true, active: tabIndex === index }"
      @click="onTabClick($event, index)"
      ref="tabItem"
    >
      {{ $t(`lang.${item}`) }}
    </div>
    <!-- <div
      :class="{ tabItem: true, active: tabIndex === 1 }"
      @click="onTabClick($event, 1)"
    >
      Collections
    </div>
    <div
      :class="{ tabItem: true, active: tabIndex === 2 }"
      @click="onTabClick($event, 2)"
    >
    质押
    </div>
    <div
      :class="{ tabItem: true, active: tabIndex === 3 }"
      @click="onTabClick($event, 3)"
    >
      活动
    </div> -->
    <span
      class="bar"
      :style="{ left: tabBarOffest + 'px', width: tabBarWdith + 'px' }"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      default: () => [],
      type: Array,
    },
    defaultActive: {
      default: 0,
      type: Number,
    },
  },
  data() {
    return {
      tabIndex: -1,
      tabBarOffest: 20,
      tabBarWdith: 40,
    };
  },
  watch: {
    defaultActive: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          let key = this.defaultActive || 0;
          key = Number(key);
          if (isNaN(key)) {
            key = 0;
          }
          this.onTabClick({ srcElement: this.$refs.tabItem[key] }, key);
        });
      },
    },
    tabs: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          let key = this.defaultActive || 0;
          key = Number(key);
          if (isNaN(key)) {
            key = 0;
          }
          this.onTabClick({ srcElement: this.$refs.tabItem[key] }, key);
        });
      },
    },
  },
  methods: {
    onTabClick(event, index) {
      console.log(index === this.tabIndex);
      console.log(event.srcElement.offsetLeft);
      if (index === this.tabIndex) {
        return;
      }
      this.tabBarOffest = event.srcElement.offsetLeft;
      this.tabBarWdith = event.srcElement.clientWidth;
      this.tabIndex = index;
      this.$forceUpdate();
      this.$emit("onChange", index);
    },
    // 外部让其跳转到第一个
    changeFrist() {
      this.tabBarOffest = 20;
      this.tabBarWdith = 40;
      this.tabIndex = 0;
      this.$emit("onChange", 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  display: flex;
  border-bottom: 1px solid rgba(25, 26, 27, 0.1);
  padding: 10px 0;
  position: relative;
  // transform: translateY(-100%);
  overflow-x: auto;
  > span {
    content: "";
    height: 2px;
    display: block;
    background-color: #fe8619;
    position: absolute;
    bottom: 0;
    transition: all 0.2s;
  }
  .tabItem {
    font-size: 17px;
    font-weight: bold;
    color: #5c5e5f;
    line-height: 1;
    margin-right: 40px;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    &.active,
    &:hover {
      color: #1d1e20;
    }
  }
}
</style>