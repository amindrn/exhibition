<template>
  <v-container fluid class="hen">
      <v-card flat height="10%" width="100%">
                  <v-row>
            <v-col cols="2" class="">
                <v-row justify="center">
                    <v-card class="circle-right" width="100%" height="90" color="rgba(204, 204, 204,0.5)" flat>
                        <div @click="back()" class="font-back">
                            <v-row class="mt-4" justify="center">BACK</v-row>
                            <!-- <back-icon /> -->

                        </div>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="6" class="mt-n3">
            </v-col>
            <v-col cols="1" />
            <v-col cols="2" class="">
                <v-row justify="center">
                    <v-card class="circle-left" width="100%" height="90" color="rgba(204, 204, 204,0.5)" flat>
                        <div @click="backHome()" class="font-back centerSpan">
                          <div  class="mt-4">HOME</div>

                        </div>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
      </v-card>
      <v-card flat height="75%" width="100%"><Flipbook class="flipbook" :pages="pages" ref="flipbook"></Flipbook></v-card>
      <v-card flat height="5%"></v-card>
      <v-card flat height="10%">
        <v-row justify="center">
            <v-col cols="4"></v-col>
            <v-col cols="4" class="">
                <br>
                <v-row v-if="con" justify="center">
                    <v-btn  @click="$refs.flipbook.flipLeft()" class="mr-5 mt-1" color="rgba(204, 204, 204,0.5)"><v-icon>mdi-arrow-left-thick </v-icon></v-btn> <span class="unpage">Page {{ $refs.flipbook.page}} of {{$refs.flipbook.numPages}}</span><v-btn  @click="$refs.flipbook.flipRight()" color="rgba(204, 204, 204,0.5)" class="ml-5 mt-1"><v-icon>mdi-arrow-right-thick</v-icon></v-btn>
                </v-row>
            </v-col>
            <v-col cols="4">
                <v-row justify="center">
                    <v-btn @click="changePage(numPage)" height="50" class="mt-3" color="rgba(204, 204, 204,0.5)">go to page</v-btn>
                    <v-col cols="2"><v-text-field type="number" outlined v-model="numPage"  /></v-col>
                </v-row>
            </v-col>
        </v-row>
      </v-card>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            pages: [
                "artimis/0001.jpg",
                "artimis/0002.jpg",
                "artimis/0003.jpg",
                "artimis/0004.jpg",
                "artimis/0005.jpg",
                "artimis/0006.jpg",
                "artimis/0007.jpg",
                "artimis/0008.jpg",
            ],
            x:4,
            y:3,
            numPage:1,
            con:false
        }
    },
    methods:{
        changePage(p) {
            this.$refs.flipbook.goToPage(p);
        },
        back(){this.$router.push({ name: 'amitis', params: {} })},
        backHome(){this.$router.push({ name: 'index', params: {} })},
        setPages(){
            for(let i = 1;i<85;i++){
                let str = 'artimis/'+i.toString()+'.jpg'
                this.pages.push(str)
            }
        }

    },
    mounted(){
        this.pages = []
        this.con = true
        this.setPages()
    }
}
</script>

<style>
.flipbook {
    width: 100%;
    height: 100%;
}
.hen{
    height: 100%;
}
  .v-text-field__slot input{
     font-size: 30px; 
  }
</style>