<template>
    <template v-if="addSelectButton">
        <div :class="`tpws ${cssClass}`">
            <label class="tweb_bt">
                <input type="checkbox" :id="id" :name="name" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" />
                <span class="lb">+<slot /></span>
            </label>
        </div>
    </template>
    <template v-else>
        <div :class="`jbForm ${size !== 'default' ? size : ''} ${cssClass}`">
            <label>
                <input type="checkbox" :id="id" :name="name" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" />
                <span class="lb"><slot /></span>
            </label>
        </div>
    </template>
</template>

<script>
export default {
    inheritAttrs: false,
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
    props: {
        addSelectButton: {
            //선택Components 에서 "자주사용하는..." 사용UI props
            type: Boolean,
            default: false,
        },
        cssClass: "",
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