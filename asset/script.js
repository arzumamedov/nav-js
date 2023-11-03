// Task 26

// const arr = [2, 3, 4, 5, 6]
// arr.forEach((element, index) => element % 2 !== 0 ? console.log(element, index) : null)





// Task 27

// const arr = [2, 3, 4, 5, 6]
// arr.forEach((element, index) => element % 2 === 0 ? console.log(element, index) : null)


// Task 28

// const arr = [2, 8, 4, 5, 6]
// arr.forEach((element, index) => index % 2 !== 0 ? console.log(element,index) : null)





// Task 29

// const arr = [2, 8, 4, 5, 6]
// arr.forEach((element, index) => index % 2 === 0 ? console.log(element,index) : null)





// Task 30

// const arr = [2, 8, 4, 5, 6]
// let max = arr[0]
// arr.forEach((element) => max < element ? max = element : null);
// console.log(max)




// Task 31

// const arr = [2, 8, 4, 5, 6]
// let max = arr[0]
// arr.forEach((element) => max > element ? max = element : null);
// console.log(max)



// Task32

// const arr = [2, 8, 7, 5, 6]
// let max = arr[0]
// arr.forEach((element) => max < element && element % 2 === 0 ? max = element : null);
// console.log(max)



// Task 33

// const arr = [2, 8, 7, 5, 6]
// let max = arr[0]
// arr.forEach((element) => max > element && element % 2 === 0 ? max = element : null);
// console.log(max)




// Task  34

// const arr = [2, 8, 7, 5, 6]
// let max = arr[0]
// arr.forEach((element) => max < element && element % 2 !== 0 ? max = element : null);
// console.log(max)



// Task 35

// const arr = [9, 8, 7, 5, 6]
// let max = arr[0]
// arr.forEach((element) => max > element && element % 2 === 1 ? max = element : null);
// console.log(max)




// Task 36

// const arr = [9, 8, 7, 5, 6]
// let max = arr[1];
// let index = 0
// arr.forEach((x, i) => {
//     if (max < x) {
//         max = x;
//         index = i;
//     }
// })
// console.log(index)





// Task 37

// const arr = [9, 8, 7, 5, 6]
// let max = arr[1];
// let index = 0
// arr.forEach((x, i) => {
//     if (max > x) {
//         max = x;
//         index = i;
//     }
// })
// console.log(index)




// Task 38

// const arr = [9, 8, 7, 3, 9, 5, 9, 9, 6]
// let max = arr[0];
// let count = 0
// arr.forEach((x) => {
//     if (max < x) {
//         max = x;
//     } else if (max == x) {
//         count++;
//     }
// })
// console.log(max, count)




// Task 39

// const arr = [9, 8, 3, 7, 3, 9, 5, 3, 9, 9, 6]
// let max = arr[0];
// let count = 0
// arr.forEach((x) => {
//     if (max > x) {
//         max = x;
//     } else if (max == x) { 
//         count++;
//     }
// })
// console.log(max, count)








// const arr=[2,3,4,5]
// const result=arr.reduce((x,i)=> x+i,0)
// console.log(result);



// const arzu = {
//     name: "Arzu",
//     age: 20,
//     isMarried: false,
// }
// const property = prompt("ozellik daxil edin:")
// console.log(arzu[property]);
// // console.log(arzu.name);





// const arr = [
//     {
//         "id": 2,
//         "description": "Sweet and savory sauces relishes spreads and seasonings",
//         "name": "Condiments"
//     },
//     {
//         "id": 1,
//         "description": "Soft drinks coffees teas beers and ales",
//         "name": "Beverages"
//     },
//     {
//         "id": 3,
//         "description": "Desserts candies and sweet breads",
//         "name": "Confections"
//     },
//     {
//         "id": 4,
//         "description": "Cheeses",
//         "name": "Dairy Products"
//     },
//     {
//         "id": 5,
//         "description": "Breads crackers pasta and cereal",
//         "name": "Grains/Cereals"
//     },
//     {
//         "id": 6,
//         "description": "Prepared meats",
//         "name": "Meat/Poultry"
//     },
//     {
//         "id": 7,
//         "description": "Dried fruit and bean curd",
//         "name": "Produce"
//     },
//     {
//         "id": 8,
//         "description": "Seaweed and fish",
//         "name": "Seafood"
//     }
// ]
// arr.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
// console.table(arr);



// Task-1


// function findstring(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr === arr.toUpperCase() || arr === arr.toLowerCase()) {
//             return true
//         }
//         else{
//             return false
//         }

//     }


// }
// console.log(findstring("dfhfgh"));






// Task-2

// function findword(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length>6) {
//             return arr[i]

//         }
//     }
// }
// console.log(findword(["jsa","adasddsd","sdfds"]));





// Task-3

// const arr=["Aksjf","Zaksjhd","Gkjsfsafda","Bnkahsd","Sjksdfds"]
// arr.sort();
// arr.reverse();
// console.table(arr);



// Task-4

// const findfile =(arr)=> {
//     ext=arr.lastIndexOf(".")
//     return arr.slice(ext)
// }
// console.log(findfile("index.css"));




// Task-5

// const users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.net",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ]
// users.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
// for (let i = 0; i < users.length; i++) {
//     if (users[i].id>3) {
// console.table(users[i].id);

//     }

// }




// function findid(users) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id % 2 === 1 && users[i].website.includes(".net")) {

//             console.log(users[i].website);
//         }
//     }
// }
// findid(users)



// const obj = {
//     name: "Clementina DuBuque",


//     getName(a, b) {
//         console.log(`${this.name} ${a} ${b}`);
//     }

// }

// obj.getName(2, 3)

// const obj1 = {
//     name: "Ervin Howell",
// }




// const obj2 = {
//     name: "Glenna Reichert",
// }

// // obj.getName.call(obj2,10,3)
// const sayname = obj.getName.bind(obj2)
// sayname(2, 3)




// const arr =[2,3,4,5,6]
// Array.prototype.findF="hello"
// console.log(arr.findF);




// class calculator {
//     constructor(adi,yazarAdi,il,qiymet,) {
//         this.adi=adi;
//         this.yazarAdi = yazarAdi;
//         this.il = il;
//         this.qiymet=qiymet;
//     }
//     endirim(saleprice){
//         return this.adi+"-"+this.yazarAdi+"-"+this.il+"-"+(this.qiymet-(this.qiymet*saleprice)/100)
//     }
// }

// const book1=new calculator("10 zenci balasi","Aqata",1990,10);
// console.log(book1.endirim(20));





// const arr = [1, 2, 3, 4, 5]

// function findarr() {
//     let hasil=[]
//     for (let i = 0; i < arr.length; i++) {
//         hasil.push(arr[i] * 2)
//     }
//     return hasil


// }
// console.log(findarr());


















