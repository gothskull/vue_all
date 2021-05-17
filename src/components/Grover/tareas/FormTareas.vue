<template>
  <b-container class="mt-3">
    <b-form>
      <b-form-group>
        <b-form-input
          placeholder="Ingresa maquí el nombre de la tarea"
          v-model="tareas.titulo"
        />
      </b-form-group>
      <b-form-group>
        <b-form-textarea rows="3" v-model="tareas.descripcion" />
        <b-button class="mt-2" variant="success" block>Crear Tarea</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      tareas: {
        titulo: "",
        descripcion: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
