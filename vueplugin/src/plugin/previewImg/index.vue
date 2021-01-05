<template>
    <transition name="fade">
        <div class="preview" v-show="isShow">
            <img :src="src" alt="img" />
        </div>
    </transition>
</template>

<script>
    export default {
        name: "preview-img",
        data(){
            return {
                isShow: false,
                src: ''
            }
        },
        methods: {
            show(options){
                const {isShow, src} = options
                this.isShow = isShow
                this.src = src
            },
            hide(){
                this.isShow = false
            }
        }
    }
</script>

<style scoped>
.preview {
    position: fixed;
    top: 0;
    left: 0%;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}

.preview img{
    width: 100%;
    height: 100%;
    background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
    transition: 0.3s ease-out;
    transform: scale(1);
}
.fade-enter {
    opacity: 0;
    transform: scale(.8);
}
.fade-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>
