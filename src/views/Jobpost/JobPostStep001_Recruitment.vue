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
                        <Input :model-value="mzby_title" placeholder="아래 모집분야명을 입력해주세요." readonly />
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
                                <Input :model-value="mzby_title" @input="(e) => SET_MOZIPBUNYA_TITLE(e.target.value)" placeholder="EX) R&D, 경영지원" />
                            </Col>
                            <Col class="col3 inline FLEX ALIGN_ITEM_CENTER" style="width: 150px">
                                <Input type="number" :model-value="mzby_length" @input="(e) => SET_MOZIPBUNYA_LENGTH(e.target.value)" />
                                <span class="jbStatText ML10 NOWRAP">명 모집</span>
                            </Col>
                        </Row>
                    </RowLayout>
                    <!-- 모집분야:E -->
                    <!-- 경력여부:S -->
                    <RowLayout title="경력여부" class="MT35" required>
                        <Row class="FLEX">
                            <Col style="width: 100px" class="MT10">
                                <Checkbox size="default" @change="(e) => SET_MOZIPBUNYA_NEWCOMER(e)" :checked="mzby_newcomer">신입</Checkbox>
                            </Col>
                            <Col style="width: 100px" class="MT10">
                                <Checkbox size="default" value="Y" @change="(e) => SET_MOZIPBUNYA_CAREER(e)" :checked="mzby_career">경력</Checkbox>
                            </Col>
                            <template v-if="mzby_career">
                                <Col style="width: 200px">
                                    <Select :model-value="mzby_career_range" @change="(e) => SET_MOZIPBUNYA_CAREER_RANGE(e.target.value)">
                                        <option value="">년차</option>
                                        <option :value="item" v-for="(item, index) in [...new Array(15)].map((t, i) => i + 1)" :key="index">{{ item }}년차</option>
                                        <option value="99">15년차 이상</option>
                                    </Select>
                                </Col>
                                <Col class="ML20 MT10">
                                    <Checkbox size="default" @change="(e) => SET_MOZIPBUNYA_CAREER_ABSOLUTE(e)" :checked="mzby_career_absolute">경력무관</Checkbox>
                                </Col>
                            </template>
                        </Row>
                    </RowLayout>
                    <!-- 경력여부:E -->
                    <!-- 담당업무:S -->
                    <RowLayout title="담당업무" class="MT35">
                        <Input placeholder="담당업무를 자세히 기재할수록 지원율이 높아집니다." :model-value="mzby_respons" @input="(e) => SET_MOZIPBUNYA_RESPONS(e.target.value)" />
                    </RowLayout>
                    <!-- 담당업무:E -->
                    <!-- 근무부서:S -->
                    <RowLayout title="근무부서" class="MT20">
                        <Row>
                            <Col class="col6">
                                <Input placeholder="근무 부서명을 입력해 주세요." :model-value="mzby_partname" @input="(e) => SET_MOZIPBUNYA_PARTNAME(e.target.value)" />
                            </Col>
                        </Row>
                    </RowLayout>
                    <!-- 근무부서:E -->
                    <!-- 직급/직책:S -->
                    <RowLayout title="직급/직책" :subtitle="`(${mzby_jcjg_seleted.length}/3)`" class="MT20">
                        <UiSelectedBox
                            title="직급/직책"
                            :selected="mzby_jcjg_seleted"
                            nullMsg="직급/직책을 선택해주세요. (3개까지 입력 가능)"
                            @update:selectBindDelete="(e) => jcjgSelectedDelete(e.target.value)"
                            @click:afRightButtonBind="mzby_tooltip_isvisible = !mzby_tooltip_isvisible"
                        >
                            <template v-slot:UiSelectedBox-tooltip v-if="mzby_jc && mzby_jg && mzby_tooltip_isvisible">
                                <UiSelectedBoxTooltip :titleName="[mzby_jc.name, mzby_jg.name]" @click:visibleToggle="mzby_tooltip_isvisible = false">
                                    <template v-slot:slot-jc>
                                        <div class="colst w3" v-for="(item, index) in mzby_jc.data" :key="index">
                                            <Checkbox
                                                :model-value="item.code"
                                                :data-name="item.name"
                                                :checked="mzby_jcjg_seleted.find((d, i) => item.code === d.code)"
                                                @change="jcjgbind"
                                                >{{ item.name }}</Checkbox
                                            >
                                        </div>
                                    </template>
                                    <template v-slot:slot-jg>
                                        <div class="colst w3" v-for="(item, index) in mzby_jg.data" :key="index">
                                            <Checkbox
                                                :model-value="item.code"
                                                :data-name="item.name"
                                                :checked="mzby_jcjg_seleted.find((d, i) => item.code === d.code)"
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
                                                :checked="mzby_jcjg_seleted.find((o) => item.code === o.code)"
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
                    <RowLayout title="우대조건" :subtitle="`(${mzby_woodae_selected_length}/6)`" class="MT20 MB40">
                        <UiSelectedBox
                            title="우대조건"
                            :selected="mzby_woodae_selected"
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
                                                :checked="mzby_woodae_selected.find((o) => o.code === item.code)"
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
                            :selectLists="mzby_woodae"
                            :selectedLists="mzby_woodae_selected"
                            :limitSelectedLength="limitWoodaeSelectedLength"
                            @update:selectedbind="woodaebind"
                            @update:selecteddelete="(e) => woodaeSelectedDelete(e.target.value)"
                            @click:dialogVisibleToggle="(isVisible) => (isWoodaeDialogVisible = isVisible)"
                            @click:selectedInitializeButton="mzby_woodae_selected = []"
                        />
                    </RowLayout>
                    <!-- 우대조건:E -->
                </div>
            </div>
        </div>
        <!-- 모집분야 토글영역:E -->

        <!-- 모집분야 추가 버튼:S -->
        <button class="jbSectAddButton MT20" @click="lcSetSession">+모집분야 추가</button>
        <!-- 모집분야 추가 버튼:E -->
    </div>
    <!-- 모집분야:E -->
