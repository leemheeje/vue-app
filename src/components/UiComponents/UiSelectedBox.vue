<template>
    <!-- 선택영역UI:S -->
    <div :class="`jbChicCmArea`">
        <!-- 툴팁 확장시 extend-->
        <div class="tmATInn">
            <template v-if="Object.keys(selected).length">
                <!-- 선택된영역이있을때:S -->
                <div class="fbOriStvsArea">
                    <!-- foreach:S -->
                    <template v-for="(item, index) in selected" :key="index">
                        <Selected
                            :value="item.code"
                            @click="selectBindDelete"
                            >{{ item.name }}</Selected
                        >
                    </template>
                    <!-- foreach:E -->
                </div>
                <!-- 선택된영역이있을때:E -->
            </template>
            <template v-else>
                <!-- 선택된영역이없을때:S -->
                <Nullmsg>{{ nullMsg }}</Nullmsg>
                <!-- 선택된영역이없을때:E -->
            </template>
            <slot name="UiSelectedBox-tooltip" />
        </div>
        <div class="btnwArea">
            <button
                type="button"
                class="jbbtns sm"
                @click="selectBoxBindExtend"
            >
                <span class="intxtsw">전체보기</span>
            </button>
        </div>
        <slot name="UiSelectedBox-favorite" />
    </div>
    <!-- 선택영역UI:E -->
</template>

<script>
import Selected from "@/components/Form/Selected";
import Nullmsg from "@/components/Form/Nullmsg";
export default {
    props: {
        title: {
            type: String,
            default: "타이틀",
        },
        selected: {
            type: Object,
            default: () => [],
        },
        nullMsg: {
            type: String,
            default() {
                //return this.title ? `${this.title}을(를) 선택해주세요.` : "";
            },
        },
    },
    computed: {},
    created() {},
    methods: {
        selectBoxBindExtend() {
            this.$emit("click:afRightButtonBind");
        },
        selectBindDelete(e) {
            this.$emit("update:selectBindDelete", e);
        },
    },
    components: { Selected, Nullmsg },
};
</script>
