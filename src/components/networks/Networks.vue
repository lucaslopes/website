<template>
<ul class="inline">
  <li v-for="network in networks">
    <social :title="network.title" :url="network.url" :viewBox="network.viewBox" :path="network.path"></social>
  </li>
</ul>
</template>

<script>
import Social from '../shared/social/Social.vue'
import { contacts } from '../../assets/contacts.js'

export default {
  name: 'app',

  components: {
    social: Social
  },

  data() {
    return {
      networks: contacts
    }
  }
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

.change {
  background-color: rgb(255, 255, 255);
}
</style>
