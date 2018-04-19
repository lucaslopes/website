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

<style scoped>
.change {
  position: fixed;
  width: 50pt;
  height: 50pt;
  right: 10px;
  bottom: 10px
}
</style>
