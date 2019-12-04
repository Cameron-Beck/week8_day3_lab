<template lang="html">
  <div id="app">
    <header>
      <h1>Boatel</h1>
    </header>
    <section>
      <bookings-grid></bookings-grid>
    </section>
  </div>
</template>

<script>
import BookingsGrid from './components/BookingsGrid.vue'
export default {
  name: 'app',
  components:{
    'bookings-grid': BookingsGrid
  }

}
</script>
<style lang="css" scoped>
</style>
