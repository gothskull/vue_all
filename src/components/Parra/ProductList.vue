<template>
  <div v-if="productos.length">
    <b-row>
      <b-col>
        <paginate name="products" :list="productos" :per="perPage">
          <b-card-group columns>
            <ProductItem
              v-for="producto in paginated('products')"
              :key="producto.id"
              :producto="producto"
              @addToCart="addProductToCart"
            />
          </b-card-group>
        </paginate>
        <paginate-links
          for="products"
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
  </div>
  <!-- <b-alert v-else show variant="success" v-text="No ha productos para mostrar"> -->
  <!-- </b-alert> -->
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import ProductItem from "./ProductItem";
export default {
  mounted() {
    this.fetchProductos();
  },
  data() {
    return {
      paginate: ["products"],
      perPage: 6,
    };
  },
  components: {
    ProductItem,
  },
  computed: {
    ...mapState("productos", ["productos"]),
  },
  methods: {
    ...mapActions("productos", ["fetchProductos"]),
    ...mapMutations("cart", ["agregarProducto"]),
    addProductToCart(producto) {
      this.agregarProducto(producto);
    },
  },
};
</script>

<style lang="scss" scoped></style>
