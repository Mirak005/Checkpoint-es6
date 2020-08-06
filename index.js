var pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  function getAge(pet) {
    return new Date().getFullYear() - pet.bornOn;
  }


  
//   var petsWithAge = [] ;
//   for (var i = 0; i < pets.length; i++) {
//     var pet = pets[i];
//     pet.age = getAge(pet);
  
//     petsWithAge.push(pet);
//   }


//this expression return undefiend 
const petsWithAge = []
pets.forEach(pet =>{
    //   we push a COPY of the pet object with a new attribute age 
   petsWithAge.push({...pet , age : getAge(pet)})
})

  console.log("petsWithAge",  petsWithAge);

//solution with map 
// map return a copy of ther array , and each element takes the return value 
const petsWithAgeMap = pets.map(pet =>{
    //we return an object with the old values of the pet object with a new attribute age 
    return {  
        ...pet , 
        age : getAge(pet)
    }
})



  
//   var dogs = [];
//   for (var i = 0; i < pets.length; i++) {
//     var pet = pets[i];
//     if (pet.type === "dog") {
//       dogs.push(pet);
//     }
//   }

//              filter return a filtred array (COPY)
 const dogs = pets.filter(pet => pet.type ==="dog")
  console.log("dogs" , dogs);
  

//   var jasper;
//   for (var i = 0; i < pets.length; i++) {
//     var pet = pets[i];
//     if (pet.name === "Jasper") {
//       jasper = pet;
//     }
//   }

//            find retun the first occurence that s match the filter condition
const jasper =  petsWithAge.find(pet => pet.name ==="Jasper")
console.log(jasper)
  console.log("Jasper is " + jasper.age + " years old");