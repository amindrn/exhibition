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
                        <v-row justify="center" class="mt-16">
                            <nargan-academy-icon />
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
        <br>
        <br>
        <br>
        <v-row justify="center">
            <v-btn to="/nargan-academy/courses" color="rgba(204, 204, 204,0.2)" height="100" class="font-xlarge font"><span class="font">Our
                    Courses</span></v-btn>
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
        <br>
        <v-row justify="end" class="bot-row">
            <!-- <v-btn @click="openQr()" plain class="font-btn-QR mr-5">QR</v-btn> -->
            <v-card  height="100" width="100" class="qr mt-9"/>
        </v-row>
        <v-dialog v-model="qr" width="500">
            <v-card width="500" height="500" color="red" class="qr"></v-card>
        </v-dialog>
    </v-container>
</template>
<script>
import backIcon from '~/components/svg/backIcon.vue'
import homeIcon from '~/components/svg/homeIcon.vue'
import narganAcademyIcon from '~/components/svg/narganAcademyIcon.vue'
export default {
    components: { backIcon },
    name: 'amitis',
    components: {
        backIcon,
        homeIcon,
        narganAcademyIcon
    },
    data(){
        return {
            qr:false
        }
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
    background-image: url(~/assets/sharbat.jpg);
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
.qr{
    background-image: url(~/assets/qr/Academy.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>