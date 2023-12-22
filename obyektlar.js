// let user = {
//   name: "Abdujalil",
//   lastname: "Sobirov",
//   age: 21,
// };
// user.name = "Ibrohim";
// user["age"] = 22;



// let user = {
//   name: "Abdujalil",
//   lastname: "Sobirov",
//   age: 21,
// };


// delete user.lastname;
// console.log("lastname" in user);



let user = {
  name: "Abdujalil",
  email: "abdujalil@gmail.com",
  age: 21,
  location: 'Samarqand',
  hobbiy: ['reaf book','play com game'],
  socialMedia: {
    instagram: "@abdujali.ins",
    telegram: "@abdujali",
    facebook: "@abdujali.face",
  },
  login: function() {
    console.log('Bu yerda login func');
  },
  logBlogs: function() {
    
  }
};
user.login()