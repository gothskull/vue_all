<template>
  <div>
    <b-card class="mb-2 shadow" :img-src="producto.imagen">
      <b-card-text>
        <h6>{{ producto.nombre }}</h6>
        $ {{ Number(producto.precio).toFixed(0) }}
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
export default {
  props: {
    producto: {
      type: Object,
      required: true,
    },
    estaEnCarro: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
