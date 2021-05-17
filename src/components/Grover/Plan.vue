<template>
  <div>
    <b-card
      @click="seleccionar"
      :title="nombre"
      class="mb-3 shadow"
      :class="{ activo: seleccionado }"
    >
      <b-card-text>CO {{ precio }} </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seleccionado: false,
    };
  },
  props: {
    nombre: {
      type: String,
      required: true,
    },
    precio: {
      type: String,
      required: true,
    },
  },
  methods: {
    seleccionar() {
      this.$emit("select", this.nombre);
      this.seleccionado = !this.seleccionado;
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  transition: all 0.2s ease;
}
.card:hover,
.activo {
  background-color: rgb(139, 18, 93);
  color: #ffffff;
}
</style>
