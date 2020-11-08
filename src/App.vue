<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Header></Header>
        <Sidebar></Sidebar>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import { Header, Sidebar, Footer } from './components/commons';
import 'bootstrap';
import './themes/vssc/style.scss';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
