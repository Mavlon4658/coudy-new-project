<template>
  <Home />
  <Home2 />
  <About />
  <Main />
  <Marque />
  <Footer />
</template>

<script>
import Home from './components/Home.vue'
import Home2 from './components/Home2.vue'
import About from './components/About.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Marque from './components/Marque.vue'

export default {
  name: 'App',
  components: {
    Home,
    Home2,
    About,
    Main,
    Marque,
    Footer,
  }
}
</script>

<style>
/* full clas start */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  background: #9EF8FA;
}
img{
  background: transparent !important;
}
.footer_wrapper{
  margin-bottom: 0;
}
  /* full clas end */
</style>
