<template>
  <div>
    <b-card :img-src="cupcake.imagen" class="mb-2 shadow" img-top>
      <b-card-text>
        <h6 class="text-center">{{ cupcake.nombre }}</h6>
        <h4 class="text-center">CO ${{ cupcake.precio | currency }}</h4>
      </b-card-text>
      <b-button
        @click="$emit('addCupCart', cupcake)"
        size="sm"
        block
        variant="success"
        >Añadir al carrito</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    cupcake: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h6 {
  font-size: 0.8rem;
}
</style>
