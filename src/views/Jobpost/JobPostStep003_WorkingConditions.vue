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
                        <option
                            :value="value"
                            v-for="(
                                { value, name, ...props }, index
                            ) in payGubunOptions"
                            :key="index"
                        >
                            {{ name }}
                        </option>
                    </Select>
                </Col>
                <Col class="col00">
                    <!-- 연봉선택시 :S -->
                    <Select
                        style="width: 300px"
                        v-if="payGubunSelectbox == 1"
                        :disabled="chicAfterinterview"
                    >
                        <option value="">선택해주세요</option>
                        <option value="">2,200~2,500</option>
                    </Select>
                    <!-- 연봉선택시 :E -->
                    <!-- 월급선택시:S -->
                    <Input
                        type="number"
                        v-if="payGubunSelectbox == 2"
                        :disabled="chicAfterinterview"
                    >
                        <template v-slot:inl>
                            <label class="inl">만원</label>
                        </template>
                    </Input>
                    <!-- 월급선택시:E -->
                    <!-- 주급선택시:S -->
                    <Input
                        type="number"
                        v-if="payGubunSelectbox == 3"
                        :disabled="chicAfterinterview"
                    >
                        <template v-slot:inl>
                            <label class="inl">원</label>
                        </template>
                    </Input>
                    <!-- 주급선택시:E -->
                    <!-- 일급선택시:S -->
                    <Input
                        type="number"
                        v-if="payGubunSelectbox == 4"
                        :disabled="chicAfterinterview"
                    >
                        <template v-slot:inl>
                            <label class="inl">원</label>
                        </template>
                    </Input>
                    <!-- 일급선택시:E -->
                    <!-- 시급선택시:S -->
                    <Input
                        type="number"
                        v-if="payGubunSelectbox == 5"
                        :disabled="chicAfterinterview"
                    >
                        <template v-slot:inl>
                            <label class="inl">원</label>
                        </template>
                    </Input>
                    <!-- 시급선택시:E -->
                    <!-- 건당선택시:S -->
                    <Input
                        type="number"
                        v-if="payGubunSelectbox == 6"
                        :disabled="chicAfterinterview"
                    >
                        <template v-slot:inl>
                            <label class="inl">원</label>
                        </template>
                    </Input>
                    <!-- 건당선택시:E -->
                </Col>
                <Col class="col00 ML10">
                    <Checkbox
                        :checked="chicAfterinterview"
                        size="lg"
                        @change="
                            $event.target.checked
                                ? (chicAfterinterview = true)
                                : (chicAfterinterview = false)
                        "
                        >면접 후 결정
                    </Checkbox>
                </Col>
            </Row>
            <Row>
                <Col class="col12">
                    <div class="jbAntoTxts MT10">
                        <!-- 연봉일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 1">
                            최저시급 8,720원, 주 40시간 기준, 최저연봉 약
                            21,869,760원
                            <a
                                href="http://www.minimumwage.go.kr/index.jsp"
                                target="_blank"
                                class="antx FWN ML10"
                                >최저 임금제도 안내</a
                            >
                        </div>
                        <!-- 연봉일때 보여지는 영역:E -->
                        <!-- 월급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 2">
                            주 40시간 기준, 최저 월급 약 1,822,480원
                            <a
                                href="http://www.minimumwage.go.kr/index.jsp"
                                target="_blank"
                                class="antx FWN ML10"
                                >최저 임금제도 안내</a
                            >
                        </div>
                        <!-- 월급일때 보여지는 영역:E -->
                        <!-- 주급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 3">
                            주 40시간 기준, 최저 주급 약 348,800원
                            <a
                                href="http://www.minimumwage.go.kr/index.jsp"
                                target="_blank"
                                class="antx FWN ML10"
                                >최저 임금제도 안내</a
                            >
                        </div>
                        <!-- 주급일때 보여지는 영역:E -->
                        <!-- 일급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 4">
                            일 8시간 기준, 최저 일급 약 69,760원
                            <a
                                href="http://www.minimumwage.go.kr/index.jsp"
                                target="_blank"
                                class="antx FWN ML10"
                                >최저 임금제도 안내</a
                            >
                        </div>
                        <!-- 일급일때 보여지는 영역:E -->
                        <!-- 시급일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 5">
                            최저시급 8,720원
                            <a
                                href="http://www.minimumwage.go.kr/index.jsp"
                                target="_blank"
                                class="antx FWN ML10"
                                >최저 임금제도 안내</a
                            >
                        </div>
                        <!-- 시급일때 보여지는 영역:E -->
                        <!-- 건당일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 6">
                            최저시급 8,720원
                            <a
                                href="http://www.minimumwage.go.kr/index.jsp"
                                target="_blank"
                                class="antx FWN ML10"
                                >최저 임금제도 안내</a
                            >
                        </div>
                        <!-- 건당일때 보여지는 영역:E -->
                        <!-- 회사내규에 따름일때 보여지는 영역:S -->
                        <div class="FWB" v-if="payGubunSelectbox == 99">
                            최저시급 8,720원, 주 40시간 기준, 최저연봉 약
                            21,869,760원
                            <a
                                href="http://www.minimumwage.go.kr/index.jsp"
                                target="_blank"
                                class="antx FWN ML10"
                                >최저 임금제도 안내</a
                            >
                        </div>
                        <!-- 회사내규에 따름일때 보여지는 영역:E -->
                        <div class="lbwx">
                            최저임금을 준수하지 않는 경우, 공고 강제 마감 및
                            행정처분을 받을 수 있습니다.
                        </div>
                    </div>
                </Col>
            </Row>
        </RowLayout>
        <!-- 연봉/급여:E -->
        <!-- 근무형태:S -->
        <RowLayout title="근무형태" required class="MT20">
            <Row>
                <Col
                    :class="`${item.value != 13 ? 'col2' : 'col12'} MT15`"
                    v-for="(item, index) in workGubunCheckbox"
                    :key="index"
                >
                    <Checkbox
                        :value="JSON.stringify(item)"
                        :checked="
                            workGubunChecked.find(
                                ({ value }) => value === item.value
                            )
                        "
                        @change="fnWorkGubunChecked"
                        size="lg"
                    >
                        {{ item.name }}
                        <span class="lbe" v-if="item.value == 13">
                            출산·육아에 따른 대체인력을 채용형태
                        </span>
                    </Checkbox>
                </Col>
            </Row>
            <!-- 근무형태 별 추가입력폼:S -->
            <div
                class="jbAddFormArea MT10 MB10"
                v-if="Object.keys(workGubunChecked).length"
            >
                <div class="jbaFormInners">
                    <!-- foreach:S -->
                    <template
                        v-for="(
                            { add_form, name, ...props }, index
                        ) in workGubunFilterAddForm"
                        :key="index"
                    >
                        <div
                            class="jbTps"
                            v-if="
                                workGubunChecked.find(
                                    ({ value }) => value === props.value
                                )
                            "
                        >
                            <div class="jblts">
                                <span class="intx">ㆍ{{ name }} 근무기간</span>
                            </div>
                            <div class="jbcots">
                                <div
                                    class="jbForm inline MR20"
                                    style="width: 180px"
                                    v-if="add_form.hasOwnProperty('work_lange')"
                                >
                                    <Select :value="0">
                                        <option
                                            :value="item.value"
                                            v-for="(item, index) in workLange"
                                            :key="index"
                                        >
                                            {{ item.name }}
                                        </option>
                                    </Select>
                                </div>
                                <div
                                    class="jbForm inline MR20"
                                    v-if="
                                        add_form.hasOwnProperty(
                                            'worktype_convert'
                                        )
                                    "
                                >
                                    <label
                                        ><input
                                            type="checkbox"
                                            id=""
                                            name=""
                                            value=""
                                        /><span class="lb"
                                            >정규직 전환가능</span
                                        ></label
                                    >
                                </div>
                                <div
                                    class="jbForm inline MR20"
                                    v-if="
                                        add_form.hasOwnProperty(
                                            'worktype_during'
                                        )
                                    "
                                >
                                    <label
                                        ><input
                                            type="checkbox"
                                            id=""
                                            name=""
                                            value=""
                                        /><span class="lb">기간제</span></label
                                    >
                                </div>
                                <div
                                    class="jbForm inline MR20"
                                    v-if="
                                        add_form.hasOwnProperty(
                                            'worktype_eternal'
                                        )
                                    "
                                >
                                    <label
                                        ><input
                                            type="checkbox"
                                            id=""
                                            name=""
                                            value=""
                                        /><span class="lb"
                                            >무기계약직</span
                                        ></label
                                    >
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
        <div class="jbLayoutLabs required MT30">
            <div class="jblabs smpadding">
                <span class="ints">근무지 주소</span>
            </div>
            <div class="jbDivs">
                <div class="row">
                    <div class="col00">
                        <div class="jbForm inline MR25">
                            <label>
                                <input
                                    type="radio"
                                    id=""
                                    name="chk3"
                                    value=""
                                    checked
                                />
                                <span class="lb">국내</span>
                            </label>
                        </div>
                        <div class="jbForm jbForm inline MR25">
                            <label>
                                <input
                                    type="radio"
                                    id=""
                                    name="chk3"
                                    value=""
                                />
                                <span class="lb">해외</span>
                            </label>
                        </div>
                        <div class="jbForm jbForm inline MR25">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">재택근무 가능</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="jbAddMinArea MT20">
                    <!-- foreach:S -->
                    <div class="amSectListsArea">
                        <div class="amSectDivAre">
                            <div class="row">
                                <div class="col45" style="width: 300px">
                                    <div class="jbForm">
                                        <input
                                            type="text"
                                            placeholder="주소를 입력해 주세요"
                                            id=""
                                            name=""
                                            value=""
                                            readonly
                                        />
                                    </div>
                                </div>
                                <div class="col45" style="width: 300px">
                                    <div class="jbForm">
                                        <input
                                            type="text"
                                            placeholder="상세 주소 입력"
                                            id=""
                                            name=""
                                            value=""
                                        />
                                    </div>
                                </div>
                                <div class="col00" style="width: 145px">
                                    <a href="#" target="_blank" class="jbbtns">
                                        <span class="intxtsw"
                                            >지도위치확인</span
                                        >
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="amSectBtnAre">
                            <button class="ansbtn ad" title="추가"></button>
                        </div>
                    </div>
                    <div class="amSectListsArea">
                        <div class="amSectDivAre">
                            <div class="row">
                                <div class="col45" style="width: 300px">
                                    <div class="jbForm">
                                        <input
                                            type="text"
                                            placeholder="주소를 입력해 주세요"
                                            id=""
                                            name=""
                                            value=""
                                            readonly
                                        />
                                    </div>
                                </div>
                                <div class="col45" style="width: 300px">
                                    <div class="jbForm">
                                        <input
                                            type="text"
                                            placeholder="상세 주소 입력"
                                            id=""
                                            name=""
                                            value=""
                                        />
                                    </div>
                                </div>
                                <div class="col00" style="width: 145px">
                                    <a href="#" target="_blank" class="jbbtns">
                                        <span class="intxtsw"
                                            >지도위치확인</span
                                        >
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="amSectBtnAre">
                            <button class="ansbtn ad" title="추가"></button>
                            <button class="ansbtn mn" title="삭제"></button>
                        </div>
                    </div>
                    <!-- foreach:E -->
                </div>
                <div class="jbAddMinArea MT20">
                    <!-- foreach:S -->
                    <div class="amSectListsArea">
                        <div class="amSectDivAre">
                            <div class="row">
                                <div class="col45" style="width: 200px">
                                    <div class="jbForm">
                                        <select name="">
                                            <option value="">국가선택</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col45" style="width: 545px">
                                    <div class="jbForm">
                                        <input
                                            type="text"
                                            placeholder="해외 근무지역의 상세주소를 입력해 주세요."
                                            id=""
                                            name=""
                                            value=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="amSectBtnAre">
                            <button class="ansbtn ad" title="추가"></button>
                        </div>
                    </div>
                    <div class="amSectListsArea">
                        <div class="amSectDivAre">
                            <div class="row">
                                <div class="col45" style="width: 200px">
                                    <div class="jbForm">
                                        <select name="">
                                            <option value="">국가선택</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col45" style="width: 545px">
                                    <div class="jbForm">
                                        <input
                                            type="text"
                                            placeholder="해외 근무지역의 상세주소를 입력해 주세요."
                                            id=""
                                            name=""
                                            value=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="amSectBtnAre">
                            <button class="ansbtn ad" title="추가"></button>
                            <button class="ansbtn mn" title="삭제"></button>
                        </div>
                    </div>
                    <!-- foreach:E -->
                </div>
            </div>
        </div>
        <!-- 근무지 주소:E -->
        <!-- 근무지역:S -->
        <RowLayout title="근무지역" required class="MT20"> </RowLayout>
        <!-- 근무지역:E -->
        <!-- 인근지하철:S -->
        <RowLayout title="인근지하철" class="MT20"> </RowLayout>
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
                    <Input
                        placeholder="근무요일을 입력해주세요."
                        style="width: 368px"
                    />
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
            <div
                class="jbAddFormArea MT10 MB20"
                v-if="
                    workDayGubun == 7 ||
                    workDayGubun == 6 ||
                    workDayGubun == 1 ||
                    workDayGubun == 2
                "
            >
                <div
                    class="jbaFormInners FLEX ALIGN_ITEM_CENTER"
                    style="justify-content: space-between"
                >
                    <Checkbox
                        v-for="(item, index) in [
                            { value: 1, name: '월요일' },
                            { value: 2, name: '화요일' },
                            { value: 3, name: '수요일' },
                            { value: 4, name: '목요일' },
                            { value: 5, name: '금요일' },
                            { value: 6, name: '토요일' },
                            { value: 7, name: '일요일' },
                        ]"
                        :key="index"
                        :value="item.value"
                        size="lg"
                    >
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
            >
                <template v-slot:AddToggleBoxDivision>
                    <Input />
                </template>
                <template v-slot:AddToggleBoxButtonArea>
                    <Radio name="adf" value="true" v-model="enenen">ched</Radio>
                    <Radio name="adf" value="false" v-model="enenen">ched</Radio>
                </template>
                <template v-slot:AddToggleBoxAntArea>
                    AddToggleBox-antArea
                </template>
            </AddToggleBox>
        </RowLayout>
        {{ enenen }}
        <div class="jbLayoutLabs MT20">
            <div class="jblabs"><span class="ints">근무시간</span></div>
            <div class="jbDivs">
                <div class="jbAddMinArea">
                    <!-- foreach:S -->
                    <div class="amSectListsArea">
                        <div class="amSectDivAre">
                            <div class="row">
                                <div class="col00">
                                    <div class="jbForm" style="width: 100px">
                                        <select name="">
                                            <option value="">09시</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col00">
                                    <div class="jbForm" style="width: 100px">
                                        <select name="">
                                            <option value="">00분</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col00">
                                    <span class="jbStatText MT15">~</span>
                                </div>
                                <div class="col00">
                                    <div class="jbForm" style="width: 100px">
                                        <select name="">
                                            <option value="">09시</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col00">
                                    <div class="jbForm" style="width: 100px">
                                        <select name="">
                                            <option value="">00분</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="amSectBtnAre">
                            <button class="ansbtn ad" title="추가"></button>
                        </div>
                    </div>
                    <div class="amSectListsArea">
                        <div class="amSectDivAre">
                            <div class="row">
                                <div class="col00">
                                    <div class="jbForm" style="width: 100px">
                                        <select name="">
                                            <option value="">09시</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col00">
                                    <div class="jbForm" style="width: 100px">
                                        <select name="">
                                            <option value="">00분</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col00">
                                    <span class="jbStatText MT15">~</span>
                                </div>
                                <div class="col00">
                                    <div class="jbForm" style="width: 100px">
                                        <select name="">
                                            <option value="">09시</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col00">
                                    <div class="jbForm" style="width: 100px">
                                        <select name="">
                                            <option value="">00분</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="amSectBtnAre">
                            <button class="ansbtn ad" title="추가"></button>
                            <button class="ansbtn mn" title="삭제"></button>
                            <div class="jbForm jbForm inline ML10">
                                <label>
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        value=""
                                    />
                                    <span class="lb">탄력근무제 가능</span>
                                </label>
                            </div>
                            <div class="jbForm jbForm inline ML10">
                                <label>
                                    <input
                                        type="checkbox"
                                        id=""
                                        name=""
                                        value=""
                                    />
                                    <span class="lb">기타사항입력</span>
                                </label>
                            </div>
                        </div>
                        <div class="amSectAntAre">
                            <div class="jbForm">
                                <input
                                    type="text"
                                    placeholder="기타사항을 입력해 주세요"
                                    id=""
                                    name=""
                                    value=""
                                />
                            </div>
                        </div>
                    </div>
                    <!-- foreach:E -->
                </div>
            </div>
        </div>
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
import UiSelectedBoxTooltip from "@/components/UiComponents/UiSelectedBoxTooltip";
import UiSelectedBoxFavorite from "@/components/UiComponents/UiSelectedBoxFavorite";
import UiSelectedBoxDialog from "@/components/UiComponents/UiSelectedBoxDialog";
import SearchBar from "@/components/UiComponents/SearchBar";
import SearchBarListItems from "@/components/UiComponents/SearchBarListItems";
import RadioGroup from "@/components/Form/RadioGroup";
import Radio from "@/components/Form/Radio";
import Dialog from "@/components/Dialog/Dialog";
import AddToggleBox from "@/components/UiComponents/AddToggleBox";
import mixin from "@/mixin";
export default {
    mixins: [mixin],
    data() {
        return {
            //연봉/급여
            chicAfterinterview: false,
            payGubunSelectbox: 1,
            payGubunOptions: [
                {
                    value: 1,
                    name: "연봉",
                },
                {
                    value: 2,
                    name: "월급",
                },
                {
                    value: 3,
                    name: "주급",
                },
                {
                    value: 4,
                    name: "일급",
                },
                {
                    value: 5,
                    name: "시급",
                },
                {
                    value: 6,
                    name: "건당",
                },
                {
                    value: 99,
                    name: "회사내규에 따름",
                },
            ],

            //근무형태
            //worktype_convert: false, 정규직전환가능
            //worktype_during: false,  기간제
            //worktype_eternal: false, 무기계약직
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
            workLange: [
                {
                    value: 0,
                    name: "기간선택",
                },
                {
                    value: 1,
                    name: "1개월",
                },
                {
                    value: 2,
                    name: "2개월",
                },
                {
                    value: 3,
                    name: "3개월",
                },
                {
                    value: 4,
                    name: "4개월",
                },
                {
                    value: 5,
                    name: "5개월",
                },
                {
                    value: 6,
                    name: "6개월",
                },
                {
                    value: 7,
                    name: "7개월",
                },
                {
                    value: 8,
                    name: "8개월",
                },
                {
                    value: 9,
                    name: "9개월",
                },
                {
                    value: 10,
                    name: "10개월",
                },
                {
                    value: 11,
                    name: "11개월",
                },
                {
                    value: 12,
                    name: "12개월",
                },
                {
                    value: 13,
                    name: "1년 6개월",
                },
                {
                    value: 14,
                    name: "2년",
                },
                {
                    value: 15,
                    name: "협의 후 결정",
                },
            ],

            //근무요일
            workDayGubun: 1,
            workDayCheckCustom: false,
            //근무시간
            workTimeToggleArray: [
                {
                    vModel: "enx1",
                },
                {
                    vModel: "enx2",
                },
            ],
            asdfasdasf: "임희재",
            enenen: false,
        };
    },
    computed: {
        workGubunFilterAddForm() {
            return this.workGubunCheckbox.filter(
                ({ add_form, ...props }) => add_form
            );
        },
    },
    created() {},
    mounted() {},
    methods: {
        fnWorkGubunChecked(e) {
            let value = e.target.value ? JSON.parse(e.target.value) : {};
            if (e.target.checked) {
                this.workGubunChecked = [...this.workGubunChecked, value];
            } else {
                this.workGubunChecked = this.workGubunChecked.filter(
                    (item) => item.value !== value.value
                );
            }
        },
        workTimeAddEvent(e) {
            console.log(e.target.value);
            this.workTimeToggleArray.push({});
        },
        workTimeMinEvent(e) {
            this.workTimeToggleArray = this.workTimeToggleArray.filter(
                (item, index) => index != e.target.value
            );
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
        AddToggleBox,
    },
};
</script>