<template>
  <div id="componentA">
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'A',
  data () {
    return {
      text: 'Component A'
    }
  }
}
</script>

<style>
#componentA h1 {
  font-size: 40px;
  color: red;
}
</style>
