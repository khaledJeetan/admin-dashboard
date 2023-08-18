// console.log("helloWorld!!");

// const user = {
//     id: 12,
//     firstName : "khaled",
//     lastName :"",
//     email : "ffff",
//     phone : "",
//     role : "",
//     location : "",
//     url: ""
// }

// console.log(typeof String(user.id)).matche;

const date = new Date();


const d = new Date(date);
d.setSeconds(d.getSeconds()+15);
// d.setMinutes(d.getMinutes()- 1);
console.log(date)
console.log(d)
console.log(date.getTime())
console.log(d.getTime())
console.log(d - date)
console.log((new Date().setHours(d.getHours()+24)));

const sd = new Date().toString();
console.log(sd);
console.log(new Date(sd));
