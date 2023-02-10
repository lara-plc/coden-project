import { IContactRequest } from "./contact.interface";
import VueToastify from "vue-toastify";
import Vue from "vue";

const axios = require('axios').default;

export default function handleForm({name,email,phone,subject,description}: IContactRequest){
    
axios.post('http://localhost:3000/form', {
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    description: description
  })
  .then(function () {
    this.$vToastify.success("Contact sent");
  })
  .catch(error =>
    this.$vToastify.error("Error")
  );
}