// object.assign
/*const details={Firstname : "shubhasis",Lastname : "Padhi",Id :1160};
const updatedDetails={Id :11604387,Age :23};

const Info=Object.assign(details,updatedDetails);

console.log(Info);

//object.create
const wild = {
  isanimal: false,
  Introduction: function () {
    console.log("The wild animal name is " + this.name + " " + "Is it a animal " + this.isanimal);
  }
};
const animal = new Object(wild);

animal.name = "Tiger";
animal.isanimal = true;

animal.Introduction();

//object.entries
const object1 = { name: 'Shubhasis', age: 23 };

for (const [key, value] of Object.entries(object1)) {
  console.log(key + " ", value);
}

//object.freeze
const phonenumber = { number: 1023456789}

Object.freeze(phonenumber)
console.log(phonenumber.number)

//object.fromentries
const food= new Map([["fruit","orange"],["orange",80]]);

const details=Object.fromEntries(food)
console.log(details);*/

//Object.isfrozen

const phonenumber = { number: 1023456789};
console.log(Object.isFrozen(phonenumber));

Object.freeze(phonenumber)
console.log(Object.isFrozen(phonenumber));

//object.keys
const object1 = {
  a: "string",
  b: 42,
  c: false
};

console.log(Object.keys(object1));