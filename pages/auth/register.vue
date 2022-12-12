<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="40" :rules="nameRules" :label="$t('name')" required></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" :label="$t('e-mail')" required></v-text-field>

      <v-text-field :label="$t('password')" v-model="password" :rules="passwordRules" type="password"
                    required></v-text-field>
      <v-text-field :label="$t('confirm_password')" v-model="confirmPassword"
                    :rules="confirmPasswordRules.concat(passwordConfirmationRule)" type="password"
                    required></v-text-field>

      <v-btn :disabled="!valid" color="success" @click="submit">
        {{ $t('register') }}
      </v-btn>
      <v-btn color="error" @click="reset">
        {{ $t('reset_form') }}
      </v-btn>
    </v-form>
<!--    <flash-message message="" :show="errors.length>0"/>-->
  </div>
</template>
<script>
import FlashMessage from "../../components/FlashMessage";

export default {
  components: {FlashMessage},
  auth: 'guest',
  data: () => ({
    valid: true,

    name: "",
    errors: [],
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 40) || "Name must be less than 40 characters"
    ],
    email: "",
    password: "",
    confirmPassword: "",
    passwordRules: [v => !!v || "Password is required"],
    confirmPasswordRules: [v => !!v || "Passwords don't match"]
  }),

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        try {
          // await this.$axios.$get('sanctum/csrf-cookie')
          await this.$axios.post('/api/register', {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.confirmPassword
          })
          let user = await this.$auth.loginWith('laravelSanctum', {
              data: {email: this.email, password: this.password}
            }
          );
          if (user) {
            this.nuxt.redirect(this.localePath('/'))
          }
        } catch (e) {

        }

      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  computed: {
    emailRules() {
      return [
        v => !!v || "Email is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    },
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    }
  },
}
</script>
