<template>
    <Dialog :title="title" :subtitle="subtitle" :visible="visible" @click:dialogVisibleToggle="(bool) => $emit('click:dialogVisibleToggle', bool)">
        <!-- 레이어팝선택UI:S -->
        <div class="jbChkLavwArea">
            <template v-if="isDialogHeader">
                <slot name="dialogHeader" />
            </template>
            <div class="jbcRowsCont" v-if="isDialogContent">
                <div class="jbcColLt">
                    <div class="jbcInConte">
                        <div class="ltsLst">
                            <!-- foreach:S -->
                            <div class="tpw" v-for="({ name }, index) in selectLists" :key="index">
                                <button type="button" :class="`dic_bt ${index === 0 && 'active'}`">
                                    <!-- 활성화:active -->
                                    <span class="d_intx">{{ name }}</span>
                                </button>
                            </div>
                            <!-- foreach:E -->
                        </div>
                    </div>
                </div>
                <div class="jbcColRt">
                    <div class="jbcInConte bordernone">
                        <template v-for="(item, index) in selectLists" :key="index">
                            <div class="ltsTits">ㆍ{{ item.name }}</div>
                            <div class="ltsLst">
                                <!-- foreach:S -->
                                <div class="tpw" v-for="(_item, i) in item.data" :key="i">
                                    <Checkbox
                                        id=""
                                        :name="_item.name"
                                        :model-value="_item.code"
                                        :checked="selectedLists.find(({ code }) => code === _item.code)"
                                        @change="$emit('update:selectedbind', $event)"
                                        >{{ _item.name }}</Checkbox
                                    >
                                </div>
                                <!-- foreach:E -->
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="jbcRowsRest" v-if="isDialogFooter">
                <div class="jbresInner">
                    <div class="rexwConte">
                        <!-- 선택된영역이있을때:S -->
                        <div class="fbOriStvsArea" v-if="Object.keys(vSelectedLists).length">
                            <!-- foreach:S -->
                            <template v-for="({ code, name }, index) in vSelectedLists" :key="index">
                                <Selected :model-value="code" :name="name" @click="$emit('update:selecteddelete', $event)">{{ name }}</Selected>
                            </template>
                            <!-- foreach:E -->
                        </div>
                        <!-- 선택된영역이있을때:E -->
                        <!-- 선택된영역이없을때:S -->
                        <Nullmsg v-else>{{ `선택한 항목이 없습니다.` }}</Nullmsg>
                        <!-- 선택된영역이없을때:E -->
                    </div>
                    <div class="rexwBte">
                        <button type="button" class="jbbtns sm gray" @click="$emit('click:selectedInitializeButton', $event)">
                            <span class="intxtsw">초기화</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 레이어팝선택UI:E -->
    </Dialog>
</template>

<script>
import Dialog from "@/components/Dialog/Dialog";
import Checkbox from "@/components/Form/Checkbox";
import Selected from "@/components/Form/Selected";
import Nullmsg from "@/components/Form/Nullmsg";
import mixin from "@/mixin";
export default {
    components: {
        Dialog,
        Checkbox,
        Selected,
        Nullmsg,
    },
    mixins: [mixin],
    props: {
        title: {
            type: String,
            default: "타이틀",
        },
        subtitle: {
            type: String,
            default: "",
        },
        visible: {
            type: Boolean,
            default: false,
        },
        selectLists: {
            type: Object,
            default: () => [],
            required: true,
        },
        selectedLists: {
            type: Object,
            default: () => [],
        },
        isDialogHeader: {
            type: Boolean,
            default: false,
        },
        isDialogContent: {
            type: Boolean,
            default: true,
        },
        isDialogFooter: {
            type: Boolean,
            default: true,
        },
        limitSelectedLength: 0,
    },
    data() {
        return {
            addSelectedLists: [],
        };
    },
    computed: {
        vSelectedLists() {
            if (!this.addSelectedLists.length) {
                return this.selectedLists;
            } else {
                return [...this.selectedLists, ...this.addSelectedLists];
            }
        },
    },
    created() {},
    methods: {},
};
</script>