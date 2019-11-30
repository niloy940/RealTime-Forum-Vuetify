<template>
  <v-container>
    <v-form
      @submit.prevent="login"
      @keydown="resetValidation"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field v-model="form.username" :rules="usernameRules" label="E-mail" type="email" required></v-text-field>

      <v-text-field
        type="password"
        v-model="form.password"
        :counter="6"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>

      <!-- <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Remamber Password?"
        required
      ></v-checkbox>-->

      <v-btn
        :disabled="!valid || form.errors.any()"
        type="submit"
        color="success"
        class="mr-4"
        @click="validate"
      >Login</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

      <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import Form from "vform";
// import User from '../../models/User'
export default {
  data: () => ({
    valid: true,

    form: new Form({
      username: "",
      password: ""
    }),

    usernameRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    passwordRules: [
      v => !!v || "Password is required",
      v =>
        (v && v.length >= 6) ||
        "Password must be grater than or equal 6 characters"
    ]

    // checkbox: true
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },

    reset() {
      this.$refs.form.reset();
    },

    resetValidation() {
      this.$refs.form.resetValidation();
      this.form.errors.clear();
    },

    login() {
      this.$store
        .dispatch('retrieveToken', this.form)
        .then(response => {
          this.$router.push({name:'forum'});
          console.log(response.statusText);
        });
    }
  }
};
</script>
