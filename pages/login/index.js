"use strict";

import loginForm from './components/main'
import forget from './components/forget'
export default {
  layout: 'simple-background',
  components: {loginForm, forget},
  data(){
    return{
      type: 'login-form'
    }
  }
}