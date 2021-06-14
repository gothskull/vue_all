<template>
  <b-container class="mt-5">
    <h1 class="text-center">Validación de formularios con Vuelidate</h1>
    <h3 class="text-center">
      Fuente:
      <a
        href="https://bootstrap-vue.org/docs/reference/validation#form-validation"
        target="_blank"
        >AQUÍ</a
      >
    </h3>
    <b-row class="justify-content-center">
      <b-col cols="4">
        <FormVueValidate />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FormVueValidate from "@/components/Varios/Formularios/FormVueValidate.vue";
export default {
  data() {
    return {
      valid: true,
    };
  },
  components: {
    FormVueValidate,
  },
};
</script>

<style lang="scss" scoped></style>
