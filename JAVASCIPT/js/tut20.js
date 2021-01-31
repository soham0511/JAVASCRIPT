let car={
    name:'Mercedes',
    tpspped: 124,
    run: function(){
        console.log("car is running")
    }
}
function generalcar(gname,gspeed)
{
    this.name=gname;
    this.tpspeed=gspeed;
    this.run =function(){
    console.log(`${this.name} is running`);
}
}
car1=new generalcar("BMW e61",156)

car2=new generalcar("LAMBORGHINI",334)
console.log(car1,car2)