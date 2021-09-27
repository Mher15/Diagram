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

add_mesig.addEventListener("click",()=>{
  medage.style.display="flex";
});

cloase_img.addEventListener("click",()=>{
  medage.style.display="none";
});