<template>
    <!-- 근무조건:S -->
    <div class="jbCBoxing" data-fullpage="2">
        <div class="jbTits">근무조건</div>
        <div class="jbSTits">우리 회사 근무조건은 어떻게 되나요?</div>

        <!-- 연봉/급여:S -->
        <RowLayout title="연봉/급여" required class="MT45">
            <Row class="FLEX ALIGN_ITEM_CENTER">
                <Col class="col3">
                    <Select :model-value="wkcond_paygubun" @change="(e) => SET_WKCOND_PAYGUBUN(e.target.value)">
                        <option :value="value" v-for="({ value, name, ...props }, index) in payGubunOptions" :key="index">
                            {{ name }}
                        </option>
                    </Select>
                </Col>
                <Col class="col00">
                    <!-- 연봉선택시 :S -->
                    <Select
                        v-if="wkcond_paygubun == 1"
                        :model-value="wkcond_paygubun_price"
                        @change="(e) => SET_WKCOND_PAYGUBUN_PRICE(e.target.value)"
                        :disabled="wkcond_paygubun_check"
                        style="width: 300px"
                    >
                        <option value="">선택해주세요</option>
                        <option value="2,200~2,500">2,200~2,500</option>
                    </Select>
                    <!-- 연봉선택시 :E -->
                    <!-- 월급선택시:S -->
                    <Input
                        type="number"
                        v-else-if="wkcond_paygubun != 99"
                        :model-value="wkcond_paygubun_price"
                        @input="(e) => SET_WKCOND_PAYGUBUN_PRICE(e.target.value)"
                        :disabled="wkcond_paygubun_check"
                    >
                        <template v-slot:inl>
                            <label class="inl">{{ wkcond_paygubun == 2 ? "만" : "" }}원</label>
                        </template>
                    </Input>
                    <!-- 월급선택시:E -->
                </Col>
                <Col class="col00 ML10">
                    <Checkbox size="lg" :checked="wkcond_paygubun_check" @change="(e) => SET_WKCOND_PAYGUBUN_CHECK(e.target.checked)">면접 후 결정 </Checkbox>
                </Col>
            </Row>
            <Row>
                <Col class="col12">
                    <div class="jbAntoTxts MT10">
                        <!-- 연봉일때 보여지는 영역:S -->
                        <div class="FWB" v-if="wkcond_paygubun == 1">
                            최저시급 8,720원, 주 40시간 기준, 최저연봉 약 21,869,760원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 연봉일때 보여지는 영역:E -->
                        <!-- 월급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="wkcond_paygubun == 2">
                            주 40시간 기준, 최저 월급 약 1,822,480원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 월급일때 보여지는 영역:E -->
                        <!-- 주급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="wkcond_paygubun == 3">
                            주 40시간 기준, 최저 주급 약 348,800원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 주급일때 보여지는 영역:E -->
                        <!-- 일급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="wkcond_paygubun == 4">
                            일 8시간 기준, 최저 일급 약 69,760원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 일급일때 보여지는 영역:E -->
                        <!-- 시급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="wkcond_paygubun == 5">
                            최저시급 8,720원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 시급일때 보여지는 영역:E -->
                        <!-- 건당일때 보여지는 영역:S -->
                        <div class="FWB" v-if="wkcond_paygubun == 6">
                            최저시급 8,720원
                            <a href="http://www.minimumwage.go.kr/index.jsp" target="_blank" class="antx FWN ML10">최저 임금제도 안내</a>
                        </div>
                        <!-- 건당일때 보여지는 영역:E -->
                        <!-- 회사내규에 따름일때 보여지는 영역:S -->
                        <div class="FWB" v-if="wkcond_paygubun == 99">
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
                    <Checkbox
                        :value="JSON.stringify(item)"
                        :checked="wkcond_work_mode.find(({ value }) => value === item.value)"
                        @change="(e) => SET_WKCOND_WORK_MODE({ event: e, item })"
                        size="lg"
                    >
                        {{ item.name }}
                        <span class="lbe" v-if="item.value == 13"> 출산·육아에 따른 대체인력을 채용형태 </span>
                    </Checkbox>
                </Col>
            </Row>
            <!-- 근무형태 별 추가입력폼:S -->
            <div class="jbAddFormArea MT10 MB10" v-if="Object.keys(wkcond_work_mode_filter).length">
                <div class="jbaFormInners">
                    <!-- foreach:S -->
                    <template v-for="({ add_form, value, name, ...props }, index) in wkcond_work_mode_filter" :key="index">
                        <div class="jbTps" v-if="wkcond_work_mode.find((d) => d.value === value)">
                            <div class="jblts">
                                <span class="intx">ㆍ{{ name }} 근무기간</span>
                            </div>
                            <div class="jbcots">
                                <div class="jbForm inline MR20" style="width: 180px" v-if="add_form.hasOwnProperty('work_lange')">
                                    <Select
                                        :model-value="add_form.work_lange"
                                        @change="
                                            (e) =>
                                                SET_WKCOND_WORK_MODE_DETAIL({
                                                    value,
                                                    add_form: { ...add_form, work_lange: e.target.value },
                                                })
                                        "
                                    >
                                        <option :value="item.value" v-for="(item, index) in workLange" :key="index">
                                            {{ item.name }}
                                        </option>
                                    </Select>
                                </div>
                                <Checkbox
                                    v-if="add_form.hasOwnProperty('worktype_convert')"
                                    :checked="add_form.worktype_convert"
                                    @change="
                                        (e) =>
                                            SET_WKCOND_WORK_MODE_DETAIL({
                                                value,
                                                add_form: { ...add_form, worktype_convert: e.target.checked },
                                            })
                                    "
                                    cssClass="MR20 inline"
									size="lg"
                                    >정규직 전환가능</Checkbox
                                >
                                <Checkbox
                                    v-if="add_form.hasOwnProperty('worktype_during')"
                                    :checked="add_form.worktype_during"
                                    @change="
                                        (e) =>
                                            SET_WKCOND_WORK_MODE_DETAIL({
                                                value,
                                                add_form: { ...add_form, worktype_during: e.target.checked },
                                            })
                                    "
                                    cssClass="MR20 inline"
									size="lg"
                                    >기간제</Checkbox
                                >
                                <Checkbox
                                    v-if="add_form.hasOwnProperty('worktype_eternal')"
                                    :checked="add_form.worktype_eternal"
                                    @change="
                                        (e) =>
                                            SET_WKCOND_WORK_MODE_DETAIL({
                                                value,
                                                add_form: { ...add_form, worktype_eternal: e.target.checked },
                                            })
                                    "
                                    cssClass="MR20 inline"
									size="lg"
                                    >무기계약직</Checkbox
                                >
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
						{{wkcond_work_isglobal}}
                        <Radio 
						v-for="({name, value},index) in partAdressArray"
						:key="index"
						name="partAdressGubun" 
						:model-value="value"
						:checked="value == wkcond_work_isglobal"
						:label="name" 
						@change="(e) => SET_WKCOND_WORK_ISGLOBAL(e.target.value)"
						/>
                    </RadioGroup>
                </Col>
                <Col class="col00 MT15 ML15">
                    <Checkbox 
					:checked="wkcond_work_ishomework"
					@change="(e)=>SET_WKCOND_WORK_ISHOMEWORK(e.target.checked)"
					size="lg"
					 >재택근무 가능</Checkbox>
                </Col>
            </Row>
            <Row>
                <Col class="col12 MT20" v-if="partAdressGubun == 1">
                    <!-- 국내:S -->
                    <AddToggleBox
                        v-for="(item, index) in partAdressToggleArray"
                        :key="index"
                        :sq_code="item.sq_code"
                        @click:AddToggleBox="partAdressToggleAdd.call(null, 'partAdressToggleArray')"
                        @click:MinToggleBox="(code) => partAdressToggleMin.call(null, code, 'partAdressToggleArray')"
                    >
                        <template v-slot:AddToggleBoxDivision>
                            <Row>
                                <Col class="col12" style="width: 500px">
                                    <Input placeholder="주소를 입력해 주세요" @click="kakaoPostCodeShow" :data-sq-code="item.sq_code" v-model="item.addr1" readonly />
                                </Col>
                                <Col class="col9 MT05" style="width: 580px">
                                    <Input placeholder="상세 주소 입력" v-model="item.addr2" />
                                </Col>
                                <Col class="col3 MT05">
                                    <Button :href="`https://map.kakao.com/?q=${item.addr1} ${item.addr2}`" target="_blank">지도위치확인</Button>
                                </Col>
                            </Row>
                        </template>
                    </AddToggleBox>
                    <!-- 국내:E -->
                </Col>
                <Col class="col12 MT20" v-else>
                    <!-- 해외:S -->
                    <AddToggleBox
                        v-for="(item, index) in partGlobalAdressToggleArray"
                        :key="index"
                        :sq_code="item.sq_code"
                        @click:AddToggleBox="partAdressToggleAdd.call(null, 'partGlobalAdressToggleArray')"
                        @click:MinToggleBox="(code) => partAdressToggleMin.call(null, code, 'partGlobalAdressToggleArray')"
                    >
                        <template v-slot:AddToggleBoxDivision>
                            <Row>
                                <Col class="col12" style="width: 400px">
                                    <Select v-model="item.country_code" :data-name="item.country_name">
                                        <option value="">국가선택</option>
                                        <option v-for="(item, index) in partAdressCountryCode" :key="index" :value="item.ISO">{{ item.name }}</option>
                                    </Select>
                                </Col>
                                <Col class="col45 MT05" style="width: 580px">
                                    <Input placeholder="해외 근무지역의 상세주소를 입력해 주세요." v-model="item.addr2" />
                                </Col>
                            </Row>
                        </template>
                    </AddToggleBox>
                    <!-- 해외:E -->
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
                    <SearchBar placeholder="지하철명을 입력하세요." @keyup="(e) => searchSubwaykey(e.target.value)">
                        <template v-slot:list>
                            <!-- subwaySearchBarList = [{
								"subwayRouteName": "공항",
								"subwayStationId": "MTRARA1A01",
								"subwayStationName": "서울역"
							}] -->
                            <SearchBarListItems
                                v-for="({ subwayRouteName, subwayStationId, subwayStationName, ...props }, index) in wkcond_subway_search"
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
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import {
    SET_JOBPOST_SELETED,
    SET_JOBPOST_UNSELETED,
    SET_WKCOND_PAYGUBUN,
    SET_WKCOND_PAYGUBUN_PRICE,
    SET_WKCOND_PAYGUBUN_CHECK,
    SET_WKCOND_WORK_MODE,
    SET_WKCOND_WORK_MODE_DETAIL,
    SET_WKCOND_WORK_ISGLOBAL,
    SET_WKCOND_WORK_ISHOMEWORK,
} from "@/store/mutations-type";
import { jobpost, postcode } from "@/mixin";

