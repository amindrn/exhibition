<template>
  <v-card height="100%" width="100%">
    <!-- <transition name="slide-y-transition"> -->
    <v-expand-transition>
      <v-card v-touch:swipe="test" v-show="lock" class="firstPage" width="100%" height="100%">
      <video autoplay muted loop id="myVideo">
          <source src="~/assets/1.mp4" type="video/mp4">
      </video>
        <!-- <v-btn @click="lock = !lock" class="fixbot">
          
        </v-btn> -->
        <v-row class="fixbot" justify="center">
          <v-container fluid>
            <v-row justify="center">
              <v-card width="20%" color="rgba(204, 204, 204,0.3)" rounded="circle" flat>
                <v-card-title class="text-son mt-n16 text-flow font-xlarge-first-page">Welcome</v-card-title>
                <v-card-title class="text-son mt-n1 text-flow font-xlarge-first-page">to</v-card-title>
                <v-card-title class="text-son mt-16 text-flow font-xlarge-first-page">NARGAN FAMILY</v-card-title>
                <v-responsive :aspect-ratio="1" class="mom">
                  <v-card width="80%" color="rgba(204, 204, 204,0.3)" rounded="circle" flat class="son">
                    <v-responsive :aspect-ratio="1" class="mom">
                      <v-card width="70%" color="rgba(204, 204, 204,0.2)" rounded="circle" flat class="son">
                        <v-responsive :aspect-ratio="1"></v-responsive>
                      </v-card>
                    </v-responsive>
                  </v-card>
                </v-responsive>
              </v-card>
            </v-row>
            <v-row justify="center">
              <v-card color="rgba(204, 204, 204,0.5)" width="150" height="100" class="fuckYou">
                <v-card-subtitle class="mb-n5">
                  <v-row class="marginUnset" justify="center">
                    <span>Swipe up</span>
                  </v-row>
                </v-card-subtitle>
                <v-card-actions>
                  <v-row class="marginUnset" justify="center">
                    <swipe-up />
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-container>
        </v-row>
      </v-card>
    </v-expand-transition>
    <!-- </transition> -->
    <!-- <transition name="fade"> -->
    <v-expand-transition>
      <v-card v-show="!lock" width="100%" height="100%" class="mom" color="rgba(171, 171, 171,1)">
      <video autoplay muted loop id="myVideo2">
          <source src="~/assets/dota2.mp4" type="video/mp4">
      </video>
      <div class="sabbagh">
        <v-card height="10%" color="rgba(171, 171, 171,0)" flat>
          <v-container fluid class="colH">
            <v-row>
              <v-col cols="2" class="mt-10">
                <v-row justify="center">
                  <v-card class="circle-right" width="100%" height="100" color="rgba(204, 204, 204,0.5)" flat>
                    <div @click="back()" class="font-back mt-8">
                      <v-row justify="center">BACK</v-row>
                      <!-- <back-icon /> -->

                    </div>
                  </v-card>
                </v-row>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="2">
                <v-row>
                  <v-col cols="8" />
                  <v-col class="mt-8" cols="4" @click="goInfo()">
                    <Info class="mt-7" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card width="95%" height="80%" class="son mt-10" flat color="rgba(171, 171, 171,0)">
          <v-container fluid class="colH">
            <!-- <v-row class="">
              <v-col cols="2">
                <v-row justify="center">
                  <v-card class="circle-right" width="100%" height="170" color="rgba(204, 204, 204,0.5)" flat>
                    <div @click="back()" class="font-back mt-16">
                      <v-row justify="center">BACK</v-row>

                    </div>
                  </v-card>
                </v-row>
              </v-col>
            </v-row> -->
            <v-row class="colH">
            <!-- {{narganavt}} -->
              <v-col cols="3">
                <v-card :to="{ name: 'nargan' }" height="80%" color="rgba(171, 171, 171,1)" class='nargan' flat>
                <v-card height="100%" width="100%" class='nargan2'></v-card>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card height="20%" color="rgba(204, 204, 204,0)" flat></v-card>
                <v-card height="80%" color="rgba(171, 171, 171,1)" :to="{ name: 'amitis' }" class="amitis" flat>
                <v-card height="100%" width="100%" class='amitis2'></v-card>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card height="80%" color="rgba(171, 171, 171,1)" :to="{ name: 'datall' }" class="datall" flat>
                <v-card height="100%" width="100%" class='datall2'></v-card>
                </v-card>
              </v-col>
              <v-col cols="3">
                <!-- <v-btn @click="test2()">tesst</v-btn>
                {{narganavt}} -->
                <v-card height="20%" color="rgba(204, 204, 204,0)" flat></v-card>
                <v-card height="80%" :to="{ name: 'nargan-academy' }" color="rgba(112, 112, 112,0)" class="aca" flat>
                <!-- <v-card height="100%" width="100%" class='aca' color="rgba(112, 112, 112,1)"></v-card> -->
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        </div>
        <!-- <v-btn @click="lock = !lock" class="son">test</v-btn> -->
      </v-card>
    </v-expand-transition>
    <!-- </transition> -->


  </v-card>
