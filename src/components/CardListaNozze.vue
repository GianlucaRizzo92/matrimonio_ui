<template>
  <section class="wrapper">
  <div class="container">
    <div class="row">
        <h1 class="h1 text-center">Lista nozze</h1>
    </div>
    <div class="row">
      <h3>Abbiamo la fortuna di avaere già il necessario caccia i soldi</h3>
    </div>
  <div class="row">
 <div class="col-sm-6 col-md-6 col-lg-6 mb-6"><div class="card text-white card-has-bg click-col" style="background-image:url('../static/image1.jpg');">
         <img class="card-img d-none" src="../static/image1.jpg" alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?">
        <div class="card-img-overlay d-flex flex-column">
         <div class="card-body">
            <small class="card-meta mb-2">Thought Leadership</small>
            <h4 class="card-title mt-0 "><a class="text-white" herf="#">Goverment Lorem Ipsum Sit Amet Consectetur dipisi?</a></h4>
           <small><i class="far fa-clock"></i> October 15, 2020</small>
          </div>

        </div>
      </div></div>
     <div class="col-sm-6 col-md-6 col-lg-6 mb-6"><div class="card text-white card-has-bg click-col" style="background-image:url('../static/image2.jpg');">
         <img class="card-img d-none" src="../static/image2.jpg" alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?">
        <div class="card-img-overlay d-flex flex-column">
         <div class="card-body">
            <small class="card-meta mb-2">Thought Leadership</small>
            <h4 class="card-title mt-0 "><a class="text-white" herf="#">Goverment Lorem Ipsum Sit Amet Consectetur dipisi?</a></h4>
           <small><i class="far fa-clock"></i> October 15, 2020</small>
          </div>
        </div>
      </div></div>
</div>
  
</div>
</section>

</template>

<script>
export default {

}
</script>

<style lang="scss">
body{
  background: #110f16;
  font-family: 'Monotype Corsiva'
}
.wrapper{
  margin:10vh
}

//post card styles

.card{
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow:hidden;
  border-radius:20px;
  min-height:450px;
  box-shadow: 0 0 12px 0 rgba(0,0,0,0.2);
  font-family: 'Monotype Corsiva';

 @media (max-width: 768px) {
  min-height:350px;
}

@media (max-width: 420px) {
  min-height:300px;
}

 &.card-has-bg{
 transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  background-size:120%;
  background-repeat:no-repeat;
  background-position: center center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    -webkit-filter: grayscale(1);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);}

  &:hover {
    transform: scale(0.98);
     box-shadow: 0 0 5px -2px rgba(0,0,0,0.3);
    background-size:130%;
     transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

    .card-img-overlay {
      transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
      background: rgb(35,79,109);
     background: linear-gradient(0deg, rgba(4,69,114,0.5) 0%, rgba(4,69,114,1) 100%);
     }
  }
}
 .card-footer{
  background: none;
   border-top: none;
    .media{
     img{
       border:solid 3px rgba(255,255,255,0.3);
     }
   }
 }
 .card-meta{color:#26BD75}
 .card-body{ 
   transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
}
 &:hover {
   .card-body{
     margin-top:30px;
     transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
   }
 cursor: pointer;
 transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
 .card-img-overlay {
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
 background: rgb(35,79,109);
background: linear-gradient(0deg, rgba(35,79,109,0.3785889355742297) 0%, rgba(69,95,113,1) 100%);
}
}
@media (max-width: 767px){
  
}
</style>