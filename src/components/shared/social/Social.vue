<template lang="html">
  <a :title="title" :href="url" target="_blank" rel="noopener noreferrer">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
        <path :d="path" fill-rule="evenodd"/>
      </svg>
    </span>
  </a>
</template>

<script>
export default {
  props: ['title', 'url', 'viewBox', 'path']
}
</script>

<style scoped>
</style>
