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
} from '@/store/mutations-type';
import { createFunctionExpression } from '@vue/compiler-core';
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
		[SET_JOBPOST_SELETED](state, {
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
		[SET_JOBPOST_UNSELETED](state, { code, seleted }) {
			state[seleted] = state[seleted].filter((object) => object.code !== code);
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
		setMoxipbunyaSession(state, payload) {
			if (typeof payload === 'object') {
				for (let key in payload) {
					state[key] = payload[key];
				}
			}
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
		getSession({ commit }, { session_name, commit_name }) {
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
		}
	},
	namespaced: true,
};