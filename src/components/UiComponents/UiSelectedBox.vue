<template>
    <!-- 선택영역UI:S -->
    <div :class="`jbChicCmArea`">
        <!-- 툴팁 확장시 extend-->
        <div class="tmATInn">
            <template v-if="Object.keys(selected).length">
                <!-- 선택된영역이있을때:S -->
                <div class="fbOriStvsArea">
                    <!-- foreach:S -->
                    <template v-for="(item, index) in selected" :key="index">
                        <Selected
                            :value="item.code"
                            @click="selectBindDelete"
                            >{{ item.name }}</Selected
                        >
                    </template>
                    <!-- foreach:E -->
                </div>
                <!-- 선택된영역이있을때:E -->
            </template>
            <template v-else>
                <!-- 선택된영역이없을때:S -->
                <Nullmsg>{{title}}을(를) 선택해주세요.</Nullmsg>
                <!-- 선택된영역이없을때:E -->
            </template>
            <slot name="UiSelectedBox-tooltip" />
        </div>
        <div class="btnwArea">
            <button
                type="button"
                class="jbbtns sm"
                @click="selectBoxBindExtend"
            >
                <span class="intxtsw">전체보기</span>
            </button>
        </div>
        <slot name="UiSelectedBox-favorite" />
        <!-- 점수 입력 영역:S -->
        <div
            class="jbAddFormArea mdlb MT10"
            v-if="isJumsuTemplate && Object.keys(jumsuList).length"
        >
            <div class="jbaFormInners">
                <!-- foreach:S -->
                <div
                    class="jbTps"
                    v-for="(
                        { code, name, required, rate, ...props }, index
                    ) in jumsuList"
                    :key="index"
                >
                    <div class="jblts">
                        <span class="intx">ㆍ{{ name }}</span>
                    </div>
                    <div class="jbcots">
                        <Row class="FLEX ALIGN_ITEM_CENTER">
                            <Col class="col00" style="width: 200px">
                                <Input
                                    :name="code"
                                    :model-value="rate"
                                    type="number"
                                    placeholder="점수입력"
									@update:modelValue="(e)=>this.$emit('update:modelValue', e)"
                                />
                            </Col>
                            <Col class="col00">
                                <span class="jbStatText MR45">급(점) 이상</span>
                            </Col>
                            <Col class="col00">
                                <RadioGroup>
                                    <Radio
                                        :name="`reqRdo_${code}`"
                                        :defaultChecked="required"
                                        label="필수"
                                    />
                                    <div style="width: 10px"></div>
                                    <Radio
                                        :name="`reqRdo_${code}`"
                                        :defaultChecked="!required"
                                        label="우대"
                                    />
                                </RadioGroup>
                            </Col>
                            <Col class="col00">
                                <button
                                    class="jbls_de"
                                    :value="code"
                                    :name="name"
                                    title="삭제"
                                    @click="
                                        $emit('click:jumsuListDelete', $event)
                                    "
                                ></button>
                            </Col>
                        </Row>
                    </div>
                </div>
                <!-- foreach:E -->
            </div>
        </div>
        <!-- 점수 입력 영역:E -->
    </div>
    <!-- 선택영역UI:E -->
</template>

<script>
import Selected from "@/components/Form/Selected";
import Nullmsg from "@/components/Form/Nullmsg";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import Input from "@/components/Form/Input";
import RadioGroup from "@/components/Form/RadioGroup";
import Radio from "@/components/Form/Radio";
export default {
    props: {
        title: {
            type: String,
            default: "타이틀",
        },
        selected: {
            type: Object,
            default: () => [],
        },
        isJumsuTemplate: false,
        jumsuList: {
            type: Object,
            default: () => [],
        },
    },
    computed: {},
    created() {},
    methods: {
        selectBoxBindExtend() {
            this.$emit("click:afRightButtonBind");
        },
        selectBindDelete(e) {
            this.$emit("update:selectBindDelete", e);
        },
    },
    components: {
        Selected,
        Nullmsg,
        Row,
        Col,
        Input,
        RadioGroup,
        Radio,
    },
};
</script>
