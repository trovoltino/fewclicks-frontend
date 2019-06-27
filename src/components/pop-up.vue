<template>

  <div class="container" v-bind:class="{ containerShow: !displayForm }"> 
    <div class="email-sent" v-bind:class="{ hide: !emailIsSent }">
      <h2>Email Sent Succsessfully</h2>
    </div>
    <form action="" v-bind:class="{ formShow: displayForm }" id="contact-form" @submit="sendEmail">
      <div type="email" name="email" id="email-to" placeholder="To">fewclicks.app@gmail.com</div>
      <input type="email" name="email" id="email-from" placeholder="Your Email" v-model="emailFrom">
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
      emailBody: '',
      emailIsSent: false
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
      this.hideParentFields();
    },
    sendEmail(e){
      this.emailIsSent = true;
      setTimeout(() => {
        this.emailIsSent = false;
      }, 2000);
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

<style lang="scss">

.container{
  width: 100%;
  background:rgba(48, 48, 48, 0.8);
}
.containerShow {
  height: 400px;
  width: 100%;
}
p {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  font-size: 16px;
  color: $text-main;
  margin: 4px;
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
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
form input, form textarea, form div{
  color: $text-main;
  box-shadow:inset 0px 0px 0px 1px #bee2f9;
  border:1px solid #b4b4b4;
  border-radius: 10px;
  background: transparent;
  position: relative;
  left: 50%;
  transform: translate(-50%,0%);
  outline: none;
}
form div{
  padding: 7px;
  margin: 10px 0px;
}
.hide {
  display: none;
}
.invisible {
  visibility: hidden;
}
.formShow {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
input {
  height: 30px;
  text-align: center;
  margin: 10px 0px;
}
textarea {
  margin: 10px 0px;
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
  display: none;
}
.copyright {
  position: absolute;
  right: 30px;
  margin-top: 45px;
}
.underline {
  border: solid $text-main 1px;
  width: 210px;
}
.positionTop {
  z-index: 100;
  top: 10px;
  width: 100%;
}
.email-sent {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, 0%);
  color: rgb(13, 197, 13);
}
#email-to {
  text-align: center;
}
.email-sent {
    position: absolute;
    left: 50%;
    top: 66%;
    transform: translate(-50%, 0%);
    color: rgb(13, 197, 13);
  }
@media (min-width: 850px) {
  .container {
    height: 650px;
    width: 850px;
  }
  .containerShow {
    width: 850px;
    height: 70px;
  }
  .slide-up-first {
    margin-top: 10px;
    margin-bottom: -25px;
  }
  form {
    display: none;
    transition: width, height, 0.4s;
    @include center;
    width: 70%;
  }
  .btn:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 1px #b5b8b9;
  }
  .btn:active {
    background: rgba(90, 90, 90, 0.4);
    box-shadow: 0px 0px 0px 2px #b5b8b9;
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
  .footer-left {
    height: 70px;
    display: flex;
  }
  .copyright {
    margin-top: 0px;
  }
  .positionTop {
    position: absolute;
  }
}

</style>