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

<style scoped>
.change {
  position: fixed;
  width: 50pt;
  height: 50pt;
  right: 10px;
  bottom: 10px
}
</style>
