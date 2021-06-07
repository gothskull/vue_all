<template>
  <div>
    <b-card class="mb-3 shadow" :img-src="producto.imagen" img-top>
      <b-card-text>
        <p class="text-center">
          <b>{{ producto.nombre }}</b>
        </p>
        <h4 class="text-center">${{ Number(producto.precio) | currency }}</h4>
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

<style lang="scss" scoped>
p {
  font-size: 0.8rem;
}
</style>
