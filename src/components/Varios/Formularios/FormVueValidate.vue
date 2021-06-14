<template>
  <div class="mt-5">
    <b-form @submit.prevent="submitForm">
      <h4 class="text-center">Formulario de ingreso</h4>
      <b-form-group label="Nombre">
        <b-form-input
          placeholder="Tu nombre"
          v-model="$v.form.nombre.$model"
          :state="validateState('nombre')"
        ></b-form-input>
        <!-- <div v-if="$v.nombre.$invalid" class="error">Error</div> -->
        <b-form-invalid-feedback id="input-1-live-feedback"
          >This is a required field and must be at least 3
          characters.</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group label="Edad">
        <b-form-input
          placeholder="Tu edad"
          v-model.number="$v.form.edad.$model"
          :state="validateState('edad')"
        ></b-form-input>
        <b-form-invalid-feedback
          >This is a required field and must be at least 3
          characters.</b-form-invalid-feedback
        >
      </b-form-group>
      <b-button
        type="submit"
        :disabled="$v.$invalid"
        variant="success"
        size="sm"
        block
        >Ingresar</b-button
      >
    </b-form>
    <!-- <pre>{{ $data }}</pre> -->
  </div>
</template>

<script>
import {
  required,
  minLength,
  between,
  alpha,
  integer,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        nombre: null,
        edad: null,

        contrasena: "",
      },
      errorInput: true,
      msgError: "",
    };
  },

  validations: {
    form: {
      nombre: {
        required,
        minLength: minLength(4),
        alpha,
      },
      edad: {
        required,
        between: between(12, 50),
        integer,
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    submitForm() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
    },
  },
};
</script>

<style lang="scss" scoped></style>
