<template lang="html">
  <section class="booking-detail">
    <h1>this is a booking</h1>
    <p>guest name: {{booking.guest_name}}</p>
    <p>guest email: {{booking.guest_email_address}}</p>
    <p>check in status: {{booking.checked_in}}</p>
    
  </section>
</template>

<script>
export default {
  name: 'booking-detail',
  props:['booking']
}
</script>

<style lang="css" scoped>
</style>
