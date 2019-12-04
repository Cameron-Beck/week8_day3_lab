<template lang="html">
  <section class="booking-detail">
    <h1>this is a booking</h1>
    <p>guest name: {{booking.guest_name}}</p>
    <p>guest email: {{booking.guest_email_address}}</p>
    <p>check in status: {{booking.checked_in}}</p>
    <button @click="deleteBooking" type="button" name="delete" :value="booking._id">Delete</button>
  </section>
</template>

<script>
import BookingsService from '../services/BookingsService.js'
import {eventBus} from '../main.js'
export default {
  name: 'booking-detail',
  props:['booking'],
methods:{
  deleteBooking(e){
    BookingsService.deleteBooking(e.target.value)
    .then(() => {
      eventBus.$emit('booking-deleted', e.target.value)
    })
  }
}
}
</script>

<style lang="css" scoped>
</style>
