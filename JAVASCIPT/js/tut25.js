const students=[
    {name:'Soham',subject:"AI"},
    {name:'Rik',subject:'ML'}
]

function enrollStudent(student,callback){
    setTimeout(function(){
        students.push(student);
        callback();
},1000);
console.log("Students enrolled")
}
function getStudents(student){
    setTimeout(function(){
        let str=""
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        })
        document.getElementById('students').innerHTML=str;
console.log("students fetched")
},5000);
}
let std={name:'Sunny',subject:'JAVA'};
enrollStudent(std,getStudents)
// getStudents(std);