let css = document.querySelector('h3');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let backColor = document.querySelector('.backColor');
let combo =





input1.addEventListener('input', function(){
  backColor.style.background = "linear-gradient(to right," + input1.value + ", " + input2.value + ")"
}
)
input2.addEventListener('input', function(){
  backColor.style.background = "linear-gradient(to right," + input1.value + ", " + input2.value + ")"
}
)
