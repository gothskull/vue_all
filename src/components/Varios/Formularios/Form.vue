<template>
  <div class="mt-5">
    <b-form @submit.prevent="submitForm">
      <h4 class="text-center">Formulario de ingreso</h4>
      <b-form-group label="Nombre">
        <b-form-input
          placeholder="Tu nombre"
          v-model="form.nombre"
        ></b-form-input>
        <div v-if="!nombreIsvalido" class="error">{{ msgError }}</div>
      </b-form-group>
      <b-form-group label="Edad">
        <b-form-input
          placeholder="Tu edad"
          v-model.number="form.edad"
        ></b-form-input>
        <div v-if="!edadIsValida" class="error">{{ msgError }}</div>
      </b-form-group>
      <b-button
        type="submit"
        variant="success"
        size="sm"
        block
        :disabled="!formValid"
        >Ingresar</b-button
      >
    </b-form>
    <!-- <pre>{{ $data }}</pre> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: null,
        edad: null,
      },
      contrasena: "",
      errorInput: true,
      msgError: "",
    };
  },
  props: {
    rules: {
      type: Object,
    },
  },
  computed: {
    nombreIsvalido() {
      return !!this.form.nombre;
    },
    edadIsValida() {
      return (
        typeof this.form.edad === "number" &&
        this.form.edad > 12 &&
        this.form.edad < 120
      );
    },
    formValid() {
      return this.nombreIsvalido && this.edadIsValida;
    },
  },
  methods: {
    submitForm() {
      if (this.formValid) {
        console.log("formulario valido");
      } else {
        console.log("Invalido");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>
