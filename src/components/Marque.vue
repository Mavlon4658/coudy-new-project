<template>
  <div class="wrapper">
    <marquee behavior="alternate" scrollamount="'6.5'">
      <img src="@/assets/head/11.svg" alt="">
      <img src="@/assets/head/22.svg" alt="">
      <img src="@/assets/head/33.svg" alt="">
      <img src="@/assets/head/44.svg" alt="">
      <img src="@/assets/head/55.svg" alt="">
      <img src="@/assets/head/66.svg" alt="">
      <img src="@/assets/head/77.svg" alt="">
      <img src="@/assets/head/ang.svg" alt="">
      <img src="@/assets/head/clwn.svg" alt="">
      <img src="@/assets/head/dnt.svg" alt="">
      <img src="@/assets/head/hh.svg" alt="">
      <img src="@/assets/head/horn.svg" alt="">
      <img src="@/assets/head/ice.svg" alt="">
      <img src="@/assets/head/mnr.svg" alt="">
      <img src="@/assets/head/momo.svg" alt="">
      <img src="@/assets/head/ooo.svg" alt="">
      <img src="@/assets/head/zmb.svg" alt="">
      <!-- <img src="@/assets/head/11.svg" alt="">
      <img src="@/assets/head/22.svg" alt="">
      <img src="@/assets/head/33.svg" alt="">
      <img src="@/assets/head/44.svg" alt="">
      <img src="@/assets/head/55.svg" alt="">
      <img src="@/assets/head/66.svg" alt="">
      <img src="@/assets/head/77.svg" alt="">
      <img src="@/assets/head/ang.svg" alt="">
      <img src="@/assets/head/clwn.svg" alt="">
      <img src="@/assets/head/dnt.svg" alt="">
      <img src="@/assets/head/hh.svg" alt="">
      <img src="@/assets/head/horn.svg" alt="">
      <img src="@/assets/head/ice.svg" alt="">
      <img src="@/assets/head/mnr.svg" alt="">
      <img src="@/assets/head/momo.svg" alt="">
      <img src="@/assets/head/ooo.svg" alt="">
      <img src="@/assets/head/zmb.svg" alt=""> -->
    </marquee>

    <div class="img_container" ref="img_container">
      <div class="img" ref="img">
        <img src="@/assets/head/11.svg" alt="">
        <img src="@/assets/head/22.svg" alt="">
        <img src="@/assets/head/33.svg" alt="">
        <img src="@/assets/head/44.svg" alt="">
        <img src="@/assets/head/55.svg" alt="">
        <img src="@/assets/head/66.svg" alt="">
        <img src="@/assets/head/77.svg" alt="">
        <img src="@/assets/head/ang.svg" alt="">
        <img src="@/assets/head/clwn.svg" alt="">
        <img src="@/assets/head/dnt.svg" alt="">
        <img src="@/assets/head/hh.svg" alt="">
        <img src="@/assets/head/horn.svg" alt="">
        <img src="@/assets/head/ice.svg" alt="">
        <img src="@/assets/head/mnr.svg" alt="">
        <img src="@/assets/head/momo.svg" alt="">
        <img src="@/assets/head/ooo.svg" alt="">
        <img src="@/assets/head/zmb.svg" alt="">
        <img src="@/assets/head/11.svg" alt="">
        <img src="@/assets/head/22.svg" alt="">
        <img src="@/assets/head/33.svg" alt="">
        <img src="@/assets/head/44.svg" alt="">
        <img src="@/assets/head/55.svg" alt="">
        <img src="@/assets/head/66.svg" alt="">
        <img src="@/assets/head/77.svg" alt="">
        <img src="@/assets/head/ang.svg" alt="">
        <img src="@/assets/head/clwn.svg" alt="">
        <img src="@/assets/head/dnt.svg" alt="">
        <img src="@/assets/head/hh.svg" alt="">
        <img src="@/assets/head/horn.svg" alt="">
        <img src="@/assets/head/ice.svg" alt="">
        <img src="@/assets/head/mnr.svg" alt="">
        <img src="@/assets/head/momo.svg" alt="">
        <img src="@/assets/head/ooo.svg" alt="">
        <img src="@/assets/head/zmb.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swp: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.imgTransform();
    }, 1000);
    setInterval(() => {
      this.imgTransform();
    }, 29000);
  },
  methods: {
    async imgTransform () {
      let containerWidth = await this.$refs.img_container.offsetWidth;
      let imgWidth = await this.$refs.img.offsetWidth;
      let trsX = await containerWidth - imgWidth;
      console.log(imgWidth);
      if (this.swp) {
        this.$refs.img.style.left = `0`;
      } else {
        this.$refs.img.style.left = `${trsX}px`;
      }
      this.swp = !this.swp
    }
  }
};
</script>

<style>
.wrapper {
  width: 100%;
  overflow: hidden;
}

.img_container {
  width: 100%;
  overflow: hidden;
  border-bottom: 6px solid;
  position: relative;
  height: 130px;
}

/* @keyframes imgAnimation {
  0% {
    left: auto;
    right: 0;
  }
  100% {
    left: 0;
    right: auto;
  }
} */

.img {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  width: auto;
  height: 130px;
  transition: 29s linear all;
  /* animation: imgAnimation 5s linear infinite; */
}

.img img {
  height: 130px;
  transform: translateY(10px);
}

.img img:not(:last-child) {
  margin-right: 35px;
}

marquee {
  border-bottom: 6px solid;
}

marquee img {
  height: 130px;
  margin-bottom: -15px;
}

marquee img:not(:last-child) {
  margin-left: 35px;
}

@media only screen and (max-width: 768px) {
  .img img {
    height: 90px;
    transform: translateY(6px);
  }

  .img img:not(:last-child) {
    margin-right: 25px;
  }

}

</style>