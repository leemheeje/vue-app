<template>
    <div class="jbForm">
        <label>
            <input 
			type="radio" 
			id="" 
			name="" 
			value="" 
			@input="$emit('update:modelValue', $event)"
			v-bind="$attrs"
			 />
            <span class="lb">{{label}}</span>
        </label>
    </div>
</template>

<script>
export default {
	inheritAttrs: false,
	props:{
		label : ''
	}
};
</script>

<style>

</style>