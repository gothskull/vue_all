<template>
  <div v-if="items.length" class="carrito">
    <h4>Tu carrito</h4>
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center shadow mb-2"
        v-for="item in items"
        :key="item.id"
      >
        <b-icon
          variant="danger"
          icon="trash"
          @click="quitarProducto(item)"
        ></b-icon>
        {{ item.nombre }}
        <b-badge class="py-2 px-4" variant="success" pill>
          {{ item.precio }}
        </b-badge>
      </b-list-group-item>
    </b-list-group>
    <b-list-group-item
      variant="success"
      class="mt-2 font-weight-bold d-flex justify-content-between align-items-center"
      >TOTAL <span>$ {{ Number(total) | currency }} </span>
    </b-list-group-item>
    <b-button
      @click="$emit('pagar')"
      variant="info"
      block
      size="sm"
      class="mt-2"
      >Pagar Ahora</b-button
    >
  </div>
  <b-alert v-else show variant="success"
    >No hay artículos en el carrito</b-alert
  >
</template>

<script>
export default {
  name: "Carrito",
  props: ["items"],
  data() {
    return {};
  },
  computed: {
    total() {
      return this.items.reduce(
        (acumulador, item) => acumulador + Number(item.precio),
        0
      );
    },
  },
  methods: {
    quitarProducto(producto) {
      this.$emit("quitar-carro", producto);
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  cursor: pointer;
}
</style>
