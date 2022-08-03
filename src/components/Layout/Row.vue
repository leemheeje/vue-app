<template>
    <div :class="`jbLayoutLabs ${required && 'required'}`">
        <div class="jblabs">
            <span class="ints">{{ title }}</span>
        </div>
        <div class="jbDivs">
            <div class="row">
                <!-- <div class="col7">
                    <div class="jbForm">
                        <input
                            type="text"
                            placeholder="EX) R&D, 경영지원"
                            id=""
                            name=""
                            value=""
                        />
                    </div>
                </div>
                <div class="col00">
                    <div class="jbForm inline" style="width: 100px">
                        <input
                            type="number"
                            placeholder="모집인원"
                            id=""
                            name=""
                            value="0"
                        />
                    </div>
                    <span class="jbStatText">명 모집</span>
                </div> -->
                <slot />
            </div>
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

<style>

</style>