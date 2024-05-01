<template>
  <GoogleTranslateSelect
      default-language-code="en"
      default-page-language-code="en"
      :fetch-browser-language="false"
      trigger="click"
      @select="handleGoogleTranslateSelect"
  />
  <div class="envelope-wrapper mt-5">
    <div id="envelope" :class="{ open: isOpen, close: !isOpen }">
      <div class="front flap"></div>
      <div class="front pocket"></div>
      <div class="letter">
        <div class="words line1"></div>
        <div class="words line2"></div>
        <div class="words line3"></div>
        <div class="words line4"></div>
      </div>
      <div class="hearts">
        <div class="heart a1"></div>
        <div class="heart a2"></div>
        <div class="heart a3"></div>
      </div>
    </div>
  </div>
  <div class="mainContainer flex flex-column align-items-center justify-content-center">
    <div
        class="flex flex-column align-items-center justify-content-center">
      <h1 @dblclick="visibleBottom=true">Your first day at Spor10</h1>
      <h3>Activities Ideas</h3>
      <Timeline :value="events" align="alternate" class="customized-timeline">
        <template #marker="slotProps">
                <span
                    class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 mt-5"
                    :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
        </template>
        <template #content="slotProps">
          <Card class="mt-3 card xl:w-full w-15rem">
            <template #title>
              {{ slotProps.item.title }}
            </template>
            <template #content>
              <p class="text-sm xl:text-base">
                {{slotProps.item.subtitle}}
              </p>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>
<!--    <h1 @dblclick="visibleBottom=true">-->
<!--      Explore SPOR10-->
<!--    </h1>-->
<!--    <div class="flex flex-column align-items-center justify-content-center ">-->
<!--      <Carousel :value="images" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" circular-->
<!--                :autoplayInterval="3000" class="xl:w-8 w-12 xl:block hidden" :methods=" onTouchMove()">-->
<!--        <template #item="slotProps">-->
<!--          <div class="border-1 surface-border border-round m-2  p-3">-->
<!--            <div class="mb-3">-->
<!--              <div class="relative mx-auto">-->
<!--                <img :src="slotProps.data.itemImageSrc" class="w-full border-round"/>-->
<!--              </div>-->
<!--            </div>-->

<!--          </div>-->
<!--        </template>-->
<!--      </Carousel>-->
<!--      <div class="block xl:hidden">-->
<!--        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5"-->
<!--                  containerStyle="max-width: 640px">-->
<!--          <template #item="slotProps">-->
<!--            <img :src="slotProps.item.itemImageSrc" style="width: 100%"/>-->
<!--          </template>-->
<!--          <template #thumbnail="slotProps">-->
<!--            <img :src="imageUrl(slotProps.item.itemImageLittle)" class="h-1"/>-->
<!--          </template>-->
<!--        </Galleria>-->
<!--      </div>-->

<!--    </div>-->
    <Divider/>
    <h1>Explore the Activities</h1>
    <div
        class="flex flex-column xl:flex-row lg:flex-row md:flex-row align-items-center justify-content-center gap-8">
      <Card style="overflow: hidden" class="w-22rem">
        <template #header>
          <img alt="user header" src="@/assets/images/Dinner.png" class="max-h-30rem"/>
        </template>
        <template #title>Community Dinner</template>
        <template #content>
          <p class="m-0 text-ms xl:text-base">
            If you are craving a social dinner on a wednesday, Noon got you covered.<br>
            With the community driven dinner that is served for a measly 95 kroner, Noon cooks a dinner set in a social setting.<br>
            By using community tables it is easy to bring friends, family or strangers together for a nice dinner.<br><br><br>
          </p>
        </template>
      </Card>
      <Card style="width: 22rem; overflow: hidden">
        <template #header>
          <img alt="user header"
               src="https://framerusercontent.com/images/lCrae4MIIRZOS1wYUfW3nFQHG0.png?scale-down-to=1024"
               class="max-h-30rem"/>
        </template>
        <template #title>Skating Hall</template>
        <template #content>
          <p class="m-0">
            In the last of the big hall at SPOR10 is a large skatehall. In this hall tons of kids skate around on their scooters, fix their scooters and just hang out. The large amount of ramps in the hall has all been made by the users of the hall and therefore have become a nice room to relax in, both for the users of the ramps as well as parents and other interested parties.
          </p>
        </template>
      </Card>
      <Card style="width: 22rem; overflow: hidden">
        <template #header>
          <img alt="user header" src="@/assets/images/Art.png" class="max-h-30rem"/>
        </template>
        <template #title>Art Workshop</template>
        <template #content>
          <p class="m-0 ">
            Get to experience a back-in-time experience!<br>
            Enjoy some drawing with the SPOR10 artist Jeppe Eisner with homemade paint. Relax and drink a cup of coffee while you let your creativity  take over.<br>
            If you don't want to bring home your masterpiece, just hand it to Jeppe, he will make sure to hang it in a special place at SPORT10
          </p>
        </template>
      </Card>
    </div>
    <Divider/>

    <footer class="flex flex-column w-full mt-5 pl-8 pr-8 pb-8" style="background-color:#4c4c4c; color:white">
      <div class="flex align-items-center justify-content-center">
        <h3>CONTACT SPOR10</h3>
      </div>
      <div class="flex flex-column xl:flex-row xl:gap-4 gap-0 justify-content-between">
        <div class="flex flex-column">
          <a href="https://spor10jernbanebyen.dk/" class="text-white">Visit the official site</a>
        </div>
        <div class="flex flex-column xl:gap-4 gap-1 justify-content-start">
          <p class="flex flex-row gap-2"><i class="pi pi-instagram" style="font-size: 100%"></i><a href="https://www.instagram.com/spor10_jernbanebyen/" class="text-white">Instagram</a></p>
          <p class="flex flex-row gap-2"><i class="pi pi-envelope" style="font-size: 100%"></i> <a href="mailto:info@spor10jernbanebyen.dk" class="text-white">info@spor10jernbanebyen.dk</a></p>
        </div>
      </div>
    </footer>
  </div>
  <Sidebar v-model:visible="visibleBottom" header="Credits" position="bottom" style="height: auto">
    <p>Website created as final project for Co-Design, Spring Semester 2024, ITU Copenhagen</p>
    <p>Made by: Filippo Piloni, Helena Do, Hugo Reinicke, Johan-emil Pico and Nereid Totayo</p>
  </Sidebar>
