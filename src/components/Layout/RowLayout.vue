<template>
    <div :class="`jbLayoutLabs ${required && 'required'}`">
        <div class="jblabs">
            <span class="ints">{{ title }}</span>
        </div>
        <div class="jbDivs">
			<slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        required: Boolean,
    },
};
</script>
