<template lang="html">
  <div id="app">
    <header>
      <h1>Boatel</h1>
    </header>
    <section>
      <bookings-form></bookings-form>
    </section>
    <section>
      <bookings-grid></bookings-grid>
    </section>
  </div>
</template>

<script>
import BookingsGrid from './components/BookingsGrid.vue'
import BookingsForm from './components/BookingsForm.vue'
export default {
  name: 'app',
  components:{
    'bookings-grid': BookingsGrid,
    'bookings-form': BookingsForm
  }
}
</script>
<style lang="css" scoped>

</style>
