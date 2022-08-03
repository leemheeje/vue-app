<template>
    <!-- 지원자격:S -->
    <div class="jbCBoxing" data-fullpage="1">
        <div class="jbTits">지원자격</div>
        <div class="jbSTits">지원자격은 어떻게 되나요?</div>

        <!-- 학력:S -->
        <div class="jbLayoutLabs MT45">
            <div class="jblabs"><span class="ints">학력</span></div>
            <div class="jbDivs">
                <div class="row">
                    <div class="col35">
                        <div class="jbForm">
                            <select>
                                <option value="">학력무관</option>
                            </select>
                        </div>
                    </div>
                    <div class="col00">
                        <div class="jbForm inline" style="width: 350px">
                            <input
                                type="text"
                                placeholder="(선택) 기타 학력사항"
                                id=""
                                name=""
                                value=""
                            />
                        </div>
                        <div class="jbForm inline ML15">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">졸업예정자 가능</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 학력:E -->
        <!-- 외국어:S -->
        <div class="jbLayoutLabs MT20">
            <div class="jblabs">
                <span class="ints">외국어<small class="sm">(0/6)</small></span>
            </div>
            <div class="jbDivs">
                <!-- 선택영역UI:S -->
                <div class="jbChicCmArea">
                    <div class="tmATInn">
                        <!-- 선택된영역이있을때:S -->
                        <div class="fbOriStvsArea">
                            <!-- foreach:S -->
                            <div class="fboTpsw">
                                <span class="wlbwx">JLPT</span>
                                <button class="wlbde" title="삭제"></button>
                            </div>
                            <div class="fboTpsw">
                                <span class="wlbwx">TEPS</span>
                                <button class="wlbde" title="삭제"></button>
                            </div>
                            <!-- foreach:E -->
                        </div>
                        <!-- 선택된영역이있을때:E -->
                        <!-- 선택된영역이없을때:S -->
                        <!-- <div class="tmNulIns">외국어를 선택해주세요. (6개까지 입력 가능)</div> -->
                        <!-- 선택된영역이없을때:E -->
                    </div>
                    <div class="btnwArea">
                        <button class="jbbtns sm">
                            <span class="intxtsw">전체보기</span>
                        </button>
                    </div>
                    <div class="useBtArea">
                        <span class="tpwLabs">자주 사용하는 외국어 선택</span>
                        <div class="tpwGroups">
                            <!-- foreach:S -->
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+JLPT</span>
                                </label>
                            </div>
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+HSK</span>
                                </label>
                            </div>
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+OPic</span>
                                </label>
                            </div>
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+TEPS</span>
                                </label>
                            </div>
                            <!-- foreach:E -->
                        </div>
                    </div>
                    <!-- 팝업UI:S -->
                    <div class="dialogJobPostArea fnDialogJobPost">
                        <div class="dimm"></div>
                        <div class="djGiContents">
                            <div class="djGiInners">
                                <div class="djHedAre">
                                    <div class="dintx">
                                        <span class="inw"
                                            >외국어 선택<small class="sm"
                                                >최대 6개까지 선택 가능</small
                                            ></span
                                        >
                                    </div>
                                </div>
                                <div class="djConAre">
                                    <!-- 레이어팝선택UI:S -->
                                    <div class="jbChkLavwArea">
                                        <div class="jbcRowsCont">
                                            <div class="jbcColLt">
                                                <div class="jbcInConte">
                                                    <div class="ltsLst">
                                                        <!-- foreach:S -->
                                                        <div class="tpw">
                                                            <button
                                                                class="
                                                                    dic_bt
                                                                    active
                                                                "
                                                            >
                                                                <span
                                                                    class="
                                                                        d_intx
                                                                    "
                                                                    >영어</span
                                                                >
                                                            </button>
                                                        </div>
                                                        <div class="tpw">
                                                            <button
                                                                class="dic_bt"
                                                            >
                                                                <span
                                                                    class="
                                                                        d_intx
                                                                    "
                                                                    >일본어</span
                                                                >
                                                            </button>
                                                        </div>
                                                        <div class="tpw">
                                                            <button
                                                                class="dic_bt"
                                                            >
                                                                <span
                                                                    class="
                                                                        d_intx
                                                                    "
                                                                    >중국어</span
                                                                >
                                                            </button>
                                                        </div>
                                                        <div class="tpw">
                                                            <button
                                                                class="dic_bt"
                                                            >
                                                                <span
                                                                    class="
                                                                        d_intx
                                                                    "
                                                                    >독일어</span
                                                                >
                                                            </button>
                                                        </div>
                                                        <div class="tpw">
                                                            <button
                                                                class="dic_bt"
                                                            >
                                                                <span
                                                                    class="
                                                                        d_intx
                                                                    "
                                                                    >프랑스어</span
                                                                >
                                                            </button>
                                                        </div>
                                                        <!-- foreach:E -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="jbcColRt">
                                                <div
                                                    class="
                                                        jbcInConte
                                                        bordernone
                                                    "
                                                >
                                                    <div class="ltsTits">
                                                        ㆍ영어
                                                    </div>
                                                    <div class="ltsLst">
                                                        <!-- foreach:S -->
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >TOEIC</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >IELTS</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >TOEIC
                                                                        (S&W)</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >TOEFL
                                                                        (iBT)</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >G-TELP(GST)</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >월차</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >정기휴가</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >위로휴가</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >노동절휴무</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >휴가비지원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <!-- foreach:E -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="jbcRowsRest">
                                            <div class="jbresInner">
                                                <div class="rexwConte">
                                                    <!-- 선택된영역이있을때:S -->
                                                    <div class="fbOriStvsArea">
                                                        <!-- foreach:S -->
                                                        <div class="fboTpsw">
                                                            <span class="wlbwx"
                                                                >경영.기획 >
                                                                경리.세무.회계 >
                                                                경리</span
                                                            >
                                                            <button
                                                                class="wlbde"
                                                                title="삭제"
                                                            ></button>
                                                        </div>
                                                        <div class="fboTpsw">
                                                            <span class="wlbwx"
                                                                >마케팅.광고 >
                                                                홍보.PR.사보 >
                                                                언론홍보</span
                                                            >
                                                            <button
                                                                class="wlbde"
                                                                title="삭제"
                                                            ></button>
                                                        </div>
                                                        <!-- foreach:E -->
                                                    </div>
                                                    <!-- 선택된영역이있을때:E -->
                                                    <!-- 선택된영역이없을때:S -->
                                                    <div class="tmNulIns">
                                                        선택한 항목이 없습니다.
                                                    </div>
                                                    <!-- 선택된영역이없을때:E -->
                                                </div>
                                                <div class="rexwBte">
                                                    <button
                                                        class="jbbtns sm gray"
                                                    >
                                                        <span class="intxtsw"
                                                            >초기화</span
                                                        >
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 레이어팝선택UI:E -->
                                </div>
                                <div class="djFotAre">
                                    <div class="btwGrp">
                                        <button class="jbbtns md outline">
                                            <span class="intxtsw">취소</span>
                                        </button>
                                        <button class="jbbtns md">
                                            <span class="intxtsw">확인</span>
                                        </button>
                                        <button
                                            class="diClse"
                                            title="팝업닫기"
                                        ></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 팝업UI:E -->

                    <!-- 점수 입력 영역:S -->
                    <div class="jbAddFormArea mdlb MT10">
                        <div class="jbaFormInners">
                            <!-- foreach:S -->
                            <div class="jbTps">
                                <div class="jblts">
                                    <span class="intx">ㆍJLPT</span>
                                </div>
                                <div class="jbcots">
                                    <div
                                        class="jbForm inline MR05"
                                        style="width: 200px"
                                    >
                                        <input
                                            type="number"
                                            name=""
                                            id=""
                                            value=""
                                            class=""
                                            placeholder="점수입력"
                                        />
                                    </div>
                                    <span class="jbStatText MR45"
                                        >급(점) 이상</span
                                    >
                                    <div class="jbForm chkGroup inline MR05">
                                        <label>
                                            <input
                                                type="radio"
                                                name="enChk1"
                                                id=""
                                                value=""
                                            />
                                            <span class="lb">필수</span>
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="enChk1"
                                                id=""
                                                value=""
                                                checked
                                            />
                                            <span class="lb">우대</span>
                                        </label>
                                    </div>
                                    <button
                                        class="jbls_de"
                                        title="삭제"
                                    ></button>
                                </div>
                            </div>
                            <div class="jbTps">
                                <div class="jblts">
                                    <span class="intx">ㆍTEPS</span>
                                </div>
                                <div class="jbcots">
                                    <div
                                        class="jbForm inline MR05"
                                        style="width: 200px"
                                    >
                                        <input
                                            type="number"
                                            name=""
                                            id=""
                                            value=""
                                            class=""
                                            placeholder="점수입력"
                                        />
                                    </div>
                                    <span class="jbStatText MR45"
                                        >급(점) 이상</span
                                    >
                                    <div class="jbForm chkGroup inline MR05">
                                        <label>
                                            <input
                                                type="radio"
                                                name="enChk2"
                                                id=""
                                                value=""
                                            />
                                            <span class="lb">필수</span>
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="enChk2"
                                                id=""
                                                value=""
                                                checked
                                            />
                                            <span class="lb">우대</span>
                                        </label>
                                    </div>
                                    <button
                                        class="jbls_de"
                                        title="삭제"
                                    ></button>
                                </div>
                            </div>
                            <!-- foreach:E -->
                        </div>
                    </div>
                    <!-- 점수 입력 영역:E -->
                </div>
                <!-- 선택영역UI:E -->
            </div>
        </div>
        <!-- 외국어:E -->
        <!-- 자격증:S -->
        <div class="jbLayoutLabs MT20">
            <div class="jblabs">
                <span class="ints">자격증<small class="sm">(0/3)</small></span>
            </div>
            <div class="jbDivs">
                <!-- 선택영역UI:S -->
                <div class="jbChicCmArea">
                    <div class="tmATInn">
                        <!-- 선택된영역이있을때:S -->
                        <!-- <div class="fbOriStvsArea">
												<div class="fboTpsw block">
													<span class="wlbwx">해당 선택된 내용명</span>
													<button class="wlbde" title="삭제"></button>
												</div>
												<div class="fboTpsw block">
													<span class="wlbwx">해당 선택된 내용명</span>
													<button class="wlbde" title="삭제"></button>
												</div>
											</div> -->
                        <!-- 선택된영역이있을때:E -->
                        <!-- 선택된영역이없을때:S -->
                        <div class="tmNulIns">
                            자격증를 선택해주세요. (3개까지 입력 가능)
                        </div>
                        <!-- 선택된영역이없을때:E -->
                    </div>
                    <div class="btnwArea">
                        <button class="jbbtns sm">
                            <span class="intxtsw">전체보기</span>
                        </button>
                    </div>
                    <div class="useBtArea">
                        <span class="tpwLabs">자주 사용하는 자격증 선택</span>
                        <div class="tpwGroups">
                            <!-- foreach:S -->
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+1종 보통 운전면허</span>
                                </label>
                            </div>
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+정보처리기사</span>
                                </label>
                            </div>
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+웹디자인기능사</span>
                                </label>
                            </div>
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+전산세무2급</span>
                                </label>
                            </div>
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+1종 보통 운전면허</span>
                                </label>
                            </div>
                            <!-- foreach:E -->
                        </div>
                    </div>
                    <!-- 팝업UI:S -->
                    <div class="dialogJobPostArea fnDialogJobPost">
                        <div class="dimm"></div>
                        <div class="djGiContents">
                            <div class="djGiInners" style="width: 735px">
                                <div class="djHedAre">
                                    <div class="dintx">
                                        <span class="inw"
                                            >자격증<small class="sm"
                                                >최대 3개까지 선택 가능</small
                                            ></span
                                        >
                                    </div>
                                </div>
                                <div class="djConAre">
                                    <!-- 검색어UI:S -->
                                    <div class="jbAutoSearchArea">
                                        <div class="inpArea">
                                            <input
                                                type="text"
                                                value=""
                                                id=""
                                                name=""
                                                placeholder="자격증명을 입력하세요."
                                            />
                                        </div>
                                        <div class="resArea">
                                            <div class="reSinner">
                                                <!-- 연관검색있을때:S -->
                                                <!-- foreach:S -->
                                                <div class="asTps">
                                                    <button class="iewx">
                                                        한국산업인력공단-아스팔트믹싱플랜트<em
                                                            class="ant"
                                                            >운전</em
                                                        >기능사
                                                    </button>
                                                </div>
                                                <!-- foreach:E -->
                                                <!-- 연관검색있을때:E -->
                                                <!-- 연관검색없을때:S -->
                                                <div class="asTps">
                                                    <div class="asNutx">
                                                        연관 검색어가 없습니다
                                                    </div>
                                                </div>
                                                <!-- 연관검색없을때:E -->
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 검색어UI:E -->

                                    <!-- 레이어팝선택UI:S -->
                                    <div class="jbChkLavwArea MT10">
                                        <div class="jbcRowsRest">
                                            <div class="jbresInner">
                                                <div class="rexwConte">
                                                    <!-- 선택된영역이있을때:S -->
                                                    <div class="fbOriStvsArea">
                                                        <!-- foreach:S -->
                                                        <div class="fboTpsw">
                                                            <span class="wlbwx"
                                                                >한국산업인력공단-아스팔트믹싱플랜트</span
                                                            >
                                                            <button
                                                                class="wlbde"
                                                                title="삭제"
                                                            ></button>
                                                        </div>
                                                        <div class="fboTpsw">
                                                            <span class="wlbwx"
                                                                >한국산업인력공단</span
                                                            >
                                                            <button
                                                                class="wlbde"
                                                                title="삭제"
                                                            ></button>
                                                        </div>
                                                        <!-- foreach:E -->
                                                    </div>
                                                    <!-- 선택된영역이있을때:E -->
                                                    <!-- 선택된영역이없을때:S -->
                                                    <div class="tmNulIns">
                                                        선택한 항목이 없습니다.
                                                    </div>
                                                    <!-- 선택된영역이없을때:E -->
                                                </div>
                                                <div class="rexwBte">
                                                    <button
                                                        class="jbbtns sm gray"
                                                    >
                                                        <span class="intxtsw"
                                                            >초기화</span
                                                        >
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 레이어팝선택UI:E -->
                                </div>
                                <div class="djFotAre">
                                    <div class="btwGrp">
                                        <button class="jbbtns md outline">
                                            <span class="intxtsw">취소</span>
                                        </button>
                                        <button class="jbbtns md">
                                            <span class="intxtsw">확인</span>
                                        </button>
                                        <button
                                            class="diClse"
                                            title="팝업닫기"
                                        ></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 팝업UI:E -->
                </div>
                <!-- 선택영역UI:E -->
            </div>
        </div>
        <!-- 자격증:E -->
        <!-- 우대전공:S -->
        <div class="jbLayoutLabs MT20">
            <div class="jblabs">
                <span class="ints"
                    >우대전공<small class="sm">(0/6)</small></span
                >
            </div>
            <div class="jbDivs">
                <!-- 선택영역UI:S -->
                <div class="jbChicCmArea">
                    <div class="tmATInn">
                        <!-- 선택된영역이있을때:S -->
                        <!-- <div class="fbOriStvsArea">
												<div class="fboTpsw block">
													<span class="wlbwx">해당 선택된 내용명</span>
													<button class="wlbde" title="삭제"></button>
												</div>
												<div class="fboTpsw block">
													<span class="wlbwx">해당 선택된 내용명</span>
													<button class="wlbde" title="삭제"></button>
												</div>
											</div> -->
                        <!-- 선택된영역이있을때:E -->
                        <!-- 선택된영역이없을때:S -->
                        <div class="tmNulIns">
                            우대전공를 선택해주세요. (6개까지 입력 가능)
                        </div>
                        <!-- 선택된영역이없을때:E -->
                    </div>
                    <div class="btnwArea">
                        <button class="jbbtns sm">
                            <span class="intxtsw">전체보기</span>
                        </button>
                    </div>
                    <div class="useBtArea">
                        <span class="tpwLabs">자주 사용하는 우대전공 선택</span>
                        <div class="tpwGroups">
                            <!-- foreach:S -->
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+화학</span>
                                </label>
                            </div>
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+토목공학</span>
                                </label>
                            </div>
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+컴퓨터공학</span>
                                </label>
                            </div>
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+산업디자인</span>
                                </label>
                            </div>
                            <div class="tpws">
                                <label class="tweb_bt">
                                    <input
                                        type="checkbox"
                                        name=""
                                        value=""
                                        id=""
                                    />
                                    <span class="lb">+보건학</span>
                                </label>
                            </div>
                            <!-- foreach:E -->
                        </div>
                    </div>
                    <!-- 팝업UI:S -->
                    <div class="dialogJobPostArea fnDialogJobPost">
                        <div class="dimm"></div>
                        <div class="djGiContents">
                            <div class="djGiInners">
                                <div class="djHedAre">
                                    <div class="dintx">
                                        <span class="inw"
                                            >우대전공<small class="sm"
                                                >최대 6개까지 선택 가능</small
                                            ></span
                                        >
                                    </div>
                                </div>
                                <div class="djConAre">
                                    <!-- 레이어팝선택UI:S -->
                                    <div class="jbChkLavwArea">
                                        <div class="jbcRowsCont">
                                            <div class="jbcColLt">
                                                <div class="jbcInConte">
                                                    <div class="ltsLst">
                                                        <!-- foreach:S -->
                                                        <div class="tpw">
                                                            <button
                                                                class="
                                                                    dic_bt
                                                                    active
                                                                "
                                                            >
                                                                <span
                                                                    class="
                                                                        d_intx
                                                                    "
                                                                    >상경계열</span
                                                                >
                                                            </button>
                                                        </div>
                                                        <div class="tpw">
                                                            <button
                                                                class="dic_bt"
                                                            >
                                                                <span
                                                                    class="
                                                                        d_intx
                                                                    "
                                                                    >수당제도</span
                                                                >
                                                            </button>
                                                        </div>
                                                        <div class="tpw">
                                                            <button
                                                                class="dic_bt"
                                                            >
                                                                <span
                                                                    class="
                                                                        d_intx
                                                                    "
                                                                    >교육/연수</span
                                                                >
                                                            </button>
                                                        </div>
                                                        <div class="tpw">
                                                            <button
                                                                class="dic_bt"
                                                            >
                                                                <span
                                                                    class="
                                                                        d_intx
                                                                    "
                                                                    >사내시설</span
                                                                >
                                                            </button>
                                                        </div>
                                                        <div class="tpw">
                                                            <button
                                                                class="dic_bt"
                                                            >
                                                                <span
                                                                    class="
                                                                        d_intx
                                                                    "
                                                                    >휴가/휴무</span
                                                                >
                                                            </button>
                                                        </div>
                                                        <div class="tpw">
                                                            <button
                                                                class="dic_bt"
                                                            >
                                                                <span
                                                                    class="
                                                                        d_intx
                                                                    "
                                                                    >생활/편의</span
                                                                >
                                                            </button>
                                                        </div>
                                                        <!-- foreach:E -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="jbcColRt">
                                                <div
                                                    class="
                                                        jbcInConte
                                                        bordernone
                                                    "
                                                >
                                                    <div class="ltsTits">
                                                        ㆍ상경계열
                                                    </div>
                                                    <div class="ltsLst">
                                                        <!-- foreach:S -->
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >경조휴가제</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >창립일휴무</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >Refresh휴가</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >반차</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >연차</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >월차</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >정기휴가</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >위로휴가</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >노동절휴무</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="tpw">
                                                            <div
                                                                class="
                                                                    jbForm
                                                                    sm
                                                                "
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id=""
                                                                        name=""
                                                                        value=""
                                                                    />
                                                                    <span
                                                                        class="
                                                                            lb
                                                                        "
                                                                        >휴가비지원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <!-- foreach:E -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="jbcRowsRest">
                                            <div class="jbresInner">
                                                <div class="rexwConte">
                                                    <!-- 선택된영역이있을때:S -->
                                                    <div class="fbOriStvsArea">
                                                        <!-- foreach:S -->
                                                        <div class="fboTpsw">
                                                            <span class="wlbwx"
                                                                >경영.기획 >
                                                                경리.세무.회계 >
                                                                경리</span
                                                            >
                                                            <button
                                                                class="wlbde"
                                                                title="삭제"
                                                            ></button>
                                                        </div>
                                                        <div class="fboTpsw">
                                                            <span class="wlbwx"
                                                                >마케팅.광고 >
                                                                홍보.PR.사보 >
                                                                언론홍보</span
                                                            >
                                                            <button
                                                                class="wlbde"
                                                                title="삭제"
                                                            ></button>
                                                        </div>
                                                        <!-- foreach:E -->
                                                    </div>
                                                    <!-- 선택된영역이있을때:E -->
                                                    <!-- 선택된영역이없을때:S -->
                                                    <div class="tmNulIns">
                                                        선택한 항목이 없습니다.
                                                    </div>
                                                    <!-- 선택된영역이없을때:E -->
                                                </div>
                                                <div class="rexwBte">
                                                    <button
                                                        class="jbbtns sm gray"
                                                    >
                                                        <span class="intxtsw"
                                                            >초기화</span
                                                        >
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 레이어팝선택UI:E -->
                                </div>
                                <div class="djFotAre">
                                    <div class="btwGrp">
                                        <button class="jbbtns md outline">
                                            <span class="intxtsw">취소</span>
                                        </button>
                                        <button class="jbbtns md">
                                            <span class="intxtsw">확인</span>
                                        </button>
                                        <button
                                            class="diClse"
                                            title="팝업닫기"
                                        ></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 팝업UI:E -->
                </div>
                <!-- 선택영역UI:E -->
            </div>
        </div>
        <!-- 우대전공:E -->
        <!-- 성별제한:S -->
        <div class="jbLayoutLabs MT20">
            <div class="jblabs smpadding">
                <span class="ints">성별제한</span>
            </div>
            <div class="jbDivs">
                <div class="row">
                    <div class="col00">
                        <div class="jbForm inline MR25">
                            <label>
                                <input
                                    type="radio"
                                    id=""
                                    name="chk1"
                                    value=""
                                    checked
                                />
                                <span class="lb">성별무관</span>
                            </label>
                        </div>
                        <div class="jbForm inline MR25">
                            <label>
                                <input
                                    type="radio"
                                    id=""
                                    name="chk1"
                                    value=""
                                />
                                <span class="lb">남자</span>
                            </label>
                        </div>
                        <div class="jbForm inline MR25">
                            <label>
                                <input
                                    type="radio"
                                    id=""
                                    name="chk1"
                                    value=""
                                />
                                <span class="lb">여자</span>
                            </label>
                        </div>
                    </div>
                    <div class="col00 FLOATR">
                        <div class="jbAntoTxts TXTR">
                            <span class="lbwx">성차별금지 - </span>
                            <button
                                class="antx fnDialogButton"
                                data-params="dumm_dia001"
                            >
                                남녀고용평등에 관한 법률보기
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 팝업UI:S -->
                <div
                    class="dialogJobPostArea fnDialogJobPost"
                    data-params="dumm_dia001"
                >
                    <div class="dimm"></div>
                    <div class="djGiContents">
                        <div class="djGiInners">
                            <div class="djHedAre">
                                <div class="dintx">
                                    <span class="inw lg"
                                        >성차별법금지 주요내용</span
                                    >
                                </div>
                            </div>
                            <div class="djConAre">
                                <div class="jbInfos tp2 MT10">
                                    <div class="inf_tx noindent">
                                        모집.채용에서 남녀를 차별하거나,
                                        여성근로자를 채용할 때 직무 수행이
                                        불필요한 용모, 키, 체중등의 신체조건,
                                        미혼조건을 제시 또는 요구하는 경우
                                        남녀고용평등과 일·가정 양립 지원에 관한
                                        법률 위반에 따른
                                        <span class="cb"
                                            >500만원 이하의 벌금</span
                                        >이 부과될 수 있습니다.
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
                                                        <div
                                                            class="
                                                                inf_tx
                                                                noindent
                                                            "
                                                        >
                                                            남녀고용평등과
                                                            일·가정 양립 지원에
                                                            관한 법률 제7조
                                                            1항에 의거 근로자를
                                                            모집하거나 채용 시
                                                            합리적인 이유없이
                                                            남녀를 차별할 수
                                                            없음<br />
                                                            <span class="cb"
                                                                >&lt;차별 시
                                                                500만원 이하
                                                                벌금&gt;</span
                                                            >
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>차별사례</th>
                                                <td>
                                                    <div class="jbInfos tp2">
                                                        <div
                                                            class="
                                                                inf_tx
                                                                noindent
                                                            "
                                                        >
                                                            특정성을 지칭하는
                                                            직종명 등 사용하는
                                                            경우, 특정성 배제<br />
                                                            <span class="cg"
                                                                >- 남성 선반공,
                                                                병역필 남, 여성
                                                                비서, 미용사
                                                                &lt;여성
                                                                환영&gt;
                                                                등</span
                                                            >
                                                        </div>
                                                        <br />
                                                        <div
                                                            class="
                                                                inf_tx
                                                                noindent
                                                            "
                                                        >
                                                            직종 등 남녀
                                                            분리모집 등<br />
                                                            <span class="cg"
                                                                >- 관리·사무직
                                                                남성 10명,
                                                                판매직 여성
                                                                5명</span
                                                            >
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>차별로 보지않는 사례</th>
                                                <td>
                                                    <div class="jbInfos tp2">
                                                        <div
                                                            class="
                                                                inf_tx
                                                                noindent
                                                            "
                                                        >
                                                            직무성질상 특정한
                                                            성이 불가피한
                                                            경우<br />
                                                            <span class="cg"
                                                                >- 남성역할 위한
                                                                배우·모델
                                                                등</span
                                                            ><br />
                                                            <span class="cg"
                                                                >- 여성 목욕탕의
                                                                여성 목욕관리사,
                                                                여성 장애인·여성
                                                                환자의 도우미
                                                                등</span
                                                            ><br />
                                                            <span class="cg"
                                                                >- 여성 기숙사의
                                                                여성사감
                                                                등</span
                                                            ><br /><br />

                                                            현존하는 차별
                                                            없애거나 고용평등
                                                            촉진위해 잠정적으로
                                                            특정성 우대하는
                                                            조치를 하는 경우
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="djFotAre">
                                <div class="btwGrp">
                                    <button
                                        class="jbbtns md"
                                        onclick="$(this).closest('.fnDialogJobPost').toggleClass('show');"
                                    >
                                        <span class="intxtsw"
                                            >내용 확인하였습니다.</span
                                        >
                                    </button>
                                    <button
                                        class="diClse"
                                        title="팝업닫기"
                                    ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 팝업UI:E -->
            </div>
        </div>
        <!-- 성별제한:E -->
        <!-- 연령제한:S -->
        <div class="jbLayoutLabs MT20">
            <div class="jblabs smpadding">
                <span class="ints">연령제한</span>
            </div>
            <div class="jbDivs">
                <div class="row">
                    <div class="col00">
                        <div class="jbForm inline MR25">
                            <label>
                                <input
                                    type="radio"
                                    id=""
                                    name="chk2"
                                    value=""
                                    checked
                                />
                                <span class="lb">연령무관</span>
                            </label>
                        </div>
                        <div class="jbForm inline MR25">
                            <label>
                                <input
                                    type="radio"
                                    id=""
                                    name="chk2"
                                    value=""
                                />
                                <span class="lb">연령제한</span>
                            </label>
                        </div>
                    </div>
                    <div class="col00 FLOATR">
                        <div class="jbAntoTxts TXTR">
                            <span class="lbwx">연령별금지 - </span>
                            <button
                                class="antx fnDialogButton"
                                data-params="dumm_dia002"
                            >
                                고용상 연령차별 금지에 관한 법률보기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row MT20">
                    <div class="col00">
                        <div class="jbForm" style="width: 120px">
                            <input
                                type="number"
                                name=""
                                value=""
                                id=""
                                placeholder="숫자"
                            />
                        </div>
                    </div>
                    <div class="col00">
                        <span class="jbStatText MT15">세 이상 ~</span>
                    </div>
                    <div class="col00">
                        <div class="jbForm" style="width: 120px">
                            <input
                                type="number"
                                name=""
                                value=""
                                id=""
                                placeholder="숫자"
                            />
                        </div>
                    </div>
                    <div class="col00">
                        <span class="jbStatText MT15">세 이하</span>
                    </div>
                </div>

                <!-- 팝업UI:S -->
                <div
                    class="dialogJobPostArea fnDialogJobPost"
                    data-params="dumm_dia002"
                >
                    <div class="dimm"></div>
                    <div class="djGiContents">
                        <div class="djGiInners">
                            <div class="djHedAre">
                                <div class="dintx">
                                    <span class="inw lg"
                                        >연령차별금지 주요내용</span
                                    >
                                </div>
                            </div>
                            <div class="djConAre">
                                <div class="jbInfos tp2 MT10">
                                    <div class="inf_tx noindent">
                                        채용공고에 합리적인 이유 없이 “○○세
                                        이하“. “19○○년 이후 출생자”, “20○○년
                                        졸업자”, “대학 졸업 후 2년 이내”등
                                        직·간적적인 연령제한을 할 수 없게
                                        되었습니다. 모집·채용에서
                                        <span class="cb"
                                            >불합리한 연령 제한 시</span
                                        >
                                        고용상 연령차별 금지 및 고령자
                                        고용촉진에 관한 법률 위반에 따른
                                        <span class="cb"
                                            >500만원 이하의 벌금</span
                                        >이 부과될 수 있습니다.
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
                                                        <div
                                                            class="
                                                                inf_tx
                                                                noindent
                                                            "
                                                        >
                                                            고용상 연령차별 금지
                                                            및 고령자 고용촉진에
                                                            관한 법률<br />
                                                            제4조의 4 제1항
                                                            제1호의 의거
                                                            근로자를 모집하거나
                                                            채용 시 합리적인
                                                            이유 없이 연령을
                                                            이유로 차별할 수
                                                            없음<br />
                                                            <span class="cb"
                                                                >&lt;차별 시
                                                                500만원 이하
                                                                벌금&gt;</span
                                                            ><br />
                                                            <span class="cb"
                                                                >&lt;시정명령
                                                                불이행 시
                                                                3천만원 이하의
                                                                과태료
                                                                부과&gt;</span
                                                            >
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>차별사례</th>
                                                <td>
                                                    <div class="jbInfos tp2">
                                                        <div
                                                            class="
                                                                inf_tx
                                                                noindent
                                                            "
                                                        >
                                                            원자의 나이를
                                                            제한하거나 특정
                                                            연령층을 선호하는
                                                            경우
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>차별로 보지않는 사례</th>
                                                <td>
                                                    <div class="jbInfos tp2">
                                                        <div
                                                            class="
                                                                inf_tx
                                                                noindent
                                                            "
                                                        >
                                                            직무 성질상 특정
                                                            연령기준이 불가피한
                                                            경우
                                                            (진정직업자격)<br />
                                                            <span class="cg"
                                                                >- 연극·영화에서
                                                                청년 역할의
                                                                수행을 위한 연령
                                                                제한 등</span
                                                            ><br />
                                                            <span class="cg"
                                                                >- 여성 목욕탕의
                                                                여성
                                                                목욕관리사,여성
                                                                장애인·여성
                                                                환자의 도우미
                                                                등</span
                                                            ><br />
                                                            <span class="cg"
                                                                >- 여성 기숙사의
                                                                여성사감
                                                                등</span
                                                            ><br /><br />

                                                            현존하는 차별을
                                                            없애거나 고용평등
                                                            촉진을 위해
                                                            잠정적으로 특정성
                                                            우대하는 조치를 하는
                                                            경우 등
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="djFotAre">
                                <div class="btwGrp">
                                    <button
                                        class="jbbtns md"
                                        onclick="$(this).closest('.fnDialogJobPost').toggleClass('show');"
                                    >
                                        <span class="intxtsw"
                                            >내용 확인하였습니다.</span
                                        >
                                    </button>
                                    <button
                                        class="diClse"
                                        title="팝업닫기"
                                    ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 팝업UI:E -->
            </div>
        </div>
        <!-- 연령제한:E -->
    </div>
    <!-- 지원자격:E -->
</template>

<script>
export default {};
</script>

<style>

</style>