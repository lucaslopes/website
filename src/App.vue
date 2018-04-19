<template>
<div id="app">

  <router-link :to="this.$route.path == '/projects' ? '/' : '/projects'">
    <button type="button" name="change" class="change"></button>
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
  background-color: rgb(51, 51, 51);
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  overflow-x: hidden;
}

.inline {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  max-width: 75%;
}

.inline li {
  list-style: none;
  display: flex;
  margin: 15pt;
  display: inline-block;
  justify-content: center;
}

.inline svg {
  width: 50pt;
  height: 50pt;
  fill: rgb(255, 255, 255);
  cursor: pointer;
}
</style>
