<template lang="html">
  <form id="bookings-form" @submit.prevent="addBooking">
    <label for="guest_name">Name:</label>
    <input  id="guest_name "type="text" name="" v-model="guest_name" required>
    <label for="guest_email_address">Email address:</label>
    <input  id="guest_email_address "type="text" name="" v-model="guest_email_address" required>
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
      guest_name: this.guest_name,
      guest_email_address: this.guest_email_address,
      checked_in: false
    }
    BookingsService.postBooking(booking)
      .then(res => eventBus.$emit('refresh-page', res))
  }

}
}
</script>

<style lang="css" scoped>
</style>
