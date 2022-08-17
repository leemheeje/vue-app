<template>
    <!-- 근무조건:S -->
    <div class="jbCBoxing" data-fullpage="2">
        <div class="jbTits">근무조건</div>
        <div class="jbSTits">우리 회사 근무조건은 어떻게 되나요?</div>

        <!-- 연봉/급여:S -->
        <RowLayout title="연봉/급여" required class="MT45">
            <Row class="FLEX ALIGN_ITEM_CENTER">
                <Col class="col3">
                    <Select v-model="payGubunSelectbox">
                        <option :value="value" v-for="({ value, name, ...props }, index) in payGubunOptions" :key="index">
                            {{ name }}
                        </option>
                    </Select>
                </Col>
                <Col class="col00">
                    <!-- 연봉선택시 :S -->
                    <Select style="width: 300px" v-if="payGubunSelectbox == 1" :disabled="chicAfterinterview">
                        <option value="">선택해주세요</option>
                        <option value="">2,200~2,500</option>
                    </Select>
                    <!-- 연봉선택시 :E -->
                    <!-- 월급선택시:S -->
                    <Input type="number" v-if="payGubunSelectbox == 2" :disabled="chicAfterinterview">
                        <template v-slot:inl>
                            <label class="inl">만원</label>
                        </template>
                    </Input>
                    <!-- 월급선택시:E -->
                    <!-- 주급선택시:S -->
                    <Input type="number" v-if="payGubunSelectbox == 3" :disabled="chicAfterinterview">
                        <template v-slot:inl>
                            <label class="inl">원</label>
                        </template>
                    </Input>
                    <!-- 주급선택시:E -->
                    <!-- 일급선택시:S -->
                    <Input type="number" v-if="payGubunSelectbox == 4" :disabled="chicAfterinterview">
                        <template v-slot:inl>
                            <label class="inl">원</label>
                        </template>
                    </Input>
                    <!-- 일급선택시:E -->
                    <!-- 시급선택시:S -->
                    <Input type="number" v-if="payGubunSelectbox == 5" :disabled="chicAfterinterview">
                        <template v-slot:inl>
                            <label class="inl">원</label>
                        </template>
                    </Input>
                    <!-- 시급선택시:E -->
                    <!-- 건당선택시:S -->
                    <Input type="number" v-if="payGubunSelectbox == 6" :disabled="chicAfterinterview">
                        <template v-slot:inl>
                            <label class="inl">원</label>
                        </template>
                    </Input>
                    <!-- 건당선택시:E -->
                </Col>
                <Col class="col00 ML10">
                    <Checkbox :checked="chicAfterinterview" size="lg" @change="$event.target.checked ? (chicAfterinterview = true) : (chicAfterinterview = false)"
                        >면접 후 결정
                    </Checkbox>
                </Col>
            </Row>
            <Row>
                <Col class="col12">
                    <div class="jbAntoTxts MT10">
                        <!-- 연봉일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 1">
                            최저시급 8,720원, 주 40시간 기준, 최저연봉 약 21,869,760원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 연봉일때 보여지는 영역:E -->
                        <!-- 월급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 2">
                            주 40시간 기준, 최저 월급 약 1,822,480원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 월급일때 보여지는 영역:E -->
                        <!-- 주급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 3">
                            주 40시간 기준, 최저 주급 약 348,800원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 주급일때 보여지는 영역:E -->
                        <!-- 일급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 4">
                            일 8시간 기준, 최저 일급 약 69,760원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 일급일때 보여지는 영역:E -->
                        <!-- 시급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 5">
                            최저시급 8,720원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 시급일때 보여지는 영역:E -->
                        <!-- 건당일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 6">
                            최저시급 8,720원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 건당일때 보여지는 영역:E -->
                        <!-- 회사내규에 따름일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 99">
                            최저시급 8,720원, 주 40시간 기준, 최저연봉 약 21,869,760원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 회사내규에 따름일때 보여지는 영역:E -->
                        <div class="lbwx">최저임금을 준수하지 않는 경우, 공고 강제 마감 및 행정처분을 받을 수 있습니다.</div>
                    </div>
                </Col>
            </Row>
        </RowLayout>
        <!-- 연봉/급여:E -->
        <!-- 근무형태:S -->
        <RowLayout title="근무형태" required class="MT20">
            <Row>
                <Col :class="`${item.value != 13 ? 'col2' : 'col12'} MT15`" v-for="(item, index) in workGubunCheckbox" :key="index">
                    <Checkbox :value="JSON.stringify(item)" :checked="workGubunChecked.find(({ value }) => value === item.value)" @change="fnWorkGubunChecked" size="lg">
                        {{ item.name }}
                        <span class="lbe" v-if="item.value == 13"> 출산·육아에 따른 대체인력을 채용형태 </span>
                    </Checkbox>
                </Col>
            </Row>
            <!-- 근무형태 별 추가입력폼:S -->
            <div class="jbAddFormArea MT10 MB10" v-if="Object.keys(workGubunChecked).length">
                <div class="jbaFormInners">
                    <!-- foreach:S -->
                    <template v-for="({ add_form, name, ...props }, index) in workGubunFilterAddForm" :key="index">
                        <div class="jbTps" v-if="workGubunChecked.find(({ value }) => value === props.value)">
                            <div class="jblts">
                                <span class="intx">ㆍ{{ name }} 근무기간</span>
                            </div>
                            <div class="jbcots">
                                <div class="jbForm inline MR20" style="width: 180px" v-if="add_form.hasOwnProperty('work_lange')">
                                    <Select :value="0">
                                        <option :value="item.value" v-for="(item, index) in workLange" :key="index">
                                            {{ item.name }}
                                        </option>
                                    </Select>
                                </div>
                                <div class="jbForm inline MR20" v-if="add_form.hasOwnProperty('worktype_convert')">
                                    <label><input type="checkbox" id="" name="" value="" /><span class="lb">정규직 전환가능</span></label>
                                </div>
                                <div class="jbForm inline MR20" v-if="add_form.hasOwnProperty('worktype_during')">
                                    <label><input type="checkbox" id="" name="" value="" /><span class="lb">기간제</span></label>
                                </div>
                                <div class="jbForm inline MR20" v-if="add_form.hasOwnProperty('worktype_eternal')">
                                    <label><input type="checkbox" id="" name="" value="" /><span class="lb">무기계약직</span></label>
                                </div>
                            </div>
                        </div>
                    </template>
                    <!-- foreach:E -->
                </div>
            </div>
            <!-- 근무형태 별 추가입력폼:E -->
        </RowLayout>
        <!-- 근무형태:E -->
        <!-- 근무지 주소:S -->
        <RowLayout title="근무지 주소" required class="MT20">
            <Row>
                <Col class="col00 MT15">
                    <RadioGroup>
                        <Radio name="partAdressGubun" value="1" v-model="partAdressGubun" checked label="국내" />
                        <Radio name="partAdressGubun" value="99" v-model="partAdressGubun" label="해외" cssClass="ML25" />
                    </RadioGroup>
                </Col>
                <Col class="col00 MT15 ML15">
                    <Checkbox size="lg">재택근무 가능</Checkbox>
                </Col>
            </Row>
            <Row>
                <Col class="col12 MT20">
                    <AddToggleBox>
                        <template v-slot:AddToggleBoxDivision>
                            <Row v-if="partAdressGubun == 1">
                                <Col class="col12" style="width: 500px;">
                                    <Input placeholder="주소를 입력해 주세요" @click="__kakaoPostCodeShow" v-model="__kakaoPostCodes.addr1" readonly />
                                </Col>
                                <Col class="col9 MT05">
                                    <Input placeholder="상세 주소 입력" v-model="__kakaoPostCodes.addr2"/>
                                </Col>
                                <Col class="col3 MT05">
                                    <Button :href="__kakaoPostCodeHref" target="_blank">지도위치확인</Button>
                                </Col>
                            </Row>
                            <Row v-else>
                               <Col class="col12" style="width: 400px;">
                                    <Select>
                                        <option value="">국가선택</option>
										<option v-for="(item,index) in partAdressCountryCode" :key="index" :value="item.ISO">{{item.name}}</option>
                                    </Select>
                                </Col>
                                <Col class="col45 MT05" style="width: 825px">
                                    <Input placeholder="해외 근무지역의 상세주소를 입력해 주세요." />
                                </Col>
                            </Row>
                        </template>
                    </AddToggleBox>
                </Col>
            </Row>
        </RowLayout>
        <!-- 근무지 주소:E -->
        <!-- 근무지역:S -->
        <RowLayout title="근무지역" required class="MT20">
            <UiSelectedBox
                title="근무지역"
                :selected="workAdressSelectedConv"
                @click:afRightButtonBind="isWorkAdressDialogVisible = true"
                @update:selectBindDelete="(e) => workAdressSelectedDelete(e.target.value)"
            />
            <UiSelectedBoxDialog
                title="근무지역"
                subtitle="최대 6개까지 선택 가능"
                :selectLists="workAdressList"
                :selectedLists="workAdressSelectedConv"
                :visible="isWorkAdressDialogVisible"
                :isDialogHeader="true"
                @click:dialogVisibleToggle="isWorkAdressDialogVisible = false"
                @update:selectedbind="workAdressbind"
                @update:selecteddelete="(e) => workAdressSelectedDelete(e.target.value)"
                @click:selectedInitializeButton="workAdressSelected = []"
                v-if="workAdressList"
            >
                <template v-slot:dialogHeader>
                    <SearchBar v-model="workAdressSearchBarModel" cssClass="MB10" placeholder="지역명을 입력하세요.">
                        <template v-slot:list>
                            <SearchBarListItems
                                v-for="(item, index) in workAdressSearchBarList"
                                :key="index"
                                :id="`ck_${item.code}_${index}`"
                                :keyword="workAdressSearchBarModel"
                                :code="item.code"
                                :name="item.name"
                                :data-label="item.label"
                                @change="workAdressbind"
                            />
                        </template>
                    </SearchBar>
                </template>
            </UiSelectedBoxDialog>
        </RowLayout>
        <!-- 근무지역:E -->
        <!-- 인근지하철:S -->
        <RowLayout title="인근지하철" :subtitle="`(${subwaySelected.length}/5)`" class="MT20">
            <UiSelectedBox
                title="인근지하철"
                :selected="subwaySelectedConv"
                @click:afRightButtonBind="isSubwayDialogVisible = true"
                @update:selectBindDelete="(e) => subwaySelectedDelete(e.target.value)"
            />
            <UiSelectedBoxDialog
                title="인근지하철"
                :subtitle="`최대 ${limitSubwaySelectedLength}개까지 선택 가능`"
                :isDialogHeader="true"
                :isDialogContent="false"
                :visible="isSubwayDialogVisible"
                :selectLists="subwaySelectedConv"
                @click:dialogVisibleToggle="isSubwayDialogVisible = false"
                @click:selectedInitializeButton="subwaySelected = []"
            >
                <template v-slot:dialogHeader>
                    <SearchBar v-model="subwayKeyword" placeholder="지하철명을 입력하세요." @keyup="fnSubwayKeyupBind">
                        <template v-slot:list>
                            <!-- subwaySearchBarList = [{
								"subwayRouteName": "공항",
								"subwayStationId": "MTRARA1A01",
								"subwayStationName": "서울역"
							}] -->
                            <SearchBarListItems
                                v-for="({ subwayRouteName, subwayStationId, subwayStationName, ...props }, index) in subwaySearchBarList"
                                :id="`ck_${subwayStationId}_${index}`"
                                :key="index"
                                :keyword="subwayKeyword"
                                :code="subwayStationId"
                                :name="subwayStationName"
                                :data-label="`${subwayRouteName} > `"
                                @change="subwaybind"
                            />
                        </template>
                    </SearchBar>
                </template>
                <template v-slot:isFooterTemplate>
                    <!-- 선택된영역이있을때:S -->
                    <div class="jbAddFormArea lglb MT10" v-if="Object.keys(subwaySelectedConv).length">
                        <!-- foreach:S -->
                        <div class="jbTps" v-for="({ label, code, name, ...props }, index) in subwaySelectedConv" :key="index">
                            <div class="jblts">
                                <span class="intx">{{ `${label}${name}` }}</span>
                            </div>
                            <div class="jbcots">
                                <div class="jbForm inline MR10" style="width: 80px">
                                    <input type="text" value="" name="" id="" class="TXTR" />
                                </div>
                                <span class="jbStatText MR10">번 출구</span>
                                <div class="jbForm inline MR10" style="width: 160px">
                                    <select>
                                        <option value="">거리선택</option>
                                    </select>
                                </div>
                                <span class="jbStatText">이내</span>
                                <button
                                    class="jbls_de"
                                    title="삭제"
                                    :value="code"
                                    @click="
                                        (e) => {
                                            this.subwaySelected = this.subwaySelected.filter((item) => item.subwayStationId !== e.target.value && item.code !== e.target.value);
                                        }
                                    "
                                ></button>
                            </div>
                        </div>
                        <!-- foreach:E -->
                    </div>
                    <!-- 선택된영역이있을때:E -->
                    <!-- 선택된영역이없을때:S -->
                    <Nullmsg v-else>{{ `선택한 항목이 없습니다.` }}</Nullmsg>
                    <!-- 선택된영역이없을때:E -->
                </template>
            </UiSelectedBoxDialog>
        </RowLayout>
        <!-- 인근지하철:E -->
        <!-- 근무요일:S -->
        <RowLayout title="근무요일" class="MT20">
            <Row class="FLEX ALIGN_ITEM_CENTER">
                <Col class="col25">
                    <Select v-model="workDayGubun">
                        <option value="">선택해주세요</option>
                        <option value="7">주3일근무</option>
                        <option value="6">주4일근무</option>
                        <option value="1">주5일근무</option>
                        <option value="2">주6일근무</option>
                        <option value="4">재택근무</option>
                        <option value="10">직접입력</option>
                    </Select>
                </Col>
                <Col class="col00" v-if="workDayGubun == 10">
                    <Input placeholder="근무요일을 입력해주세요." style="width: 368px" />
                </Col>
                <!-- <Col class="col00 ML10">
                    <Checkbox
                        @change="
                            
                        "
                        size="lg"
                        >요일 직접선택</Checkbox
                    >
                </Col> -->
            </Row>
            <div class="jbAddFormArea MT10 MB20" v-if="workDayGubun == 7 || workDayGubun == 6 || workDayGubun == 1 || workDayGubun == 2">
                <div class="jbaFormInners FLEX ALIGN_ITEM_CENTER" style="justify-content: space-between">
                    <Checkbox v-for="(item, index) in workWeekList" :key="index" :value="item.value" size="lg">
                        {{ item.name }}
                    </Checkbox>
                </div>
            </div>
        </RowLayout>
        <!-- 근무요일:E -->
        <!-- 근무시간:S -->
        <RowLayout title="근무시간">
            <AddToggleBox
                @click:AddToggleBox="workTimeAddEvent"
                @click:MinToggleBox="workTimeMinEvent"
                :sq_code="item.sq_code"
                v-for="(item, index) in workTimeToggleArray"
                :key="index"
            >
                <!-- start_hour, start_minu, end_hour, end_minu, etc_ischecked, etc_input, work_flexible -->
                <template v-slot:AddToggleBoxDivision>
                    <Row>
                        <Col class="col00">
                            <Select v-model="item.start_hour" style="width: 100px">
                                <option :value="item" v-for="(item, index) in workHourArray" :key="index">{{ item }}시</option>
                            </Select>
                        </Col>
                        <Col class="col00">
                            <Select v-model="item.start_minu" style="width: 100px">
                                <option :value="item" v-for="(item, index) in workMinuArray" :key="index">{{ item }}분</option>
                            </Select>
                        </Col>
                        <Col class="col00">
                            <span class="jbStatText MT15">~</span>
                        </Col>
                        <Col class="col00">
                            <Select v-model="item.end_hour" style="width: 100px">
                                <option :value="item" v-for="(item, index) in workHourArray" :key="index">{{ item }}시</option>
                            </Select>
                        </Col>
                        <Col class="col00">
                            <Select v-model="item.end_minu" style="width: 100px">
                                <option :value="item" v-for="(item, index) in workMinuArray" :key="index">{{ item }}분</option>
                            </Select>
                        </Col>
                    </Row>
                </template>
                <template v-slot:AddToggleBoxButtonArea>
                    <Checkbox
                        size="lg"
                        cssClass="ML10"
                        :value="item.sq_code"
                        @change="(e) => (e.target.checked ? (item.work_flexible = true) : (item.work_flexible = false))"
                        :checked="item.work_flexible"
                        v-if="item.hasOwnProperty('etc_ischecked')"
                        >탄력근무제 가능</Checkbox
                    >
                    <Checkbox
                        size="lg"
                        cssClass="ML10"
                        :value="item.sq_code"
                        @change="(e) => (e.target.checked ? (item.etc_ischecked = true) : (item.etc_ischecked = false))"
                        :checked="item.etc_ischecked"
                        v-if="item.hasOwnProperty('etc_ischecked')"
                        >기타사항입력</Checkbox
                    >
                </template>
                <template v-slot:AddToggleBoxAntArea v-if="item.etc_ischecked">
                    <Input placeholder="기타사항을 입력해 주세요" v-model="item.etc_input" />
                </template>
            </AddToggleBox>
        </RowLayout>
        <!-- 근무시간:E -->
    </div>
    <!-- 근무조건:E -->
