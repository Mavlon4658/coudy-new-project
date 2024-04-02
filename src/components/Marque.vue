<template>
  <div>
    <div class="animation__img_wrap">
      <div class="animation_img">
        <img src="@/assets/heads/head1.png" alt="" />
        <img src="@/assets/heads/head2.svg" alt="" />
        <img src="@/assets/heads/head3.svg" alt="" />
        <img src="@/assets/heads/head4.png" alt="" />
        <img src="@/assets/heads/head5.png" alt="" />
        <img src="@/assets/heads/head7.png" alt="" />
        <img src="@/assets/heads/head8.png" alt="" />
        <img src="@/assets/heads/head9.svg" alt="" />
        <img src="@/assets/heads/head10.png" alt="" />
        <img src="@/assets/heads/head11.png" alt="" />
        <img src="@/assets/heads/head12.png" alt="" />
        <img src="@/assets/heads/head13.svg" alt="" />
        <img src="@/assets/heads/head14.png" alt="" />
        <img src="@/assets/heads/head15.svg" alt="" />
        <img src="@/assets/heads/head16.png" alt="" />
        <img src="@/assets/heads/head17.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let position2 = $(".animation__img_wrap")[0].getBoundingClientRect();
    let position = $(".animation_img")[0].getBoundingClientRect();
    let t = false
    setInterval(() => {
      let diffirent = 0
      if(t) {

      }else {
        diffirent = position2.width-position.width
        $(".animation_img").css({
          transform: `translateX(-${diffirent}px)`
        })
      }
    }, 3000);
    console.log(position.width);
    $(".animation_img").animate(
      {
        left: "auto",
        right: 0,
      },
      3000
    );
  },
};
</script>

<style scoped>
.animation__img_wrap {
  position: relative;
  border: 1px solid green;
  width: 100%;
  height: 130px;
  border-bottom: 3px solid;
  overflow: hidden;
}
.animation_img {
  position: absolute;
  top: 0;
  left: 0;
  height: 130px;
  display: flex;
  align-items: flex-end;
  transition: 3s linear all;
}
/* .animation_img.active {
  animation: imgActive 3s linear 1;
} */

/* @keyframes imgActive {
 from {
  
 }
} */
.animation_img img {
  height: 130px;
  transform: translateY(6px);
}

.animation_img img:nth-child(12),
.animation_img img:last-child {
  transform: translateY(10px);
}

.animation_img img:not(:last-child) {
  margin-right: 35px;
}

/* .carusel {
  width: 100%;
  border-bottom: 3px solid;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.carusel img {
  height: 130px;
  transform: translateY(7px);
}

.carusel img:not(:last-child) {
  border: 1px solid red;
} */

@media (max-width: 768px) {
  .carusel img {
    height: 100px;
  }
}
@media (max-width: 428px) {
  .carusel img {
    height: 80px;
    margin: 0 10px;
  }
}
@media (max-width: 375px) {
  .carusel img {
    height: 70px;
    margin: 0 0px;
  }
}
</style>