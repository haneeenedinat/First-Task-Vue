<template>
  <div class="Single_Page_container">
   <div class="book-item">   
  <div class="img" >
    <img :alt="this.arr_books.title" :src="this.arr_books.Src_image">
  
 </div>

<div class="Book-Details">
 <h3> {{this.arr_books.title}}</h3>
  <p> Description: {{this.arr_books.description}}</p>
  <p>Book Status :{{this.arr_books.status}}</p>
  <p>Book Price :{{this.arr_books.price}}</p> 


  </div>
  </div>
    </div>
</template>

<script>
export default {
props:["arr_books"],
name:"SinglePage",
}
</script>

<style>
.book-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.img{
  margin:0 10px;
}

@media (max-width:600px) {
 .book-item{
 display: flex;
 flex-direction: column;
} 
}
</style>