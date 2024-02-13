
/**
 * THIS 
 * this is the object which is implementing 
 */


const student = {
    name : "Tarun",
    marks : 24,
    printf : function() {
        console.log(`Hi i am ${this.name} and i am ${this.marks} years old`)
    }
}

console.log(student)
student.name = "arun"
student.printf();

let arr = [2,3,4,5] // on printing arr protoype is available in inspect

/**
 * PROTOTYPES
 * A js object is an entity having state and behaviour(properties and method).
 * JS object have a special property called prototype  // prototype is a object within a object
 * Onject use mehtods (properties) already defined in protoype
 * if object and prototype have same mehtod , object's method will prevail
 * prototype is a reference in an object
 * We Can set prototype using __proto__
 * 
 * newObj.__proto__ = oldObj // naye objetc mai purane object ke function / propeties ko directly use kr sakte hai
 * by doing this old object becomes protoype of new object
 * id both consist mehtod of same name then newObj will prevailS
 */

const newObj={
 name : "goyal"
}

newObj.__proto__ = student; // now we can access
newObj.printf();
console.log(newObj.name) // print name in new Object

/**
 * CLASSES
 * class is a program code tempalte for creating objects.
 * These objects will have some state ( variables ) and some behaviour ( functions ) inside it.
 * class name {
 * //Constructors
 * //properties
 * } 
 * constructor(){ //can be parameterised also
 * //initilize the object 
 * }
 * 
 * let obj = new class();
*/

class car {

    constructor(){
        console.log("created");
    }
    car(){
        this.name = undefined;
        this.color = undefined;
        console.log("ha")
    }
    brandName = "om";
    start(){
        console.log(this.name);
        console.log(this.brandName);

    }

    stop() {
        console.log(this.color)
    }
    setBrand(brand){
        this.brandName = brand;
        console.log(this.brandName);
    }

}

let obj =  new car();
obj.name="toyota";
obj.color="Blue";
//heer i made two objects

let obj2 = new car();
obj2.name="maruti"
obj2.color="white"

console.log(obj)
console.log(obj2)
obj2.start();

obj2.setBrand("Tarun");




