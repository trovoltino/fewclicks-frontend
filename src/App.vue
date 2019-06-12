<template>
  <div id="app">
    <div class="page-one">
      <nav class="main-nav">
        <img src="./assets/FewClicks.png" alt="FewClicks" class="title-logo">
        <ul class="nav-bar">
          <a class="links" v-for="(name, i) in links" v-bind:key="name" @click="scrollPage(i)" :class="{current: i == current}">{{name}}</a>
        </ul>
      </nav>
      <main class="main-content" v-bind:class="{ hide: show }">
        <video autoplay muted loop id="myVideo">
          <source src="./assets/few-clicks-video.mp4" type="video/mp4">
        </video>
        <h3 class="info">Making booklets and catalogs have never been easier!</h3>
      </main>
      <popup class="footer" v-on:send-email = "sendEmail" :displayForm="show"/>
    </div>
    <div class="page-two">
      <main class="main-content" v-bind:class="{ hide: show }">
        <aside class="left">
          <h3>Без автоматизации</h3>
          <p>Время создания зависит от опыта дизайнера</p>
          <p>Ошибка стоимости продукта Ошибка в орфографии</p>
          <p>Недостаток времени на обновление дизайна</p>
          <p>Проверка наличия фотографии продукта Ручной ввод всей информации о продукте</p>
          <p>{{eBody}} was send by {{eFrom}} to user {{eTo}}</p>
        </aside>
        <aside class="right">
          <h3>FewClics</h3>
          <p>Сокрощение срока создания до 4 раз</p>
          <p>Минимальное количество ошибок</p>
          <p>Время на креатив</p>
          <p>Автоматический поиск изображений Информационная база продукции</p>
        </aside>
      </main>
    </div>
  </div>
</template>

<script>

import popup from './components/pop-up.vue';
import axios from 'axios';
//import path from 'path';
//const port = process.env.port;
// import sgMail from '@sendgrid/mail';
//const url = 'http://localhost:5555/api/emails';
const url = 'https://fewclicks-backend.herokuapp.com/api/emails';


export default {
  name: 'app',
  components: {
    popup
  },
  methods: {
    scrollPage:function(i){
      this.current = i;
      switch (i) {
        case 1:
          this.show = false; 
          window.scrollBy(0, 1000);
          break;
        case 0:
          this.show = false; 
          window.scrollBy(0, -1000);
          break;
        case 3:
          this.show = !this.show;
          break;
        default:
          break;
      }
    },
    sendEmail(newEmail) {
      const{emailTo, emailFrom, emailBody} = newEmail;
      axios.post( url, {
        emailTo: emailTo,
        toname: 'its important',
        subject: 'first maile',
        text: emailBody,
        from: emailFrom
      })
    }
  },
  data() {
    return{
      show: false,
      current:0,
      links:['Home','Why FewClicks', 'Video', 'Contact Us'],
      eTo: '',
      eFrom: '',
      eBody: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f6f6f6;
  height: 100vh;
  background: rgb(34, 29, 29);
  margin: 0% 6%;  
}
body{
  margin: 0px;
  padding: 0px;
  background: gray;
}
a {
  color: rgb(224, 224, 224);
  text-decoration: none;
}
.footer {
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%,0%);
}
.page-one {
  height: 100vh;
}
.main-nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  min-width: 88%;
  align-items: flex-end;
  z-index: 100;
}
.nav-bar {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 10%;
}
.main-nav ul a{
  margin: 20px 10px;
  cursor: pointer;
}
.current {
  text-decoration: underline;
  color: white;
}
.title-logo{
  height: 180px;
  background: transparent;
  margin-left: 10%;
}
.page-one .main-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform:translate(-50%, -50%);
  width: 80%;
  display: flex;
  align-items: center;
  padding-left: 2%;
}
#myVideo {
  width: 600px;
  height: 400px;
  
}
.info {
  text-transform: uppercase;
  font-size: 56px;
  margin-left: -10%;
  z-index: 10;
  text-align: start;
  width: 600px;
  min-width: 400px;
}
.hide{
  visibility: hidden;
}
.page-two {
  background: rgb(34, 29, 29);
  height: 100vh;
}
.page-two .main-content {
  width: 790px;
  display: flex;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0px;

}
.left {
  border-right: 1px solid white;
  padding-right: 35px;
}
.right {
  border-left: 1px solid white;
  padding-left: 35px;
}
.left p, .left h3 {
  text-align: end;
  width: 395px;
  height: 40px;
}
.right p, .right h3 {
  text-align: left;
  width: 395px;
  height: 40px;
}
</style>
