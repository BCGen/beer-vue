<template>
  <div id="main-wrapper">
    <header-component />
    <navbar-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '../components/TheFooter'
import HeaderComponent from '../components/TheHeader'
import NavbarComponent from '../components/TheNavbar'

export default {
  components: {
    FooterComponent, HeaderComponent, NavbarComponent
  }
}
</script>
