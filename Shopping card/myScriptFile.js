function add(va, tt) {
    var number =document.getElementById(va).innerHTML;
    number++;
    var adddiv = document.getElementById( va);
    adddiv.innerHTML= number;
    
      var amount= parseInt(document.getElementById('total').innerHTML);
    amount+=tt;
    var totalup = document.getElementById('total');
    totalup.innerHTML=amount

  
}


function remove(va1, tt1,re){
var number =document.getElementById(va1).innerHTML;
if(number>0){
    number--;
}
var adddiv = document.getElementById(va1);
adddiv.innerHTML= number;

if (number===0){

     var parent = document.getElementById('parent');
     var child= document.getElementById(re)
     parent.removeChild(child);
}
       var amount= parseInt(document.getElementById('total').innerHTML);
    if( amount>0)   
   {  amount-=tt1; }
    var totalup = document.getElementById('total');
    totalup.innerHTML=amount
}

function color(c) {
   
    var cc= document.getElementById(c);
    cc.style.color='red'
}











