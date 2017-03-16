<template>
  <div class="componentB">
    <h1>{{node.text}}</h1>
  </div>
</template>

<script>
export default {
 props: [
  'node'
 ]
}
</script>

<style>
.componentB h1 {
  font-size: 40px;
  color: blue;
}
</style>
