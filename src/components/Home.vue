<template>
  <div class="container">
    <img class="moon" src="@/assets/home/moon.svg" alt="moon" />
    <div class="logo">
      <img src="@/assets/home/logo.svg" alt="" />
    </div>
    <Link />,
      <button><a target="_blank" href="https://discord.gg/cloudynowhere">mint</a></button>

    <img class="cloud1" src="@/assets/cloud1.svg" alt="" />
  </div>
</template>

<script>
import 'animate.css';
import Link from "./Link.vue";
export default {
  components: {
    Link,
  },
  
};
</script>


<style scoped>
/* button */
button{
  position: absolute;
  border: 6px solid #C7FE06;
  cursor: pointer;
  padding: 5px 20px;
  border-radius: 15px;
  right: 50px;
  top: -50px;
  transform: rotate(-25deg);
  font-family: Arial, Helvetica, sans-serif;
}
button a{
  display: block;
  font-size: 50px;
  font-weight: 900;
  color: #000;
}
.container {
  position: relative;
}
.moon {
  width: 60px;
  display: block;
  position: absolute;
  left: 15%;
  transform: rotate(-10deg);
  animation: moon 1.5s linear 1;
  animation-delay: 1s;
}
@keyframes moon{
  0% , 100% , 30% {
    transform: rotateZ(-10deg);
  }

  50% , 70%{
    transform: rotateZ(-70deg);
  }
  80% , 93%{
    transform: rotateZ(20deg);
  }
  86%{
    transform: rotateZ(-20deg);
  }
}


/* logo */
.logo {
  margin-top: 100px;
}
.logo img {
  margin: 30px;
  margin: 0 auto;
  width: 240px;
  /* height: 15/0px; */
}
a,
img {
  display: block;
}

.cloud1 {
  width: 150px;
  position: absolute;
  right: 15%;
  bottom: 0;
  animation: clound 4s infinite;
}

@keyframes clound {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}


@media (max-width: 1024px) {
  .moon {
    width: 42px;
    left: 15%;
    top: 0;
  }
  /* logo */
  .logo {
    margin-top: 50px;
  }
  .logo img {
    margin: 3px auto;
    width: 200px;
  }
  .links ul {
    margin-top: 15px;
    gap: 15px;
  }
  ul li a img {
    width: 42px;
    height: auto;
  }

  .cloud1 {
    width: 100px;
    right: 15%;
    bottom: 0;
  }
  /* button */
button{
  border: 6px solid #C7FE06;
  cursor: pointer;
  padding: 5px 20px;
  right: 20px;
  top: -20px;
}
button a{
  font-size: 45px;
  font-weight: 900;
}
}
@media (max-width: 768px) {
  .moon {
    width: 42px;
    left: 15%;
    top: 20%;
  }
  /* logo */
  .logo {
    margin-top: 50px;
  }
  .logo img {
    margin: 3px auto;
    width: 220px;
  }
  .links ul {
    margin-top: 15px;
    gap: 15px;
  }
  ul li a img {
    width: 47px;
    height: auto;
  }

  .cloud1 {
    width: 100px;
    right: 15%;
    bottom: 40%;
  }
  
}
@media (max-width: 615px) {
  .moon {
    width: 40px;
    left: 10%;
    top: -4%;
  }
  /* logo */
  .logo {
    margin-top: 50px;
  }
  .logo img {
    margin: 3px auto;
    width: 220px;
  }
  .links ul {
    margin-top: 15px;
    gap: 15px;
  }
  ul li a img {
    width: 47px;
    height: auto;
  }

  .cloud1 {
    width: 90px;
    right: 4%;
    bottom: 17%;
  }
  button{
    border: 5px solid #C7FE06;
    border-radius: 8px;
    cursor: pointer;
    padding: 0 8px;
    right: 10px;
  top: -20px;
}
button a{
  font-size: 30px;
}
}
@media (max-width: 425px) {
  .moon {
    width: 34px;
    left: 10%;
    top: -4%;
  }
  /* logo */
  .logo {
    margin-top: 50px;
  }
  .logo img {
    margin: 3px auto;
    width: 220px;
  }
  .links ul {
    margin-top: 15px;
    gap: 15px;
  }
  ul li a img {
    width: 47px;
    height: auto;
  }

  .cloud1 {
    width: 80px;
    right: 4%;
    bottom: 17%;
  }
}
@media (max-width: 375px) {
  .moon {
    width: 30px;
    left: 8%;
    top: -3%;
  }
  /* logo */
  .logo {
    margin-top: 50px;
  }
  .logo img {
    margin: 3px auto;
    width: 220px;
  }
  .links ul {
    margin-top: 15px;
    gap: 15px;
  }
  ul li a img {
    width: 47px;
    height: auto;
  }

  .cloud1 {
    width: 65px;
    right: 4%;
    bottom: 20%;
  }
  button{
  border: 4px solid #C7FE06;
  cursor: pointer;
  padding: 0 8px;
  right: 10px;
  top: -30px;
}
button a{
  font-size: 22px;
}
}
</style>
