<template>
    <!-- 지원자격:S -->
    <div class="jbCBoxing" data-fullpage="1">
        <div class="jbTits">지원자격</div>
        <div class="jbSTits">지원자격은 어떻게 되나요?</div>

        <!-- 학력:S -->
        <RowLayout title="학력">
            <Row class="FLEX">
                <Col class="col35">
                    <Select v-model="hckGubun">
                        <option value="0">학력무관</option>
                        <option value="6">고등학교 미만 졸업</option>
                        <option value="1">고등학교 졸업</option>
                        <option value="2">대학(2,3)년 졸업</option>
                        <option value="3">대학교(4년) 졸업</option>
                        <option value="4">대학원 (석사수료)</option>
                        <option value="5">대학원 (박사수료)</option>
                    </Select>
                </Col>
                <Col class="col00" style="width: 350px">
                    <Input placeholder="(선택) 기타 학력사항" />
                </Col>
                <Col class="col00 ML15 FLEX ALIGN_ITEM_CENTER">
                    <Checkbox size="lg">졸업예정자 가능</Checkbox>
                </Col>
            </Row>
        </RowLayout>
        <!-- 학력:E -->
        <!-- 외국어:S -->
        <RowLayout title="외국어" :subtitle="`(${langageSelected.length}/6)`" class="MT30">
            <UiSelectedBox
                title="외국어"
                :selected="langageSelected"
                @click:afRightButtonBind="isLangageDialogVisible = true"
                @update:selectBindDelete="
                    (e) =>
                        lcFnSelectedDelete({
                            code: e.target.value,
                            seleted: 'langageSelected',
                        })
                "
                :isJumsuTemplate="true"
                :jumsuList="langageSelected"
                @click:jumsuListDelete="
                    (e) =>
                        lcFnSelectedDelete({
                            code: e.target.value,
                            seleted: 'langageSelected',
                        })
                "
            >
                <template v-slot:UiSelectedBox-favorite>
                    <UiSelectedBoxFavorite title="외국어">
                        <template v-slot:slot-favorite>
                            <template v-for="(item, index) in langageFavorite" :key="index">
                                <Checkbox
                                    :addSelectButton="true"
                                    :name="item.name"
                                    :model-value="item.code"
                                    :checked="langageSelected.find(({ code }) => code === item.code)"
                                    @change="lanagebind"
                                    >{{ item.name }}</Checkbox
                                >
                            </template>
                        </template>
                    </UiSelectedBoxFavorite>
                </template>
            </UiSelectedBox>
            <template v-if="langage">
                <UiSelectedBoxDialog
                    title="외국어"
                    subtitle="최대 6개까지 선택 가능"
                    :selectLists="langage"
                    :selectedLists="langageSelected"
                    :visible="isLangageDialogVisible"
                    @click:selectedInitializeButton="langageSelected = []"
                    @click:dialogVisibleToggle="(isVisible) => (isLangageDialogVisible = isVisible)"
                    @update:selectedbind="lanagebind"
                    @update:selecteddelete="
                        (e) =>
                            lcFnSelectedDelete({
                                code: e.target.value,
                                seleted: 'langageSelected',
                            })
                    "
                />
            </template>
        </RowLayout>
        <!-- 외국어:E -->
        <!-- 자격증:S -->
        <RowLayout title="자격증" :subtitle="`(${licenseSelected.length}/3)`" class="MT30">
            <UiSelectedBox
                title="자격증"
                :selected="licenseSelected"
                @click:afRightButtonBind="isLicenseDialogVisible = true"
                @update:selectBindDelete="
                    (e) =>
                        lcFnSelectedDelete({
                            code: e.target.value,
                            seleted: 'licenseSelected',
                        })
                "
            >
                <template v-slot:UiSelectedBox-favorite>
                    <UiSelectedBoxFavorite title="자격증">
                        <template v-slot:slot-favorite>
                            <template v-for="(item, index) in licenseFavorite" :key="index">
                                <Checkbox
                                    :addSelectButton="true"
                                    :name="item.name"
                                    :model-value="item.code"
                                    :checked="licenseSelected.find(({ code }) => code === item.code)"
                                    @change="licensebind"
                                    >{{ item.name }}</Checkbox
                                >
                            </template>
                        </template>
                    </UiSelectedBoxFavorite>
                </template>
            </UiSelectedBox>
            <template v-if="license">
                <UiSelectedBoxDialog
                    title="자격증"
                    subtitle="최대 3개까지 선택 가능"
                    :selectLists="license"
                    :selectedLists="licenseSelected"
                    :visible="isLicenseDialogVisible"
                    :isDialogHeader="true"
                    :isDialogContent="false"
                    @click:selectedInitializeButton="licenseSelected = []"
                    @click:dialogVisibleToggle="(isVisible) => (isLicenseDialogVisible = isVisible)"
                    @update:selectedbind="licensebind"
                    @update:selecteddelete="
                        (e) =>
                            lcFnSelectedDelete({
                                code: e.target.value,
                                seleted: 'licenseSelected',
                            })
                    "
                >
                    <template v-slot:dialogHeader>
                        <SearchBar placeholder="자격증명을 입력하세요." :modelValue="keyword" @update:modelValue="fnKeyword">
                            <template v-slot:list>
                                <template v-for="(item, index) in keywordData" :key="index">
                                    <SearchBarListItems :id="`chk_${item.code}_${index}`" :name="item.name" :keyword="keyword" :code="item.code" @change="licensebind" />
                                </template>
                            </template>
                        </SearchBar>
                    </template>
                </UiSelectedBoxDialog>
            </template>
        </RowLayout>
        <!-- 자격증:E -->
        <!-- 우대전공:S -->
        <RowLayout title="우대전공" class="MT30">
            <UiSelectedBox
                title="우대전공"
                :selected="woodaeUniSelected"
                @click:afRightButtonBind="isWoodaeUniDialogVisible = true"
                @update:selectBindDelete="
                    (e) =>
                        lcFnSelectedDelete({
                            code: e.target.value,
                            seleted: 'woodaeUniSelected',
                        })
                "
            >
                <template v-slot:UiSelectedBox-favorite>
                    <UiSelectedBoxFavorite>
                        <template v-slot:slot-favorite>
                            <template v-for="(item, index) in woodaeUniFavorite" :key="index">
                                <Checkbox
                                    :addSelectButton="true"
                                    :name="item.name"
                                    :value="item.code"
                                    :checked="woodaeUniSelected.find(({ code }) => item.code === code)"
                                    @change="woodaeUnibind"
                                    >{{ item.name }}</Checkbox
                                >
                            </template>
                        </template>
                    </UiSelectedBoxFavorite>
                </template>
            </UiSelectedBox>
            <UiSelectedBoxDialog
                title="우대전공"
                subtitle="6개까지 입력 가능"
                :visible="isWoodaeUniDialogVisible"
                :selectLists="woodaeUni"
                :selectedLists="woodaeUniSelected"
                @click:dialogVisibleToggle="isWoodaeUniDialogVisible = false"
                @click:selectedInitializeButton="woodaeUniSelected = []"
                @update:selectedbind="woodaeUnibind"
            />
        </RowLayout>

        <!-- 우대전공:E -->
        <!-- 성별제한:S -->
        <RowLayout title="성별제한" class="MT30">
            <Row class="FLEX ALIGN_ITEM_CENTER JUSTIFY_ITEM_CENTER">
                <Col class="col00 MT10" style="margin-right: auto">
                    <RadioGroup>
                        <Radio v-model="jenderGubun" name="jender_gubun" label="성별무관" value="99" checked />
                        <Radio v-model="jenderGubun" name="jender_gubun" label="남자" cssClass="ML20" value="man" />
                        <Radio v-model="jenderGubun" name="jender_gubun" label="여자" cssClass="ML20" value="woman" />
                    </RadioGroup>
                </Col>
                <Col class="col00" style="margin-left: auto">
                    <div class="jbAntoTxts TXTR">
                        <span class="lbwx">성차별금지 - </span>
                        <button class="antx" @click="ediDialogVisible001 = true">남녀고용평등에 관한 법률보기</button>
                    </div>
                    <Dialog title="성차별법금지 주요내용" :visible="ediDialogVisible001" @click:dialogVisibleToggle="ediDialogVisible001 = false" v-if="ediDialogVisible001">
                        <div class="jbInfos tp2 MT10">
                            <div class="inf_tx noindent">
                                모집.채용에서 남녀를 차별하거나, 여성근로자를 채용할 때 직무 수행이 불필요한 용모, 키, 체중등의 신체조건, 미혼조건을 제시 또는 요구하는 경우
                                남녀고용평등과 일·가정 양립 지원에 관한 법률 위반에 따른
                                <span class="cb">500만원 이하의 벌금</span>이 부과될 수 있습니다.
                            </div>
                        </div>
                        <div class="djCnTbl tleft MT25">
                            <table>
                                <colgroup>
                                    <col width="150px" />
                                    <col width="auto" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>관련법령</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">
                                                    남녀고용평등과 일·가정 양립 지원에 관한 법률 제7조 1항에 의거 근로자를 모집하거나 채용 시 합리적인 이유없이 남녀를 차별할 수
                                                    없음<br />
                                                    <span class="cb">&lt;차별 시 500만원 이하 벌금&gt;</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>차별사례</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">
                                                    특정성을 지칭하는 직종명 등 사용하는 경우, 특정성 배제<br />
                                                    <span class="cg">- 남성 선반공, 병역필 남, 여성 비서, 미용사 &lt;여성 환영&gt; 등</span>
                                                </div>
                                                <br />
                                                <div class="inf_tx noindent">
                                                    직종 등 남녀 분리모집 등<br />
                                                    <span class="cg">- 관리·사무직 남성 10명, 판매직 여성 5명</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>차별로 보지않는 사례</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">
                                                    직무성질상 특정한 성이 불가피한 경우<br />
                                                    <span class="cg">- 남성역할 위한 배우·모델 등</span><br />
                                                    <span class="cg">- 여성 목욕탕의 여성 목욕관리사, 여성 장애인·여성 환자의 도우미 등</span><br />
                                                    <span class="cg">- 여성 기숙사의 여성사감 등</span><br /><br />

                                                    현존하는 차별 없애거나 고용평등 촉진위해 잠정적으로 특정성 우대하는 조치를 하는 경우
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Dialog>
                </Col>
            </Row>
        </RowLayout>
        <!-- 성별제한:E -->
        <!-- 연령제한:S -->
        <RowLayout title="연령제한">
            <Row class="FLEX ALIGN_ITEM_CENTER">
                <Col class="col00 MT10" style="margin-right: auto">
                    <RadioGroup>
                        <Radio label="연령무관" name="limit_age_gubun" value="N" v-model="limitAgeGubun" checked />
                        <Radio label="연령제한" name="limit_age_gubun" cssClass="ML20" value="Y" v-model="limitAgeGubun" />
                    </RadioGroup>
                </Col>
                <Col class="col00" style="margin-left: auto">
                    <div class="jbAntoTxts TXTR">
                        <span class="lbwx">연령별금지 - </span>
                        <button class="antx" @click="ediDialogVisible002 = true">고용상 연령차별 금지에 관한 법률보기</button>
                    </div>
                    <Dialog title="연령차별금지 주요내용" :visible="ediDialogVisible002" @click:dialogVisibleToggle="ediDialogVisible002 = false" v-if="ediDialogVisible002">
                        <div class="jbInfos tp2 MT10">
                            <div class="inf_tx noindent">
                                채용공고에 합리적인 이유 없이 “○○세 이하“. “19○○년 이후 출생자”, “20○○년 졸업자”, “대학 졸업 후 2년 이내”등 직·간적적인 연령제한을 할 수 없게
                                되었습니다. 모집·채용에서
                                <span class="cb">불합리한 연령 제한 시</span>
                                고용상 연령차별 금지 및 고령자 고용촉진에 관한 법률 위반에 따른
                                <span class="cb">500만원 이하의 벌금</span>이 부과될 수 있습니다.
                            </div>
                        </div>
                        <div class="djCnTbl tleft MT25">
                            <table>
                                <colgroup>
                                    <col width="150px" />
                                    <col width="auto" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>관련법령</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">
                                                    고용상 연령차별 금지 및 고령자 고용촉진에 관한 법률<br />
                                                    제4조의 4 제1항 제1호의 의거 근로자를 모집하거나 채용 시 합리적인 이유 없이 연령을 이유로 차별할 수 없음<br />
                                                    <span class="cb">&lt;차별 시 500만원 이하 벌금&gt;</span><br />
                                                    <span class="cb">&lt;시정명령 불이행 시 3천만원 이하의 과태료 부과&gt;</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>차별사례</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">원자의 나이를 제한하거나 특정 연령층을 선호하는 경우</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>차별로 보지않는 사례</th>
                                        <td>
                                            <div class="jbInfos tp2">
                                                <div class="inf_tx noindent">
                                                    직무 성질상 특정 연령기준이 불가피한 경우 (진정직업자격)<br />
                                                    <span class="cg">- 연극·영화에서 청년 역할의 수행을 위한 연령 제한 등</span><br />
                                                    <span class="cg">- 여성 목욕탕의 여성 목욕관리사,여성 장애인·여성 환자의 도우미 등</span><br />
                                                    <span class="cg">- 여성 기숙사의 여성사감 등</span><br /><br />

                                                    현존하는 차별을 없애거나 고용평등 촉진을 위해 잠정적으로 특정성 우대하는 조치를 하는 경우 등
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Dialog>
                </Col>
            </Row>
            <Row class="MT15" v-if="limitAgeGubun == 'Y'">
                <Col class="col00">
                    <Input type="number" placeholder="숫자" />
                </Col>
                <Col class="col00">
                    <span class="jbStatText MT15">세 이상 ~</span>
                </Col>
                <Col class="col00">
                    <Input type="number" placeholder="숫자" />
                </Col>
                <Col class="col00">
                    <span class="jbStatText MT15">세 이하</span>
                </Col>
            </Row>
        </RowLayout>
        <!-- 연령제한:E -->
    </div>
    <!-- 지원자격:E -->
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
import SearchBar from "@/components/UiComponents/SearchBar";
import SearchBarListItems from "@/components/UiComponents/SearchBarListItems";
import RadioGroup from "@/components/Form/RadioGroup";
import Radio from "@/components/Form/Radio";
import Dialog from "@/components/Dialog/Dialog";
import mixin from "@/mixin";
export default {
    mixins: [mixin],
    data() {
        return {
            //학력
            hckGubun: 0,
            //외국어
            langage: undefined,
            langageSelected: [
                {
                    code: "LA003001",
                    name: "HSK",
                    required: false,
                    rate: 3,
                },
                {
                    code: "LA002003",
                    name: "JLRT",
                    required: true,
                    rate: 2,
                },
            ],
            isLangageDialogVisible: false,
            limitLangageSelectedLength: 6,
            license: undefined,
            licenseSelected: [
                {
                    name: "IBA세계경호협회-특수경호실무사(경호 1,2,3급)",
                    code: "LIC0165",
                },
                {
                    name: "(재)종이문화재단-고지공예지도사(마스터, 1,2급)",
                    code: "LIC0166",
                },
            ],
            isLicenseDialogVisible: false,
            limitLicenseSelectedLength: 3,

            //우대전공
            woodaeUni: undefined,
            woodaeUniSelected: [],
            isWoodaeUniDialogVisible: false,
            limitWoodaeUniSelectedLength: 6,

            //성차별법금지
            ediDialogVisible001: false,
            ediDialogVisible002: false,
            limitAgeGubun: "N",
            jenderGubun: "99",

            //테스트
            keywordData: undefined,
            keyword: "",
        };
    },
    computed: {
        langageFavorite() {
            return this.__fnComputeFavorite("langage");
        },
        woodaeUniFavorite() {
            return this.__fnComputeFavorite("woodaeUni");
        },
        licenseFavorite() {
            if (this.license) {
                return this.license.favorite;
            } else {
                return [];
            }
        },
    },
    async created() {
        await this.$http.get(`${this.API_PATH_STATIC}/langage.json`).then(({ data, ...props }) => (this.langage = data));
        await this.$http.get(`${this.API_PATH_STATIC}/license.json`).then(({ data, ...props }) => {
            this.license = data;
            this.keywordData = data.data;
        });
        await this.$http.get(`${this.API_PATH_STATIC}/woodae_univers.json`).then(({ data, ...props }) => (this.woodaeUni = data));
    },
    methods: {
        woodaeUnibind(e) {
            this.lcFnBind(e, {
                seleted: "woodaeUniSelected",
                selectedLengh: "limitWoodaeUniSelectedLength",
                alertMsg: `우대전공은 ${this.limitWoodaeUniSelectedLength}개 까지 선택가능합니다.`,
            });
        },
        licensebind(e) {
            this.lcFnBind(e, {
                seleted: "licenseSelected",
                selectedLengh: "limitLicenseSelectedLength",
                alertMsg: `자격증은 ${this.limitLicenseSelectedLength}개 까지 선택가능합니다.`,
            });
        },
        lanagebind(e) {
            this.lcFnBind(e, {
                seleted: "langageSelected",
                selectedLengh: "limitLangageSelectedLength",
                alertMsg: `외국어는 ${this.limitLangageSelectedLength}개 까지 선택가능합니다.`,
            });
        },
        lcFnBind(e, { seleted, selectedLengh, ...props }) {
            let __chkBind = this.__fnSelectBoxCheckBind(e);
            let __limit = this.__fnIsLimitSelectBoxCheck(this[seleted], this[selectedLengh]);
            if (e.target.checked) {
                if (!__limit) {
                    __chkBind.isChecked((e, { code, name, ...props }) => {
                        this[seleted] = [
                            ...this[seleted],
                            {
                                code,
                                name,
                                ...props,
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
        fnKeyword(e) {
            let keyword = e.target.value;
            this.keywordData = this.license.data.filter(({ name }, index) => name.indexOf(keyword) != -1);
            this.keyword = keyword;
        },
        fnSearchListItems(e) {
            console.log(e);
        },
    },
    components: {
        RowLayout,
        Row,
        Col,
        Input,
        Select,
        Checkbox,
        RowLayout,
        UiSelectedBox,
        UiSelectedBoxTooltip,
        UiSelectedBoxFavorite,
        UiSelectedBoxDialog,
        SearchBar,
        SearchBarListItems,
        RadioGroup,
        Radio,
        Dialog,
    },
};
</script>