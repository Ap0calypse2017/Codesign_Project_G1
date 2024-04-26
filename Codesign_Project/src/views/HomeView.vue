<template>
  <GoogleTranslateSelect
      default-language-code="en"
      default-page-language-code="en"
      :fetch-browser-language="false"
      trigger="click"
      @select="handleGoogleTranslateSelect"
  />
  <div class="mainContainer flex flex-column align-items-center justify-content-center">
    <h1 @dblclick="visibleBottom=true">
      Explore SPOR10
    </h1>
    <div class="flex flex-column align-items-center justify-content-center ">
      <Carousel :value="images" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" circular
                :autoplayInterval="3000" class="xl:w-8 w-12 xl:block hidden" :methods=" onTouchMove()">
        <template #item="slotProps">
          <div class="border-1 surface-border border-round m-2  p-3">
            <div class="mb-3">
              <div class="relative mx-auto">
                <img :src="slotProps.data.itemImageSrc" class="w-full border-round"/>
              </div>
            </div>

          </div>
        </template>
      </Carousel>
      <div class="block xl:hidden">
        <div class="flex flex-wrap gap-3 mb-5">
          <div v-for="option in positionOptions" :key="option.label" class="flex align-items-center">
            <RadioButton v-model="position" :inputId="option.label" name="option" :value="option.value"/>
            <label :for="option.label" class="ml-2"> {{ option.label }} </label>
          </div>
        </div>
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5"
                  containerStyle="max-width: 640px">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" style="width: 100%"/>
          </template>
          <template #thumbnail="slotProps">
            <img :src="imageUrl(slotProps.item.itemImageLittle)" class="h-1"/>
          </template>
        </Galleria>
      </div>

    </div>
    <Divider/>
    <h1>Explore the Activities</h1>
    <div
        class="flex flex-column xl:flex-row lg:flex-row md:flex-row align-items-center justify-content-center gap-8">
      <Card style="overflow: hidden" class="w-22rem">
        <template #header>
          <img alt="user header" src="@/assets/images/Dinner.png" class="max-h-30rem"/>
        </template>
        <template #title>Community Dinner</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0 text-ms xl:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque
            quas!
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
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque
            quas!
          </p>
        </template>
      </Card>
      <Card style="width: 22rem; overflow: hidden">
        <template #header>
          <img alt="user header" src="@/assets/images/Art.png" class="max-h-30rem"/>
        </template>
        <template #title>Art Workshop</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque
            quas!
          </p>
        </template>
      </Card>
    </div>
    <Divider/>
    <div
        class="flex flex-column align-items-center justify-content-center">
      <h1>Your first day at Sport10</h1>
      <h3>Activities Ideas</h3>
      <Timeline :value="events" align="alternate" class="customized-timeline">
        <template #marker="slotProps">
                <span
                    class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
                    :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
        </template>
        <template #content="slotProps">
          <Card class="mt-3 card">
            <template #title>
              {{ slotProps.item.title }}
            </template>
            <template #content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                esse, cupiditate
                neque quas!
              </p>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>
    <footer class="flex flex-column w-full mt-5 pl-8 pr-8 pb-8" style="background-color:#4c4c4c; color:white">
      <div class="flex align-items-center justify-content-center">
        <h3>CONTACT SPORT10</h3>
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
        {title: 'Do some art with Jeppe', icon: "pi pi-palette", color: "#27b0b0"},
        {title: 'Join the community dinner', icon: "pi pi-shop", color: "#27b02e"},
        {title: 'Join the community dinner', icon: "pi pi-shop", color: "#7e1c91"},
        {title: 'Join the community dinner', icon: "pi pi-shop", color: "#b06527"},
      ]
    }
  },
  methods: {
    onTouchMove() {
      return
    },
    next() {
      this.activeIndex = this.activeIndex === this.images.length - 1 ? this.images.length - 1 : this.activeIndex + 1;
    },
    prev() {
      this.activeIndex = this.activeIndex === 0 ? 0 : this.activeIndex - 1;
    },
    imageUrl(url) {
      return new URL(`../assets/images/${url}`, import.meta.url).href
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

</style>