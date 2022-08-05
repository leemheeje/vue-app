<template>
    <div :class="`jbForm ${size}`">
        <label>
            <input
                type="checkbox"
                :id="id"
                :name="name"
                :value="modelValue"
                @input="$emit('update:modelValue', $event)"
                v-bind="$attrs"
            />
            <span class="lb"><slot /></span>
        </label>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        modelValue: {},
        id: {},
        name: {},
        size: {
            type: String,
            default: "sm",
        },
    },
};
</script>