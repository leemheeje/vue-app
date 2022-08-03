import { createRouter, createWebHistory } from 'vue-router'
import {
	JobPostStep001_Recruitment,
	JobPostStep002_Eligibility,
	JobPostStep003_WorkingConditions,
} from '../views/Jobpost'

const routes = [
	{
		path: '/',
		alias: ['/Recruitment'],
		name: 'Recruitment',
		component: JobPostStep001_Recruitment
	},
	{
		path: '/Eligibility',
		name: 'Eligibility',
		component: JobPostStep002_Eligibility
	},
	{
		path: '/Workingconditions',
		name: 'WorkingConditions',
		component: JobPostStep003_WorkingConditions
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
