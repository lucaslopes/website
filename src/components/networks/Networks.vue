<template>
<ul class="inline">
  <li v-for="network in networks">
    <social :title="network.title" :url="network.url" :viewBox="network.viewBox" :path="network.path"></social>
  </li>
</ul>
</template>

<script>
import Social from '../shared/social/Social.vue'
  components: {
    social: Social
  },
