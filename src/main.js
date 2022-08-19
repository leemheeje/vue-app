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
import SearchBar from "@/components/UiComponents/SearchBar";
import SearchBarListItems from "@/components/UiComponents/SearchBarListItems";
import RadioGroup from "@/components/Form/RadioGroup";
import Radio from "@/components/Form/Radio";
import Dialog from "@/components/Dialog/Dialog";
import AddToggleBox from "@/components/UiComponents/AddToggleBox";
import Nullmsg from "@/components/Form/Nullmsg";
import Button from "@/components/Form/Button";




const app = createApp(App);
const api_path_static = '//localhost:5500/static_api';


app.config.globalProperties.$http = axios
app.config.globalProperties.API_PATH_STATIC = '//localhost:5500/static_api'
app.config.globalProperties.API_PATH_STATIC_JC = `${api_path_static}/jc.json`
app.config.globalProperties.API_PATH_STATIC_JG = `${api_path_static}/jg.json`
app.config.globalProperties.API_PATH_STATIC_WOODAE = `${api_path_static}/woodae.json`
app.config.globalProperties.API_PATH_STATIC_LANGAGE = `${api_path_static}/langage.json`
app.config.globalProperties.API_PATH_STATIC_WOODAE_UNIVERS = `${api_path_static}/woodae_univers.json`
app.config.globalProperties.API_PATH_STATIC_LICENSE = `${api_path_static}/license.json`
app.config.globalProperties.API_PATH_STATIC_COUNTRY = `${api_path_static}/country.json`
app.config.globalProperties.API_PATH_STATIC_PAYGUBUN = `${api_path_static}/paygubun.json`
app.config.globalProperties.API_PATH_STATIC_WEEK = `${api_path_static}/week.json`
app.config.globalProperties.API_PATH_STATIC_AREA = `${api_path_static}/area.json`
app.config.globalProperties.API_PATH_STATIC_WORK_MODE = `${api_path_static}/work_mode.json`
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
app.component('SearchBar', SearchBar);
app.component('SearchBarListItems', SearchBarListItems);
app.component('RadioGroup', RadioGroup);
app.component('Radio', Radio);
app.component('Dialog', Dialog);
app.component('AddToggleBox', AddToggleBox);
app.component('Nullmsg', Nullmsg);
app.component('Button', Button);


app.use(gAuthPlugin, {
	clientId: process.env.VUE_APP_GOOGLE_OAUTH_CLIENTKEY,
	scope: 'profile email'
}).use(store).use(router).mount('#app')