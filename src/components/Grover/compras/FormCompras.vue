<template>
  <div>
    <b-button
      size="sm"
      v-if="estado"
      block
      variant="info"
      @click="cambiarEstado"
      >Agregar</b-button
    >
    <b-button size="sm" v-else block variant="danger" @click="cambiarEstado"
      >Cancelar</b-button
    >
    <b-input-group class="mt-2" v-if="!estado">
      <b-form-input
        @keyup.enter="agregarUtil"
        v-model="utiles.titulo"
      ></b-form-input>
      <b-input-group-append>
        <b-button variant="success" :disabled="isDisbled" @click="agregarUtil"
          >Agregar</b-button
        >
      </b-input-group-append>
    </b-input-group>
    <div v-if="utiles.length">
      <b-card class="shadow mt-2" v-for="(util, i) in ordenarUtiles" :key="i">
        <b-card-text>
          <b-row>
            <b-col cols="9">
              <h5>{{ util.titulo }}</h5>
            </b-col>
            <b-col cols="3">
              <p>{{ util.fecha }}</p>
              <b-buton @click="remover(i)" class="close">&times;</b-buton>
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </div>
    <b-alert class="mt-3" variant="success" show v-else
      >No hay útiles registrados</b-alert
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      estado: true,
      newUtil: {
        titulo: "",
      },
      utiles: [],
    };
  },
  computed: {
    isDisbled() {
      if (this.utiles.titulo) {
        return false;
      } else {
        return true;
      }
    },
    ordenarUtiles() {
      return this.utiles.slice(0).reverse();
    },
  },
  methods: {
    agregarUtil() {
      let { titulo } = this.utiles;
      this.utiles.push({
        titulo,
        fecha: new Date(Date.now()).toLocaleDateString(),
      });
      this.utiles.titulo = "";
    },
    remover(i) {
      this.utiles.splice(i, 1);
    },
    cambiarEstado() {
      this.estado = !this.estado;
    },
  },
};
</script>

<style lang="scss" scoped>
.close {
  cursor: pointer;
}
</style>
