<template>
  <div class="componentA">
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
.componentA h1 {
  font-size: 40px;
  color: red;
}
</style>