</template>

<script>
import RowLayout from "@/components/Layout/RowLayout";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import Checkbox from "@/components/Form/Checkbox";
import UiSelectedBox from "@/components/UiComponents/UiSelectedBox";
import UiSelectedBoxDialog from "@/components/UiComponents/UiSelectedBoxDialog";
import SearchBar from "@/components/UiComponents/SearchBar";
import SearchBarListItems from "@/components/UiComponents/SearchBarListItems";
import RadioGroup from "@/components/Form/RadioGroup";
import Radio from "@/components/Form/Radio";
import AddToggleBox from "@/components/UiComponents/AddToggleBox";
import Nullmsg from "@/components/Form/Nullmsg";
import Button from "@/components/Form/Button";
import mixin from "@/mixin";
import { debounce } from "lodash";
import { SUBWAY_INFO_KEY } from "@/config";
export default {
    mixins: [mixin],
    data() {
        return {
            //연봉/급여
            chicAfterinterview: false,
            payGubunSelectbox: 1,
            payGubunOptions: undefined,

            //근무형태
            workGubunChecked: [
                {
                    value: 1,
                    name: "정규직",
                    add_form: {
                        work_lange: 0,
                    },
                },
                {
                    value: 2,
                    name: "계약직",
                    add_form: {
                        work_lange: 0,
                        worktype_convert: false,
                        worktype_during: false,
                        worktype_eternal: false,
                    },
                },
            ],
            workGubunCheckbox: [
                {
                    value: 1,
                    name: "정규직",
                    add_form: {
                        work_lange: 0,
                    },
                },
                {
                    value: 2,
                    name: "계약직",
                    add_form: {
                        work_lange: 0,
                        worktype_convert: false,
                        worktype_during: false,
                        worktype_eternal: false,
                    },
                },
                {
                    value: 3,
                    name: "인턴",
                    add_form: {
                        work_lange: 0,
                        worktype_convert: false,
                    },
                },
                {
                    value: 4,
                    name: "파견직",
                    add_form: {
                        work_lange: 0,
                        worktype_convert: false,
                    },
                },
                {
                    value: 5,
                    name: "프리랜서",
                    add_form: {
                        work_lange: 0,
                        worktype_convert: false,
                    },
                },
                {
                    value: 6,
                    name: "파트타임",
                },
                {
                    value: 7,
                    name: "위촉직",
                },
                {
                    value: 8,
                    name: "아르바이트",
                    add_form: {
                        work_lange: 0,
                    },
                },
                {
                    value: 9,
                    name: "병역특례",
                },
                {
                    value: 10,
                    name: "전임",
                },
                {
                    value: 11,
                    name: "교육생",
                },
                {
                    value: 12,
                    name: "해외취업",
                },
                {
                    value: 13,
                    name: "대체인력",
                    add_form: {
                        work_lange: 0,
                        worktype_convert: false,
                    },
                },
            ],
            workLange: [...new Array(16)].map((c, i) => {
                return {
                    value: i,
                    name: ((_i) => {
                        let nm = "";
                        switch (_i) {
                            case 0:
                                nm = "기간선택";
                                break;
                            case 1:
                                nm = "1개월";
                                break;
                            case 2:
                                nm = "2개월";
                                break;
                            case 3:
                                nm = "3개월";
                                break;
                            case 4:
                                nm = "4개월";
                                break;
                            case 5:
                                nm = "5개월";
                                break;
                            case 6:
                                nm = "6개월";
                                break;
                            case 7:
                                nm = "7개월";
                                break;
                            case 8:
                                nm = "8개월";
                                break;
                            case 9:
                                nm = "9개월";
                                break;
                            case 10:
                                nm = "10개월";
                                break;
                            case 11:
                                nm = "11개월";
                                break;
                            case 12:
                                nm = "12개월";
                                break;
                            case 13:
                                nm = "1년 6개월";
                                break;
                            case 14:
                                nm = "2년";
                                break;
                            case 15:
                                nm = "협의 후 결정";
                                break;
                        }
                        return nm;
                    })(i),
                };
            }),

            //근무요일
            workWeekList: undefined,
            workHourArray: [...new Array(24)].map((c, i) => i + 1),
            workMinuArray: [...new Array(6)].map((c, i) => i * 10),
            workDayGubun: 1,
            workDayCheckCustom: false,
            //근무시간
            workTimeToggleLength: 5,
            workTimeToggleArray: [
                {
                    sq_code: 0,
                    start_hour: 9,
                    start_minu: 0,
                    end_hour: 9,
                    end_minu: 0,
                },
            ],

            //근무지 주소
            partAdressGubun: 1, //국내:1,해외99
            partAdressToggleLength: 5,
            partAdressToggleArray: [
                {
                    sq_code: 0,
                },
            ],
			partAdressCountryCode:[],
            zip: "",
            addr1: "",
            addr2: "",
            //근무지역
            workAdressList: undefined, //axios
            workAdressSelected: [
                {
                    code: "AR020051",
                    name: "콩고민주공화국",
                },
                {
                    code: "AR020052",
                    name: "탄자니아",
                },
            ],
            isWorkAdressDialogVisible: false,
            limitWorkAdresselectedLength: 6,
            workAdressSearchBarModel: "",

            //인근지하철
            subwaySelected: [
                {
                    subwayRouteName: "공항",
                    subwayStationId: "MTRARA1A01",
                    subwayStationName: "서울역",
                },
            ],
            limitSubwaySelectedLength: 5,
            isSubwayDialogVisible: false,
            subwayKeyword: "",
            subwaySearchBarList: [],
        };
    },
    computed: {
        subwaySelectedConv() {
            return this.subwaySelected.map(({ subwayRouteName, subwayStationId, subwayStationName, ...props }) => ({
                label: `${subwayRouteName} > `,
                code: subwayStationId,
                name: subwayStationName,
                ...props,
            }));
        },
        workAdressSelectedConv() {
            if (this.workAdressList) {
                return this.workAdressSelected.map(({ code, name, ...props }) => {
                    let _c = code.slice(0, 5); //AR009
                    let _l = this.workAdressList.find((item) => item.code == _c);
                    return {
                        code,
                        name,
                        label: `${_l.name} > `,
                        ...props,
                    };
                });
            } else {
                return this.workAdressSelected;
            }
        },
        workAdressSearchBarList() {
            let _d = this.workAdressList.map((item) => item.data).reduce((p, c) => [...p, ...c]);
            return _d.filter((item) => item.name.indexOf(this.workAdressSearchBarModel) != -1);
        },
        workGubunFilterAddForm() {
            return this.workGubunCheckbox.filter(({ add_form, ...props }) => add_form);
        },
    },
    async created() {
        await this.$http.get(`${this.API_PATH_STATIC}/country.json`).then(({ data }) => {
            this.partAdressCountryCode = data;
        });
        await this.$http.get(`${this.API_PATH_STATIC}/paygubun.json`).then(({ data }) => {
            this.paygubun = data;
        });
        await this.$http.get(`${this.API_PATH_STATIC}/week.json`).then(({ data }) => {
            this.workWeekList = data;
        });
        await this.$http.get(`${this.API_PATH_STATIC}/area.json`).then(({ data }) => {
            let _d = data.map((item) => {
                let label = `${item.name} > `;
                return {
                    ...item,
                    data: item.data.map((_item) => {
                        return { label, ..._item };
                    }),
                };
            });
            this.workAdressList = _d;
        });
    },
    methods: {
        fnSubwayKeyupBind: debounce(async function () {
            await this.$http.get(`${this.API_PATH_SUBWAY_INFO}?serviceKey=${SUBWAY_INFO_KEY}&_type=json&subwayStationName=${this.subwayKeyword}`).then(
                ({
                    data: {
                        response: {
                            header: { resultCode },
                            body: { items },
                        },
                    },
                }) => {
                    if (resultCode === "00" && items && items.item.length) {
                        this.subwaySearchBarList = items.item;
                    } else {
                        this.subwaySearchBarList = [];
                    }
                }
            );
        }, 300),
        subwaybind(e) {
            this.__lcFnBind(e, {
                seleted: "subwaySelected",
                selectedLengh: "limitSubwaySelectedLength",
                alertMsg: `지하철역은 ${this.limitSubwaySelectedLength}개 까지 선택가능합니다.`,
            });
        },
        workAdressbind(e) {
            this.__lcFnBind(e, {
                seleted: "workAdressSelected",
                selectedLengh: "limitWorkAdresselectedLength",
                alertMsg: `근무지역은 ${this.limitWorkAdresselectedLength}개 까지 선택가능합니다.`,
            });
        },
        subwaySelectedDelete(code) {
            this.__lcFnSelectedDelete({ code, seleted: "subwaySelected" });
        },
        workAdressSelectedDelete(code) {
            this.__lcFnSelectedDelete({ code, seleted: "workAdressSelected" });
        },
        fnWorkGubunChecked(e) {
            let value = e.target.value ? JSON.parse(e.target.value) : {};
            if (e.target.checked) {
                this.workGubunChecked = [...this.workGubunChecked, value];
            } else {
                this.workGubunChecked = this.workGubunChecked.filter((item) => item.value !== value.value);
            }
        },
        workTimeAddEvent(code) {
            let cr_lns = this.workTimeToggleArray.length;
            let lm_lns = this.workTimeToggleLength;
            let sq_code = this.workTimeToggleArray.findLast((ar) => ar);
            if (cr_lns < lm_lns) {
                this.workTimeToggleArray.push({
                    sq_code: sq_code.sq_code + 1,
                    start_hour: 9,
                    start_minu: 0,
                    end_hour: 9,
                    end_minu: 0,
                    work_flexible: false,
                    etc_input: "",
                    etc_ischecked: false,
                });
            } else {
                alert(`근무시간 추가는 ${lm_lns}개 까지만 가능합니다.`);
            }
        },
        workTimeMinEvent(code) {
            this.workTimeToggleArray = this.workTimeToggleArray.filter((item, index) => item.sq_code != code);
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
        UiSelectedBoxDialog,
        SearchBar,
        SearchBarListItems,
        RadioGroup,
        Radio,
        AddToggleBox,
        Nullmsg,
        Button,
    },
};
</script>