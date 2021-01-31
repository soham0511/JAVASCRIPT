const age=32
const doesdrive=true    ;
const voter=true;
if(age>24&&age<78&&doesdrive&&voter)
console.log("you can drive");
else if(age>18&&age<24&&!doesdrive&&voter)
console.log("learner license");
else if(age>79&&!doesdrive&&voter)
console.log("you are too old to drive");
else 
console.log("you cannot to drive");