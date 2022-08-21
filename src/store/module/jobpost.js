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

	SET_ZIWON_EDUCATION_SELECT,
	SET_ZIWON_EDUCATION_INPUT,
	SET_ZIWON_EDUCATION_CHECK,
	SET_ZIWON_JENDER,
	SET_ZIWON_AGE,
	SET_ZIWON_AGE_LN,

	SET_WKCOND_PAYGUBUN,
	SET_WKCOND_PAYGUBUN_PRICE,
	SET_WKCOND_PAYGUBUN_CHECK,
	SET_WKCOND_WORK_MODE,
	SET_WKCOND_WORK_MODE_DETAIL,
} from '@/store/mutations-type';
import { SUBWAY_INFO_KEY } from "@/config";
import { debounce } from "lodash";
import { createFunctionExpression } from '@vue/compiler-core';
import axios from 'axios';
export const jobpost = {
	state() {
		return {
			/* 모집분야 */
			mzby_title: '',								//타이틀
			mzby_length: 0,								//모집인원
			mzby_newcomer: true,						//경력여부 //신입
			mzby_career: true,							//경력여부 //경력
			mzby_career_range: '',						//경력여부>년차
			mzby_career_absolute: false,				//경력여부>경력무관
			mzby_respons: '',							//담당업무
			mzby_partname: '',							//근무부서
			mzby_jcjg_seleted: [],						//직급/직책 선택된거
			mzby_woodae_selected: [],					//우대조건 선택된거

			/* 지원자격 */
			ziwon_hckGubun: '',								//학력셀렉트
			ziwon_hckGubun_input: '',						//기타학력
			ziwon_hckGubun_check: false,					//졸업예정자 체크박스
			ziwon_jender: '99',								//성별선택
			ziwon_age: '1',									//연령선택
			ziwon_age_ln: [],								//연령 범위
			ziwon_langage_selected: [],						//외국어 선택된거
			ziwon_woodaeuni_selected: [],					//우대전공 선택된거
			ziwon_license_selected: [],						//자격증 선택된거

			/* 근무조건 */
			wkcond_paygubun: '1',							//연봉,주급 등등 셀렉트,
			wkcond_paygubun_price: '',						//급액 입력/셀렉트,
			wkcond_paygubun_check: false,					//면접후결정 체크박스
			wkcond_subway_selected: [],						//인근지하철 선택된거
			wkcond_subway_search: [],						//인근지하철 검색API리스트
			wkcond_work_mode: [],							//근무형태 체크박스들
		}
	},
	getters: {
		mzby_jcjg_seleted_length(state) {
			return state.mzby_jcjg_seleted.length;
		},
		mzby_woodae_selected_length(state) {
			return state.mzby_woodae_selected.length;
		},
		wkcond_work_mode_filter(state) {
			return state.wkcond_work_mode.filter(({ add_form, ...props }) => add_form);
		},
	},
	mutations: {
		[SET_JOBPOST_SELETED](state, {
			event,
			selectedLengh,
			selected,
			...props
		}) {
			let { checked, code, name, label } = {
				selectedLengh,
				event,
				selected,
				target: event.target,
				code: event.target.value,
				name: event.target.name || event.target.dataset.name,
				checked: event.target.checked,
				label: event.target.label || event.target.dataset.label,
				...props
			}
			// state.mzby_jcjg_seleted = payload
			if (checked) {
				if (state[selected].length < selectedLengh) {
					state[selected] = [...state[selected], {
						code,
						name,
						label,
					}];
				} else {
					event.target.checked = false;
					alert(props.alertMsg);
				}
			} else {
				state[selected] = state[selected].filter((object) => object.code !== code);
			}
		},
		[SET_JOBPOST_UNSELETED](state, { code, selected }) {
			state[selected] = state[selected].filter((object) => object.code !== code);
		},
		[SET_MOZIPBUNYA_TITLE](state, payload) {
			state.mzby_title = payload;
		},
		[SET_MOZIPBUNYA_LENGTH](state, payload) {
			state.mzby_length = payload;
		},
		[SET_MOZIPBUNYA_NEWCOMER](state, { target }) {
			state.mzby_newcomer = target.checked;
		},
		[SET_MOZIPBUNYA_CAREER](state, { target }) {
			state.mzby_career = target.checked;
		},
		[SET_MOZIPBUNYA_CAREER_RANGE](state, payload) {
			state.mzby_career_range = payload;
		},
		[SET_MOZIPBUNYA_CAREER_ABSOLUTE](state, { target }) {
			state.mzby_career_absolute = target.checked;
		},
		[SET_MOZIPBUNYA_RESPONS](state, payload) {
			state.mzby_respons = payload;
		},
		[SET_MOZIPBUNYA_PARTNAME](state, payload) {
			state.mzby_partname = payload;
		},
		[SET_ZIWON_EDUCATION_SELECT](state, payload) {
			state.ziwon_hckGubun = payload;
		},
		[SET_ZIWON_EDUCATION_INPUT](state, payload) {
			state.ziwon_hckGubun_input = payload;
		},
		[SET_ZIWON_EDUCATION_CHECK](state, payload) {
			state.ziwon_hckGubun_check = payload;
		},
		[SET_ZIWON_JENDER](state, payload) {
			state.ziwon_jender = payload;
		},
		[SET_ZIWON_AGE](state, payload) {
			state.ziwon_age = payload;
		},
		[SET_ZIWON_AGE_LN](state, payload) {
			let index = payload.dataset ? payload.dataset.index : 0;
			if (Array.isArray(state.ziwon_age_ln)) {
				state.ziwon_age_ln[index] = payload.value;
			} else {
				state.ziwon_age_ln = [];
			}
		},
		[SET_WKCOND_PAYGUBUN](state, payload) {
			state.wkcond_paygubun = payload;
		},
		[SET_WKCOND_PAYGUBUN_PRICE](state, payload) {
			state.wkcond_paygubun_price = payload;
		},
		[SET_WKCOND_PAYGUBUN_CHECK](state, payload) {
			state.wkcond_paygubun_check = payload;
		},
		[SET_WKCOND_WORK_MODE](state, { event, item }) {
			let gubun = state.wkcond_work_mode.find((itm) => itm.value == item.value);
			if (event.target.checked && !gubun) {
				state.wkcond_work_mode = [...state.wkcond_work_mode, item];
			} else {
				state.wkcond_work_mode = state.wkcond_work_mode.filter((itm) => itm.value != item.value)
			}
		},
		[SET_WKCOND_WORK_MODE_DETAIL](state, { value, add_form }) {
			state.wkcond_work_mode = state.wkcond_work_mode.map(item => {
				if (item.value === value) {
					item.add_form = add_form;
				}
				return item;
			});
		},
		setMoxipbunyaSession(state, payload) {
			if (typeof payload === 'object') {
				for (let key in payload) {
					state[key] = payload[key];
				}
			}
		},
		setSearchSubwaykey(state, payload) {
			state.wkcond_subway_search = payload;
		}
	},
	actions: {
		fetchStaticData({ commit }, url) {
			return new Promise((resolve, reject) => {
				axios.get(url).then((response) => {
					resolve(response);
				}).catch((err) => reject(err));
			});
		},
		setSession({ }, { session_name, session_value }) {
			return new Promise(resolve => {
				window.localStorage.setItem(session_name, JSON.stringify(session_value));
				resolve(session_name, session_value);
			})
		},
		getSession({ commit }, { session_name, commit_name = 'setMoxipbunyaSession' }) {
			return new Promise((resolve, reject) => {
				let _d = window.localStorage.getItem(session_name);
				let _data = undefined;
				if (_d) {
					_data = JSON.parse(_d);
					commit(commit_name, _data);
					resolve(commit_name, _data);
				} else {
					reject();
				}
			})
		},
		searchSubwaykey: debounce(function ({ commit }, keyword) {
			return new Promise((resolve, reject) => {
				axios.get(`/subway/1613000/SubwayInfoService/getKwrdFndSubwaySttnList?serviceKey=${SUBWAY_INFO_KEY}&_type=json&subwayStationName=${keyword}`).then(
					({
						data: {
							response: {
								header: { resultCode },
								body: { items },
							},
						},
					}) => {
						let _data = [];
						if (resultCode === "00" && items && items.item.length) {
							_data = items.item;
						}
						commit('setSearchSubwaykey', items.item);
						resolve(items.item);
					}
				);
			});
		}, 300),
	},
	namespaced: true,
};