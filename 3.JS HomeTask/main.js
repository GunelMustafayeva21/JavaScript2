
//Inputlarin deyeri mueyyen sertler yoxlanilaraq HTML sehifesine yazilsin

let btn1=document.querySelector( ".button1");
let btn2=document.querySelector( ".button2");
let btn3=document.querySelector( ".button3");
let btn4=document.querySelector( ".button4");

let myInput1=document.querySelector( ".insert1");
let myInput2=document.querySelector( ".insert2");
let myInput3=document.querySelector( ".insert3");
let myInput4=document.querySelector( ".insert4");


btn1.onclick= () => 
{
    if(myInput1.value.length==0)
    {
        alert("You must write your First Name");
        return 0;
   }
   document.getElementById("demo1").innerHTML ="First Name: "+ myInput1.value ;
}


btn2.onclick=  function() 
{
   if(myInput2.value.length==0)
   {
     alert("You must write your Last Name");
     return 0;
     
   }
   
    document.getElementById("demo2").innerHTML ="Last Name: "+ myInput2.value ;
    
   
    
}


btn3.onclick= () => 
{
    if(myInput3.value.length==0)
    {
        alert("You must write your User Mail");
        return 0;
    }
    document.getElementById("demo3").innerHTML ="User Mail : " +myInput3.value ;
    
}


btn4.onclick= () =>
{
    if(myInput4.value.length==0)
    {
    alert("You must write your Password");
    return 0;
    }
    document.getElementById("demo4").innerHTML = "Password: "+myInput4.value ;
    
}