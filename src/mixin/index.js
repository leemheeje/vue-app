export default {
	data() {
		return {
			__kakaoPostCodes: {
				zip: '',
				addr1: '',
				addr2: '',
				href:'',
			},
		}
	},
	computed:{
		__kakaoPostCodeHref(){
			return `https://map.kakao.com/?q=${this.__kakaoPostCodes.addr1} ${this.__kakaoPostCodes.addr2}`
		},
	},
	mounted() {
	},
	methods: {
		__fnComputeFavorite(dataName) {
			if (this[dataName]) {
				return this[dataName]
					.filter((item) => item.favorite.length)
					.map((item) => item.favorite)
					.reduce((prv, cur) => [...prv, ...cur]);
			} else {
				return [];
			}
		},
		__fnIsLimitSelectBoxCheck(o = [], n = 0) {
			if (n && o.length >= n) {
				return true;
			} else {
				return false;
			}
		},
		__fnSelectBoxCheckBind(e) {
			let obj = function () {
				console.log(this.target);
				return {
					target: this.target,
					code: this.target.value,
					name: this.target.name || this.target.dataset.name,
					checked: this.target.checked,
					label: this.target.label || this.target.dataset.label
				};
			}.call(e);
			return {
				isChecked(callback) {
					callback(e, obj);
				},
				unChecked(callback) {
					callback(e, obj);
				},
			}
		},
		__lcFnBind(e, { seleted, selectedLengh, ...props }) {
			let __chkBind = this.__fnSelectBoxCheckBind(e);
			let __limit = this.__fnIsLimitSelectBoxCheck(this[seleted], this[selectedLengh]);
			if (e.target.checked) {
				if (!__limit) {
					__chkBind.isChecked((e, { code, name, label }) => {
						this[seleted] = [
							...this[seleted],
							{
								code,
								name,
								label,
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
		__lcFnSelectedDelete({ code, seleted, ...props }) {
			this[seleted] = this[seleted].filter((object) => object.code !== code);
		},
		__kakaoPostCodeShow() {
			new window.daum.Postcode({
				oncomplete: (data) => {
					// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

					// 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
					// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
					let fullRoadAddr = data.roadAddress; // 도로명 주소 변수
					let extraRoadAddr = ""; // 도로명 조합형 주소 변수

					// 법정동명이 있을 경우 추가한다. (법정리는 제외)
					// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
					if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
						extraRoadAddr += data.bname;
					}
					// 건물명이 있고, 공동주택일 경우 추가한다.
					if (data.buildingName !== "" && data.apartment === "Y") {
						extraRoadAddr += extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
					}
					// 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
					if (extraRoadAddr !== "") {
						extraRoadAddr = " (" + extraRoadAddr + ")";
					}
					// 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
					if (fullRoadAddr !== "") {
						fullRoadAddr += extraRoadAddr;
					}

					// 우편번호와 주소 정보를 해당 필드에 넣는다.
					this.__kakaoPostCodes.zip = data.zonecode; //5자리 새우편번호 사용
					this.__kakaoPostCodes.addr1 = fullRoadAddr;
				},
			}).open()
		},

	}
}