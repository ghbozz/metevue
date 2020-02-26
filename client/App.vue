<template>
  <div class="container mt-5">
    <h1 class="text-center">Meteor with Vue</h1>

    <form @submit="createMessage">
      <div class="row">
        <div class="col-6 mb-5">
          <input type="text" class="form-control" placeholder="First name" name="firstName">
        </div>
        <div class="col-6 mb-5">
          <input type="text" class="form-control" placeholder="Last name" name="lastName">
        </div>
        <div class="col-12 mb-5">
          <input type="text" class="form-control" placeholder="Message" name="message">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
    
    <messages :messages="messages"></messages>
    
  </div>
</template>

<script>
import '/imports/collections/messages';

export default {
  data() {
    return {};
  },
  methods: {
    createMessage(e) {
      e.preventDefault();

      const message = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        content: e.target.message.value,
        createdAt: new Date()
      }

      Messages.insert({ message });

    }
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
    padding: 75px;
  }
</style>