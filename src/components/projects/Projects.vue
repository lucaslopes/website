<template lang="html">
  <h1>Foi!</h1>
  <ul>
    <li v-for="project in projects">
      <panel class="painel" :image="project.image" :name="project.name" :demo="project.demo" :info="project.info" :code="project.code"></panel>
    </li>
  </ul>
</template>

<script>
import ProjectPanel from '../shared/project-panel/ProjectPanel.vue'
import { projects } from '../../assets/projects.js'

export default {
  components: {
    panel: ProjectPanel
  },

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
