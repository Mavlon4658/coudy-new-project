<template>
  <div class="modal">
    <div class="modal__bg"></div>
    <div class="modal__content">
        <img src="@/assets/box/box4.svg" alt="" class="modal__content_bg">
      <button class="modal__close" @click="$emit('update:value', false)">&times;</button>
      <p class="modal__description">
        Yes, Cloudy friend! We too are waiting for the mint and are fervently
        preparing for it. To make sure you don't miss the big moment, follow and
        join our Cloudy Discord and Twitter. Soon we'll be releasing Clouds into
        the sky lol
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    emits:[
        'update:value'
    ]
};
</script>

<style scoped>
/* font */
@import url('https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap');

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
}

.modal__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
}

.modal__content {
    padding: 50px;
    width: 400px;
    position: relative;
    z-index: 1;
    background: transparent;
}

.modal__content_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
}

.modal__description {
    font-family: "Rubik Scribble", system-ui;
    font-size: 24px;
    background: transparent;
    color: #000;
    font-weight: 600;

}

.modal__close {
    position: absolute;
    background: transparent;
    border: 0;
    font-size: 45px;
    right: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

}

@media(max-width: 550px)
{
    .modal__content {
    padding: 30px;
    padding-top: 45px;
    width: 350px;
}

.modal__description {
    font-size: 22px;
}
}
@media(max-width: 375px)
{
    .modal__content {
    padding: 30px;
    padding-top: 45px;
    width: 300px;
}

.modal__description {
    font-size: 18px;
}
}
@media(max-width: 320px)
{
    .modal__content {
    width: 270px;
}

.modal__description {
    font-size: 15px;
}
}
</style>
