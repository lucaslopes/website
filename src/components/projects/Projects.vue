<template lang="html">
  <h1>Foi!</h1>
</template>

<script>
import ProjectPanel from '../shared/project-panel/ProjectPanel.vue'
import { projects } from '../../assets/projects.js'

export default {

  data() {
    return {
      projects
    }
  }

}
</script>

<style scoped>
.change {
  background-color: rgb(51, 51, 51);
}
</style>
