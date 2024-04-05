<template>
  <div class="container">
    <div class="text">
      <div class="cnf_img">
        <img class="text_img_1" src="@/assets/about/cnf.svg" alt="" />
      </div>
      <div class="text_list_img">
        <img src="@/assets/about/cnf1.svg" alt="" />
        <img src="@/assets/about/cnf2.svg" alt="" />
      </div>
    </div>

    <div class="roadmap" data-aos="fade-up"  data-aos-delay="200">
      <img class="roadmap_list_img road" src="@/assets/about/rmp1.svg" alt="" />
      <img class="roadmap_list_img" src="@/assets/about/rmp2.svg" alt="" />

      <!-- <img class="roadmap_list_img" src="@/assets/about/roadmap.png" alt="" /> -->
      <img
        class="roadmap_list_responsive rmp1"
        src="@/assets/about/rmp1.svg"
        alt=""
      />
      <img
        class="roadmap_list_responsive rmp4"
        src="@/assets/about/rmp4.svg"
        alt=""
      />
    </div>
    <img class="cloud2" src="@/assets/cloud2.svg" alt="" />
    <img
      class="fr animated-image"
      @mouseover="addClass()"
      @mouseleave="removeClass()"
      ref="fr"
      src="@/assets/about/fr.png"
      alt=""
    />
    <div>
      <img />
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addClass(){
      this.$refs.fr.classList.remove('end-active')
      this.$refs.fr.classList.add('active')
    },
    removeClass(){
      this.$refs.fr.classList.remove('active')
      this.$refs.fr.classList.add('end-active')
    }
  }
};
</script>

<style scoped>
.animated-image {
  transition: transform 0.5s ease;
}
.container {
  position: relative;
  padding: 0 60px;
  max-width: 1130px;
  margin: 150px auto 0;
  display: flex;
}
.text {
  flex: 1 1 10rem;
}

.text img {
  max-width: 130px;
  margin-bottom: 20px;
}
.text_img_1 {
  max-width: 140px !important;
}
.roadmap {
  flex: 3 1 30rem;
}
.roadmap_img {
  width: fit-content;
  margin: 0 auto 40px;
  transform: translateX(90px);
}
.roadmap_list_img {
  width: 100%;
}
.roadmap_list_responsive {
  display: none;
}
.road{
  width: 220px;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 42%;
}

.cloud2 {
  width: 150px;
  display: block;
  position: absolute;
  left: 5%;
  bottom: -4%;
  animation: clound 4s infinite;
}

.fr {
  width: 40px;
  display: block;
  position: absolute;
  transform: rotate(20deg);
  left: auto;
  right: 5%;
  bottom: -4%;
}
.fr.active{
  animation: duckActive .8s linear 1;
}
.fr.end-active{
  animation: duckEndActive .8s linear 1;
}

/* kyfrem */
@keyframes duckActive{
  0% , 100%{
    transform: rotateZ(0);
  }

  40%{
    transform: rotateZ(-70deg);
  }
  70% , 90%{
    transform: rotateZ(20deg);
  }
  80%{
    transform: rotateZ(-20deg);
  }
}
/* kyfrem */
@keyframes duckEndActive{
  0% , 100%{
    transform: rotateZ(0);
  }

  60%{
    transform: rotateZ(-70deg);
  }
  30% , 10%{
    transform: rotateZ(20deg);
  }
  20%{
    transform: rotateZ(-20deg);
  }
}

/* keyfrem */
@keyframes clound {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}
/* Responsive */
@media (max-width: 959px) {
  .roadmap {
    margin-top: 184px;
  }
  .cloud2 {
    width: 120px;
    top: 10%;
    right: 5%;
    left: auto;
    bottom: auto;
  }

  .fr {
    width: 30px;
    left: 12%;
    right: auto;
    bottom: 20%;
  }
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    margin: 50px auto 0;
  }
  .text {
    width: 320px;
  }
  .cnf_img {
    width: fit-content;
    margin: 0 auto;
  }
  .text_list_img {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
  }
  .roadmap {
    flex: 3 1 20rem;
    margin-top: 0;
  }
  .road{
    display: block;
  width: 200px;
  margin: 10px auto;
}
}
@media (max-width: 600px) {
  .roadmap_list_img {
    display: none;
  }
  .rmp1{
    margin: 30px auto;
    /* padding:0 15px ; */
    width: 220px;
    
  }
  .rmp4{
    margin: 0 auto;
    width: 460px;

  }
  .roadmap_list_responsive {
    display: block;
  }
  .cloud2 {
    width: 90px;
    top: 20%;
    right: 4%;
    left: auto;
    bottom: auto;
  }

  .fr {
    width: 30px;
    left: auto;
    right: 4%;
    bottom: 0;
  }
}
@media (max-width: 500px) {
  .rmp1{
    max-width: 200px;
    
  }
  .rmp4{
    max-width: 400px;

  }
}
@media (max-width: 426px) {
  .roadmap {
    /* border: 1px solid; */
    flex: 3 1 24rem;
  }
  .cloud2 {
    width: 80px;
    bottom: auto;
    right: 5%;
    left: auto;
    top: 26%;
  }

  .fr {
    width: 20px;
    right: 12%;
    left: auto;
    bottom: 0%;
  }
  .rmp1{
    margin-bottom: 5px;
    max-width: 160px;
    
  }
  .rmp4{
    max-width: 340px;

  }

}
@media (max-width: 375px) {
  .roadmap {
    /* border: 1px solid; */
    flex: 3 1 24rem;
  }
  .text img {
    max-width: 110px;
    margin-bottom: 20px;
    padding: 0 10px;
  }
  .text_img_1 {
    max-width: 120px !important;
  }
  .cloud2 {
    width: 80px;
    bottom: auto;
    right: 5%;
    left: auto;
    top: 23%;
  }

  .fr {
    width: 20px;
    right: 12%;
    left: auto;
    bottom: 0%;
  }
  .rmp1{
    max-width: 140px;
    
  }
  .rmp4{
    max-width: 290px;

  }
}
</style>