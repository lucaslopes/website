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
