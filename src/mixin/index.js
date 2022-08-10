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
				return {
					target: this.target,
					code: this.target.value,
					name: this.target.name || this.target.dataset.name,
					checked: this.target.checked,
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

	}
}