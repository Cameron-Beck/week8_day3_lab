<template lang="html">
  <form id="bookings-form" @submit.prevent="addBooking">
    <label for="guestName">Name:</label>
    <input  id="guestName "type="text" name="" v-model="guestName">
    <label for="guestEmailAddress">Email address:</label>
    <input  id="guestEmailAddress "type="text" name="" v-model="guestEmailAddress">
    <input id="save" type="submit" name="" value="save">
  </form>
</template>

<script>
import BookingsService from '../services/BookingsService.js'
import {eventBus} from '../main.js'
export default {
  name: 'bookings-form',
data(){
  return {
    guest_name: "",
    guest_email_address: "",
    checked_in: false
  }
},
methods:{
  addBooking(){
    const booking ={
      guest_name: this.guestName,
      guest_email_address: this.guestEmailAddress,
      checked_in: false
    }
    BookingsService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
  }

}
}
</script>

<style lang="css" scoped>
</style>
