<template>
    <!-- 선택툴팁영역:S -->
    <div class="jbChikTotiArea">
        <div class="jbcGlInners">
            <div class="jbcHdAec">
                <div class="colst w5">
                    <div class="intxs">
                        <span class="int">직급</span>
                    </div>
                </div>
                <div class="colst w5">
                    <div class="intxs">
                        <span class="int">직책</span>
                    </div>
                </div>
            </div>
            <div class="jbcCtAec">
                <div class="colst w5">
                    <div class="jbcDepArea">
                        <!-- foreach:S -->
                        <div class="colst w3">
                            <div class="jbForm sm">
                                <label>
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        value=""
                                    />
                                    <span class="lb">사원</span>
                                </label>
                            </div>
                        </div>
                        <!-- foreach:E -->
                    </div>
                </div>
                <div class="colst w5">
                    <div class="jbcDepArea">
                        <!-- foreach:S -->
                        <div class="colst w3">
                            <div class="jbForm sm">
                                <label>
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        value=""
                                    />
                                    <span class="lb">사원</span>
                                </label>
                            </div>
                        </div>
                        <!-- foreach:E -->
                    </div>
                </div>
            </div>
            <div class="jbcBtAec">
                <div class="btwGrs">
                    <button class="jbbtns md outline">
                        <span class="intxtsw">취소</span>
                    </button>
                    <button class="jbbtns md">
                        <span class="intxtsw">확인</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- 선택툴팁영역:E -->
</template>

<script>
export default {
    props: {
        params: {
            type: Array,
            default: [],
        },
    },
	created(){
		//console.log(this.params);
	}
};
</script>

<style>

</style>