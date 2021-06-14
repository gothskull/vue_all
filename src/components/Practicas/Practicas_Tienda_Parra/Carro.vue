<template>
  <b-container v-if="carroCup.length">
    <b-table
      class="tabla-cup"
      small
      striped
      hover
      :fields="fields"
      :items="carroCup"
    >
      <template #cell(precio)="data">
        {{ data.item.precio | currency }}
      </template>
      <template #cell(act)="row">
        <center>
          <b-icon icon="trash" variant="danger" class=""></b-icon>
        </center>
      </template>
    </b-table>
    <b-alert class="text-center" show variant="success">
      TOTAL
    </b-alert>
    <b-button variant="info" size="sm" block>PAGAR AHORA</b-button>
  </b-container>
  <b-alert v-else show variant="success">No hay productos en el carro</b-alert>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      fields: ["nombre", "cant", "precio", "act"],
    };
  },
  computed: {
    ...mapState("carrocup", ["carroCup"]),
  },
};
</script>

<style scoped>
.table-sm td {
  font-size: 0.8rem !important;
}
</style>
