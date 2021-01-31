class Employee {
    constructor(inpname,inpexperience,inpdivision){
        this.name=inpname
    this.experience=inpexperience
    this.division=inpdivision
    }
    slogan(){
        return `I am ${this.name} and this company is the best!`
    }
    yearofjoining()
    {
        return 2020-this.experience
    }
}
Soham=new Employee("Soham",5,"Data Analyst")

console.log(Soham)
console.log(Soham.slogan())
console.log(Soham.yearofjoining())

class Programmer extends Employee{
    constructor(inpname,inpexperience,inpdivision,inplanguage,inpgithub)
    {
        super(inpname,inpexperience,inpdivision)
        this.language=inplanguage
        this.github=inpgithub
    }
    favlanguage()
    {
        if(this.language=='pyhthon')
        return 'python'
        else 
        return 'JavaScript'
    }
    yearofjoining()
    {
        return 2020-this.experience
    }
}
    rik=new Programmer('Rik',11,'Back End Developer','PHP','Rik2e1');
    console.log(rik);
    console.log(rik.favlanguage());
    console.log(rik.yearofjoining())
