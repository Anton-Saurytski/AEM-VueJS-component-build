<template>
  <div id="componentB">
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'B',
  data () {
    return {
      text: 'Component B'
    }
  }
}
</script>

<style>
#componentB h1 {
  font-size: 40px;
  color: blue;
}
</style>
