// class ToyotaCar
// {
//     constructor(brand, mileage)
//     {
//         console.log("Objected created");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start()
//     {
//         console.log("start");
//     }

//     stop()
//     {
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// let lexus = new ToyotaCar("lexus", 12);

//---------------------Inheritance--------------------
// class Person{
//     constructor(name)
//     {
//         console.log("parent constructor");
//         this.species = "homo sapiens";
//         this.name = name;
//         console.log("exit parent");
//     }
//     eat()
//     {
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(name)
//     {
//         super(name);
//         console.log("child constructor");
//         console.log("exit child");
//     }
//     work()
//     {
//         super.eat();
//         console.log("Repairs things, create new things");
//     }
// }

// let ali = new Engineer("ali");