</template>

<script>
import {
    SET_MOZIPBUNYA_TITLE,
    SET_MOZIPBUNYA_LENGTH,
    SET_MOZIPBUNYA_NEWCOMER,
    SET_MOZIPBUNYA_CAREER,
    SET_MOZIPBUNYA_CAREER_RANGE,
    SET_MOZIPBUNYA_CAREER_ABSOLUTE,
    SET_MOZIPBUNYA_RESPONS,
    SET_MOZIPBUNYA_PARTNAME,
    SET_JOBPOST_SELETED,
    SET_JOBPOST_UNSELETED,
} from "@/store/mutations-type";
import { ELIGIBILITY } from "@/router/router-type";
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
import { jobpost } from "@/mixin";

export default {
    name: "모집분야",
    mixins: [jobpost],
    data() {
        return {
            mzby_jc: undefined,
            mzby_jg: undefined,
            mzby_jc_favorite: undefined,
            mzby_jg_favorite: undefined,
            mzby_tooltip_isvisible: false,
            limitJcJgSelectedLength: 3,
            mzby_woodae: undefined,
            limitWoodaeSelectedLength: 6,
            isWoodaeDialogVisible: false,
        };
    },
    computed: {
        ...mapState({
            mzby_title: (state) => state.jobpost.mzby_title,
            mzby_length: (state) => state.jobpost.mzby_length,
            mzby_newcomer: (state) => state.jobpost.mzby_newcomer,
            mzby_career: (state) => state.jobpost.mzby_career,
            mzby_career_range: (state) => state.jobpost.mzby_career_range,
            mzby_career_absolute: (state) => state.jobpost.mzby_career_absolute,
            mzby_respons: (state) => state.jobpost.mzby_respons,
            mzby_partname: (state) => state.jobpost.mzby_partname,
            mzby_jcjg_seleted: (state) => state.jobpost.mzby_jcjg_seleted,
            mzby_woodae_selected: (state) => state.jobpost.mzby_woodae_selected,
        }),
        ...mapGetters({
            mzby_jcjg_seleted_length: "jobpost/mzby_jcjg_seleted_length",
            mzby_woodae_selected_length: "jobpost/mzby_woodae_selected_length",
        }),
        favoriteItemsArrayJcJg() {
            if (this.mzby_jc_favorite && this.mzby_jg_favorite) {
                return [...this.mzby_jc_favorite, ...this.mzby_jg_favorite];
            } else {
                return false;
            }
        },
        favoriteItemsArrayWoodae() {
            return this.__fnComputeFavorite("mzby_woodae");
        },
    },
    created() {
        this.getSession({
            session_name: this.$options.name,
            commit_name: "setMoxipbunyaSession",
        });
        this.fetchStaticData(this.API_PATH_STATIC_JC).then((response) => {
            if (response && response.data) {
                this.mzby_jc = response.data;
                if (response.data.favorite) {
                    this.mzby_jc_favorite = response.data.favorite;
                }
            }
        });
        this.fetchStaticData(this.API_PATH_STATIC_JG).then((response) => {
            if (response && response.data) {
                this.mzby_jg = response.data;
                if (response.data.favorite) {
                    this.mzby_jg_favorite = response.data.favorite;
                }
            }
        });
        this.fetchStaticData(this.API_PATH_STATIC_WOODAE).then((response) => {
            if (response && response.data) {
                this.mzby_woodae = response.data;
            }
        });
    },
    methods: {
        ...mapMutations({
            [SET_MOZIPBUNYA_TITLE]: `jobpost/${SET_MOZIPBUNYA_TITLE}`,
            [SET_MOZIPBUNYA_LENGTH]: `jobpost/${SET_MOZIPBUNYA_LENGTH}`,
            [SET_MOZIPBUNYA_NEWCOMER]: `jobpost/${SET_MOZIPBUNYA_NEWCOMER}`,
            [SET_MOZIPBUNYA_CAREER]: `jobpost/${SET_MOZIPBUNYA_CAREER}`,
            [SET_MOZIPBUNYA_CAREER_RANGE]: `jobpost/${SET_MOZIPBUNYA_CAREER_RANGE}`,
            [SET_MOZIPBUNYA_CAREER_ABSOLUTE]: `jobpost/${SET_MOZIPBUNYA_CAREER_ABSOLUTE}`,
            [SET_MOZIPBUNYA_RESPONS]: `jobpost/${SET_MOZIPBUNYA_RESPONS}`,
            [SET_MOZIPBUNYA_PARTNAME]: `jobpost/${SET_MOZIPBUNYA_PARTNAME}`,
            [SET_JOBPOST_SELETED]: `jobpost/${SET_JOBPOST_SELETED}`,
            [SET_JOBPOST_UNSELETED]: `jobpost/${SET_JOBPOST_UNSELETED}`,
        }),
        ...mapActions({
            fetchStaticData: `jobpost/fetchStaticData`,
            setSession: `jobpost/setSession`,
            getSession: `jobpost/getSession`,
        }),
        woodaebind(event) {
            this.SET_JOBPOST_SELETED({
                event,
                selected: "mzby_woodae_selected",
                selectedLengh: this.limitWoodaeSelectedLength,
                alertMsg: `우대사항은 ${this.limitWoodaeSelectedLength}개 까지 선택가능합니다.`,
            });
        },
        jcjgbind(event) {
            this.SET_JOBPOST_SELETED({
                event,
                selected: "mzby_jcjg_seleted",
                selectedLengh: this.limitJcJgSelectedLength,
                alertMsg: `직급/직책은 ${this.limitJcJgSelectedLength}개 까지 선택가능합니다.`,
            });
        },
        jcjgSelectedDelete(code) {
            this[SET_JOBPOST_UNSELETED]({ code, selected: "mzby_jcjg_seleted" });
        },
        woodaeSelectedDelete(code) {
            this[SET_JOBPOST_UNSELETED]({ code, selected: "mzby_woodae_selected" });
        },
        lcSetSession() {
            this.setSession({
                session_name: this.$options.name,
                session_value: {
                    mzby_title: this.mzby_title,
                    mzby_length: this.mzby_length,
                    mzby_newcomer: this.mzby_newcomer,
                    mzby_career: this.mzby_career,
                    mzby_career_range: this.mzby_career_range,
                    mzby_career_absolute: this.mzby_career_absolute,
                    mzby_respons: this.mzby_respons,
                    mzby_partname: this.mzby_partname,
                    mzby_jcjg_seleted: this.mzby_jcjg_seleted,
                    mzby_woodae_selected: this.mzby_woodae_selected,
                },
            }).then(() => {
                this.$router.push({ name: ELIGIBILITY });
            });
        },
    },
};
</script>
