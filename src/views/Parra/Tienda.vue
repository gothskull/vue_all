<template>
  <b-container class="mt-5">
    <h1 class="text-center">Tienda Parra</h1>
    <b-row>
      <b-col cols="8">
        <ProductList />
      </b-col>
      <b-col cols="4">
        <Cart />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ProductList from "@/components/Parra/ProductList.vue";
import Cart from "@/components/Parra/Cart.vue";
export default {
  components: {
    ProductList,
    Cart,
  },
};
</script>

<style lang="scss" scoped></style>
