<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="email" :rules="emailRules" :label="$t('e-mail')" required></v-text-field>
    <v-text-field :label="$t('password')" v-model="password" :rules="passwordRules" type="password"
                  required></v-text-field>
    <v-btn :disabled="!valid" color="success" @click="submit">
      {{ $t('login') }}
    </v-btn>
    <v-btn color="error" @click="reset">
      {{ $t('reset_form') }}
    </v-btn>
  </v-form>
</template>
<script>
export default {
  auth: 'guest',
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [v => !!v || "Password is required"],
  }),

  methods: {
    async submit() {

      if (this.$refs.form.validate()) {

        this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.email,
            password: this.password,
          },
        }).then((res) => {
          this.$router.push('/stats')
        }).catch((err) => {
            console.log(err.message)
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    }
  },
}
</script>
