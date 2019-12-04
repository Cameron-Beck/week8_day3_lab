<template lang="html">
  <article class="booking-detail">
    <h1>this is a booking</h1>
    <p>guest name: {{booking.guest_name}}</p>
    <p>guest email: {{booking.guest_email_address}}</p>
    <p @click="toggleStatus" :value="booking._id">check in status: {{booking.checked_in}}</p>
    <button @click="deleteBooking" type="button" name="delete" :value="booking._id">Delete</button>
  </article>
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
      eventBus.$emit('refresh-page', e.target.value)
    })
  },
  toggleStatus(){
    this.booking.checked_in = !this.booking.checked_in;
    const data = {
      guest_name: this.booking.guest_name,
      guest_email_address: this.booking.guest_email_address,
      checked_in: this.booking.checked_in
    };
    BookingsService.updateStatus(this.booking._id, data)
  }
}
}
</script>

<style lang="css" scoped>
.booking-detail{
  background: rgba(204,51,51,0.8);
  flex-grow:  1;
}
</style>
