<template>
<div id="app">

  <router-link :to="this.$route.path == '/projects' ? '/' : '/projects'">
    <button
      type="button" name="change" class="change"
      :style="this.$route.path == '/projects' ?
      'background-color: rgb(51, 51, 51)' :
      'background-color: rgb(255, 255, 255)'">
    </button>
  </router-link>

  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

button {
  position: fixed;
  width: 50pt;
  height: 50pt;
  right: 25px;
  bottom: 25px;
  border-radius: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  outline: 0;
}
</style>
