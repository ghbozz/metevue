<template>
	<div class="messages">
	  <div class="row">

	    <div v-for="message in messages" class="col-3">
	      <div class="card" style="width: 18rem;">
	        <div class="card-body">
	          <h5 class="card-title">{{ message.message.firstName }}</h5>
	          <h6 class="card-subtitle mb-2 text-muted">{{ message.message.lastName }}</h6>
	          <p class="card-text">{{ message.message.content }}</p>
	          <a href="#" @click="deleteMessage" class="card-link" :data-id="message._id">delete</a>
	        </div>
	      </div>
	    </div>

	  </div>
	</div>
</template>

<script>
	export default {
		props: ['messages'],
		methods: {
			deleteMessage(e) {
			  Messages.remove({_id: e.target.dataset.id})
			  console.log(e.target.dataset.id)
			}
		}
	}
</script>