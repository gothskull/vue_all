<template>
  <div>
    <b-form class="">
      <h3 class="text-center">Formulario de registro</h3>
      <b-form-group label="Nombre">
        <b-form-input required placeholder="Tu nombre"></b-form-input>
      </b-form-group>
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

      <b-button class="mt-2" size="sm" block variant="success"
        >Registrar</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
