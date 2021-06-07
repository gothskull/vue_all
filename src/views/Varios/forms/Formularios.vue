<template>
  <b-container class="mt-5">
    <h1 class="text-center">Validación dinámica de formularios</h1>
    <h3 class="text-center">
      Fuente:
      <a
        href="https://vueschool.io/lessons/vuejs-form-validation-diy"
        target="_blank"
        >AQUÍ</a
      >
    </h3>
    <b-row class="justify-content-center">
      <b-col cols="4">
        <Form :rules="{ min: 5, required: !valid }" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Form from "@/components/Varios/Formularios/Form.vue";
export default {
  data() {
    return {
      valid: true,
    };
  },
  components: {
    Form,
  },
};
</script>

<style lang="scss" scoped></style>
