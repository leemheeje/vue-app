import { createStore } from 'vuex';
import { jobpost } from '@/store/module';


export default createStore({
	strict: process.env.NODE_ENV !== 'production',
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		jobpost: jobpost
	}
})
