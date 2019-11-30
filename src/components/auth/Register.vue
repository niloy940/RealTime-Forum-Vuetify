<template>
  <v-container>
    <v-form
      @submit.prevent="register"
      @keydown="resetValidation"
      ref="form"
      v-model="valid"
      lazy-validation
    >
     <v-text-field
        v-model="form.name"
        :counter="5"
        :rules="nameRules"
        label="Name"
        type="text"
        required
    ></v-text-field>

     <v-text-field
        v-model="form.email"
        :rules="emailRules"
        label="E-mail"
        required
    ></v-text-field>

     <v-text-field
        type="password"
        v-model="form.password"
        :counter="6"
        :rules="passwordRules"
        label="Password"
        required
     ></v-text-field>

     <v-text-field
        type="password"
        v-model="form.password_confirmation"
        :rules="confirmPasswordRules"
        label="Confirm Password"
        required
     ></v-text-field>

      <v-btn
        :disabled="!valid || form.errors.any()"
        type="submit"
        color="success"
        class="mr-4"
        @click="validate"
      >Sign Up</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

      <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import Form from "vform";

export default {
  data: () => ({
    valid: true,

    form: new Form({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    }),

    nameRules: [
      v => !!v || "Name is required",
      v =>
        (v && v.length >= 5) ||
        "Name must be grater than or equal 5 characters"
    ],

    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    passwordRules: [
      v => !!v || "Password is required",
      v =>
        (v && v.length >= 6) ||
        "Password must be grater than or equal 6 characters"
    ],

    confirmPasswordRules: [
      v => !!v || "Password is required",
    ],
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

    register() {
      this.$store
        .dispatch('register', this.form)
        .then(response => {
          this.$router.push({name:'login'});
          console.log(response.statusText);
        });
    },
  },
};
</script>

