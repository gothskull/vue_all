<template>
  <div>
    <b-card class="mb-3 shadow" :img-src="producto.imagen" img-top>
      <b-card-text>
        <p>{{ producto.nombre }}</p>
        ${{ Number(producto.precio) | currency }}
      </b-card-text>
      <b-button
        variant="success"
        block
        size="sm"
        @click="$emit('addToCart', producto)"
        >Añadir al carrito</b-button
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
  },
};
</script>

<style lang="scss" scoped></style>
