<template>
  <div class="mt-5">
    <b-row class="justify-content-center ">
      <b-col cols="10" class="">
        <h1 class="text-center">
          Comunicación entre componentes
        </h1>
        <h2 class="text-center">Servicios Web</h2>
      </b-col>
      <b-col cols="5">
        <Plan
          v-for="item in PlanesWeb"
          :key="item.id"
          :nombre="item.nombre"
          :precio="item.precio"
          @select="planSeleccionado"
        />
        <!-- <Plan v-for="item in servicios" :key="item.id" :nombre="item" /> -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Plan from "@/components/Grover/Plan.vue";
import { ServiciosWeb } from "@/assets/data.js";
export default {
  components: {
    Plan,
  },
  data() {
    return {
      planSelect: null,
      PlanesWeb: ServiciosWeb,
      servicios: [
        "Plan Básico",
        "Plan Extended",
        "Plan Corporativo",
        "Plan Glod",
      ],
    };
  },
  methods: {
    planSeleccionado(plan) {
      this.planSelect = plan;
    },
  },
};
</script>

<style lang="scss" scoped></style>
