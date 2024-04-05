<template>
  <div class="wrapper">
    <div class="img_animation_wrap">
      <div class="img_animation">
        <div class="img_animation_in">
          <img src="@/assets/heads/head1.png" alt="">
          <img src="@/assets/head/ooo.svg" alt="">
          <img src="@/assets/head/33.svg" alt="">
          <img src="@/assets/head/11.svg" alt="">
          <img src="@/assets/head/momo.svg" alt="">
          <img src="@/assets/head/clwn.svg" alt="">
          <img src="@/assets/head/ice.svg" alt="">
          <img src="@/assets/head/77.svg" alt="">
          <img src="@/assets/head/hh.svg" alt="">
          <img src="@/assets/head/dnt.svg" alt="">
          <img src="@/assets/head/ang.svg" alt="">
          <img src="@/assets/head/mnr.svg" alt="">
          <img src="@/assets/head/22.svg" alt="">
          <img src="@/assets/head/44.svg" alt="">
          <img src="@/assets/head/66.svg" alt="">
          <img src="@/assets/head/zmb.svg" alt="">
          <img src="@/assets/head/55.svg" alt="">
          <img src="@/assets/head/horn.svg" alt="">
        </div>
        <div class="img_animation_in">
          <img src="@/assets/heads/head1.png" alt="">
          <img src="@/assets/head/ooo.svg" alt="">
          <img src="@/assets/head/33.svg" alt="">
          <img src="@/assets/head/11.svg" alt="">
          <img src="@/assets/head/momo.svg" alt="">
          <img src="@/assets/head/clwn.svg" alt="">
          <img src="@/assets/head/ice.svg" alt="">
          <img src="@/assets/head/77.svg" alt="">
          <img src="@/assets/head/hh.svg" alt="">
          <img src="@/assets/head/dnt.svg" alt="">
          <img src="@/assets/head/ang.svg" alt="">
          <img src="@/assets/head/mnr.svg" alt="">
          <img src="@/assets/head/22.svg" alt="">
          <img src="@/assets/head/44.svg" alt="">
          <img src="@/assets/head/66.svg" alt="">
          <img src="@/assets/head/zmb.svg" alt="">
          <img src="@/assets/head/55.svg" alt="">
          <img src="@/assets/head/horn.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.img_animation_wrap {
  height: 130px;
  width: 4100px;

  overflow: hidden;
  position: relative;
  border-bottom: 6px solid;
  transform: translateX(-35px);
}

.img_animation {
  height: 130px;
  position: absolute;
  overflow: hidden;
  width: 100%;
  display: flex;
  gap: 35px;
  padding-left: 35px;

  animation: marquee 18s linear infinite;
}

@keyframes marquee {
  0% {
    left: 0;
  }
  100% {
    left: -50%;
  }
}

.img_animation img {
  height: 130px;
  transform: translateY(3.5px);
}

.img_animation_in {
  display: inline-flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 130px;
  width: 50%;
}

.wrapper {
  width: 100%;
  overflow: hidden;
}

@media only screen and (max-width: 768px) {
  .img_animation img {
    height: 80px;
    transform: translateY(1.5px);
  }

  .img_animation_wrap {
    width: 2600px;
    border-bottom: 4px solid;
    transform: translateX(-25px);
    height: 80px;
  }

  .img_animation {
    gap: 25px;
    padding-left: 25px;

    animation: marquee 13s linear infinite;
  }

  .img_animation_in {
    height: 80px;
  }
}
</style>