<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand to="/">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="Grover" right>
              <b-dropdown-item to="/grover/Componentes"
                >Componentes</b-dropdown-item
              >
              <b-dropdown-item to="/grover/notas-app"
                >Aplicación de notas</b-dropdown-item
              >
              <b-dropdown-item to="/grover/compras">Compras</b-dropdown-item>
              <b-dropdown-item to="/grover/tienda">Tienda</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="BlueWeb" right>
              <b-dropdown-item to=""></b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right text="Parra">
              <b-dropdown-item to="/parra/tienda">Tienda</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Practicas" right>
              <b-dropdown-item to="/practicas">Practicas</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
