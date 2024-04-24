<template>
  <div class="mainContainer flex flex-column align-items-center justify-content-center">
    <h1>
      Explore SPOR10
    </h1>
    <div class="flex flex-column align-items-center justify-content-center">
    <Carousel :value="images" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000" class="w-8">
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2  p-3">
          <div class="mb-3">
            <div class="relative mx-auto">
              <img :src="slotProps.data.itemImageSrc"  class="w-full border-round" />
            </div>
          </div>

        </div>
      </template>
    </Carousel>
    </div>
    <Divider />
    <h1>Explore the Activities</h1>
    <div class="flex flex-row align-items-center justify-content-center gap-8 animation-duration-1000 animation-ease-in-out" v-animateonscroll="{ enterClass: 'fadeinleft' }">
      <Card style="width: 22rem; overflow: hidden">
        <template #header>
          <img alt="user header" src="@/assets/images/Dinner.png" class="max-h-30rem"/>
        </template>
        <template #title>Community Dinner</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
        </template>
      </Card>
      <Card style="width: 22rem; overflow: hidden">
        <template #header>
          <img alt="user header" src="https://framerusercontent.com/images/lCrae4MIIRZOS1wYUfW3nFQHG0.png?scale-down-to=1024" class="max-h-30rem"/>
        </template>
        <template #title>Skating Hall</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
        </template>
      </Card>
    </div>
    <Divider />
    <div class="flex flex-column align-items-center justify-content-center animation-duration-1000 animation-ease-in-out" v-animateonscroll="{ enterClass: 'fadeinright' }">
      <h1>Your first day at Sport10</h1>
      <h3>Activities Ideas</h3>
      <Timeline :value="events" align="alternate" class="customized-timeline">
        <template #marker="slotProps">
                <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
        </template>
        <template #content="slotProps">
          <Card class="mt-3">
            <template #title>
              {{ slotProps.item.title }}
            </template>
            <template #content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                neque quas!
              </p>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>
   </div>
</template>
<script>
import Galleria from "primevue/galleria";
import Carousel from "primevue/carousel";
import Divider from "primevue/divider";
import Card from 'primevue/card'
import Timeline from "primevue/timeline";
import 'primeicons/primeicons.css'


export default {
  components: {
    Galleria,
    Carousel,
    Divider,
    Card,
    Timeline
  },
  data() {
    return {
      activeIndex: 2,
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
          itemImageSrc: "https://framerusercontent.com/images/JeRHFmYKuVCz0nNJNt0nH8kw2I.jpg?scale-down-to=2048"
        },
        {
          itemImageSrc: "https://framerusercontent.com/images/G7QWtK2eHlm7zZlfxQTJSP7wD4.jpg?scale-down-to=2048"
        }, {
          itemImageSrc: "https://framerusercontent.com/images/lCrae4MIIRZOS1wYUfW3nFQHG0.png?scale-down-to=1024"
        }
      ],
      events: [
        { title: 'Do some art with Jeppe', icon:"pi pi-palette", color:"#27b0b0"},
        { title: 'Join the community dinner', icon:"pi pi-shop", color:"#27b02e"},
      ]
    }
  }
}
</script>
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

</style>