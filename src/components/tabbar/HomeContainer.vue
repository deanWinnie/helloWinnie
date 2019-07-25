<template>
   <div>

       <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
       <h1>HomeContainer</h1>
    </div> 
</template>
<script>
export default{
    data(){
        return{}
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.get("http://www.liulongbin.top:3005/api/getnewslist").then(result => {
                console.log(result.body)
            })
        }
    }
}

</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
}
//:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。
//方法1
// .mint-swipe-item:nth-child(1){
    
//     background-color: cornflowerblue
// }
// .mint-swipe-item:nth-child(2){
//     background-color:crimson
// }
// .mint-swipe-item:nth-child(3){
//     background-color:darkmagenta
// }
//方法2
.mint-swipe-item{
    &:nth-child(1){
         background-color: cornflowerblue
    }
    &:nth-child(2){
         background-color: crimson
    }
    &:nth-child(3){
         background-color: darkmagenta
    }
    
}

</style>
