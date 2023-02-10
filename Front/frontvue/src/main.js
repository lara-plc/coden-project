import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import {handleForm} from '../src/components/api.js'

export const form = new Vue({
        el:'#form',
        data: {
          name:'',
          email:'',
          phone:'',
          subject:'',
          description:''
        },
        methods: {
          processForm: 
          handleForm(
            this.name, 
            this.email, 
            this.phone, 
            this.subject, 
            this.description)
        }
})