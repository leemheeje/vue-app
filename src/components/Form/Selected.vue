<template>
    <div class="fboTpsw">
        <span class="wlbwx"><slot /></span>
        <button
            class="wlbde"
            title="삭제"
            :value="modelValue"
            @input="$emit('update:modelValue', $event)"
            v-bind="$attrs"
        ></button>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
	props:{
        modelValue: {},
	}
};
</script>
