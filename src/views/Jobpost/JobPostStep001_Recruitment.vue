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
                    <Row title="모집분야" class="MT40" required>
                        <Col class="col7">
                            <Input placeholder="EX) R&D, 경영지원" />
                        </Col>
                        <Col class="col3 inline FLEX ALIGN_ITEM_CENTER" style="width:150px;">
                            <Input model-value="0" />
							<span class="jbStatText ML10 NOWRAP">명 모집</span>
                        </Col>
                    </Row>
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
					<Row title="직급/직책" class="MT20"></Row>
                    <div class="jbLayoutLabs MT20">
                        <div class="jblabs">
                            <span class="ints">직급/직책</span>
                        </div>
                        <div class="jbDivs">
                            <!-- 선택영역UI:S -->
                            <div class="jbChicCmArea">
                                <!-- 툴팁 확장시 extend-->
                                <div class="tmATInn">
                                    <!-- 선택된영역이있을때:S -->
                                    <div class="fbOriStvsArea">
                                        <!-- foreach:S -->
                                        <div class="fboTpsw">
                                            <span class="wlbwx"
                                                >책임연구원</span
                                            >
                                            <button
                                                class="wlbde"
                                                title="삭제"
                                            ></button>
                                        </div>
                                        <div class="fboTpsw">
                                            <span class="wlbwx"
                                                >국가유공자</span
                                            >
                                            <button
                                                class="wlbde"
                                                title="삭제"
                                            ></button>
                                        </div>
                                        <div class="fboTpsw">
                                            <span class="wlbwx"
                                                >보훈대상자</span
                                            >
                                            <button
                                                class="wlbde"
                                                title="삭제"
                                            ></button>
                                        </div>
                                        <div class="fboTpsw">
                                            <span class="wlbwx"
                                                >고용촉진지원금대상자</span
                                            >
                                            <button
                                                class="wlbde"
                                                title="삭제"
                                            ></button>
                                        </div>
                                        <div class="fboTpsw">
                                            <span class="wlbwx"
                                                >취업보호대상자</span
                                            >
                                            <button
                                                class="wlbde"
                                                title="삭제"
                                            ></button>
                                        </div>
                                        <div class="fboTpsw">
                                            <span class="wlbwx">병역특례</span>
                                            <button
                                                class="wlbde"
                                                title="삭제"
                                            ></button>
                                        </div>
                                        <div class="fboTpsw">
                                            <span class="wlbwx"
                                                >책임연구원</span
                                            >
                                            <button
                                                class="wlbde"
                                                title="삭제"
                                            ></button>
                                        </div>
                                        <div class="fboTpsw">
                                            <span class="wlbwx"
                                                >고용촉진지원금대상자</span
                                            >
                                            <button
                                                class="wlbde"
                                                title="삭제"
                                            ></button>
                                        </div>
                                        <div class="fboTpsw">
                                            <span class="wlbwx">대리</span>
                                            <button
                                                class="wlbde"
                                                title="삭제"
                                            ></button>
                                        </div>
                                        <!-- foreach:E -->
                                    </div>
                                    <!-- 선택된영역이있을때:E -->
                                    <!-- 선택된영역이없을때:S -->
                                    <!-- <div class="tmNulIns">직급/직책을 선택해주세요. (3개까지 입력 가능)</div> -->
                                    <!-- 선택된영역이없을때:E -->
                                    <!-- 선택툴팁영역:S -->
                                    <div class="jbChikTotiArea">
                                        <div class="jbcGlInners">
                                            <div class="jbcHdAec">
                                                <div class="colst w5">
                                                    <div class="intxs">
                                                        <span class="int"
                                                            >직급</span
                                                        >
                                                    </div>
                                                </div>
                                                <div class="colst w5">
                                                    <div class="intxs">
                                                        <span class="int"
                                                            >직책</span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="jbcCtAec">
                                                <div class="colst w5">
                                                    <div class="jbcDepArea">
                                                        <!-- foreach:S -->
                                                        <div class="colst w3">
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
                                                                        >사원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >대리</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >부장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >임원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >상무</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >사장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >선임연구원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >연구소장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >주임</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >과장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >책임매니저</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >감사</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >전무</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >연구원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >책임연구원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >면접 후
                                                                        결정</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >계장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >차장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >매니저</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >이사</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >부사장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >주임연구원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >수석연구원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <!-- foreach:E -->
                                                    </div>
                                                </div>
                                                <div class="colst w5">
                                                    <div class="jbcDepArea">
                                                        <!-- foreach:S -->
                                                        <div class="colst w3">
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
                                                                        >사원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >대리</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >부장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >임원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >상무</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >사장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >선임연구원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >연구소장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >주임</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >과장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >책임매니저</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >감사</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >전무</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >연구원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >책임연구원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >면접 후
                                                                        결정</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >계장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >차장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >매니저</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >이사</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >부사장</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >주임연구원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="colst w3">
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
                                                                        >수석연구원</span
                                                                    >
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <!-- foreach:E -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="jbcBtAec">
                                                <div class="btwGrs">
                                                    <button
                                                        class="
                                                            jbbtns
                                                            md
                                                            outline
                                                        "
                                                    >
                                                        <span class="intxtsw"
                                                            >취소</span
                                                        >
                                                    </button>
                                                    <button class="jbbtns md">
                                                        <span class="intxtsw"
                                                            >확인</span
                                                        >
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 선택툴팁영역:E -->
                                </div>
                                <div class="btnwArea">
                                    <button class="jbbtns sm">
                                        <span class="intxtsw">전체보기</span>
                                    </button>
                                </div>
                                <div class="useBtArea">
                                    <span class="tpwLabs"
                                        >자주 사용하는 직급/직책 선택</span
                                    >
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
                                                <span class="lb">+사원</span>
                                            </label>
                                        </div>
                                        <div class="tpws">
                                            <label class="tweb_bt">
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    value=""
                                                    id=""
                                                    checked
                                                />
                                                <span class="lb">+대리</span>
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
                                                <span class="lb">+과장</span>
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
                                                <span class="lb">+차장</span>
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
                                                <span class="lb">+팀원</span>
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
                                                <span class="lb">+팀장</span>
                                            </label>
                                        </div>
                                        <!-- foreach:E -->
                                    </div>
                                </div>
                            </div>
                            <!-- 선택영역UI:E -->
                        </div>
                    </div>
                    <!-- 직급/직책:E -->
                    <!-- 우대조건:S -->
                    <div class="jbLayoutLabs MT20 MB40">
                        <div class="jblabs">
                            <span class="ints">우대조건</span>
                        </div>
                        <div class="jbDivs">
                            <!-- 선택영역UI:S -->
                            <div class="jbChicCmArea">
                                <div class="tmATInn">
                                    <!-- 선택된영역이있을때:S -->
                                    <!-- 선택된영역이있을때:E -->
                                    <!-- 선택된영역이없을때:S -->
                                    <div class="tmNulIns">
                                        우대조건을 선택해주세요. (6개까지 입력
                                        가능)
                                    </div>
                                    <!-- 선택된영역이없을때:E -->
                                </div>
                                <div class="btnwArea">
                                    <button class="jbbtns sm">
                                        <span class="intxtsw">전체보기</span>
                                    </button>
                                </div>
                                <div class="useBtArea">
                                    <span class="tpwLabs"
                                        >자주 사용하는 우대조건 선택</span
                                    >
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
                                                <span class="lb"
                                                    >+일본어 가능자</span
                                                >
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
                                                <span class="lb"
                                                    >+지방근무 가능자</span
                                                >
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
                                                <span class="lb"
                                                    >+엑셀 고급능력 보유자</span
                                                >
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
                                                <span class="lb"
                                                    >+인근 거주자</span
                                                >
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
                                                <span class="lb">+여성</span>
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
                                                <span class="lb"
                                                    >+여군(장교, 부사관</span
                                                >
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
                                                <span class="lb"
                                                    >+인근 거주자</span
                                                >
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
                                                <span class="lb">+여성</span>
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
                                                <span class="lb"
                                                    >+여군(장교, 부사관</span
                                                >
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
                                                        >우대조건 선택<small
                                                            class="sm"
                                                            >최대 6개까지 선택
                                                            가능</small
                                                        ></span
                                                    >
                                                </div>
                                            </div>
                                            <div class="djConAre">
                                                <!-- 레이어팝선택UI:S -->
                                                <div class="jbChkLavwArea">
                                                    <div class="jbcRowsCont">
                                                        <div class="jbcColLt">
                                                            <div
                                                                class="
                                                                    jbcInConte
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        ltsLst
                                                                    "
                                                                >
                                                                    <!-- foreach:S -->
                                                                    <div
                                                                        class="
                                                                            tpw
                                                                        "
                                                                    >
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
                                                                                >취업보호.장려</span
                                                                            >
                                                                        </button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            tpw
                                                                        "
                                                                    >
                                                                        <button
                                                                            class="
                                                                                dic_bt
                                                                            "
                                                                        >
                                                                            <span
                                                                                class="
                                                                                    d_intx
                                                                                "
                                                                                >취업보호.장려</span
                                                                            >
                                                                        </button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            tpw
                                                                        "
                                                                    >
                                                                        <button
                                                                            class="
                                                                                dic_bt
                                                                            "
                                                                        >
                                                                            <span
                                                                                class="
                                                                                    d_intx
                                                                                "
                                                                                >취업보호.장려</span
                                                                            >
                                                                        </button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            tpw
                                                                        "
                                                                    >
                                                                        <button
                                                                            class="
                                                                                dic_bt
                                                                            "
                                                                        >
                                                                            <span
                                                                                class="
                                                                                    d_intx
                                                                                "
                                                                                >취업보호.장려</span
                                                                            >
                                                                        </button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            tpw
                                                                        "
                                                                    >
                                                                        <button
                                                                            class="
                                                                                dic_bt
                                                                            "
                                                                        >
                                                                            <span
                                                                                class="
                                                                                    d_intx
                                                                                "
                                                                                >취업보호.장려</span
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
                                                                <div
                                                                    class="
                                                                        ltsTits
                                                                    "
                                                                >
                                                                    ㆍ취업보호.장려
                                                                </div>
                                                                <div
                                                                    class="
                                                                        ltsLst
                                                                    "
                                                                >
                                                                    <!-- foreach:S -->
                                                                    <div
                                                                        class="
                                                                            tpw
                                                                        "
                                                                    >
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
                                                                                    >부사장</span
                                                                                >
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            tpw
                                                                        "
                                                                    >
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
                                                                                    >부사장</span
                                                                                >
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            tpw
                                                                        "
                                                                    >
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
                                                                                    >부사장부사장부사장부사장부사장부사장부사장</span
                                                                                >
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            tpw
                                                                        "
                                                                    >
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
                                                                                    >부사장</span
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
                                                            <div
                                                                class="
                                                                    rexwConte
                                                                "
                                                            >
                                                                <!-- 선택된영역이있을때:S -->
                                                                <div
                                                                    class="
                                                                        fbOriStvsArea
                                                                    "
                                                                >
                                                                    <!-- foreach:S -->
                                                                    <div
                                                                        class="
                                                                            fboTpsw
                                                                        "
                                                                    >
                                                                        <span
                                                                            class="
                                                                                wlbwx
                                                                            "
                                                                            >책임연구원</span
                                                                        >
                                                                        <button
                                                                            class="
                                                                                wlbde
                                                                            "
                                                                            title="삭제"
                                                                        ></button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            fboTpsw
                                                                        "
                                                                    >
                                                                        <span
                                                                            class="
                                                                                wlbwx
                                                                            "
                                                                            >국가유공자</span
                                                                        >
                                                                        <button
                                                                            class="
                                                                                wlbde
                                                                            "
                                                                            title="삭제"
                                                                        ></button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            fboTpsw
                                                                        "
                                                                    >
                                                                        <span
                                                                            class="
                                                                                wlbwx
                                                                            "
                                                                            >보훈대상자</span
                                                                        >
                                                                        <button
                                                                            class="
                                                                                wlbde
                                                                            "
                                                                            title="삭제"
                                                                        ></button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            fboTpsw
                                                                        "
                                                                    >
                                                                        <span
                                                                            class="
                                                                                wlbwx
                                                                            "
                                                                            >고용촉진지원금대상자</span
                                                                        >
                                                                        <button
                                                                            class="
                                                                                wlbde
                                                                            "
                                                                            title="삭제"
                                                                        ></button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            fboTpsw
                                                                        "
                                                                    >
                                                                        <span
                                                                            class="
                                                                                wlbwx
                                                                            "
                                                                            >취업보호대상자</span
                                                                        >
                                                                        <button
                                                                            class="
                                                                                wlbde
                                                                            "
                                                                            title="삭제"
                                                                        ></button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            fboTpsw
                                                                        "
                                                                    >
                                                                        <span
                                                                            class="
                                                                                wlbwx
                                                                            "
                                                                            >병역특례</span
                                                                        >
                                                                        <button
                                                                            class="
                                                                                wlbde
                                                                            "
                                                                            title="삭제"
                                                                        ></button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            fboTpsw
                                                                        "
                                                                    >
                                                                        <span
                                                                            class="
                                                                                wlbwx
                                                                            "
                                                                            >책임연구원</span
                                                                        >
                                                                        <button
                                                                            class="
                                                                                wlbde
                                                                            "
                                                                            title="삭제"
                                                                        ></button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            fboTpsw
                                                                        "
                                                                    >
                                                                        <span
                                                                            class="
                                                                                wlbwx
                                                                            "
                                                                            >고용촉진지원금대상자</span
                                                                        >
                                                                        <button
                                                                            class="
                                                                                wlbde
                                                                            "
                                                                            title="삭제"
                                                                        ></button>
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            fboTpsw
                                                                        "
                                                                    >
                                                                        <span
                                                                            class="
                                                                                wlbwx
                                                                            "
                                                                            >대리</span
                                                                        >
                                                                        <button
                                                                            class="
                                                                                wlbde
                                                                            "
                                                                            title="삭제"
                                                                        ></button>
                                                                    </div>
                                                                    <!-- foreach:E -->
                                                                </div>
                                                                <!-- 선택된영역이있을때:E -->
                                                                <!-- 선택된영역이없을때:S -->
                                                                <div
                                                                    class="
                                                                        tmNulIns
                                                                    "
                                                                >
                                                                    선택한
                                                                    항목이
                                                                    없습니다.
                                                                </div>
                                                                <!-- 선택된영역이없을때:E -->
                                                            </div>
                                                            <div
                                                                class="rexwBte"
                                                            >
                                                                <button
                                                                    class="
                                                                        jbbtns
                                                                        sm
                                                                        gray
                                                                    "
                                                                >
                                                                    <span
                                                                        class="
                                                                            intxtsw
                                                                        "
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
                                                    <button
                                                        class="
                                                            jbbtns
                                                            md
                                                            outline
                                                        "
                                                    >
                                                        <span class="intxtsw"
                                                            >취소</span
                                                        >
                                                    </button>
                                                    <button class="jbbtns md">
                                                        <span class="intxtsw"
                                                            >확인</span
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
                            <!-- 선택영역UI:E -->
                        </div>
                    </div>
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
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import Input from "@/components/Form/Input";
export default {
    data() {
        return {
            asdfasdfasdf: "이므히재",
        };
    },
    components: {
        Row,
        Col,
        Input,
    },
    methods: {
        test($event) {
            console.log($event.target.value);
        },
    },
};
</script>
