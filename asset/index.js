let range = document.querySelector(".number");
let rengeNum = document.querySelector(".range_num");
range.oninput = function(){
    console.log(this.value);

rengeNum.style.left = this.value/100 - 30 +"px";
rengeNum.innerHTML = this.value;
};


let close = document.querySelector(".menu_close");


  function lopen(){
    close.style.display = "block";
  };
  function closed(){
    close.style.display = "none";
  };



let search = document.querySelector(".poisk");
let sait = document.querySelector(".site");

function open_searh(){
  search.style.display = "block";
  sait.style.display = "none";
}

function close_searh(){
  search.style.display = "none";
  sait.style.display = "block";
}