</template>
<script>
import swipeUp from '~/components/svg/swipeUp.vue'
import info from '~/components/svg/info.vue'
import Info from '~/components/svg/info.vue'
export default {
  components: {
    swipeUp,
    info,
    Info
  },
  data() {
    return {
      vahid:true,
      lock: true,
      narganavt:true
    }
  },
  methods: {
    test2(){
      this.narganavt = !this.narganavt
        //  setInterval(function () {this.narganavt = !this.narganavt;console.log(this.narganavt)}, 1000);
    },
    back() {
      this.lock = true
    },
    goInfo() {
      this.$router.push({ name: 'information', params: {} })
    },
    test(direction) {
      if (direction == 'top') {
        console.log('up')
        this.lock = false
        // setInterval(function () {this.narganavt = !this.narganavt;console.log(this.narganavt)}, 1000);
      }
    }
  },
  fetch() {
    if (!this.$store.state.counter) {
      this.lock = false
    }
  },
  mounted(){
    if (!this.$store.state.counter) {
      this.lock = false
    }
    this.narganavt = true
    // setTimeout(function(){},2000)
    // setInterval(function () {this.narganavt = !this.narganavt;console.log(this.narganavt)}, 1000);
    // this.test2();
  }
}
</script>
<style scoped>
.firstPage {
  /* background-image: url(~/assets/firstpage.png); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.datall {
  background-image: url(~/assets/datall.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.nargan {
  background-image: url(~/assets/ali.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.nargan2 {
  background-image: url(~/assets/nargan2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0.6;
}
.datall2 {
  background-image: url(~/assets/datall2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0.6;
}
.amitis {
  background-image: url(~/assets/amitis.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.amitis2 {
  background-image: url(~/assets/amitis2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0.6; 
}
.academy1{
  /* background-image: url(~/assets/sabagh2.jpg); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* opacity: 0.8; */
}
.aca{
  background-image: url(~/assets/aca.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0.6;
}


.fixbot {
  width: 100%;
  margin: unset !important;
  position: absolute;
  bottom: 0 !important;
  /* left: 50%; */
}

.marginUnset {
  margin: unset !important;
}




.home-enter-active {
  transition: opacity .9s;
}

.home-leave-active {
  transition: opacity .0s;
}

.home-enter,
.home-enter-leave-to {
  opacity: 0;
}

.mom {
  position: relative;
}

.son {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.text-son {
  /* margin: 0; */
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

}

.text-flow {
  white-space: nowrap;
}

.colH {
  height: 100%;
}

.botCard {
  bottom: 0;
}

.circle-bot {
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.fuckYou {
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  opacity: 0.7;
}
#myVideo2 {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  opacity: 0.7;
}
.sabbagh{
  position: fixed;
  bottom: 0;
  /* background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1; */
  width: 100%;
  height: 100%;
  /* padding: 20px; */
}
</style>
