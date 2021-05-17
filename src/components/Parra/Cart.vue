<template>
  <div v-if="cart.length">
    <b-table striped hover :items="cart" :fields="fields">
      <template #cell(actions)="row">
        <center>
          <b-icon
            icon="trash"
            variant="danger"
            class=""
            @click.stop="removerProductoDeCarro(row.item)"
          ></b-icon>
        </center>
      </template>
    </b-table>
    <b-alert show variant="success" class="text-center"
      >TOTAL CO ${{ valorTotal | currency }}</b-alert
    >
    <b-button variant="info" size="sm" block>PAGAR AHORA</b-button>
  </div>
  <b-alert v-else variant="success" show
    >No hay productos en el carrito</b-alert
  >
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      fields: ["nombre", "qty", "precio", "actions"],
    };
  },
  computed: {
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["valorTotal"]),
  },
  methods: {
    ...mapMutations("cart", ["removerProductoDeCarro"]),
  },
};
</script>

<style lang="scss" scoped>
svg {
  cursor: pointer;
}
</style>
