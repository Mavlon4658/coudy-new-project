<template>
   <div class="links">
      <ul>
        <li>
          <a href="#">
            <img src="@/assets/twitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/dsq.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/os.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.links ul {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 15px;
}
a,
img {
  display: block;
}
ul li a img {
  width: 50xp;
  height: 50px;
}

@media(max-width:1024px){
.links ul {
  margin-top: 15px;
  gap: 15px;
}
ul li a img {
  width:42px;
  height: auto;
}
}
@media(max-width:768px){
.links ul {
  margin-top: 15px;
  gap: 15px;
}
ul li a img {
  width:47px;
  height: auto;
}
}
@media(max-width:615px){
.links ul {
  margin-top: 15px;
  gap: 15px;
}
ul li a img {
  width:47px;
  height: auto;
}
}
@media(max-width:425px){
.links ul {
  margin-top: 15px;
  gap: 15px;
}
ul li a img {
  width:47px;
  height: auto;
}

}
@media(max-width:375px){

.links ul {
  margin-top: 15px;
  gap: 15px;
}
ul li a img {
  width:47px;
  height: auto;
}

}
</style>