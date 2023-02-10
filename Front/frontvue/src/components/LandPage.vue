<template>
    <div class="container p-5">
      <h1 align='center'>Contact Us</h1>
      <form class="form" @submit.prevent="processForm">
        <!-- Name input -->
        <div class="form-outline mb-3">
          <input type="text" id="form4Example1" class="form-control" v-model="name"/>
          <label class="form-label" for="form4Example1">Name</label>
        </div>
      
        <!-- Email input -->
        <div class="form-outline mb-3">
          <input type="email" id="form4Example2" class="form-control" v-model="email"/>
          <label class="form-label" for="form4Example2">Email address</label>
        </div>

        <!-- Phone input -->
        <div class="form-outline mb-3">
          <input type="phone" id="form4Example2" class="form-control" v-model="phone"/>
          <label class="form-label" for="form4Example2">Phone</label>
        </div>

        <!-- Subject selection -->
        <select class="browser-default form-select form-control form-outline mb-4" v-model="subject">
          <option selected >Subject</option>
          <option value="1" >Service Questions</option>
          <option value="2" >Compliments</option>
          <option value="3" >Complaints</option>
          <option value="4" >Others</option>
        </select>

        
        <!-- Message input -->
        <div class="form-outline mb-4 ">
          <textarea class="form-control text-input" id="form4Example3" rows="4" v-model="description"></textarea>
          <label class="form-label" for="form4Example3">Message</label>
        </div>
      
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4 mt-5">Send</button>
      </form>
    </div>
    <!-- MDB -->
    <component :is="'script'" type="text/javascript" src="js/mdb.min.js"></component>
    <!-- Custom scripts -->
    <component :is="'script'" src="../main.js"></component>
</template>
