<template>
  <div class="mt-5">
    <b-form @submit="submitForm">
      <h4 class="text-center">Formulario de ingreso</h4>
      <b-form-group label="Nombre">
        <b-form-input placeholder="Tu nombre" v-model="nombre"></b-form-input>
        <div v-if="error" class="error">Error {{ msgError }}</div>
      </b-form-group>
      <b-form-group label="Edad">
        <b-form-input placeholder="Tu edad" v-model="edad"></b-form-input>
        <div v-if="error" class="error">Error {{ msgError }}</div>
      </b-form-group>
      <!-- <b-form-group label="contraseña">
        <b-form-input
          type="password"
          placeholder="Contraseña"
          v-model="contrasena"
        ></b-form-input>
        <div v-if="error" class="error">Error {{ msgError }}</div>
      </b-form-group> -->
      <b-button variant="success" size="sm" block>Ingresar</b-button>
    </b-form>
    <pre>{{ $data }}</pre>
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
  methods: {
    submitForm() {
      const nombreIsvalido = !!this.form.nombre;
      const edadIsValida =
        typeof this.form.edad === "number" &&
        this.form.edad > 12 &&
        this.form.edad < 120;
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>
