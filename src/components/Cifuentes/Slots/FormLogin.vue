<template>
  <div>
    <b-form class="">
      <h3 slot="formTitle" class="text-center">Formulario de ingreso</h3>
      <div slot="formBody">
        <b-form-group label="Coreo electrónico">
          <b-input type="email" required placeholder="Tu correo"></b-input>
        </b-form-group>
        <b-form-group label="Contraseña">
          <b-form-input
            type="password"
            placeholder="Contraseña"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <b-button class="mt-2" size="sm" block variant="success"
        >Ingresar</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
