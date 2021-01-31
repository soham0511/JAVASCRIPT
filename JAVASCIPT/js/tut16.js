// let btn=document.getElementById('btn')
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('click',func1);
// // btn.addEventListener('mousedown',func3);
// function func1(e)
// {
//     console.log("thanks",e)
//     e.preventDefault(); 
// }
// function func2(e)
// {
//     console.log("thanks fro double click",e)
//     e.preventDefault(); 
// }
// function func3(e)
// {
//     console.log("thanks for mouse down",e)
//     e.preventDefault(); 
// }
// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log('you entered no')
// })
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log('you left no')
// })
document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY)
    ducument.body.style.backgroundColor=`rgb(${e.offsetX},${e.offset},54)`
    console.log('you moved no')
})
