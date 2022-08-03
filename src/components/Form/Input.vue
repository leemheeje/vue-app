<template>
    <div class="jbForm">
        <input
            :type="type || 'text'"
            :id="id"
            :class="cssClass"
            :placeholder="placeholder || '입력해주세요'"
            :name="name"
            :value="modelValue"
            @input="$emit('update:modelValue', $event)"
            v-bind="$attrs"
        />
    </div>
</template>

<script>
//model-value="inint value" , @update:model-value="test" attrs 넘겨받기(v-model 등 기타 내장객체 사용목적)
export default {
    props: ["modelValue", "type", "placeholder", "name", "id", "cssClass"],
    inheritAttrs: false,
};
</script>