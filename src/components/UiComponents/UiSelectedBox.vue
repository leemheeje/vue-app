<template>
    <!-- 선택영역UI:S -->
    <div class="jbChicCmArea extend">
        <!-- 툴팁 확장시 extend-->
        <div class="tmATInn">
            <!-- 선택된영역이있을때:S -->
            <div class="fbOriStvsArea">
                <!-- foreach:S -->
                <div class="fboTpsw">
                    <span class="wlbwx">책임연구원</span>
                    <button class="wlbde" title="삭제"></button>
                </div>
                <!-- foreach:E -->
            </div>
            <!-- 선택된영역이있을때:E -->
            <!-- 선택된영역이없을때:S -->
            <!-- <div class="tmNulIns">직급/직책을 선택해주세요. (3개까지 입력 가능)</div> -->
            <!-- 선택된영역이없을때:E -->
            <slot name="UiSelectedBox-tooltip" />
        </div>
        <div class="btnwArea">
            <button class="jbbtns sm">
                <span class="intxtsw">전체보기</span>
            </button>
        </div>
        <div class="useBtArea">
            <span class="tpwLabs">자주 사용하는 직급/직책 선택</span>
            <div class="tpwGroups">
                <!-- foreach:S -->
                <div class="tpws">
                    <label class="tweb_bt">
                        <input type="checkbox" name="" value="" id="" />
                        <span class="lb">+사원</span>
                    </label>
                </div>
                <!-- foreach:E -->
            </div>
        </div>
    </div>
    <!-- 선택영역UI:E -->
</template>

<script>
export default {
    components: {},
};
</script>
