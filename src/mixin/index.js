export default {
	data() {
		return {
			asdf: 1
		}
	},
	mounted() {
	},
	methods: {
		__fnComputeFavorite(dataName){
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
                    __chkBind.isChecked((e, { code, name,label }) => {
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

	}
}