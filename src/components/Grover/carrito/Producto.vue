<template>
  <div class="container-card">
    <b-card class="mb-2 shadow" :img-src="producto.imagen">
      <b-card-text>
        <h6>{{ producto.nombre }}</h6>
        $ {{ Number(producto.precio).toFixed(0) | currency }}
      </b-card-text>
      <b-button
        variant="info"
        block
        size="sm"
        :producto="producto"
        :to="{ name: 'Producto', params: { id: producto.id } }"
        >Ver Producto</b-button
      >
      <b-button
        size="sm"
        variant="success"
        block
        :disabled="estaEnCarro"
        @click="enviarProducto(producto)"
      >
        {{ estaEnCarro ? "Añadido" : "Añadir al carrito" }}</b-button
      >
    </b-card>
  </div>
</template>

<script>
import SingleProduct from "@/components/Grover/carrito/SingleProduct.vue";

export default {
  name: "Producto",
  components: { SingleProduct },
  props: ["producto", "estaEnCarro"],
  methods: {
    enviarProducto(producto) {
      this.$emit("agregarproducto", producto);
      console.log("El producto enviado es: " + producto[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-card {
  cursor: pointer;
  & > div:hover {
    box-shadow: none !important;
    transition: all 0.3s ease;
  }
}
</style>
