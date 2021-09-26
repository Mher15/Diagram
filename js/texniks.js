let order_add = document.getElementById('order_add');
let main = document.getElementById('main');
let checkout_secton = document.getElementById('checkout_secton');
let your_datasection = document.getElementById('your_datasection');
let next_option = document.getElementById('next_option');
let next_option2 = document.getElementById('next_option2');


    order_add.addEventListener("click",()=>{
        main.style.display="none";
        checkout_secton.style.display="flex";
    }); 


    next_option.addEventListener("click",()=>{
        your_datasection.style.display="none";
        your_datasection2.style.display="flex";
    });

    next_option2.addEventListener("click",()=>{
        your_datasection2.style.display="none";
        your_datasection3.style.display="flex";
    });

    next_option3.addEventListener("click",()=>{
        checkout_secton.style.display="none";
        congratulations.style.display="flex";
    });

    congratulations.addEventListener("click",()=>{
        congratulations.style.display="none";
        arrived.style.display="flex"
    });

function toggle (){
    let nav = document.getElementById("nav");
    let openmenu = document.getElementById("toggle_menu");

    let cloase_menu = document.getElementById("cloase_menu")



    openmenu.addEventListener("click",()=>{
        let id = null;
        let pos = -380;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (pos == 0) {
                clearInterval(id);
            } else {
                pos+=4;
                nav.style.left = pos + "px";
            }
        }
    });

    cloase_menu.addEventListener("click",()=>{
        let id = null;
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (pos == -380) {
                clearInterval(id);
            } else {
                pos-=4;
                nav.style.left = pos + "px";
            }
        }
    });
}
toggle()

