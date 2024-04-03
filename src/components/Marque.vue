<template>
  <div>
    <swiper
      :spaceBetween="35"
      :slides-per-view="'auto'"
      :speed="2500"
      :allow-touch-move="false"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: swp
      }"
      :modules="modules"
      @slideChangeTransitionEnd="e => handleSlideChange(e)"
    >
      <swiper-slide>
        <img src="@/assets/heads/head1.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head2.svg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head3.svg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head4.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head5.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head7.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head8.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head9.svg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head10.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head11.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head12.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head13.svg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head14.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head15.svg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head16.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/heads/head17.png" alt="" />
      </swiper-slide>
    </swiper>
    <div class="animation__img_wrap" ref="animationImgWrap">
      <div class="animation_img" ref="animationImg">
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
  data () {
    return {
      swp: false,
    }
  },
  methods: {
    handleSlideChange(swiper) {
      if (swiper.isBeginning) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
      if (!swiper.isEnd) {
        swiper.slideNext();
      }
    },
  },
  mounted() {
  },
};
</script>

<style>
.swiper {
  border-bottom: 3px solid;
}

.swiper-wrapper {
  transition-timing-function: linear;
}

.swiper-slide {
  width: auto;
}

.swiper-slide img {
  height: 130px;
  transform: translateY(15px);
  /* margin-bottom: -7px; */
}

.swiper-slide:nth-child(12) img,
.swiper-slide:last-child img{
  transform: translateY(10px);
}

</style>