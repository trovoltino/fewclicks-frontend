<template>
  <div class="container" v-bind:class="{ containerShow: !displayForm }">
    <!-- <div class="slide-up" @click="handler()">
      <img class="slide-up-first" src="../assets/up-chevron.svg" alt="" v-bind:class="{ invisible: !show }">
      <img class="slide-up-second" src="../assets/up-chevron.svg" alt="" v-bind:class="{ invisible: !show }">
    </div> -->
    
    <form action="" v-bind:class="{ formShow: displayForm }" id="contact-form" @submit="sendEmail">
      <input type="email" name="email" id="email-to" placeholder="To" v-model="emailTo">
      <input type="email" name="email" id="email-from" placeholder="From" v-model="emailFrom">
      <textarea name="message" rows="10" cols="30" v-model="emailBody" placeholder="Send Us Your message here."></textarea>
      <input type="submit" value="Submit" class="btn">
    </form>
    <div class="footer-box" v-bind:class="{ positionTop: displayForm }">
      <div class="footer-left">
        <p class="contact">Contacts</p>
        <div class="underline"></div>
        <p>FewClicks.app@gmail.com</p>
      </div>
      <p class="copyright">Copyright © FewClicks 2019</p>
    </div>
    
    
  </div>
</template>

<script>

export default {
  name: 'pop-up',
  data() {
    return{
      show: false,
      emailTo: 'fewclicks.app@gmail.com',
      emailFrom: '',
      emailBody: ''
    }
  },
  props: {
    displayForm: {
      type: Boolean,
      default:false
    }
  },
  methods: {
    hideParentFields:function(){
      this.$emit('hide-field', this.show);
    },
    handler:function() {
      this.showForm();
      this.hideParentFields();
    },
    sendEmail(e){
      e.preventDefault();
      const newEmail = {
        emailTo: this.emailTo,
        emailFrom: this.emailFrom,
        emailBody: this.emailBody
      }
      this.$emit('send-email', newEmail);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    height: 650px;
    width: 850px;
    background:rgba(48, 48, 48, 0.8);
    cursor:pointer;
    color:#14396a;
  }
  .containerShow {
    height: 70px;
    width: 850px;
  }
  .btn-look {
    box-shadow:inset 0px 0px 0px 1px #bee2f9;
  }
  p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-size: 16px;
    color: white;
    z-index: -1;
    margin: 4px;
  }
  .slide-up-first, .slide-up-second{
    height: 40px;
    color:white;
    transform: rotateX(180deg);
  }
  .slide-up-first {
    margin-top: 10px;
    margin-bottom: -25px;
  }
  .slide-up {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 10px;
  }
  form {
    display: none;
    transition: width, height, 0.4s;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 70%;
  }
  form input, form textarea{
    color: white;
    box-shadow:inset 0px 0px 0px 1px #bee2f9;
    border:1px solid #b4b4b4;
    border-radius: 10px;
    background: transparent;
    position: relative;
    left: 50%;
    transform: translate(-50%,0%);
  }
  button {
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    margin: 10px 0px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: sans-serif;
  }
  input {
    height: 30px;
    text-align: center;
    margin: 10px 0px;
  }
  textarea {
    margin: 10px 0px;
  }
  .formShow {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .hide {
    display: none;
  }
  .invisible {
    visibility: hidden;
  }
  .red {
    color: red;
  }
  .footer-box {
    display: flex;
    align-items: center;
  }
  .footer-left {
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 30px;
  }
  .copyright {
    position: absolute;
    right: 30px;
  }
  .underline {
    border: solid white 1px;
    width: 210px;
  }
  .positionTop {
    position: absolute;
    top: 10px;
    width: 100%;
  }
</style>