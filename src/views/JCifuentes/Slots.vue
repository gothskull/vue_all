<template>
  <b-container class="mt-5">
    <h1 class="text-center">Slots</h1>
    <b-row class="justify-content-center">
      <b-col cols="4">
        <b-button-group class="justify-content-between d-flex">
          <b-button
            size="sm"
            @click="
              {
                show = true;
              }
            "
            variant="success"
            >Ingreso</b-button
          >
          <b-button
            size="sm"
            @click="
              {
                show = false;
              }
            "
            variant="outline-success"
            >Contraseña</b-button
          >
        </b-button-group>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="4">
        <form-slot v-if="show">
          <h3 slot="formTitle" class="text-center">Formulario de ingreso</h3>
          <div slot="formBody">
            <b-form-group label="Coreo electrónico">
              <b-input type="email" required placeholder="Tu correo"></b-input>
            </b-form-group>
            <b-form-group label="Contraseña">
              <b-form-input
                type="password"
                placeholder="Contraseña"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <b-button
            slot="formBtn"
            class="mt-2"
            size="sm"
            block
            variant="success"
            >{{ show ? "Ingresar" : "Recuperar contraseña" }}
          </b-button>
        </form-slot>
        <form-slot v-else>
          <h3 slot="formTitle" class="text-center">Recuperar contraseña</h3>
          <div slot="formBody">
            <b-form-group label="Coreo electrónico">
              <b-input type="email" required placeholder="Tu correo"></b-input>
            </b-form-group>
          </div>
          <b-button
            slot="formBtn"
            class="mt-2"
            size="sm"
            block
            variant="success"
            >{{ show ? "Ingresar" : "Recuperar contraseña" }}
          </b-button>
        </form-slot>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FormSlot from "@/components/Cifuentes/Slots/FormSlot.vue";
export default {
  components: {
    FormSlot,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
