<template>
    <div class="vcomment">
        <div id="vcomments"></div>
    </div>
</template>

<script>
export default {
    mounted: function(){
        this.createValine()
    },
    methods: {
        createValine() {
            import('valine').then(Valine=>{
                new Valine.default({
                    el: '#vcomments',
                    appId: 'q17JRuWuXjPuIM3JTe487qdp-9Nh9j0Va',
                    appKey: 'ryeBEjWYVjgQLczX2AJUVzle',
                    notify: false,
                    verify: false,
                    avatar: 'monsterid',
                    path: location.pathname,
                    placeholder: '欢迎留言与我分享您的想法...',
                });
            })
        }
    },
    watch: {
        '$route' (to, from) {
            if(to.path !==  from.path){
                setTimeout(() => {
                    //重新刷新valine
                    this.createValine()
                }, 300)
            }

            /**
             * TODO:
             * 1. 使用其他方法更新评论组件 或者使用其他较为好用的评论组件
             * 2. 添加categories and tag
             * 3. 更换其他主题
             */
        }
    }
}
</script>

<style scoped>
#vcomments {
    max-width:740px;
    padding:10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
