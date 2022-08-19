import { createRouter, createWebHistory } from 'vue-router';
import {
	RECRUITMENT,
	ELIGIBILITY,
	WORKINGCONDITIONS,
} from '@/router/router-type';
import {
	JobPostStep001_Recruitment,
	JobPostStep002_Eligibility,
	JobPostStep003_WorkingConditions,
} from '../views/Jobpost'

let _toLowerCase = (nm) => nm.toLowerCase();
const routes = [
	{
		path: '/',
		alias: [`/${_toLowerCase(RECRUITMENT)}`],
		name: RECRUITMENT,
		component: JobPostStep001_Recruitment
	},
	{
		alias: [],
		name: RECRUITMENT,
		path: `/${_toLowerCase(ELIGIBILITY)}`,
		name: ELIGIBILITY,
		component: JobPostStep002_Eligibility
	},
	{
		path: `/${_toLowerCase(WORKINGCONDITIONS)}`,
		name: WORKINGCONDITIONS,
		component: JobPostStep003_WorkingConditions
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
