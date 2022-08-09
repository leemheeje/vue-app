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
                        <input
                            type="text"
                            placeholder="모집분야명을 입력해주세요."
                            name=""
                            value=""
                            id=""
                            readonly
                        />
                        <div class="btnswa">
                            <button
                                class="tnbx tp1"
                                title="모집분야 복사"
                            ></button>
                            <button
                                class="tnbx tp2"
                                title="모집분야 삭제"
                            ></button>
                            <button
                                class="tnbx tp3"
                                onclick="$(this).closest('.jbGlbNmLists').toggleClass('show');"
                                title="모집분야 확장"
                            ></button>
                        </div>
                    </div>
                </div>
                <!-- 모집분야명 입력:E -->
                <div class="jbGlbTogArea">
                    <!-- 모집분야:S -->
                    <RowLayout title="모집분야" class="MT40" required>
                        <Row>
                            <Col class="col7">
                                <Input placeholder="EX) R&D, 경영지원" />
                            </Col>
                            <Col
                                class="col3 inline FLEX ALIGN_ITEM_CENTER"
                                style="width: 150px"
                            >
                                <Input model-value="0" />
                                <span class="jbStatText ML10 NOWRAP"
                                    >명 모집</span
                                >
                            </Col>
                        </Row>
                    </RowLayout>
                    <!-- 모집분야:E -->
                    <!-- 경력여부:S -->
                    <div class="jbLayoutLabs required MT35">
                        <div class="jblabs smpadding">
                            <span class="ints">경력여부</span>
                        </div>
                        <div class="jbDivs">
                            <div class="jbForm inline MR25">
                                <label>
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        value=""
                                    />
                                    <span class="lb">신입</span>
                                </label>
                            </div>
                            <div class="jbForm inline">
                                <label>
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        value=""
                                    />
                                    <span class="lb">경력</span>
                                </label>
                            </div>
                            <div
                                class="jbForm inline ML15"
                                style="
                                    position: relative;
                                    top: 9px;
                                    margin-top: -16px;
                                "
                            >
                                <select name="" style="width: 160px">
                                    <option value="">년수선택</option>
                                </select>
                            </div>
                            <div class="jbForm inline ML25 MR25">
                                <label>
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        value=""
                                    />
                                    <span class="lb">경력무관</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <!-- 경력여부:E -->
                    <!-- 담당업무:S -->
                    <div class="jbLayoutLabs MT35">
                        <div class="jblabs">
                            <span class="ints">담당업무</span>
                        </div>
                        <div class="jbDivs">
                            <div class="jbForm">
                                <input
                                    type="text"
                                    placeholder="담당업무를 자세히 기재할수록 지원율이 높아집니다."
                                    id=""
                                    name=""
                                    value=""
                                />
                            </div>
                        </div>
                    </div>
                    <!-- 담당업무:E -->
                    <!-- 근무부서:S -->
                    <div class="jbLayoutLabs MT20">
                        <div class="jblabs">
                            <span class="ints">근무부서</span>
                        </div>
                        <div class="jbDivs">
                            <div class="row">
                                <div class="col6">
                                    <div class="jbForm">
                                        <input
                                            type="text"
                                            placeholder="근무 부서명을 입력해 주세요."
                                            id=""
                                            name=""
                                            value=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 근무부서:E -->
                    <!-- 직급/직책:S -->
                    <RowLayout title="직급/직책" class="MT20">
                        <UiSelectedBox
                            title="직급/직책"
                            :selected="jcjgSelected"
                            nullMsg="직급/직책을 선택해주세요. (3개까지 입력 가능)"
                            @update:selectBindDelete="
                                (e) => jcjgSelectedDelete(e.target.value)
                            "
							@click:afButtonBind="isJcjgTooltipVisible = !isJcjgTooltipVisible"
                        >
                            <template
                                v-slot:UiSelectedBox-tooltip
                                v-if="jc && jg && isJcjgTooltipVisible"
                            >
                                <UiSelectedBoxTooltip
                                    :titleName="[jc.name, jg.name]"
                                >
                                    <template v-slot:slot-jc>
                                        <div
                                            class="colst w3"
                                            v-for="(item, index) in jc.data"
                                            :key="index"
                                        >
                                            <Checkbox
                                                :model-value="item.code"
                                                :data-name="item.name"
                                                :checked="
                                                    jcjgSelected.find(
                                                        (d, i) =>
                                                            item.code === d.code
                                                    )
                                                "
                                                @change="jcjgbind"
                                                >{{ item.name }}</Checkbox
                                            >
                                        </div>
                                    </template>
                                    <template v-slot:slot-jg>
                                        <div
                                            class="colst w3"
                                            v-for="(item, index) in jg.data"
                                            :key="index"
                                        >
                                            <Checkbox
                                                :model-value="item.code"
                                                :data-name="item.name"
                                                :checked="
                                                    jcjgSelected.find(
                                                        (d, i) =>
                                                            item.code === d.code
                                                    )
                                                "
                                                @change="jcjgbind"
                                                >{{ item.name }}</Checkbox
                                            >
                                        </div>
                                    </template>
                                </UiSelectedBoxTooltip>
                            </template>
                            <template
                                v-slot:UiSelectedBox-favorite
                                v-if="favoriteItemsArrayJcJg"
                            >
                                <UiSelectedBoxFavorite title="직급/직책">
                                    <template v-slot:slot-favorite>
                                        <template
                                            v-for="(
                                                item, index
                                            ) in favoriteItemsArrayJcJg"
                                            :key="index"
                                        >
                                            <Checkbox
                                                :name="item.name"
                                                :value="item.code"
                                                :checked="
                                                    jcjgSelected.find(
                                                        (o) =>
                                                            item.code === o.code
                                                    )
                                                "
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
                    <RowLayout title="우대조건" class="MT20 MB40">
                        <UiSelectedBox
                            title="우대조건"
                            :selected="woodaeSelected"
                            nullMsg="우대조건을 선택해주세요. (6개까지 입력 가능)"
                            @update:selectBindDelete="
                                (e) => woodaeSelectedDelete(e.target.value)
                            "
							@click:afButtonBind="(isWoodaeDialogVisible = !isWoodaeDialogVisible)"
                        >
                            <template
                                v-slot:UiSelectedBox-favorite
                                v-if="favoriteItemsArrayWoodae"
                            >
                                <UiSelectedBoxFavorite title="우대조건">
                                    <template v-slot:slot-favorite>
                                        <template
                                            v-for="(
                                                item, index
                                            ) in favoriteItemsArrayWoodae"
                                            :key="index"
                                        >
                                            <Checkbox
                                                :name="item.name"
                                                :value="item.code"
                                                :checked="
                                                    woodaeSelected.find(
                                                        (o) =>
                                                            o.code === item.code
                                                    )
                                                "
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
                            @update:selecteddelete="
                                (e) => woodaeSelectedDelete(e.target.value)
                            "
                            @click:dialogVisibleToggle="
                                (isVisible) => isWoodaeDialogVisible = isVisible"
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
            jc: null,
            jg: null,
            limitJcJgSelectedLength: 3,
            jcjgSelected: [],
            jcFavorite: null,
            jgFavorite: null,
            isJcjgTooltipVisible: false,
            woodae: null,
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
            if (this.woodae) {
                return this.woodae
                    .filter(({ favorite }) => favorite.length)
                    .map((item) => item.favorite)
                    .reduce((prv, cur) => [...prv, ...cur]);
            }
        },
    },
    components: {
        RowLayout,
        Row,
        Col,
        Input,
        Checkbox,
        RowLayout,
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
        await this.$http
            .get(`${this.API_PATH_STATIC}/woodae.json`)
            .then(({ data }) => {
                if (data && data.length) {
                    this.woodae = data;
                }
            });
    },
    mounted() {},
    methods: {
        woodaebind(e) {
            let __chkBind = this.__fnSelectBoxCheckBind(e);
            let __limit = this.__fnIsLimitSelectBoxCheck(
                this.woodaeSelected,
                this.limitWoodaeSelectedLength
            );
            if (e.target.checked) {
                if (!__limit) {
                    __chkBind.isChecked((e, { code, name }) => {
                        this.woodaeSelected = [
                            ...this.woodaeSelected,
                            {
                                code,
                                name,
                            },
                        ];
                    });
                } else {
                    e.target.checked = false;
                    alert(
                        `우대사항은 ${this.limitWoodaeSelectedLength}개 까지 선택가능합니다.`
                    );
                }
            } else {
                __chkBind.unChecked(
                    (e, { code, name }) =>
                        (this.woodaeSelected = this.woodaeSelected.filter(
                            (object) => object.code !== code
                        ))
                );
            }
        },
        jcjgbind(e) {
            let __chkBind = this.__fnSelectBoxCheckBind(e);
            let __limit = this.__fnIsLimitSelectBoxCheck(
                this.jcjgSelected,
                this.limitJcJgSelectedLength
            );
            if (e.target.checked) {
                if (!__limit) {
                    __chkBind.isChecked((e, { code, name }) => {
                        this.jcjgSelected = [
                            ...this.jcjgSelected,
                            {
                                code,
                                name,
                            },
                        ];
                    });
                } else {
                    e.target.checked = false;
                    alert(
                        `직급/직책은 ${this.limitJcJgSelectedLength}개 까지 선택가능합니다.`
                    );
                }
            } else {
                __chkBind.unChecked(
                    (e, { code, name }) =>
                        (this.jcjgSelected = this.jcjgSelected.filter(
                            (object) => object.code !== code
                        ))
                );
            }
        },
        jcjgSelectedDelete(code) {
            this.jcjgSelected = this.jcjgSelected.filter(
                (object) => object.code !== code
            );
        },
        woodaeSelectedDelete(code) {
            this.woodaeSelected = this.woodaeSelected.filter(
                (object) => object.code !== code
            );
        },
    },
};
</script>
