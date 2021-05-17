<template>
  <div class="mt-5">
    <h1 class="text-center">Aplicación de notas</h1>
    <b-row class="justify-content-center">
      <b-col cols="4">
        <b-form>
          <b-form-group>
            <b-form-input
              placeholder="Ingresa aquí el nombre de la tarea"
              v-model="tareas.titulo"
            />
          </b-form-group>
          <b-form-group>
            <b-form-textarea
              rows="3"
              v-model="tareas.descripcion"
              placeholder="Descripción  de la tarea"
            />
            <b-button
              class="mt-2"
              :disabled="isDisabled"
              variant="success"
              block
              @click="agregarTarea"
              >Crear Tarea</b-button
            >
          </b-form-group>
        </b-form>
        <div v-if="tareas.length">
          <b-card v-for="(item, i) in tareas" :key="i" class="mb-3">
            <b-row>
              <b-col cols="9">
                {{ item.titulo }}
              </b-col>
              <b-col cols="3">{{ item.fecha }} </b-col>
            </b-row>

            <hr />
            <b-row>
              <b-col cols="9">
                <b-card-text class="justify-content-space-between">
                  {{ item.descripcion }}
                </b-card-text>
              </b-col>
              <b-col cols="3">
                <span class="remove" @click="eliminarTarea(i)" variant="danger">
                  Eliminar
                </span>
              </b-col>
            </b-row>
          </b-card>
        </div>
        <div v-else>No hay tareas para mostrar</div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarea: {
        titulo: "",
        descripcion: "",
      },
      tareas: [],
    };
  },
  computed: {
    isDisabled() {
      if (this.tareas.titulo && this.tareas.descripcion) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    agregarTarea() {
      let { descripcion, titulo } = this.tareas;
      this.tareas.push({
        descripcion,
        titulo,
        fecha: new Date(Date.now()).toLocaleDateString(),
      });
      this.tareas.titulo = "";
      this.tareas.descripcion = "";
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
.remove {
  color: red;
  cursor: pointer;
}
</style>
