function toggle (){
    let nav = document.getElementById("nav");
    let openmenu = document.getElementById("toggle_menu");
    let leng_dropdoun_icon = document.getElementById("leng_dropdoun_icon");
    let leng_section2 = document.getElementById("leng_section2");

  
    
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


leng_dropdoun_icon.addEventListener("click",()=>{
    if(leng_section2.style.display == "none"){
      leng_section2.style.display="flex";
    }
    else{
      leng_section2.style.display="none";
    }
});



function copyDivToClipboard1() {
  var range = document.createRange();
  range.selectNode(document.getElementById("cop_1"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
 }

 function copyDivToClipboard2() {
  var range = document.createRange();
  range.selectNode(document.getElementById("cop_2"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
 }