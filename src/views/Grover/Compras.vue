<template>
  <div class="mt-5">
    <h1 class="text-center">Listado de útiles</h1>
    <b-row class="justify-content-center mt-2">
      <b-col cols="5">
        <FormCompras />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FormCompras from "@/components/Grover/compras/FormCompras.vue";
export default {
  components: {
    FormCompras,
  },
};
</script>

<style lang="scss" scoped></style>
