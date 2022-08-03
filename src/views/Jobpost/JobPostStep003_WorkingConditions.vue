<template>
    <!-- 근무조건:S -->
    <div class="jbCBoxing" data-fullpage="2">
        <div class="jbTits">근무조건</div>
        <div class="jbSTits">우리 회사 근무조건은 어떻게 되나요?</div>

        <!-- 연봉/급여:S -->
        <div class="jbLayoutLabs required MT45">
            <div class="jblabs"><span class="ints">연봉/급여</span></div>
            <div class="jbDivs">
                <div class="row">
                    <div class="col3">
                        <div class="jbForm">
                            <select>
                                <option value="">연봉</option>
                                <option value="">월급</option>
                                <option value="">주급</option>
                                <option value="">일급</option>
                                <option value="">시급</option>
                                <option value="">건당</option>
                                <option value="">회사내규에 따름</option>
                            </select>
                        </div>
                    </div>
                    <div class="col00">
                        <!-- 연봉선택시 :S -->
                        <!-- <div class="jbForm inlabel inline" style="width: 300px;">
												<select>
													<option value="">선택해주세요</option>
													<option value="">2,200~2,500</option>
												</select>
											</div> -->
                        <!-- 연봉선택시 :E -->
                        <div class="jbForm inlabel inline" style="width: 300px">
                            <input
                                type="number"
                                placeholder=""
                                id=""
                                name=""
                                value=""
                            />
                            <label class="inl">만원</label>
                            <!-- <label class="inl">원</label> -->
                        </div>
                        <div class="jbForm inline ML15">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">면접 후 결정</span>
                            </label>
                        </div>
                    </div>
                    <div class="col12">
                        <div class="jbAntoTxts MT10">
                            <!-- 연봉일때 보여지는 영역:S -->
                            <div class="FWB">
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
                            <div class="FWB">
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
                            <div class="FWB">
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
                            <div class="FWB">
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
                            <div class="FWB">
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
                            <div class="FWB">
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
                            <div class="FWB">
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
                    </div>
                </div>
            </div>
        </div>
        <!-- 연봉/급여:E -->
        <!-- 근무형태:S -->
        <div class="jbLayoutLabs required MT20">
            <div class="jblabs smpadding">
                <span class="ints">근무형태</span>
            </div>
            <div class="jbDivs">
                <div class="row rcol6">
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">정규직</span>
                            </label>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">계약직</span>
                            </label>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">인턴</span>
                            </label>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">파견직</span>
                            </label>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">프리랜서</span>
                            </label>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">파트타임</span>
                            </label>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">위촉직</span>
                            </label>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">아르바이트</span>
                            </label>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">병역특례</span>
                            </label>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">전임</span>
                            </label>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">교육생</span>
                            </label>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">해외취업</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col12">
                        <div class="jbForm">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb"
                                    >대체인력
                                    <span class="lbe"
                                        >출산·육아에 따른 대체인력을
                                        채용형태</span
                                    ></span
                                >
                            </label>
                        </div>
                    </div>
                </div>

                <!-- 근무형태 별 추가입력폼:S -->
                <div class="jbAddFormArea MT10 MB10">
                    <div class="jbaFormInners">
                        <!-- 아르바이트 근무기간:S -->
                        <div class="jbTps">
                            <div class="jblts">
                                <span class="intx">ㆍ아르바이트 근무기간</span>
                            </div>
                            <div class="jbcots">
                                <div class="jbForm inline" style="width: 180px">
                                    <select>
                                        <option value="">기간선택</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- 아르바이트 근무기간:E -->
                        <!-- 정규직 근무기간:S -->
                        <div class="jbTps">
                            <div class="jblts">
                                <span class="intx">ㆍ정규직 근무기간</span>
                            </div>
                            <div class="jbcots">
                                <div
                                    class="jbForm inline MR20"
                                    style="width: 180px"
                                >
                                    <select>
                                        <option value="">기간선택</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- 정규직 근무기간:E -->
                        <!-- 계약직 근무기간:S -->
                        <div class="jbTps">
                            <div class="jblts">
                                <span class="intx">ㆍ계약직 근무기간</span>
                            </div>
                            <div class="jbcots">
                                <div
                                    class="jbForm inline MR20"
                                    style="width: 180px"
                                >
                                    <select>
                                        <option value="">기간선택</option>
                                    </select>
                                </div>
                                <div class="jbForm inline MR20">
                                    <label>
                                        <input
                                            type="checkbox"
                                            id=""
                                            name=""
                                            value=""
                                        />
                                        <span class="lb">정규직 전환가능</span>
                                    </label>
                                </div>
                                <div class="jbForm inline MR20">
                                    <label>
                                        <input
                                            type="checkbox"
                                            id=""
                                            name=""
                                            value=""
                                        />
                                        <span class="lb">기간제</span>
                                    </label>
                                </div>
                                <div class="jbForm inline MR20">
                                    <label>
                                        <input
                                            type="checkbox"
                                            id=""
                                            name=""
                                            value=""
                                        />
                                        <span class="lb">무기계약직</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- 계약직 근무기간:E -->
                        <!-- 인턴 근무기간:S -->
                        <div class="jbTps">
                            <div class="jblts">
                                <span class="intx">ㆍ인턴 근무기간</span>
                            </div>
                            <div class="jbcots">
                                <div
                                    class="jbForm inline MR20"
                                    style="width: 180px"
                                >
                                    <select>
                                        <option value="">기간선택</option>
                                    </select>
                                </div>
                                <div class="jbForm inline MR20">
                                    <label>
                                        <input
                                            type="checkbox"
                                            id=""
                                            name=""
                                            value=""
                                        />
                                        <span class="lb">정규직 전환가능</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- 인턴 근무기간:E -->
                        <!-- 파견직 근무기간:S -->
                        <div class="jbTps">
                            <div class="jblts">
                                <span class="intx">ㆍ파견직 근무기간</span>
                            </div>
                            <div class="jbcots">
                                <div
                                    class="jbForm inline MR20"
                                    style="width: 180px"
                                >
                                    <select>
                                        <option value="">기간선택</option>
                                    </select>
                                </div>
                                <div class="jbForm inline MR20">
                                    <label>
                                        <input
                                            type="checkbox"
                                            id=""
                                            name=""
                                            value=""
                                        />
                                        <span class="lb">정규직 전환가능</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- 파견직 근무기간:E -->
                        <!-- 프리랜서 근무기간:S -->
                        <div class="jbTps">
                            <div class="jblts">
                                <span class="intx">ㆍ프리랜서 근무기간</span>
                            </div>
                            <div class="jbcots">
                                <div
                                    class="jbForm inline MR20"
                                    style="width: 180px"
                                >
                                    <select>
                                        <option value="">기간선택</option>
                                    </select>
                                </div>
                                <div class="jbForm inline MR20">
                                    <label>
                                        <input
                                            type="checkbox"
                                            id=""
                                            name=""
                                            value=""
                                        />
                                        <span class="lb">정규직 전환가능</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- 프리랜서 근무기간:E -->
                        <!-- 아르바이트 근무기간:S -->
                        <div class="jbTps">
                            <div class="jblts">
                                <span class="intx">ㆍ아르바이트 근무기간</span>
                            </div>
                            <div class="jbcots">
                                <div
                                    class="jbForm inline MR20"
                                    style="width: 180px"
                                >
                                    <select>
                                        <option value="">기간선택</option>
                                    </select>
                                </div>
                                <div class="jbForm inline MR20">
                                    <label>
                                        <input
                                            type="checkbox"
                                            id=""
                                            name=""
                                            value=""
                                        />
                                        <span class="lb">정규직 전환가능</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- 아르바이트 근무기간:E -->
                        <!-- 대체인력 근무기간:S -->
                        <div class="jbTps">
                            <div class="jblts">
                                <span class="intx">ㆍ대체인력 근무기간</span>
                            </div>
                            <div class="jbcots">
                                <div
                                    class="jbForm inline MR20"
                                    style="width: 180px"
                                >
                                    <select>
                                        <option value="">기간선택</option>
                                    </select>
                                </div>
                                <div class="jbForm inline MR20">
                                    <label>
                                        <input
                                            type="checkbox"
                                            id=""
                                            name=""
                                            value=""
                                        />
                                        <span class="lb">정규직 전환가능</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- 대체인력 근무기간:E -->
                    </div>
                </div>
                <!-- 근무형태 별 추가입력폼:E -->
            </div>
        </div>
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
        <div class="jbLayoutLabs required MT20">
            <div class="jblabs"><span class="ints">근무지역</span></div>
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
                            근무지역을 선택해 주세요. (6개까지 입력 가능)
                        </div>
                        <!-- 선택된영역이없을때:E -->
                    </div>
                    <div class="btnwArea">
                        <button class="jbbtns sm">
                            <span class="intxtsw">전체보기</span>
                        </button>
                    </div>

                    <!-- 팝업UI:S -->
                    <div class="dialogJobPostArea fnDialogJobPost">
                        <div class="dimm"></div>
                        <div class="djGiContents">
                            <div class="djGiInners">
                                <div class="djHedAre">
                                    <div class="dintx">
                                        <span class="inw"
                                            >근무지역 선택<small class="sm"
                                                >최대 6개까지 선택 가능</small
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
                                                placeholder="지역명을 입력하세요."
                                            />
                                        </div>
                                        <div class="resArea">
                                            <div class="reSinner">
                                                <!-- 연관검색있을때:S -->
                                                <!-- foreach:S -->
                                                <div class="asTps">
                                                    <button class="iewx">
                                                        서울특별시 >
                                                        <em class="ant">강</em
                                                        >남구
                                                    </button>
                                                </div>
                                                <div class="asTps">
                                                    <button class="iewx">
                                                        서울특별시 >
                                                        <em class="ant">강</em
                                                        >서구
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
                                                                    >서울특별시</span
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
                                                                    >인천광역시</span
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
                                                                    >대전광역시</span
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
                                                                    >대구광역시</span
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
                                                                    >부산광역시</span
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
                                                        ㆍ서울특별시
                                                    </div>
                                                    <div class="ltsLst col4">
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
                                                                        >강남구</span
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
                                                                        >관악구</span
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
                                                                        >노원구</span
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
                                                                        >마포구</span
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
                                                                        >성북구</span
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
                                                                        >용산구</span
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
                                                                >서울특별시 >
                                                                강남구</span
                                                            >
                                                            <button
                                                                class="wlbde"
                                                                title="삭제"
                                                            ></button>
                                                        </div>
                                                        <div class="fboTpsw">
                                                            <span class="wlbwx"
                                                                >인천광역시 >
                                                                강화군</span
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
        <!-- 근무지역:E -->
        <!-- 인근지하철:S -->
        <div class="jbLayoutLabs MT20">
            <div class="jblabs">
                <span class="ints"
                    >인근지하철<small class="sm">(0/5)</small></span
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
                            인근지하철을 선택해 주세요. (5개까지 입력 가능)
                        </div>
                        <!-- 선택된영역이없을때:E -->
                    </div>
                    <div class="btnwArea">
                        <button class="jbbtns sm">
                            <span class="intxtsw">전체보기</span>
                        </button>
                    </div>
                    <!-- 팝업UI:S -->
                    <div class="dialogJobPostArea fnDialogJobPost">
                        <div class="dimm"></div>
                        <div class="djGiContents">
                            <div class="djGiInners">
                                <div class="djHedAre">
                                    <div class="dintx">
                                        <span class="inw"
                                            >인근 지하철 선택<small class="sm"
                                                >최대 5개까지 선택 가능</small
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
                                                placeholder="지하철명을 입력하세요."
                                            />
                                        </div>
                                        <div class="resArea">
                                            <div class="reSinner">
                                                <!-- 연관검색있을때:S -->
                                                <!-- foreach:S -->
                                                <div class="asTps">
                                                    <button class="iewx">
                                                        서울특별시 >
                                                        <em class="ant">강</em
                                                        >남구
                                                    </button>
                                                </div>
                                                <div class="asTps">
                                                    <button class="iewx">
                                                        서울특별시 >
                                                        <em class="ant">강</em
                                                        >서구
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
                                                    <div
                                                        class="
                                                            jbAddFormArea
                                                            lglb
                                                            MT10
                                                        "
                                                    >
                                                        <!-- foreach:S -->
                                                        <div class="jbTps">
                                                            <div class="jblts">
                                                                <span
                                                                    class="intx"
                                                                    >부산
                                                                    국제금융센터·부산은행
                                                                    ( 2호선
                                                                    )</span
                                                                >
                                                            </div>
                                                            <div class="jbcots">
                                                                <div
                                                                    class="
                                                                        jbForm
                                                                        inline
                                                                        MR10
                                                                    "
                                                                    style="
                                                                        width: 80px;
                                                                    "
                                                                >
                                                                    <input
                                                                        type="text"
                                                                        value=""
                                                                        name=""
                                                                        id=""
                                                                        class="
                                                                            TXTR
                                                                        "
                                                                    />
                                                                </div>
                                                                <span
                                                                    class="
                                                                        jbStatText
                                                                        MR10
                                                                    "
                                                                    >번
                                                                    출구</span
                                                                >
                                                                <div
                                                                    class="
                                                                        jbForm
                                                                        inline
                                                                        MR10
                                                                    "
                                                                    style="
                                                                        width: 160px;
                                                                    "
                                                                >
                                                                    <select>
                                                                        <option
                                                                            value=""
                                                                        >
                                                                            거리선택
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <span
                                                                    class="
                                                                        jbStatText
                                                                    "
                                                                    >이내</span
                                                                >
                                                                <button
                                                                    class="
                                                                        jbls_de
                                                                    "
                                                                    title="삭제"
                                                                ></button>
                                                            </div>
                                                        </div>
                                                        <div class="jbTps">
                                                            <div class="jblts">
                                                                <span
                                                                    class="intx"
                                                                    >수도권 판교
                                                                    ( 신분당선,
                                                                    경강 )</span
                                                                >
                                                            </div>
                                                            <div class="jbcots">
                                                                <div
                                                                    class="
                                                                        jbForm
                                                                        inline
                                                                        MR10
                                                                    "
                                                                    style="
                                                                        width: 80px;
                                                                    "
                                                                >
                                                                    <input
                                                                        type="text"
                                                                        value=""
                                                                        name=""
                                                                        id=""
                                                                        class="
                                                                            TXTR
                                                                        "
                                                                    />
                                                                </div>
                                                                <span
                                                                    class="
                                                                        jbStatText
                                                                        MR10
                                                                    "
                                                                    >번
                                                                    출구</span
                                                                >
                                                                <div
                                                                    class="
                                                                        jbForm
                                                                        inline
                                                                        MR10
                                                                    "
                                                                    style="
                                                                        width: 160px;
                                                                    "
                                                                >
                                                                    <select>
                                                                        <option
                                                                            value=""
                                                                        >
                                                                            거리선택
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <span
                                                                    class="
                                                                        jbStatText
                                                                    "
                                                                    >이내</span
                                                                >
                                                                <button
                                                                    class="
                                                                        jbls_de
                                                                    "
                                                                    title="삭제"
                                                                ></button>
                                                            </div>
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
        <!-- 인근지하철:E -->
        <!-- 근무요일:S -->
        <div class="jbLayoutLabs MT20">
            <div class="jblabs"><span class="ints">근무요일</span></div>
            <div class="jbDivs">
                <div class="row">
                    <div class="col25">
                        <div class="jbForm">
                            <select name="">
                                <option value="">선택해주세요</option>
                            </select>
                        </div>
                    </div>
                    <div class="col00">
                        <div class="jbForm inline" style="width: 368px">
                            <input
                                type="number"
                                placeholder="근무요일을 선택해주세요."
                                id=""
                                name=""
                                value=""
                                readonly
                            />
                        </div>
                        <div class="jbForm inline ML15">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">요일 직접선택</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- 근무요일 별 추가입력폼:S -->
                <div class="jbAddFormArea MT10 MB20">
                    <div class="jbaFormInners">
                        <div class="jbForm FLOATL MR30">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">월요일</span>
                            </label>
                        </div>
                        <div class="jbForm FLOATL MR30">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">화요일</span>
                            </label>
                        </div>
                        <div class="jbForm FLOATL MR30">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">수요일</span>
                            </label>
                        </div>
                        <div class="jbForm FLOATL MR30">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">목요일</span>
                            </label>
                        </div>
                        <div class="jbForm FLOATL MR30">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">금요일</span>
                            </label>
                        </div>
                        <div class="jbForm FLOATL MR30">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">토요일</span>
                            </label>
                        </div>
                        <div class="jbForm FLOATL MR30">
                            <label>
                                <input type="checkbox" id="" name="" value="" />
                                <span class="lb">일요일</span>
                            </label>
                        </div>
                    </div>
                </div>
                <!-- 근무요일 별 추가입력폼:S -->
            </div>
        </div>
        <!-- 근무요일:E -->
        <!-- 근무시간:S -->
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
export default {};
</script>