</template>
<script>
import Galleria from "primevue/galleria";
import Carousel from "primevue/carousel";
import Divider from "primevue/divider";
import Card from 'primevue/card'
import Timeline from "primevue/timeline";
import Button from 'primevue/button';

import Sidebar from 'primevue/sidebar';
import 'primeicons/primeicons.css'
import GoogleTranslateSelect from "@google-translate-select/vue3";


export default {
  components: {
    Galleria,
    Carousel,
    Divider,
    Card,
    Timeline,
    GoogleTranslateSelect,
    Button,
    Sidebar
  },
  data() {
    return {
      activeIndex: 2,
      visibleBottom: false,
      isOpen: false,
      responsiveOptions: [
        {
          breakpoint: '1300px',
          numVisible: 4
        },
        {
          breakpoint: '575px',
          numVisible: 1
        }
      ],
      images: [
        {
          itemImageSrc: "https://framerusercontent.com/images/JeRHFmYKuVCz0nNJNt0nH8kw2I.jpg?scale-down-to=2048",
          itemImageLittle: "party.png"
        },
        {
          itemImageSrc: "https://framerusercontent.com/images/G7QWtK2eHlm7zZlfxQTJSP7wD4.jpg?scale-down-to=2048",
          itemImageLittle: "sport10.png"
        }, {
          itemImageSrc: "https://framerusercontent.com/images/lCrae4MIIRZOS1wYUfW3nFQHG0.png?scale-down-to=1024",
          itemImageLittle: "skate.png"
        }
      ],
      events: [
        {title: 'Do some art with jeppe', icon: "pi pi-palette", color: "#27b0b0", subtitle: "Get to experience a back-in-time experience! " +
              "Enjoy some drawing with the SPOR10 artist Jeppe Eisner with homemade paint. Relax and drink a cup of coffee while you let your creativity  take over." +
              " If you don't want to bring home your masterpiece, just hand it to Jeppe, he will make sure to hang it in a special place at SPORT10"},
        {title: 'Enjoy some biking', icon: "pi pi-warehouse", color: "#27b02e", subtitle: 'Do you want to connect with people across generations. "Cycling without age" is a cycle-focused event where people across all ages agrees to cycle together. The event is about cycling around the neighborhood and offers a cycle rickshaw that you can ride around on if you are unable to cycle.'},
        {title: 'Play board games', icon: "pi pi-th-large", color: "#7e1c91", subtitle: "Just within the main gates of SPOR10, in the main hall, is a cozy area in which you can relax in the couches and or play board games in. If you want to sit and enjoy such an event with or without a cup of coffee, this might be for you."},
        {title: 'Join the community dinner', icon: "pi pi-shop", color: "#b06527", subtitle: "If you are craving a social dinner on a wednesday, Noon got you covered. with the community driven dinner that is served for a measly 95 kroner, Noon cooks a dinner set in a social setting. By using community tables it is easy to bring friends, family or strangers together for a nice dinner."},
      ]
    }
  },
  mounted() {
    document.querySelector(".mainContainer").style.opacity = 0;
    setTimeout(() => {
      this.toggleEnvelope();
    }, 1000);
    setTimeout(() => {

      document.querySelector(".envelope-wrapper").style.display = "none";
      document.querySelector(".mainContainer").style.opacity = 1;
    }, 5000);
  },
  methods: {
    onTouchMove() {
      return
    },
    imageUrl(url) {
      return new URL(`../assets/images/${url}`, import.meta.url).href
    },
    toggleEnvelope() {
      this.isOpen = !this.isOpen;
    },
  },
}
</script>
<style>
body {
  margin:0;
}
</style>
<style scoped>
@keyframes slidedown-icon {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}

