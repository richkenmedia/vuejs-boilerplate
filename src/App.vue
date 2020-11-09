<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <router-link to="/">Go to Foo</router-link>
        <router-link to="/about">Go to Bar</router-link>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap';
import './themes/vssc/style.scss';

export default {
  name: 'App',
  components: {},
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
