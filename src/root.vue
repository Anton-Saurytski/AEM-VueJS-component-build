<template>
  <div id="root">
    <component-a></component-a>
    <component-b></component-b>
  </div>
</template>

<script>
export default {
  components: {
    componentA,
    componentB
  }
}
</script>

<style>
#root {
  padding: 5px;
  width: 80%;
  margin: 0 auto;
  background: #ddd;
  border: 2px solid #999;
}
</style>