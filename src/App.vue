<template>
    <div class="viewport">
        <div id="container" class="container gray">
            <div class="contents">
                <div class="jbPstGlbaArea">
                    <!-- 채용공고 헤더영역:S -->
                    <div class="jbHeadersArea">
                        <div class="jbHdRowsArn">
                            <div class="jbGlInners">
                                <!-- 이전공고 불러오기 selectbox:S -->
                                <JobpostSelect />
                                <!-- 이전공고 불러오기 selectbox:E -->
                                <!-- 버튼그룹:S -->
                                <div class="btnwWrap">
                                    <button class="htd_btn outline">미리보기</button>
                                    {{ Vue3GoogleOauth.isInit }}
                                    {{ Vue3GoogleOauth.isAuthorized }}
                                    {{ user }}
                                    <button @click="handleClickSignIn" :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized">sign in</button>
                                    <button @click="handleClickGetAuthCode" :disabled="!Vue3GoogleOauth.isInit">get authCode</button>
                                    <button @click="handleClickSignOut" :disabled="!Vue3GoogleOauth.isAuthorized">sign out</button>
                                    <button @click="handleClickDisconnect" :disabled="!Vue3GoogleOauth.isAuthorized">disconnect</button>
                                    <button class="htd_btn org" >저장하기</button>
                                </div>

                                <!-- 버튼그룹:E -->
                            </div>
                            <Gnb />
                        </div>
                        <div class="jbHdRowsBrn" v-if="false">
                            <!-- 미등록식 보이는 영역:S-->
                            <div class="mtValueChkArea">
                                <div class="jbGlInners">
                                    <div class="inxwTxs">
                                        <!-- foreach:S -->
                                        <button class="inbt">모집분야</button>
                                        <button class="inbt">모집분야1</button>
                                        <button class="inbt">모집분야2</button>
                                        <!-- foreach:E -->
                                        <span class="tlbw">이 등록되지 않았습니다.</span>
                                    </div>
                                </div>
                            </div>
                            <!-- 미등록식 보이는 영역:E -->
                        </div>
                    </div>
                    <!-- 채용공고 헤더영역:E -->

                    <!-- 채용공고 컨텐츠 영역:S -->
                    <div class="jbContentsArea">
                        <div class="jbGlInners">
                            <router-view />
                        </div>
                    </div>
                    <!-- 채용공고 컨텐츠 영역:E -->
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "@/views/Footer";
import JobpostSelect from "@/components/Navigator/JobpostSelect";
import Gnb from "@/components/Navigator/Gnb";
import { provide,inject, toRefs, reactive,ref,computed } from "vue";

export default {
	inject:['Vue3GoogleOauth'],
	// provide(){
	// 	return {
	// 		protest: computed(()=>[1,2])
	// 	}
	// },
    components: {
        Footer,
        Gnb,
        JobpostSelect,
    },
    props: {
        msg: String,
    },

    data() {
        return {
            user: "",
        };
    },
    created() {
    },
    methods: {
        async handleClickSignIn() {
            try {
                const googleUser = await this.$gAuth.signIn();
                if (!googleUser) {
                    return null;
                }
                console.log("googleUser", googleUser);
                this.user = googleUser.getBasicProfile().getEmail();
                console.log("getId", this.user);
                console.log("getBasicProfile", googleUser.getBasicProfile());
                console.log("getAuthResponse", googleUser.getAuthResponse());
                console.log("getAuthResponse", this.$gAuth.instance.currentUser.get().getAuthResponse());
            } catch (error) {
                //on fail do something
                console.error(error);
                return null;
            }
        },

        async handleClickGetAuthCode() {
            try {
                const authCode = await this.$gAuth.getAuthCode();
                console.log("authCode", authCode);
            } catch (error) {
                //on fail do something
                console.error(error);
                return null;
            }
        },

        async handleClickSignOut() {
            try {
                await this.$gAuth.signOut();
                console.log("isAuthorized", this.Vue3GoogleOauth.isAuthorized);
                this.user = "";
            } catch (error) {
                console.error(error);
            }
        },

        handleClickDisconnect() {
            window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
        },
    },
    // setup(props,context) {
    //     const { isSignIn } = toRefs(props);
    //     const testref = reactive({testref:1});
    //     const Vue3GoogleOauth = inject("Vue3GoogleOauth");

    //     const handleClickLogin = () => {};
    //     return {
    //         Vue3GoogleOauth,
    //         handleClickLogin,
    //         isSignIn,
    //         testref,
    //     };
    // },
};
</script>
