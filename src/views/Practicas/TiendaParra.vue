<template>
  <b-container class="mt-5">
    <h1 class="text-center">Practicas tienda Parra</h1>
    <b-row>
      <b-col cols="8">
        <ProductList />
      </b-col>
      <b-col cols="4">
        <Carro />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ProductList from "@/components/Practicas/Practicas_Tienda_Parra/ProductList.vue";
import Carro from "@/components/Practicas/Practicas_Tienda_Parra/Carro.vue";
export default {
  components: {
    ProductList,
    Carro,
  },
};
</script>
<style lang="scss" scoped></style>
