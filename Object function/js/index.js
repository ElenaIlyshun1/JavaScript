// let Person = {
//   name: "Jason",
//   age: 18,
//   ShowPerson() {
//     console.log("Name =>", Person.name);
//     console.log("Age =>", Person.age);

//   },
//   SetName(name){
//       if(typeof(name)=="string"){
//           this.name = name;
//       }
//   }
// };

// // Person.name = "Kolya";
// // console.log("Name =>" ,Person.name);
// Person.ShowPerson();
// Person.SetName("Timmi");
// Person.ShowPerson();
//////////////////////////////////////////////////////
const Person = [
  {
    name: "Jason",
    age: 18,
    ShowPerson() {
      console.log("Name =>", this.name);
      console.log("Age =>", this.age);
    },
    SetName(name) {
      if (typeof name == "string") {
        this.name = name;
      }
    }
  },

  {
    name: "Jasica",
    age: 22,
    ShowPerson() {
      console.log("Name =>", this.name);
      console.log("Age =>", this.age);
    },
    SetName(name) {
      if (typeof name == "string") {
        this.name = name;
      }
    }
  }
];
//console.log(Person);
// const onePerson = Person.map((item)=>{
//     item.ShowPerson();
// })
/////////////////////////////////////////////////////
// function Plus (a, b){
//     return a + b;
// }
// console.log(Plus(2,6));

/////////////////////////////////
//function declaration будь де можна оголошувати і визивати
function Plus (...params){
    //console.log(params);
    let result = 0;
    for(let i =0; i < params.length; i++)
    {
        result += params[i];
    }
    return result;
}
console.log(Plus(2,6,252,454,5454,41,5,5,525,45,4,5));
////function expresion визивають лише після ініціалізаціїї
const Minus = function(a,b){
    return a - b;
}

console.log("Minus=>", Minus(8,6));

//////стрілочні функції
const Multiple = (...params)=>{
    let result = 1;
    for(let i =0; i < params.length; i++)
    {
        result *= params[i];
    }
    return result;
}
console.log("Multiple => " ,Multiple(2,6,252,454,5454,41,5,5,525,45,4,5));

///erow function
const App = id => console.log(id);
App(32);
//////anonimous function

(function()
{
    var x = "Hello!!!";
    console.log("x => ", x)
})();
/////////функція конструктор function Constructor
function User(name,age)
{
    this.name = name;
    this.age = age;
    this.ShowUser = function(){
        console.log("Name" ,this.name, "\nAge:", this.age);
        
    }
}

let user1 = new User("Bob",33);
user1.ShowUser();

let user2 = new User("Tom",42);
user2.ShowUser();