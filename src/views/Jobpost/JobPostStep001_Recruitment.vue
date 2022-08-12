<template>
    <!-- 모집분야:S -->
    <div class="jbCBoxing" data-fullpage="0">
        <div class="jbTits">모집분야</div>
        <div class="jbSTits">어떤 업무를 담당할 인재를 채용하시나요?</div>

        <!-- 모집분야 토글영역:S -->
        <div class="jbGlbNmAreaWrapping">
            <!-- 입력부분 확장시 show 클래스 추가 -->
            <div class="jbGlbNmLists show">
                <!-- 모집분야명 입력:S -->
                <div class="jbGlbNmArea">
                    <div class="insrtNmArea">
                        <Input :model-value="mzbyTitle" placeholder="아래 모집분야명을 입력해주세요." readonly />
                        <div class="btnswa">
                            <button class="tnbx tp1" title="모집분야 복사"></button>
                            <button class="tnbx tp2" title="모집분야 삭제"></button>
                            <button class="tnbx tp3" onclick="$(this).closest('.jbGlbNmLists').toggleClass('show');" title="모집분야 확장"></button>
                        </div>
                    </div>
                </div>
                <!-- 모집분야명 입력:E -->
                <div class="jbGlbTogArea">
                    <!-- 모집분야:S -->
                    <RowLayout title="모집분야" class="MT40" required>
                        <Row>
                            <Col class="col7">
                                <Input :model-value="mzbyTitle" @update:modelValue="(e) => (mzbyTitle = e.target.value)" placeholder="EX) R&D, 경영지원" />
                            </Col>
                            <Col class="col3 inline FLEX ALIGN_ITEM_CENTER" style="width: 150px">
                                <Input model-value="0" />
                                <span class="jbStatText ML10 NOWRAP">명 모집</span>
                            </Col>
                        </Row>
                    </RowLayout>
                    <!-- 모집분야:E -->
                    <!-- 경력여부:S -->
                    <RowLayout title="경력여부" class="MT35" required>
                        <Row class="FLEX ALIGN_ITEM_CENTER">
                            <Col style="width: 100px">
                                <Checkbox size="default">신입</Checkbox>
                            </Col>
                            <Col style="width: 100px">
                                <Checkbox size="default">경력</Checkbox>
                            </Col>
                            <Col style="width: 200px">
                                <Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Select>
                            </Col>
                            <Col class="ML20">
                                <Checkbox size="default">경력무관</Checkbox>
                            </Col>
                        </Row>
                    </RowLayout>
                    <!-- 경력여부:E -->
                    <!-- 담당업무:S -->
                    <RowLayout title="담당업무" class="MT35">
                        <Input placeholder="담당업무를 자세히 기재할수록 지원율이 높아집니다." />
                    </RowLayout>
                    <!-- 담당업무:E -->
                    <!-- 근무부서:S -->
                    <RowLayout title="근무부서" class="MT20">
                        <Row>
                            <Col class="col6">
                                <Input type="text" placeholder="근무 부서명을 입력해 주세요." id="" name="" value="" />
                            </Col>
                        </Row>
                    </RowLayout>
                    <!-- 근무부서:E -->
                    <!-- 직급/직책:S -->
                    <RowLayout title="직급/직책" :subtitle="`(${jcjgSelected.length}/3)`" class="MT20">
                        <UiSelectedBox
                            title="직급/직책"
                            :selected="jcjgSelected"
                            nullMsg="직급/직책을 선택해주세요. (3개까지 입력 가능)"
                            @update:selectBindDelete="(e) => jcjgSelectedDelete(e.target.value)"
                            @click:afRightButtonBind="isJcjgTooltipVisible = !isJcjgTooltipVisible"
                        >
                            <template v-slot:UiSelectedBox-tooltip v-if="jc && jg && isJcjgTooltipVisible">
                                <UiSelectedBoxTooltip :titleName="[jc.name, jg.name]" @click:visibleToggle="isJcjgTooltipVisible = false">
                                    <template v-slot:slot-jc>
                                        <div class="colst w3" v-for="(item, index) in jc.data" :key="index">
                                            <Checkbox
                                                :model-value="item.code"
                                                :data-name="item.name"
                                                :checked="jcjgSelected.find((d, i) => item.code === d.code)"
                                                @change="jcjgbind"
                                                >{{ item.name }}</Checkbox
                                            >
                                        </div>
                                    </template>
                                    <template v-slot:slot-jg>
                                        <div class="colst w3" v-for="(item, index) in jg.data" :key="index">
                                            <Checkbox
                                                :model-value="item.code"
                                                :data-name="item.name"
                                                :checked="jcjgSelected.find((d, i) => item.code === d.code)"
                                                @change="jcjgbind"
                                                >{{ item.name }}</Checkbox
                                            >
                                        </div>
                                    </template>
                                </UiSelectedBoxTooltip>
                            </template>
                            <template v-slot:UiSelectedBox-favorite v-if="favoriteItemsArrayJcJg">
                                <UiSelectedBoxFavorite title="직급/직책">
                                    <template v-slot:slot-favorite>
                                        <template v-for="(item, index) in favoriteItemsArrayJcJg" :key="index">
                                            <Checkbox
                                                :name="item.name"
                                                :value="item.code"
                                                :checked="jcjgSelected.find((o) => item.code === o.code)"
                                                @change="jcjgbind"
                                                id=""
                                                :addSelectButton="true"
                                                >{{ item.name }}</Checkbox
                                            >
                                        </template>
                                    </template>
                                </UiSelectedBoxFavorite>
                            </template>
                        </UiSelectedBox>
                    </RowLayout>
                    <!-- 직급/직책:E -->
                    <!-- 우대조건:S -->
                    <RowLayout title="우대조건" :subtitle="`(${woodaeSelected.length}/6)`" class="MT20 MB40">
                        <UiSelectedBox
                            title="우대조건"
                            :selected="woodaeSelected"
                            nullMsg="우대조건을 선택해주세요. (6개까지 입력 가능)"
                            @update:selectBindDelete="(e) => woodaeSelectedDelete(e.target.value)"
                            @click:afRightButtonBind="isWoodaeDialogVisible = !isWoodaeDialogVisible"
                        >
                            <template v-slot:UiSelectedBox-favorite v-if="favoriteItemsArrayWoodae">
                                <UiSelectedBoxFavorite title="우대조건">
                                    <template v-slot:slot-favorite>
                                        <template v-for="(item, index) in favoriteItemsArrayWoodae" :key="index">
                                            <Checkbox
                                                :name="item.name"
                                                :value="item.code"
                                                :checked="woodaeSelected.find((o) => o.code === item.code)"
                                                @change="woodaebind"
                                                :addSelectButton="true"
                                                >{{ item.name }}</Checkbox
                                            >
                                        </template>
                                    </template>
                                </UiSelectedBoxFavorite>
                            </template>
                        </UiSelectedBox>
                        <UiSelectedBoxDialog
                            title="우대조건"
                            subtitle="최대 6개까지 선택 가능"
                            :visible="isWoodaeDialogVisible"
                            :selectLists="woodae"
                            :selectedLists="woodaeSelected"
                            :limitSelectedLength="limitWoodaeSelectedLength"
                            @update:selectedbind="woodaebind"
                            @update:selecteddelete="(e) => woodaeSelectedDelete(e.target.value)"
                            @click:dialogVisibleToggle="(isVisible) => (isWoodaeDialogVisible = isVisible)"
                            @click:selectedInitializeButton="woodaeSelected = []"
                        />
                    </RowLayout>
                    <!-- 우대조건:E -->
                </div>
            </div>
        </div>
        <!-- 모집분야 토글영역:E -->

        <!-- 모집분야 추가 버튼:S -->
        <button class="jbSectAddButton MT20">+모집분야 추가</button>
        <!-- 모집분야 추가 버튼:E -->
    </div>
    <!-- 모집분야:E -->
