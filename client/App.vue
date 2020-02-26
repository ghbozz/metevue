<template>
  <div class="container mt-5">
    <h1 class="text-center">Meteor with Vue</h1>

    <messageform :user="meteorUser"></messageform>
    <messages :messages="messages"></messages>
    
  </div>
</template>

<script>
import '/imports/collections/messages';
import messageform from './components/MessageForm.vue'
import messages from './components/Messages.vue'

export default {
  data() {
    return {};
  },
  components: {
    messages,
    messageform
  },
  meteor: {
    messages() {
      return Messages.find({})
    },
    meteorUser() {
      return Meteor.user() ? Meteor.user() : false
    }
  }
}
</script>

<style scoped>
  form {
    padding: 150px;
  }
</style>