<template>
  <v-container fluid class="bg">
    <v-row>
      <v-col cols="2" class="mt-16">
        <v-row justify="center">
          <v-card
            class="circle-right"
            width="100%"
            height="170"
            color="rgba(204, 204, 204,0.5)"
            flat
          >
            <div @click="back()" class="font-back mt-16">
              <v-row justify="center">BACK</v-row>
              <!-- <back-icon /> -->
            </div>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="8"></v-col>
      <v-col cols="2" class="mt-16">
        <v-row justify="center">
          <v-card
            class="circle-left"
            width="100%"
            height="170"
            color="rgba(204, 204, 204,0.5)"
            flat
          >
            <div @click="backHome()" class="font-back mt-16 centerSpan">
              <div class="mt-n1">HOME</div>
            </div>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-form v-model="valid" ref="form">
      <v-row class="font-xlarge-first-page">
        <v-col cols="2"></v-col>
        <v-col cols="8"
          ><span class="font-title"
            >Which company do you interested in ?</span
          ></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="2">
          <v-checkbox
            large
            @click="checkCompany"
            v-model="nargan"
            label="Nargan"
          ></v-checkbox>
        </v-col>
        <v-col cols="2">
          <v-checkbox
            @click="checkCompany"
            v-model="naed"
            label="NAED"
          ></v-checkbox>
        </v-col>
        <v-col cols="2">
          <v-checkbox
            @click="checkCompany"
            v-model="datall"
            label="Datall"
          ></v-checkbox>
        </v-col>
        <v-col cols="2">
          <v-checkbox
            @click="checkCompany"
            v-model="academy"
            label="Nargan Academy"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-card
            color="rgba(204, 204, 204,0.7)"
            width="100%"
            height="2"
          ></v-card>
        </v-col>
      </v-row>
      <br />
      <br />
      <br />

      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="2">
          <span class="font-text-input">First Name:</span>
        </v-col>
        <v-col cols="6"
          ><v-text-field
            :rules="rules"
            required
            v-model="firstName"
            rounded
            outlined
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="2">
          <span class="font-text-input">Last Name:</span>
        </v-col>
        <v-col cols="6"
          ><v-text-field
            v-model="lastName"
            :rules="rules"
            required
            rounded
            outlined
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="2">
          <span class="font-text-input">Job Title:</span>
        </v-col>
        <v-col cols="6"
          ><v-text-field
            :rules="rules"
            required
            v-model="jobTitle"
            rounded
            outlined
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="2">
          <span class="font-text-input">Email Address:</span>
        </v-col>
        <v-col cols="6"
          ><v-text-field
            :rules="rules"
            required
            v-model="emailAddress"
            rounded
            outlined
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="2">
          <span class="font-text-input">Phone Number:</span>
        </v-col>
        <v-col cols="6"
          ><v-text-field
            :rules="rules"
            required
            v-model="phoneNumber"
            rounded
            outlined
          ></v-text-field
        ></v-col>
      </v-row>
      <br />
      <br />
      <br />
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-card
            color="rgba(204, 204, 204,0.7)"
            width="100%"
            height="2"
          ></v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <span class="font-text-input">Message:</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-textarea required v-model="message" outlined height="300" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-card
            color="rgba(204, 204, 204,0.7)"
            width="100%"
            height="2"
          ></v-card>
        </v-col>
      </v-row>
      <v-row class="font-xlarge-first-page">
        <v-col cols="2"></v-col>
        <v-col cols="8"
          ><span class="font-title">Are you open to job ?</span></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="2">
          <v-checkbox v-model="open" label="Yes"></v-checkbox>
        </v-col>
        <v-col cols="2">
          <v-checkbox v-model="notOpen" label="No"></v-checkbox>
        </v-col>
      </v-row>
      <template v-if="open">
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="2">
            <span class="font-text-input">Study field:</span>
          </v-col>
          <v-col cols="6"
            ><v-text-field
              :rules="rules"
              required
              v-model="studyField"
              rounded
              outlined
            ></v-text-field
          ></v-col>
        </v-row>
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="2">
            <span class="font-text-input">Degree:</span>
          </v-col>
          <v-col cols="6"
            ><v-text-field
              :rules="rules"
              required
              v-model="degree"
              rounded
              outlined
            ></v-text-field
          ></v-col>
        </v-row>
      </template>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-btn
            @click="submit"
            :disabled="!(valid && checkboxValidate)"
            color="rgba(204, 204, 204,0.5)"
            width="150"
            height="90"
            class="font-btn-add"
            >Add</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