export default {
    mixins: [jobpost,postcode],
    data() {
        return {
            //연봉/급여
            chicAfterinterview: false,
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
            workGubunCheckbox: undefined,
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
            partAdressGubun: 1,
			partAdressArray:[
				{
					name: '국내',
					value:1
				}, 
				{
					name: '해외',
					value:99
				}
			],
            partAdressToggleLength: 5,
            partAdressHomeworking: true,
            partAdressToggleArray: [
                {
                    sq_code: 0,
                    zip: "",
                    addr1: "123",
                    addr2: "3",
                    href: "",
                },
            ],
            partGlobalAdressToggleArray: [
                {
                    country_code: "328",
                    country_name: "가이아나",
                    sq_code: 0,
                    addr2: "3",
                },
            ],
            partAdressCountryCode: [],
            //근무지역
            workAdressList: undefined,
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
        };
    },
    computed: {
        ...mapState({
            wkcond_paygubun: (state) => state.jobpost.wkcond_paygubun,
            wkcond_paygubun_price: (state) => state.jobpost.wkcond_paygubun_price,
            wkcond_paygubun_check: (state) => state.jobpost.wkcond_paygubun_check,
            wkcond_subway_selected: (state) => state.jobpost.wkcond_subway_selected,
            wkcond_subway_search: (state) => state.jobpost.wkcond_subway_search,
            wkcond_work_mode: (state) => state.jobpost.wkcond_work_mode,
            wkcond_work_isglobal: (state) => state.jobpost.wkcond_work_isglobal,
            wkcond_work_ishomework: (state) => state.jobpost.wkcond_work_ishomework,
        }),
        ...mapGetters({
            wkcond_work_mode_filter: "jobpost/wkcond_work_mode_filter",
        }),
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
            return this.wkcond_work_mode.filter(({ add_form, ...props }) => add_form);
        },
    },
    methods: {
        ...mapMutations({
            [SET_JOBPOST_SELETED]: `jobpost/${SET_JOBPOST_SELETED}`,
            [SET_JOBPOST_UNSELETED]: `jobpost/${SET_JOBPOST_UNSELETED}`,
            [SET_WKCOND_PAYGUBUN]: `jobpost/${SET_WKCOND_PAYGUBUN}`,
            [SET_WKCOND_PAYGUBUN_PRICE]: `jobpost/${SET_WKCOND_PAYGUBUN_PRICE}`,
            [SET_WKCOND_PAYGUBUN_CHECK]: `jobpost/${SET_WKCOND_PAYGUBUN_CHECK}`,
            [SET_WKCOND_WORK_MODE]: `jobpost/${SET_WKCOND_WORK_MODE}`,
            [SET_WKCOND_WORK_MODE_DETAIL]: `jobpost/${SET_WKCOND_WORK_MODE_DETAIL}`,
            [SET_WKCOND_WORK_ISGLOBAL]: `jobpost/${SET_WKCOND_WORK_ISGLOBAL}`,
            [SET_WKCOND_WORK_ISHOMEWORK]: `jobpost/${SET_WKCOND_WORK_ISHOMEWORK}`,
        }),
        ...mapActions({
            fetchStaticData: "jobpost/fetchStaticData",
            searchSubwaykey: "jobpost/searchSubwaykey",
        }),
        subwaybind(event) {
            this.SET_JOBPOST_SELETED({
                event,
                seleted: "subwaySelected",
                selectedLengh: this.limitSubwaySelectedLength,
                alertMsg: `지하철역은 ${this.limitSubwaySelectedLength}개 까지 선택가능합니다.`,
            });
            // this.__lcFnBind(e, {
            //     seleted: "subwaySelected",
            //     selectedLengh: "limitSubwaySelectedLength",
            //     alertMsg: `지하철역은 ${this.limitSubwaySelectedLength}개 까지 선택가능합니다.`,
            // });
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
            this.workTimeToggleArray = this.workTimeToggleArray.filter((item) => item.sq_code != code);
        },
        kakaoPostCodeShow(e) {
            let target = e.target;
            let sq_code = target.dataset.sqCode;
            let _data = this.partAdressToggleArray.find((item) => item.sq_code == sq_code);
            this.__kakaoPostCodeShow().then(({ zip, addr1, addr2, href }) => {
                this.partAdressToggleArray = this.partAdressToggleArray.map((item) => {
                    if (item.sq_code == _data.sq_code) {
                        return (item = {
                            ...item,
                            zip,
                            addr1,
                            addr2,
                            href,
                        });
                    } else {
                        return item;
                    }
                });
            });
        },
        partAdressToggleAdd(params) {
            let cr_lns = this[params].length;
            let sq_code = this[params].findLast((ar) => ar);
            let lm_lns = this.limitWorkAdresselectedLength;
            if (cr_lns < lm_lns) {
                this[params].push(
                    this[params] === this.partAdressToggleArray
                        ? {
                              sq_code: sq_code.sq_code + 1,
                              zip: "",
                              addr1: "",
                              addr2: "",
                              href: "",
                          }
                        : {
                              sq_code: sq_code.sq_code + 1,
                              country_code: "",
                              country_name: "",
                              addr2: "",
                          }
                );
            } else {
                alert(`근무지역 추가는 ${lm_lns}개 까지만 가능합니다.`);
            }
        },
        partAdressToggleMin(code, params) {
            this[params] = this[params].filter((item) => item.sq_code != code);
        },
    },
    async created() {
        await this.fetchStaticData(this.API_PATH_STATIC_COUNTRY).then(({ data }) => {
            this.partAdressCountryCode = data;
        });
        await this.fetchStaticData(this.API_PATH_STATIC_WORK_MODE).then(({ data }) => {
            this.workGubunCheckbox = data;
        });
        await this.fetchStaticData(this.API_PATH_STATIC_PAYGUBUN).then(({ data }) => {
            this.payGubunOptions = data;
        });
        await this.fetchStaticData(this.API_PATH_STATIC_WEEK).then(({ data }) => {
            this.workWeekList = data;
        });
        await this.fetchStaticData(this.API_PATH_STATIC_AREA).then(({ data }) => {
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
};
</script>