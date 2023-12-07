<template>
    <div class="flex">
        <div class="flex h-9 rounded-full border overflow-hidden relative w-auto" ref="group">
            <div v-for="item in list" :key="item.value"
                class=" transition-all h-full px-5  flex  items-center text-sm cursor-pointer  rounded-full relative z-20 child"
                :class="{ 'text-white': tabIndex === item.value }"
                @click="onSelect($event, item)"
            >
                {{ item.label }}
            </div>
            <span class="bg-[#191A1B]  rounded-full block absolute top-0 bottom-0 transition-all z-10" :style="{ left: tabBarOffest + 'px', width: tabBarWdith + 'px',}"></span>

        </div>
    </div>
</template>


<script>
export default {
    props: {
        list: {
            default: () => { return [] }
        }
    },
    data () {
        return {
            tabIndex: 0,
            tabBarOffest: 0,
            tabBarWdith: 40
        }
    },

    methods: {
        onSelect(event, data) {
            this.tabBarOffest = event.srcElement.offsetLeft;
            this.tabBarWdith = event.srcElement.clientWidth;
            this.tabIndex = data.value
            this.$emit('select', data)
            this.tabIndex = data.value
        }
    },

    watch: {
        list: {
            immediate: true,
            handler (newValue, oldValue) {
                if (!oldValue || oldValue.length === 0) {
                    this.tabIndex = newValue[0].value
                }

                this.$nextTick(() => {
                    let parent = this.$refs.group;
                    if (parent) {
                        let children = parent.querySelectorAll('.child');
                        if (children && children.length > 0) {
                            this.tabBarWdith = children[0].clientWidth
                        }
                    }
                   
                })
            }
        }
    }
}
</script>