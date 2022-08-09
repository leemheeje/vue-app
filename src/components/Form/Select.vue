<template>
  <div class="jbForm">
    <select
      v-bind="$attrs"
    >
      <slot />
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['modelValue']
}
</script>