</template>

<script>
import RowLayout from "@/components/Layout/RowLayout";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import Checkbox from "@/components/Form/Checkbox";
import UiSelectedBox from "@/components/UiComponents/UiSelectedBox";
import UiSelectedBoxTooltip from "@/components/UiComponents/UiSelectedBoxTooltip";
import UiSelectedBoxFavorite from "@/components/UiComponents/UiSelectedBoxFavorite";
import UiSelectedBoxDialog from "@/components/UiComponents/UiSelectedBoxDialog";
import mixin from "@/mixin";
export default {
    mixins: [mixin],
    data() {
        return {
            mzbyTitle: "",
            jc: undefined,
            jg: undefined,
            limitJcJgSelectedLength: 3,
            jcjgSelected: [
                {
                    code: "JC0003",
                    name: "부장",
                },
                {
                    code: "JC0004",
                    name: "임원",
                },
            ],
            jcFavorite: undefined,
            jgFavorite: undefined,
            isJcjgTooltipVisible: false,
            woodae: undefined,
            woodaeSelected: [
                {
                    code: "WD005012",
                    name: "아랍어가능자",
                },
                {
                    code: "WD002008",
                    name: "포토샵 능숙자",
                },
            ],
            limitWoodaeSelectedLength: 6,
            isWoodaeDialogVisible: false,
        };
    },
    computed: {
        favoriteItemsArrayJcJg() {
            if (this.jcFavorite && this.jgFavorite) {
                return [...this.jcFavorite, ...this.jgFavorite];
            } else {
                return false;
            }
        },
        favoriteItemsArrayWoodae() {
            return this.__fnComputeFavorite("woodae");
        },
    },
    components: {
        RowLayout,
        Row,
        Col,
        Input,
        Select,
        Checkbox,
        UiSelectedBox,
        UiSelectedBoxTooltip,
        UiSelectedBoxFavorite,
        UiSelectedBoxDialog,
    },
    async created() {
        await this.$http.get(`${this.API_PATH_STATIC}/jc.json`).then((data) => {
            if (data && data.data) {
                this.jc = data.data;
                if (data.data.favorite) {
                    this.jcFavorite = data.data.favorite;
                }
            }
        });
        await this.$http.get(`${this.API_PATH_STATIC}/jg.json`).then((data) => {
            if (data && data.data) {
                this.jg = data.data;
                if (data.data.favorite) {
                    this.jgFavorite = data.data.favorite;
                }
            }
        });
        await this.$http.get(`${this.API_PATH_STATIC}/woodae.json`).then(({ data }) => {
            if (data && data.length) {
                this.woodae = data;
            }
        });
    },
    mounted() {},
    methods: {
        woodaebind(e) {
            this.lcFnBind(e, {
                seleted: "woodaeSelected",
                selectedLengh: "limitWoodaeSelectedLength",
                alertMsg: `우대사항은 ${this.limitWoodaeSelectedLength}개 까지 선택가능합니다.`,
            });
        },
        jcjgbind(e) {
            this.lcFnBind(e, {
                seleted: "jcjgSelected",
                selectedLengh: "limitJcJgSelectedLength",
                alertMsg: `직급/직책은 ${this.limitJcJgSelectedLength}개 까지 선택가능합니다.`,
            });
        },
        lcFnBind(e, { seleted, selectedLengh, ...props }) {
            let __chkBind = this.__fnSelectBoxCheckBind(e);
            let __limit = this.__fnIsLimitSelectBoxCheck(this[seleted], this[selectedLengh]);
            if (e.target.checked) {
                if (!__limit) {
                    __chkBind.isChecked((e, { code, name }) => {
                        this[seleted] = [
                            ...this[seleted],
                            {
                                code,
                                name,
                            },
                        ];
                    });
                } else {
                    e.target.checked = false;
                    alert(props.alertMsg);
                }
            } else {
                __chkBind.unChecked((e, { code, name }) => (this[seleted] = this[seleted].filter((object) => object.code !== code)));
            }
        },
        lcFnSelectedDelete({ code, seleted, ...props }) {
            this[seleted] = this[seleted].filter((object) => object.code !== code);
        },
        jcjgSelectedDelete(code) {
            this.lcFnSelectedDelete({ code, seleted: "jcjgSelected" });
        },
        woodaeSelectedDelete(code) {
            this.lcFnSelectedDelete({ code, seleted: "woodaeSelected" });
        },
    },
};
</script>
