let leng_toggle = document.getElementById("leng_dropdoun_icon");
let leng_section2 = document.getElementById("leng_section2");
let forgot = document.getElementById("forgot");
let section_forget = document.getElementById("section_forget");
let close1 = document.getElementById("close");
let authorization = document.getElementById("authorization");
let blyus = document.getElementById("blyus");

leng_toggle.addEventListener("click",()=>{
    if(leng_section2.style.display == "none"){
        leng_section2.style.display="flex";
    }
    else{
        leng_section2.style.display="none";
    }
});

forgot.addEventListener("click",()=>{
    section_forget.style.display="flex";
}); 

close1.addEventListener("click",()=>{
    section_forget.style.display="none";
});

section_forget.addEventListener("click",()=>{
    section_forget.style.display="none";
});

authorization.addEventListener("click",()=>{
    blyus.style.display="flex";
}); 

blyus.addEventListener("click",()=>{
    blyus.style.display="none";
});

