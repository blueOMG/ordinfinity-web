<template>
  <div
    class="relative w-full h-full border border-primary p-1 rounded-3xl bg-white"
  >
    <div
      class="absolute right-4 top-4 h-[23px] w-[23px] bg-white cursor-pointer rounded-md flex items-center justify-center z-30 hover:opacity-80"
      @click.stop="clickCollect(item)"
    >
      <img
        v-if="isCollect"
        src="./../assets/image/home/like_active.png"
        class="w-[13px] h-[11px]"
        alt=""
      />
      <img
        v-else
        src="./../assets/image/home/like.png"
        class="w-[13px] h-[11px]"
        alt=""
      />
    </div>
    <div
      class="group/ntfCard transition-all cursor-pointer relative w-full h-full md:mb-0 overflow-visible"
    >
      <div
        class="relative object-cover w-full h-max flex flex-col"
        @click="goDetail(item)"
      >
        <div class="object-cover overflow-hidden rounded-t-3xl false">
          <div class="group-hover/ntfCard:scale-110 hover:scale-105 transition">
            <div
              class="relative object-cover aspect-square w-full h-full overflow-hidden"
            >
              <img
                :src="item.coverUrl"
                class="duration-500 ease-in-out blur-none scale-100 absolute w-full h-full justify-center object-cover hover:scale-105 transition"
                alt=""
              />
              <span
                class="absolute right-0 bottom-2 px-3 text-sm rounded-l-full text-white leading-6"
                :style="{ background: statusMap[item.state].color }"
                >{{ $t(`lang.${statusMap[item.state].text}`) }}</span
              >
            </div>
            <div
              class="group-hover/ntfCard:opacity-100 opacity-0 w-full h-full bg-[rgba(0,0,0,0.40)] absolute top-0"
            ></div>
          </div>
        </div>

        <div class="py-2">
          <p class="text-base font-bold">{{ item.title }}</p>
          <p class="text-sm">{{ item.sellAmount }} USDT</p>
          <p class="text-xs truncate" style="color: rgba(29, 30, 32, 0.44)">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { collectNFT } from "@/api/api";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const isCollect = ref(false);
const router = useRouter();
const route = useRoute();
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
let statusMap = ref({
  NOT_STARTED: {
    text: "in_show",
    color: "#E98208",
  },
  FINISH: {
    text: "complete",
    color: "#02A333",
  },
  IN_PROGRESS: {
    text: "in_task",
    color: "#6A28FF",
  },
});
onMounted(() => {
  isCollect.value = props.item.isCollect;
});
const clickCollect = async (item) => {
  console.log(item);
  const addr = localStorage.getItem("userAddr");
  const token = localStorage.getItem(addr);
  if (!token) {
    ElMessage.error("Please login");
    return;
  }
  await collectNFT({ id: item.id });
  isCollect.value = !isCollect.value;
};
const goDetail = (item) => {
  const addr = localStorage.getItem("userAddr");
  const token = localStorage.getItem(addr);
  if (!token) {
    ElMessage.error("Please login");
    return;
  }
  console.log(route);
  if (route.path.indexOf("/app/nftDetails") !== -1) {
    router.replace("/app/nftDetails/" + item.id);
  } else {
    router.push("/app/nftDetails/" + item.id);
  }
};
</script>
 