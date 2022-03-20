// setTimeout(() => {
//   let nameInput = prompt("Enter your name");
//   console.log(nameInput);
// }, 3000);

// let a = 1;
// let b = 2;
// console.log(a + b);

// cho setTimeout du 3s => log Logger ne => log ra a + b

// log a + b => "Logger ne"

// A + B = anh chi em
// C + D la ong noi ba noi cua A + B

// Moi buoi chieu, len nui de lay nuoc => nau com

// A + B => di len nui lay nuoc, hứa với ông bà C D là, nếu như có nước => nước => nấu cơm >< nếu như không có nước => không nấu cơm được

// C + D còn quét nhà, lặt rau, đánh cầu lông

// A + B đi lấy nước, tốn khoảng 3 tiếng => C + D đợi 3 tiếng sau khi A + B có nước => nấu cơm

// let myPromise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let diLayNuoc = true;
//     if (diLayNuoc) {
//       resolve("Nước về rồi nè");
//     } else {
//       reject("Không có nước");
//     }
//   }, 3000);
// });

// console.log("Quét nhà");
// console.log("Chơi cầu lông");
// // console.log(myPromise);

// myPromise
//   .then(function (data) {
//     return data + ", đi nấu cơm đi";
//   })
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

const getData = () => {
  const request = fetch("https://reqres.in/api/users?page=2");
  request
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let users = data.data;
      renderUser(users);
    })
    .catch((err) => {
      console.log(err);
    });
};

const renderUser = (users) => {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
  }
};

getData();
