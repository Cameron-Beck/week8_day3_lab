<template lang="html">
  <div id="app">
    <header>
      <img src="/Boatel_Logo.svg" alt="">
      <section>
        <bookings-form></bookings-form>
      </section>
    </header>
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
#app{
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 3fr;

  width: 100%;
  height: 100%;

}
header{
  background: rgba(102,153,153,0.8);
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

}

header img{
  max-width: 10em;
}
</style>
