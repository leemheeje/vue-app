<template>
    <!-- 선택영역UI:S -->
    <div :class="`jbChicCmArea ${selectBoxExtend ? 'extend' : ''}`">
        <!-- 툴팁 확장시 extend-->
        <div class="tmATInn">
            <template v-if="Object.keys(selected).length">
                <!-- 선택된영역이있을때:S -->
                <div class="fbOriStvsArea">
                    <!-- foreach:S -->
                    <div
                        class="fboTpsw"
                        v-for="(item, index) in selected"
                        :key="index"
                    >
                        <span class="wlbwx">{{ item.name }}</span>
                        <button
                            class="wlbde"
                            title="삭제"
                            :value="item.code"
                            @click="selectBindDelete"
                        ></button>
                    </div>
                    <!-- foreach:E -->
                </div>
                <!-- 선택된영역이있을때:E -->
            </template>
            <template v-else>
                <!-- 선택된영역이없을때:S -->
                <div class="tmNulIns">
                    {{ nullMsg }}
                </div>
                <!-- 선택된영역이없을때:E -->
            </template>
            <slot name="UiSelectedBox-tooltip" />
        </div>
        <div class="btnwArea">
            <button class="jbbtns sm" @click="selectBoxBindExtend">
                <span class="intxtsw">전체보기</span>
            </button>
        </div>
		<slot name="UiSelectedBox-favorite"/>
    </div>
    <!-- 선택영역UI:E -->
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        selected: {
            type: Object,
            default: () => [],
        },
        nullMsg: {
            type: String,
            default() {
                return this.title ? `${this.title}을(를) 선택해주세요.` : "";
            },
        },
    },
    computed: {},
    data() {
        return {
            selectBoxExtend: false,
        };
    },
    created() {},
    methods: {
		test(){
			console.dir(event.target);
		},
        selectBoxBindExtend() {
            this.selectBoxExtend = !this.selectBoxExtend;
        },
        selectBindDelete(e) {
            this.$emit("update:selectBindDelete", e);
        },
    },
    components: {},
};
</script>