.card {
  -webkit-box-shadow: 0px 0px 64px -5px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 64px -5px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 64px -5px rgba(66, 68, 90, 1);
}

#envelope {
  position: relative;
  width: 280px;
  height: 180px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  top: 150px;
  background-color: #005E8A;
  box-shadow: 0 4px 20px rgba(0,0,0,.2);
}
.front {
  position: absolute;
  width: 0;
  height: 0;
  z-index: 3;
}
.flap {
  border-left: 140px solid transparent;
  border-right: 140px solid transparent;
  border-bottom: 86px solid transparent; /* a little smaller */
  border-top: 120px solid #00557c; /* a little larger */
  transform-origin: top;
  pointer-events: none;
}
.pocket {
  border-left: 140px solid #0077B2;
  border-right: 140px solid #0077B2;
  border-bottom: 90px solid #005E8A;
  border-top: 90px solid transparent;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.letter {
  position: relative;
  background-color: #fff;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 90%;
  top: 5%;
  border-radius: 6px;
  box-shadow: 0 2px 26px rgba(0,0,0,.12);
  transition: opacity 2s ease; /* Add transition for opacity */
}
.letter:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image:
      linear-gradient(180deg,
      rgba(255,255,255,0.00) 25%,
      rgba(215,227,239,0.70) 55%,
      rgba(215,227,239,1.00) 100%);
}
.words {
  position: absolute;
  left: 10%;
  width: 80%;
  height: 14%;
  background-color: #EEEFF0;
}
.words.line1 {
  top: 15%;
  width: 20%;
  height: 7%;
}
.words.line2 {
  top: 30%;
}
.words.line3 {
  top: 50%;
}
.words.line4 {
  top: 70%;
}
.open .flap {
  transform: rotateX(180deg);
  transition: transform .4s ease, z-index .6s;
  z-index: 1;
}
.close .flap {
  transform: rotateX(0deg);
  transition: transform .4s .6s ease, z-index 1s;
  z-index: 5;
}
.close .letter {
  transform: translateY(0px);
  transition: transform .4s ease, z-index 1s;
  z-index: 1;
}
.open .letter {
  transform: translateY(-60px); /* Approximately 1/3 of envelope height */
  transition: transform .4s .6s ease, z-index .6s;
  z-index: 2;
}
.hearts {
  position: absolute;
  top: 90px; /* Half of envelope height */
  left: 0;
  right: 0;
  z-index: 2;
}
.heart {
  position: absolute;
  bottom: 0;
  right: 10%;
  pointer-events: none;
}

.heart:before,
.heart:after {
  position: absolute;
  content: "";
  left: 50px; /* Half of heart width */
  top: 0;
  width: 50px;
  height: 80px; /* 1.6 times of width */
  background: #D00000;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
  pointer-events: none;
}
.heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
.close .heart {
  opacity: 0;
  animation: none;
}
.a1 {
  left: 20%;
  transform: scale(0.6);
  opacity: 1;
  animation: slideUp 4s linear 1, sideSway 2s ease-in-out 4 alternate;
  animation-fill-mode: forwards;
  animation-delay: .7s;
}
.a2 {
  left: 55%;
  transform: scale(1);
  opacity: 1;
  animation: slideUp 5s linear 1, sideSway 4s ease-in-out 2 alternate;
  animation-fill-mode: forwards;
  animation-delay: .7s;
}
.a3 {
  left: 10%;
  transform: scale(0.8);
  opacity: 1;
  animation: slideUp 7s linear 1, sideSway 2s ease-in-out 6 alternate;
  animation-fill-mode: forwards;
  animation-delay: .7s;
}

@keyframes slideUp {
  0% {
    top: 0;
  }
  100% {
    top: -600px;
  }
}
@keyframes sideSway {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

body {
  background-color: #AED9E0;
}
.envelope-wrapper {
  height: 380px; /* envelope height + 200px */
}
.reset {
  text-align: center;
}
.reset button {
  font-weight: 800;
  font-style: normal;
  transition: all .1s linear;
  -webkit-appearance: none;
  background-color: transparent;
  border: solid 2px #0077B2;
  border-radius: 4px;
  color: #0077B2;
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  margin: 5px;
  padding: 10px;
  line-height: 1em;
  text-decoration: none;
  min-width: 120px;
  cursor: pointer;
}
.reset button:hover {
  background-color: #0077B2;
  color: #fff;
}

</style>