<template lang="html">
  <section id="booking-wrapper">
    <booking-detail v-for="(booking, index) in bookings" :booking = 'booking'></booking-detail>
  </section>
</template>

<script>
import BookingDetail from './BookingDetail.vue'
import BookingsService from '../services/BookingsService.js'
export default {
  name: 'booking-grid',
  data(){
    return {
      bookings: [],
    }
  },

  components:{
    'booking-detail': BookingDetail
},
  mounted(){
  this.fetchData();

},
methods:{
  fetchData: function(){
    BookingsService.getBookings()
    .then(bookings => this.bookings = bookings);
  }
}
}
</script>

<style lang="css" scoped>
</style>
