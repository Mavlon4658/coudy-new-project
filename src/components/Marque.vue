<template>
  <div class="wrapper">
    <div class="img_container" ref="img_container">
      <div class="img" ref="img">
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
</template>

<script>
export default {
  data () {
    return {
      swp: false,
      xxlarge: true,
      desktop: true,
      mobile: true,
      small: true,
    }
  },
  mounted() {
    // let stclr = setInterval(() => {
    //   if (this.$refs.img.offsetWidth > 2000) {
    //     clearInterval(stclr);
    //   }
    // }, 10);
    let xxl = this.xxlarge, 
        dk = this.desktop, 
        mb = this.mobile,
        sm = this.small;
    let clrInterval, clrSettimeout;

    let makeFncSm = () => {
      clearTimeout(clrSettimeout);
      clearInterval(clrInterval);
      clrSettimeout = setTimeout(() => {
        this.imgTransform();
        clrInterval = setInterval(() => {
          this.imgTransform();
        }, 13000);
      }, 1500);
    }

    let makeFnc = () => {
      clearTimeout(clrSettimeout);
      clearInterval(clrInterval);
      clrSettimeout = setTimeout(() => {
        this.imgTransform();
        clrInterval = setInterval(() => {
          this.imgTransform();
        }, 7000);
      }, 1500);
    }

    let makeFncXl = () => {
      clearTimeout(clrSettimeout);
      clearInterval(clrInterval);
      clrSettimeout = setTimeout(() => {
        this.imgTransform();
        clrInterval = setInterval(() => {
          this.imgTransform();
        }, 4000);
      }, 1500);
    }

    let makeFncXXl = () => {
      clearTimeout(clrSettimeout);
      clearInterval(clrInterval);
      console.log('1750 ishladi');
      clrSettimeout = setTimeout(() => {
        this.imgTransform();
        clrInterval = setInterval(() => {
          this.imgTransform();
        }, 1500);
      }, 1500);
    }

    let changeXXlarge = () => {
      xxl = false;
      dk = true;
      mb = true;
      sm = true;
    }

    let changeDesktop = () => {
      xxl = true;
      dk = false;
      mb = true;
      sm = true;
    }

    let changeMobile = () => {
      xxl = true;
      dk = true;
      mb = false;
      sm = true;
    }

    let changeMobileSm = () => {
      xxl = true;
      dk = true;
      mb = true;
      sm = false;
    }

    if (window.innerWidth > 1750) {
      makeFncXXl();
      changeXXlarge();
    } else if (window.innerWidth > 1450) {
      makeFncXl();
      changeDesktop();
    } else if (window.innerWidth > 992) {
      makeFnc();
      changeMobile();
    } else {
      makeFncSm();
      changeMobileSm();
    }

    window.addEventListener('resize', function () {
      if (this.window.innerWidth > 1750) {
        if (xxl) {
          makeFncXXl();
          changeXXlarge();
        }
      } else if (this.window.innerWidth > 1450) {
        if (dk) {
          makeFncXl();
          changeDesktop();
        }
      } else if (this.window.innerWidth > 992) {
        if (mb) {
          makeFnc();
          changeMobile();
        }
      } else {
        if (sm) {
          makeFncSm();
          changeMobileSm();
        }
      }
    })
  },
  methods: {
    async imgTransform () {
      let containerWidth = await this.$refs.img_container.offsetWidth;
      let imgWidth = await this.$refs.img.offsetWidth;
      let trsX = await containerWidth - imgWidth;
      // console.log(imgWidth);
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
  /* flex-direction: column; */
  align-items: flex-end;
  width: auto;
  height: 130px;
  transition: 7s linear all;
  /* animation: imgAnimation 5s linear infinite; */
}

@media only screen and (min-width: 1750px) {
  .img {
    transition: 1.5s linear all;
  }
}

@media only screen and (min-width: 1450px) {
  .img {
    transition: 4s linear all;
  }
}

@media only screen and (max-width: 992px) {
  .img {
    transition: 13s linear all;
  }
}

.img img {
  height: 130px;
  transform: translateY(10px);
  /* width: auto;
  object-fit: contain */
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