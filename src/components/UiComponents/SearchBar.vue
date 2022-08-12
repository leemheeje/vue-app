<template>
    <div class="jbAutoSearchArea">
        <div class="inpArea">
            <input type="text" :value="modelValue" id="" name="" placeholder="자격증명을 입력하세요." @input="$emit('update:modelValue', $event)" v-bind="$attrs" />
        </div>
        <div class="resArea" v-if="modelValue">
            <div class="reSinner">
                <!-- 연관검색있을때:S -->
                <slot name="list" />
                <!-- 연관검색있을때:E -->
                <!-- 연관검색없을때:S -->
                <div class="asTps" v-if="!$slots.list.length">
                    <div class="asNutx">연관 검색어가 없습니다</div>
                </div>
                <!-- 연관검색없을때:E -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: "",
    },
    created() {
        console.log(this.$slots);
    },
};
</script>

<style>

</style>