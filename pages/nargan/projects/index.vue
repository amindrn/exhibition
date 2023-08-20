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
        <v-row justify="center">
            <v-btn color="rgba(204, 204, 204,0.2)" height="100" class="font-xlarge font" to="/nargan/projects/nargan-in-assaluyeh">Nargan in Assaluyeh</v-btn>
        </v-row>
        <br>
        <br>
        <v-row justify="center">
            <v-btn color="rgba(204, 204, 204,0.2)" height="100" class="font-xlarge font" to="/nargan/projects/Polyolefins">Olefins & Polyolefins</v-btn>
        </v-row>
        <br>
        <br>
        <v-row justify="center">
            <v-btn to="/nargan/projects/failure-analysis" color="rgba(204, 204, 204,0.2)" height="100" class="font-xlarge font">Corrosian study
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
        <v-row justify="end" class="bot-row">
            <!-- <v-btn @click="openQr()" plain class="font-btn-QR mr-5">QR</v-btn> -->
            <v-card height="100" width="100" class="qr mt-8"/>
        </v-row>
        <v-dialog fullscreen v-model="dialog">
            <v-card width="100%" height="100%">
                <!-- <v-btn @click="dialog = false">test</v-btn> -->
                <!-- <client-only> -->
                <v-card v-show="test" width="100" height="100" />
                <Flipbook :singlePage="true" v-show="!test" class="flipbook" :pages="pages" ref="flipbook">
                </Flipbook>
                <!-- </client-only> -->

            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
// import Flipbook from 'flipbook-vue'
import backIcon from '~/components/svg/backIcon.vue'
import homeIcon from '~/components/svg/homeIcon.vue'
import narganIcon from '~/components/svg/narganIcon.vue'
export default {
    components: { backIcon },
    name: 'nargan-projects',
    components: {
        backIcon,
        homeIcon,
        narganIcon
    },
    data() {
        return {
            test: true,
            dialog: false,
            pages: [
                "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                "https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/3083250/pexels-photo-3083250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://picsum.photos/200",
                "~/assets/test.jpeg"
            ],
            pagesHiRes: [
                "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                "https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/3083250/pexels-photo-3083250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://picsum.photos/200",
                "~/assets/test.jpeg"

            ]
        }
    },
    computed: {
        // pages() {
        //     return [
        //         "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        //         "https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        //         "https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        //         "https://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        //         "https://images.pexels.com/photos/3083250/pexels-photo-3083250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        //         "https://picsum.photos/200"
        //     ]
        // }
    },
    methods: {
        testShow() {
            const a = setInterval(() => {
                this.pages.push('test')
                this.test = false
                // this.pages[this.pages.length] = null
            }, 1000)
            // const myTimeout = setTimeout(clearInterval(a), 5000);

        },
        back() {
            // this.$store.commit('increment')
            this.$router.push({ name: 'nargan', params: {} })
        },
        backHome() {
            this.$store.commit('increment')
            this.$router.push({ name: 'index', params: {} })
        },
        open(type) {
            this.dialog = true
        }
    },
    mounted() {
        // window.dispatchEvent(new Event('resize'));
        // this.pages.push('https://picsum.photos/200')
        // setInterval(() => {
        //     this.pages.push('test')
        //     this.test = false
        //     // this.pages[this.pages.length] = null
        // }, 1000)
        this.testShow();
        // function addPic() {
        //     // this.pages.push('test')
        //     this.test = false
        //     console.log('bug')
        // }
        // for (let i = 0; i < 3; i++) { setTimeout(addPic, 1000); }
        // setTimeout(addPic, 1000);
        // myTimeout = setTimeout(() => { this.test = false }, 1000);
        this.test = false
    },
    created() {
        // this.mounted();
        // console.log(this.pages)
        // this.pages.push('test')
        // this.test = false
        // setInterval(() => {
        //     this.pages.push('test')
        //     this.test = false
        // }, 1000)
    }
}
</script>
<style scoped>
.main-page {
    background-image: url(~/assets/narganprojects.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
}

.customcircle {
    border-radius: 58% / 0 0 100% 100%;
}

.font {
    font-family: 'Custom';
}

.flipbook {
    width: 100%;
    height: 100%;
}

/* .flipbook {
    width: 90vw;
    height: 90vh;
} */

.flipbook-container {
    position: absolute !important;
}

/* .flipbook {
    width: 60vw;
    height: calc(100vh - 50px - 40px);
}

.flipbook .bounding-box {
    box-shadow: 0 0 20px #000;
} */
.qr{
    background-image: url(~/assets/qr/Nargan.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>