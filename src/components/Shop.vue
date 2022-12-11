<template>
  <div>
    <h1>Books At Alefredobooks</h1>
  <div v-for="book in arr_books" :key="{book}">
       <!-- <img alt="Vue logo" src='../assets/{{book.Src_image}}'> -->
  <div>
    <img alt="Vue logo" :src="book.Src_image">

 </div>
  <h1> Book title {{book.title}}</h1>
  <p> Book description {{book.description}}</p>
  <p>Book Status :{{book.status}}</p>
  <p>Book Price :{{book.price}}</p>
  </div>
</div>
</template>

<script>
export default {
    name:"ShopHaneen",
data(){
    return{
     arr_books:[
        {
              Src_image: require('../assets/AP-Biology-Prep-Plus.jpg'),
             title:"AP Biology Prep Plus 2020 & 2021",
             description:"AP Biology Prep Plus 2020 & 2021",
             status:"New",
             price:"30 JD",
        },
        // {
          
        //       Src_image: require('../assets/AP-Physics.jpg'),
        //      title:"AP Physics 1",
        //      description:"AP Physics 1",
        //      status:"New",
        //      price:"21 JD",
        // },
        // {
        //      Src_image:require('../assets/BARRONS-Chemistry.png'),
        //      title:"BARRON’S Science 360 A Complete Study Guide to Chemistry",
        //      description:"BARRON’S Science 360 A Complete Study Guide to Chemistry",
        //      status:"New",
        //      price:"25 Jd",
        // },
        // {
        //      Src_image:require('../assets/AP-World-History.jpg'),
        //      title:"Princeton Review AP World History",
        //      description:"Princeton Review AP World History",
        //      status:"New",
        //      price:"28 JD",
        // },
        // {
        //      Src_image:require('../assets/BARRONS-Math-Algebra.png'),
        //      title:"BARRON’S Math 360 A Complete Study Guide to Pre-Algebra",
        //      description:"BARRON’S Math 360 A Complete Study Guide to Pre-Algebra",
        //      status:"Used / Like New",
        //      price:"25 JD",
        // },
     ]
    }
},
}
</script>

<style>

</style>