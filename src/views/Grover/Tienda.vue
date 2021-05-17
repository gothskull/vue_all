<template>
  <div class="mt-5 container">
    <h1 class="text-center">Tienda</h1>
    <b-row class="mt-3">
      <b-col cols="8">
        <b-row>
          <b-col class="mt-2" cols="4" v-for="item in productos" :key="item.id">
            <Producto
              :estaEnCarro="estaEnCarrito(item)"
              :producto="item"
              @agregarproducto="agregarACarro"
            />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="4">
        <Carrito
          @pagar="pagar"
          :items="carrito"
          @quitar-carro="quitarDeCarro"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Producto from "@/components/Grover/carrito/Producto.vue";
import Carrito from "@/components/Grover/carrito/Carrito.vue";
import productos from "@/assets/data/productos.json";
export default {
  components: {
    Producto,
    Carrito,
  },
  data() {
    return {
      productos,
      carrito: [],
    };
  },
  methods: {
    agregarACarro(producto) {
      this.carrito.push(producto);
    },
    estaEnCarrito(producto) {
      const item = this.carrito.find((item) => item.id === producto.id);
      if (item) {
        return true;
      }
      return false;
    },
    quitarDeCarro(producto) {
      this.carrito = this.carrito.filter((item) => item.id != producto.id);
    },
    pagar() {
      this.carrito = [];
      alert("Venta completada");
    },
  },
};
</script>

<style lang="scss" scoped></style>
