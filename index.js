
var button = document.querySelectorAll(".bt2")
for( i=0;i< button.length;i++){

    button[i].addEventListener("click", function(){

        var parent = this.parentNode
        var quant = parent.querySelector(".inp")
        
        quant.value = Number(quant.value)+ 1 
          
          })


}

var button1 = document.querySelectorAll(".bt5")
for( i=0;i< button1.length;i++){

    button1[i].addEventListener("click", function(){

        var parent1 = this.parentNode
        var quantity = parent1.querySelector(".inp")
        
        quantity.value = Number(quantity.value)- 1 
          
          })


}
   
var button2 = document.querySelectorAll(".bt1")
for( i=0;i< button2.length;i++){

    button2[i].addEventListener("click", function(){
    
        this.innerHTML = `<i class="fa-solid fa-heart"></i>`;
   
          })

        }
       
        function supprimerDiv1() {
          var div1 = document.getElementById("maDiv1");
          div1.remove();
        }
        function supprimerDiv2() {
          var div2 = document.getElementById("maDiv2");
          div2.remove();
        }
        function supprimerDiv3() {
          var div3 = document.getElementById("maDiv3");
          div3.remove();
        }
       








