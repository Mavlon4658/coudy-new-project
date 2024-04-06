<template>
  <div class="wrapper">    
    <marquee behavior="alternate" direction="8" class="carusel" >
      <img v-for="i in 18" :key="i" :src="require(`@/assets/tinified/head_${i}.webp`)" alt="">
    </marquee>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.carusel{
  /* border: 1px solid; */
  width: 100%;
  border-bottom: 2px solid;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.carusel img{
  height: 150px;
  /* margin: 0 20px; */
  margin-bottom: 0;
  transform: translateY(15px) ;
}

.carusel img:not(:last-child) {
  margin-right: 40px;
}


@media (max-width: 768px){
  .carusel img{
    height: 100px;
    transform: translateY(11px);
  }
  
  .carusel img:not(:last-child) {
    margin-right: 35px;
  }
}
@media (max-width: 428px){
  .carusel img{
    height: 80px;
    transform: translateY(10px);
  }

  .carusel img:not(:last-child) {
    margin-right: 30px;
  }
}
@media (max-width: 375px){
  .carusel img{
    height: 70px;
  }
}
</style>