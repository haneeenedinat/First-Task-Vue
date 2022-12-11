<template>
  <div>
    <h1>Books At Alefredobooks</h1>
    <div class="container">
  <div v-for="book in arr_books" :key="{book}" class="book-item">
     
  <div class="img">
    <img :alt="book.title" :src="book.Src_image">
 </div>

<div class="Book-Details">
  <h3> {{book.title}}</h3>
  <p> Description: {{book.description}}</p>
  <p>Book Status :{{book.status}}</p>
  <p>Book Price :{{book.price}}</p>
  </div>
  </div>

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
        {
          
              Src_image: require('../assets/AP-Physics.jpg'),
             title:"AP Physics 1",
             description:"AP Physics 1",
             status:"New",
             price:"21 JD",
        },
        {
             Src_image:require('../assets/BARRONS-Chemistry.png'),
             title:"BARRON’S Science 360 A Complete Study Guide to Chemistry",
             description:"BARRON’S Science 360 A Complete Study Guide to Chemistry",
             status:"New",
             price:"25 Jd",
        },
        {
             Src_image:require('../assets/AP-World-History.jpg'),
             title:"Princeton Review AP World History",
             description:"Princeton Review AP World History",
             status:"New",
             price:"28 JD",
        },
        {
             Src_image:require('../assets/BARRONS-Math-Algebra.png'),
             title:"BARRON’S Math 360 A Complete Study Guide to Pre-Algebra",
             description:"BARRON’S Math 360 A Complete Study Guide to Pre-Algebra",
             status:"Used / Like New",
             price:"25 JD",
        },
     ]
    }
},
}
</script>

<style>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  
}
.img img{
    width: 250px;
    height: 300px;
}
.book-item{
 display: flex;
 flex-direction: column;
  width:30%;
  align-items: center;
  background: #fff;
  border: #fff;
  border-radius: 10px;
  margin: 10px;
  padding:10px;
     
}
.Book-Details {
width:70%;
}

@media (max-width:812px) {
.book-item{
  width: 40%;
}

@media (max-width:600px) {
   .book-item{
  width: 50%;
} 
@media (max-width:500px) {
    .book-item{
  width: 70%;
}
} 
@media (max-width:400px) {
    .book-item{
  width: 90%;
}    
}
}
  /* .container{
   display: grid;
    grid-template-columns: auto auto ;
    justify-content: center;
    grid-gap: 1em; 
  
}

.book-item{
    width:80%;
} */

}
</style>