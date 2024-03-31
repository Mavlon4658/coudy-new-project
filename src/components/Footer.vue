<template>
  <div class="footer_container">
    <div class="footer_top">
      <Link />,
      <div class="footer_top_img">
        <img class="footer_top_join" src="@/assets/footer/jn.svg" alt="" />
        <img class="footer_top_go" src="@/assets/footer/lfg.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Link from "./Link.vue";
export default {
  components: {
    Link,
  },
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.footer_top {
  margin: 50px auto 0;
  max-width: 1130px;
  position: relative;
}
.footer_top_join {
  left: 0;
  top: 20%;
  position: absolute;
  width: 260px;
}
.footer_top_go {
  right: 0;
  top: 20%;
  position: absolute;
  width: 260px;
}
.footer_bottom {
  padding: 15px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: -20px;
  cursor: pointer;
}

.footer_bottom a {
  display: block;
  background: transparent;
  color: #ffffff;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
}
.footer_bottom img {
  display: block;
  width: 30px;
  margin: auto 10px;
}
@media (max-width: 960px) {
  .footer_top_img {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .footer_top_join {
    position: inherit;
    width: 230px;
  }
  .footer_top_go {
    position: inherit;
    width: 230px;
  }
}
@media (max-width: 600px) {
  .footer_top_join {
    position: inherit;
    max-width: 180px;
  }
  .footer_top_go {
    position: inherit;
    max-width: 180px;
  }
}
@media (max-width: 400px) {
  .footer_top_join {
    position: inherit;
    max-width: 130px;
  }
  .footer_top_go {
    position: inherit;
    max-width: 130px;
  }
}
</style>