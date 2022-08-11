<template>
    <div :class="`jbForm ${cssClass}`">
        <label>
            <input
                type="radio"
                id=""
                name=""
                value=""
                v-model="vModel"
                @input="$emit('update:modelValue', $event)"
                v-bind="$attrs"
            />
            <span class="lb">{{ label }}</span>
        </label>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label: "",
        vModel: {},
        cssClass: {
            type: String,
            default: "",
        },
    },
};
</script>

<style>

</style>