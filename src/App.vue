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
        <div class="video-wraper">
          <video autoplay muted loop id="myVideo">
            <source src="./assets/few-clicks-video.mp4" type="video/mp4">
          </video>
        </div>
        <h3 class="info">Making booklets and catalogs have never been easier!</h3>
      </main>
    </div>
    <div class="page-two">
      <main class="main-content" v-bind:class="{ hide: show }">
        <aside class="left">
          <h3>Без автоматизации</h3>
          <ul>
            <li>Время создания зависит от опыта дизайнера</li>
            <li>Ошибка стоимости продукта Ошибка в орфографии</li>
            <li>Недостаток времени на обновление дизайна</li>
            <li>Проверка наличия фотографии продукта Ручной ввод всей информации о продукте</li>
          </ul>
        </aside>
        <aside class="right">
          <h3>FewClics</h3>
          <ul>
            <li>Сокрощение срока создания до 4 раз</li>
            <li>Минимальное количество ошибок</li>
            <li>Время на креатив</li>
            <li>Автоматический поиск изображений Информационная база продукции</li>
          </ul>
        </aside>
      </main>
    </div>
    <popup class="footer" v-on:send-email = "sendEmail" :displayForm="show"/>
  </div>
</template>

<script>

import popup from './components/pop-up.vue';
import axios from 'axios';
const url = 'api/emails'
//const url = 'https://fewclicks-backend.herokuapp.com/api/emails';

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
        toname: emailTo,
        subject: 'Few Clicks',
        text: emailBody,
        from: emailFrom
      })
      .then(res => {
        this.response = res;
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
      eBody: '',
      response: ''
    }
  }
}
</script>

<style lang="scss">
  body {
  box-sizing: border-box;
  background: $base-color;
  margin: 0px;
  padding: 0px;
  }
  #app {
    position: relative;
    color: $text-main;
    background: rgb(34, 29, 29);
    height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .title-logo{
    position: relative;
    width: 300px;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  .page-one .main-content {
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
  }
  .page-two .main-content {
    text-align: center;
    padding: 30px 0px;
    border-bottom: 1px solid grey;
  }
  .info{
    text-align: center;
    margin: 50px 0px;
  }
  #myVideo {
    position: relative;
    transform: scale(1.4, 1.4);
    width: 100%;
  }
  .video-wraper{
    min-width:350px;
    min-width: 22em;
    max-width: 22em;
    overflow: hidden;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  .nav-bar{
    display: none;
  }
  
  .left ul, .right ul{
    text-align: left;
  }
  .footer {
    margin-top: 2.5em;
  }
  #contact-form {
    margin-top: 3.5em;
  }

@media (min-width: 850px) {
  body {
    background: $secondary-color;
  }
  #app {
    text-align: center;
  }
  a {
    color: $text-main;
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
    min-width: 100%;
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
    margin: 1.3em 0.8em;
    cursor: pointer;
    white-space: nowrap;
  }
  .current {
    text-decoration: underline;
    color: $text-main;
  }
  .title-logo{
    width: 340px;
    left: 0%;
    transform: translate(0%, 0%);
    height: 180px;
    background: transparent;
    margin-left: 3%;
  }
  .page-one .main-content {
    @include center;
    width: 80%;
    display: flex;
    align-items: center;
    padding-left: 2%;
    border-bottom: none;
  }
    .page-two .main-content {
    @include center;
    width: 790px;
    display: flex;
    margin: 0px;
    border-bottom: none;
  }
  .video-wraper{
    min-width: 500px;
    height: 350px;
    left: 30%;
  }
   #myVideo {
    position: relative;
    transform: scale(1.4, 1.4);
    width: 100%;
  }
  .info {
    text-transform: uppercase;
    font-size: 4vw;
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

  .left {
    border-right: 1px solid $text-main;
    padding-right: 35px;
  }
  .right {
    border-left: 1px solid $text-main;
    padding-left: 35px;
  }
  .left li, .left h3 {
    text-align: end;
    width: 395px;
    height: 40px;
    list-style: none;
  }
  .right li, .right h3 {
    text-align: left;
    width: 395px;
    height: 40px;
    list-style: none;
  } 
  ul {
    padding: 0px;
  }
}

@media (min-width: 1240px) {
  .video-wraper {
    min-width: 600px;
    height: 400px;
  }
  .info {
    font-size: 56px;
  }
}

@media (min-width: 1382px) {
  #app {
    margin: 0% 6%;
  }
  .main-nav {
    max-width: 88%;
    min-width: 88%;
  }
}
</style>
