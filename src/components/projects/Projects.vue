<template lang="html">
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
html {
  background-color: rgb(255, 255, 255);
  margin: 0;
  padding: 0;
}

.painel {
  max-width: 500px;
}

ul {
  position: absolute;
  margin: 0 auto;
  right: 50%;
  height: 100%;
}

ul li {
  list-style: none;
  display: flex;
  margin: 15pt;
  justify-content: center;
}
</style>
