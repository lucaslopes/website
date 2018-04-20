<template>
  <div class="panel">
    <img :src="image" :alt="name">
    <ul class="options">
      <li><a :href="demo" arget="_blank">demo</a></li>
      <li><a :href="info" arget="_blank">info</a></li>
      <li><a :href="code" arget="_blank">code</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['image', 'name', 'demo', 'info', 'code']
}
</script>

<style scoped>

.panel {
  /* width: 400px; */
  height: 300px;
  /* max-width: 110%; */
  /* border-style: solid; */
  border-radius: 7px;
  border-width: thin;
  border-color: rgb(255, 255, 255);
  background-color: rgb(51, 51, 51);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.panel img {
  margin: auto;
  text-align: center;
  position: relative;
  border-style: none;
  width: 100%;
}

.options {
  display: flex;
  justify-content: space-around;
  padding: 0;
  bottom: 0;
  height: 25%;
  border-top: solid;
  border-width: thin;
  vertical-align: middle;
  border-color: rgb(255, 255, 255);
}

.options li{
  list-style: none;
  font-family: courier;
  height: 0;
  vertical-align: middle;
}

a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

</style>
