let start = document.getElementById("start");
let important_information_section = document.getElementById("important_information_section");
let cloas_block = document.getElementById("cloas_block");
let next = document.getElementById("next");
let add_auto = document.getElementById("add_auto");
let rowe1 = document.getElementById("rowe1");
let rowe2 = document.getElementById("rowe2");
let btn_blok = document.getElementById("btn_blok");
let change1 = document.getElementById("change1");
let change2 = document.getElementById("change2");
let flex = document.querySelectorAll(".flex1");
let chek1 = document.getElementById("radio1");
let radio = document.querySelectorAll(".radio1");
let payment = document.getElementById("payment");
let pay = document.getElementById("pay");
let uploading_documents = document.getElementById("uploading_documents");
let uploading_documents2 = document.getElementById("uploading_documents2");
let uploading_documents_btn = document.getElementById("uploading_documents_btn");
let cloas_block2 = document.getElementById("cloas_block2");
let has_been_okay_btn = document.getElementById("has_been_okay_btn");
let car_payment = document.getElementById("car_payment");
let next2 = document.getElementById("next2");
let payment2 = document.getElementById("payment2");
let pay1 = document.getElementById("pay1");
let delivery = document.getElementById("delivery");


let has_been = document.getElementById('has_been');



let sum = 0 ;


start.addEventListener("click",()=>{
    important_information_section.style.display="flex";
});

cloas_block.addEventListener("click",()=>{
    important_information_section.style.display="none";
});

next.addEventListener("click",()=>{
    important_information_section.style.display="none";
    add_auto.style.display="none";
    rowe1.style.display="none";
    rowe2.style.display="none";
    start.style.display="none";
    change1.style.border="none";
    change2.classList.add("change1");
    payment.style.display='block';
    for(let i=0;i<flex.length;i++){
        if(i<=sum){
            flex[i].style.background="#342815";
        }
        flex[0].style.borderRadius="2rem 0px 0px 2rem";
        flex[i].classList.add("flex5");
    }
    for(let i=0;i<flex.length;i++){
       if( i==sum)radio[sum].checked = true;
    }
    sum++;
});


pay.addEventListener("click",()=>{
    for(let i=0;i<flex.length;i++){
        if(i<=sum){
            flex[i].style.background="#342815";
        }
    }
    for(let i=0;i<flex.length;i++){
       if( i==sum)radio[sum].checked = true
    }
    sum++
    payment.style.display='none';

    uploading_documents.style.display="flex";
    uploading_documents2.style.display="flex";
    
});


uploading_documents_btn.addEventListener("click",()=>{
 
    has_been.style.display="flex";
});

cloas_block2.addEventListener("click",()=>{
    has_been.style.display="none";
});


has_been_okay_btn.addEventListener("click",()=>{
       for(let i=0;i<flex.length;i++){
        if(i<=sum){
            flex[i].style.background="#342815";
        }
    }
    for(let i=0;i<flex.length;i++){
       if( i==sum)radio[sum].checked = true;
    }
    sum++
    has_been.style.display="none";
    
        uploading_documents.style.display="none";
        uploading_documents2.style.display="none";


        car_payment.style.display="flex"
})


next2.addEventListener("click",()=>{
    for(let i=0;i<flex.length;i++){
        if(i<=sum){
            flex[i].style.background="#342815";
        }
    }
    for(let i=0;i<flex.length;i++){
       if( i==sum)radio[sum].checked = true;
    }
    sum++

    car_payment.style.display="none";
    payment2.style.display="block";
});

pay1.addEventListener("click",()=>{
    for(let i=0;i<=flex.length;i++){
        if(i<=sum){
            flex[i].style.background="#342815";
            if(i==sum){
               flex[i].style.borderRadius="0px 2rem 2rem 0px";
            }
        }
    }
    for(let i=0;i<flex.length;i++){
       if( i==sum)radio[sum].checked = true;
    }
    payment2.style.display="none";
    final_step.style.display="block;"
    delivery.style.display="block"
});