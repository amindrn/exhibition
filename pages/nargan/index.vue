<template>
    <v-container fluid class="main-page" height="100%">
        <v-row>
            <v-col cols="2" class="mt-16">
                <v-row justify="center">
                    <v-card class="circle-right" width="100%" height="170" color="rgba(204, 204, 204,0.5)" flat>
                        <div @click="back()" class="font-back mt-16">
                            <v-row justify="center">BACK</v-row>
                            <!-- <back-icon /> -->

                        </div>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="6" class="mt-n3">
                <v-row justify="center">
                    <v-card color="rgba(204, 204, 204,0.5)" width="40%" height="250" class="customcircle" flat>
                        <v-row justify="center" class="mt-3">
                            <nargan-icon />
                        </v-row>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="1" />
            <v-col cols="2" class="mt-16">
                <v-row justify="center">
                    <v-card class="circle-left" width="100%" height="170" color="rgba(204, 204, 204,0.5)" flat>
                        <div @click="backHome()" class="font-back mt-16 centerSpan">
                          <div class="mt-n1">HOME</div>

                        </div>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <v-row justify="center">
            <v-btn to="/nargan/about-us" color="rgba(204, 204, 204,0.2)" class="font-xlarge font" height="100"><span class="font">About
                    Us</span></v-btn>
        </v-row>
        <br>
        <br>
        <v-row justify="center">
            <v-btn color="rgba(204, 204, 204,0.2)" height="100" class="font-xlarge font" to="/nargan/projects">Our
                Projects
                </v-btn>
        </v-row>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <v-row justify="end" class="bot-row">
            <!-- <v-btn @click="openQr()" plain class="font-btn-QR mr-5">QR</v-btn> -->
            <v-card height="100" width="100" class="qr mt-3"/>
        </v-row>
        <v-dialog v-model="qr" width="500">
            <v-card width="500" height="500" color="red" class="qr"></v-card>
        </v-dialog>
        <v-dialog fullscreen v-model="dialog">
           <v-card width="100%" height="100%">
                <v-card v-show="test" width="100" height="100" />
                <Flipbook v-show="!test" class="flipbook" :pages="pages" ref="flipbook">
                </Flipbook>

            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
import backIcon from '~/components/svg/backIcon.vue'
import homeIcon from '~/components/svg/homeIcon.vue'
import narganIcon from '~/components/svg/narganIcon.vue'
export default {
    components: { backIcon },
    name: 'nargan',
    data(){
        return {
            test:false,
            qr:false,
            dialog: false,
            pages:[
                "artimis/0001.jpg",
                "artimis/0002.jpg",
                "artimis/0003.jpg",
                "artimis/0004.jpg",
                "artimis/0005.jpg",
                "artimis/0006.jpg",
                "artimis/0007.jpg",
                "artimis/0008.jpg",
            ]
        }
    },
    components: {
        backIcon,
        homeIcon,
        narganIcon
    },
    methods: {
        openQr(){
            this.qr = true
        },
        back() {
            this.$store.commit('increment')
            this.$router.push({ name: 'index', params: {} })
        },
        backHome() {
            this.$store.commit('increment')
            this.$router.push({ name: 'index', params: {} })
        }
    }
}
</script>
<style scoped>
.main-page {
    background-image: url(~/assets/narganpage.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
}
.qr{
    background-image: url(~/assets/qr/Nargan.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.customcircle {
    border-radius: 58% / 0 0 100% 100%;
}

.font {
    font-family: 'Custom';
}

.circle-right {
    border-radius: unset !important;
    border-top-right-radius: 80px !important;
    border-bottom-right-radius: 80px !important;
}

.circle-left {
    border-radius: unset !important;
    border-top-left-radius: 80px !important;
    border-bottom-left-radius: 80px !important;
}
/* .bot-row{
    position: absolute !important;
    bottom: 0%;
} */
</style>