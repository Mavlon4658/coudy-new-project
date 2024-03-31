<template>
  <div class="container">
    <div class="text animate__animated animate__bounce animate__backInRight">
      Hi. We live in Cloud Nowhere. We can't explain what's going on  here. We
      came in the form of NFTs, and we've become fun to buy. Pick up your unique
      CLOUDY NFT to wear in your cloudy mood and join the crazy community
    </div>
    <ul>
      <li>
        <a href="#"><img class="img1" src="@/assets/home/og.svg" alt="" /></a>
      </li>
      <li>
        <a href="#"><img class="img2" src="@/assets/home/cstm.svg" alt="" /></a>
      </li>
    </ul>

    <img class="cloud2" src="@/assets/cloud2.svg" alt="" />

    <img class="pep" src="@/assets/home/pep.svg" alt="" />
  </div>
</template>

<script>
import 'animate.css';
export default {};
</script>


<style scoped>
.container {
  position: relative;
}

.text {
  max-width: 670px;
  padding: 15px;
  margin: 0 auto;
  margin-top: 50px;
  font-size: 19px;
  text-align: center;
  line-height: 33px;
  letter-spacing: 1px;
  color: #000000f3;
  font-weight: 300;
  font-family: "TildaSans", Arial, sans-serif;
}
ul {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
li a .img1 {
  width: 240px;
}
li a .img2 {
  width: 220px;
}
.cloud2 {
  width: 200px;
  display: block;
  position: absolute;
  left: 15%;
  bottom: 0;
   animation: clound 4s infinite
}
.pep {
  position: absolute;
  width: 220px;
  right: 0;
  top: 30%;
}
@keyframes clound {
  0%, 100% {
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-15px);
    }
}
@media (max-width: 1024px) {
  .text {
    padding: 15px;
    margin-top: 0px;
    font-size: 17px;
    /* line-height: 25px; */
    letter-spacing: auto;
  }
  ul {
    margin-top: 100px;
    gap: 15px;
    flex-direction: column;
  }
  li a .img1 {
    width: 210px;
  }
  li a .img2 {
    width: 190px;
  }
  .cloud2 {
    width: 170px;
    left: 15%;
    top: 50%;
  }
  .pep {
    width: 170px;
    right: 0;
    top: 30%;
  }
}
@media (max-width: 768px) {
  .text {
    max-width: 650px;
    padding: 20px;
    margin-top: 0px;
    font-size: 17px;
    line-height: 30px;
    letter-spacing: auto;
  }
  ul {
    margin-top: 100px;
    gap: 15px;
  }
  li a .img1 {
    width: 230px;
  }
  li a .img2 {
    width: 200px;
  }
  .cloud2 {
    width: 150px;
    left: 15%;
    top: 40%;
  }
  .pep {
    width: 170px;
    right: 0;
    top: 40%;
  }
}
@media (max-width: 615px) {
  .text {
    max-width: 500px;
    font-size: 18px;
  }
  ul {
    margin-top: 80px;
    gap: 10px;
  }
  li a .img1 {
    width: 200px;
  }
  li a .img2 {
    width: 180px;
  }
  .cloud2 {
    width: 120px;
    left: 6%;
    top: 50%;
  }
  .pep {
    width: 140px;
    right: 0;
    top: 50%;
  }
@media (max-width: 425px) {
  .text {
    max-width: 360px;
    font-size: 16px;
    line-height: 24px;
  }
  ul {
    margin-top: 80px;
    gap: 5px;
  }
  li a .img1 {
    width: 200px;
  }
  li a .img2 {
    width: 180px;
  }
  .cloud2 {
    width: 100px;
    left: 6%;
    top: 50%;
  }
  .pep {
    width: 120px;
    right: 0;
    top: 50%;
  }
}}
@media (max-width: 375px) {
  .text {
    max-width: 310px;
    font-size: 14px;
    line-height: 22px;
  }
  ul {
    margin-top: 80px;
    gap: 1px;
  }
  li a .img1 {
    width: 180px;
  }
  li a .img2 {
    width: 160px;
  }
  .cloud2 {
    width: 90px;
    left: 6%;
    top: 50%;
  }
  .pep {
    width: 100px;
    right: 0;
    top: 50%;
  }
}
</style>
