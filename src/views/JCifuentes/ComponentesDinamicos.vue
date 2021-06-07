<template>
  <b-container class="mt-5">
    <h1 class="text-center">Componentes dinamicos</h1>
    <b-row>
      <b-col cols="4" class="w-100 mx-auto">
        <center>
          <b-button-group>
            <b-button variant="success" size="sm" @click="actual = 'FormLogin'"
              >Ingresar</b-button
            >
            <b-button
              variant="success"
              size="sm"
              @click="actual = 'FormRegistro'"
              >Registrar</b-button
            >
            <b-button variant="success" size="sm" @click="actual = 'FormPass'"
              >Contraseña</b-button
            >
          </b-button-group>
        </center>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="4">
        <component :is="actual"></component>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FormLogin from "@/components/Cifuentes/Slots/FormLogin.vue";
import FormRegistro from "@/components/Cifuentes/Slots/FormRegistro.vue";
import FormPass from "@/components/Cifuentes/Slots/FormPass.vue";
export default {
  data() {
    return {
      actual: "FormLogin",
    };
  },
  components: {
    FormLogin,
    FormPass,
    FormRegistro,
  },
};
</script>

<style lang="scss" scoped></style>