// import axios from "@nuxtjs/axios";
export default {
  mounted() {
    this.fileSaver = require("file-saver");
  },

  data() {
    return {
      rules: [(v) => !!v || "field is required"],
      valid: false,
      company: [],
      checkboxValidate: false,
      testData: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      emailAddress: "",
      phoneNumber: "",
      message: "",
      textForm: "",
      notOpen: true,
      open: false,
      nargan: false,
      naed: false,
      datall: false,
      academy: false,
      studyField: "",
      degree: "",
      fileSaver: null,
    };
  },
  watch: {
    open: function (val) {
      this.open = val;
      this.notOpen = !val;
    },
    notOpen: function (val) {
      this.open = !val;
      this.notOpen = val;
    },
  },
  methods: {
    checkCompany() {
      let arr = [];
      if (this.nargan) {
        arr.push("Nargen");
      }
      if (this.naed) {
        arr.push("NAED");
      }
      if (this.datall) {
        arr.push("Datall");
      }
      if (this.academy) {
        arr.push("Academy");
      }
      this.checkboxValidate = arr.length == 0 ? false : true;
      this.company = arr;
    },
    removeAllFields() {
      this.company = [];
      this.textForm = "";
      this.firstName = "";
      this.lastName = "";
      this.jobTitle = "";
      this.emailAddress = "";
      this.phoneNumber = "";
      this.message = "";
      this.open = false;
      this.nargan = false;
      this.naed = false;
      this.datall = false;
      this.academy = false;
      this.studyField = "";
      this.degree = "";
    },
    createForm() {
      if (this.open) {
        this.textForm = `
      Company: ${this.company}
      First Name: ${this.firstName}
      Last Name: ${this.lastName}
      Job Title: ${this.jobTitle}
      Email Address: ${this.emailAddress}
      Phone Address: ${this.phoneNumber}
      Message: ${this.message}
      Open to job: ${true ? this.open : false}
      Study Field: ${this.studyField}
      Degree: ${this.degree}
      `;
      } else {
        this.textForm = `
      Company: ${this.company}
      First Name: ${this.firstName}
      Last Name: ${this.lastName}
      Job Title: ${this.jobTitle}
      Email Address: ${this.emailAddress}
      Phone Address: ${this.phoneNumber}
      Message: ${this.message}
      Open to job: ${true ? this.open : false}
      `;
      }
    },
    sendToBack() {
      let url = "http://127.0.0.1:3001/test";
      let body = {
        firstname: this.firstName,
        lastname: this.lastName,
        email: this.emailAddress,
        message: this.message,
        job: this.jobTitle,
        company: this.company,
        phonenumber: this.phoneNumber,
      };
      this.$axios.post(url, body);
    },
    async submit() {
      await this.sendToBack();
      // console.log(axios);
      this.createForm();

      var blob = new Blob([this.textForm], {
        type: "text/plain;charset=utf-8",
      });
      this.fileSaver.saveAs(blob, "Information form.txt");
      this.removeAllFields();
      alert("Form successfully added!");
      this.$store.commit("increment2");
      this.$router.push({ name: "index", params: {} });
      // this.backHome()
    },

    back() {
      this.$router.push({ name: "index", params: {} });
    },
    backHome() {
      this.$store.commit("increment");
      this.$router.push({ name: "index", params: {} });
    },
  },
};
</script>
<style scoped>
.bg {
  background-image: url(~/assets/infobg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
}

/* .v-input--selection-controls__input input {
    -ms-transform: scale(2) !important;
    -moz-transform: scale(2) !important;
    -webkit-transform: scale(2) !important;
    -o-transform: scale(2) !important;
    transform: scale(2) !important;
    padding: 10px !important;
} */
.v-text-field--outlined >>> fieldset {
  border-width: 3px;
}
</style>
<style>
.v-text-field__slot input {
  font-size: 30px;
}
textarea {
  font-size: 30px;
}
</style>
