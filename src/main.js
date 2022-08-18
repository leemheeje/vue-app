import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import '@/assets/css/animate.css'
import '@/assets/css/common.css'
import gAuthPlugin from 'vue3-google-oauth2'
import RowLayout from "@/components/Layout/RowLayout";
import Row from "@/components/Layout/Row";
import Col from "@/components/Layout/Col";
import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import Checkbox from "@/components/Form/Checkbox";
import UiSelectedBox from "@/components/UiComponents/UiSelectedBox";
import UiSelectedBoxTooltip from "@/components/UiComponents/UiSelectedBoxTooltip";
import UiSelectedBoxFavorite from "@/components/UiComponents/UiSelectedBoxFavorite";
import UiSelectedBoxDialog from "@/components/UiComponents/UiSelectedBoxDialog";

const app = createApp(App);
const api_path_static = '//localhost:5500/static_api';


app.config.globalProperties.$http = axios
app.config.globalProperties.API_PATH_STATIC = '//localhost:5500/static_api'
app.config.globalProperties.API_PATH_STATIC_JC = `${api_path_static}/jc.json`
app.config.globalProperties.API_PATH_STATIC_JG = `${api_path_static}/jg.json`
app.config.globalProperties.API_PATH_STATIC_WOODAE = `${api_path_static}/woodae.json`
app.config.globalProperties.API_PATH_SUBWAY_INFO = `${process.env.VUE_APP_SUBWAY_API_PATH}/1613000/SubwayInfoService/getKwrdFndSubwaySttnList`


app.component('RowLayout', RowLayout);
app.component('Row', Row);
app.component('Col', Col);
app.component('Input', Input);
app.component('Select', Select);
app.component('Checkbox', Checkbox);
app.component('UiSelectedBox', UiSelectedBox);
app.component('UiSelectedBoxTooltip', UiSelectedBoxTooltip);
app.component('UiSelectedBoxFavorite', UiSelectedBoxFavorite);
app.component('UiSelectedBoxDialog', UiSelectedBoxDialog);


app.use(gAuthPlugin, {
	clientId: process.env.VUE_APP_GOOGLE_OAUTH_CLIENTKEY,
	scope: 'profile email'
}).use(store).use(router).mount('#app')