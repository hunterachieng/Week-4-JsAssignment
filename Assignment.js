const fruit = {
    price: 30.00,
    calculateFruitCost: function(fruitName,quantity){
        return quantity + " " + fruitName + " for KES " + this.price*quantity;

    }
}
console.log(fruit.calculateFruitCost("Oranges",2));

//examples of functions, methods, and objects

// functions
function school (school){
    return " My school is called "+ school;
}
console.log(school("AkiraChix"));
// object and function
//object
const student = {
    name:"Synthia Hunter Achieng",
    school: "AkiraChix",
    age:24,
    //method
    courses: function(unit1,unit2,unit3){
        return "In " +this.school + ", we learn about " +unit1+ ", "+ unit2+ ", "+ " and " +unit3 
    }
}
    console.log(student.name);
    console.log(student.age);
    console.log(student.school);
    console.log(student.courses("Python", "Kotlin","JavaScript"));
