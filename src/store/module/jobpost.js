import {
	SET_MOZIPBUNYA_TITLE,
	SET_MOZIPBUNYA_LENGTH,
	SET_MOZIPBUNYA_NEWCOMER,
	SET_MOZIPBUNYA_CAREER,
	SET_MOZIPBUNYA_CAREER_RANGE,
	SET_MOZIPBUNYA_CAREER_ABSOLUTE,
	SET_MOZIPBUNYA_RESPONS,
	SET_MOZIPBUNYA_PARTNAME,
	SET_MOZIPBUNYA_SELETED,
} from '@/store/mutations-type';
import axios from 'axios';
export const jobpost = {
	state() {
		return {
			/* 모집분야 */
			//모집분야
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
		}
	},
	getters: {
		mzby_jcjg_seleted_length(state) {
			return state.mzby_jcjg_seleted.length;
		},
		mzby_woodae_selected_length(state) {
			return state.mzby_woodae_selected.length;
		},
	},
	mutations: {
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
		[SET_MOZIPBUNYA_SELETED](state, {
			event,
			selectedLengh,
			seleted,
			...props
		}) {
			let { checked, code, name, label } = {
				selectedLengh,
				event,
				seleted,
				target: event.target,
				code: event.target.value,
				name: event.target.name || event.target.dataset.name,
				checked: event.target.checked,
				label: event.target.label || event.target.dataset.label,
				...props
			}
			// state.mzby_jcjg_seleted = payload
			if (checked) {
				if (state[seleted].length < selectedLengh) {
					state[seleted] = [...state[seleted], {
						code,
						name,
						label,
					}];
				} else {
					event.target.checked = false;
					alert(props.alertMsg);
				}
			} else {
				state[seleted] = state[seleted].filter((object) => object.code !== code);
			}
		},
	},
	actions: {
		fetchStaticData({ commit }, url) {
			return new Promise((resolve, reject) => {
				axios.get(url).then((response) => {
					resolve(response);
				}).catch((err) => reject(err));
			});
		},
	},
	namespaced: true,
};