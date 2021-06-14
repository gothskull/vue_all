<template>
  <b-container v-if="cupcakes">
    <b-row>
      <b-col>
        <paginate :per="perPage" :list="cupcakes" name="cups">
          <b-card-group columns>
            <ProductItem
              v-for="cupcake in paginated('cups')"
              :key="cupcake.id"
              :cupcake="cupcake"
              @addCupCart="agregarCupCarro"
            />
          </b-card-group>
        </paginate>
        <paginate-links
          for="cups"
          :show-step-links="true"
          :step-links="{ next: 'Siguiente', prev: 'Anterior' }"
          :classes="{
            ul: ['pagination', 'pagination-sm', 'justify-content-center'],
            li: ['page-item'],
            'li > a': ['page-link', 'text-success'],
          }"
        ></paginate-links>
      </b-col>
    </b-row>
  </b-container>
  <b-alert v-else show variant="success">No hay productos</b-alert>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import ProductItem from "@/components/Practicas/Practicas_Tienda_Parra/ProductItem.vue";

export default {
  data() {
    return {
      paginate: ["cups"],
      perPage: 6,
    };
  },
  mounted() {
    this.fetchCupcakes();
  },
  components: {
    ProductItem,
  },
  computed: {
    ...mapState("cupcakes", ["cupcakes"]),
  },
  methods: {
    ...mapActions("cupcakes", ["fetchCupcakes"]),
    ...mapMutations("carrocup", ["addCupcakeToCart"]),
    agregarCupCarro(cupcake) {
      this.addCupcakeToCart(cupcake);
    },
  },
};
</script>

<style scoped></style>
