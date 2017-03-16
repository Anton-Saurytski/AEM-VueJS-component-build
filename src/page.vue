<template>
  <div id="aem_vue_page">
    <component-a :node="componentA"></component-a>
    <component-b :node="componentB"></component-b>
  </div>
</template>

<script>
export default {
  el: '#root',
  data(){
    return data
  },
  components: {
    componentA,
    componentB
  }
}
</script>

<style>
#aem_vue_page {
  padding: 5px;
  width: 80%;
  margin: 0 auto;
  background: #ddd;
  border: 2px solid #999;
}
</style>
