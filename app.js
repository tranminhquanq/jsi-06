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

// const getData2 = async () => {
//   try {
//     const request = await fetch("https://reqres.in/api/users?page=2");
//     const data = await request.json();
//     console.log(":getData2", data);
//     // impletement happy case
//   } catch (eror) {
//     console.log(eror);
//   }
// };

// const renderUser = (users) => {
//   for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//   }
// };

// getData2();

// const transformData = (users) => {
//   const newUsers = [];
//   for (let user of users) {
//     newUsers.push({
//       ...user,
//       fullName: `${user.first_name} ${user.last_name}`,
//     });
//   }
// };

// getData("https://reqres.in/api/users?page=2", transformData);

import { mockUser } from "./mockData.js";
const rootElement = document.getElementById("root");

const getData = async (apiURL, callback) => {
  try {
    const request = await fetch(apiURL);
    const data = await request.json();
    callback(data.data);
  } catch (error) {
    alert(error.message);
  }
};

const renderUsers = (users) => {
  for (let user of users) {
    const userDiv = createUserHTMLElement(user);
    rootElement.appendChild(userDiv);
  }
};

const createUserHTMLElement = (user) => {
  const { first_name, last_name, avatar, email } = user;

  // return `
  //   <div class="user">
  //     <img src="${avatar}" alt="">
  //     <h2>${first_name} ${last_name}/h2>
  //     <p>${email}</p>
  //   </div>
  // `;

  const userDiv = document.createElement("div");
  userDiv.classList.add("user");

  const avatarElement = document.createElement("img");
  avatarElement.src = avatar;

  const fullNameElement = document.createElement("h2");
  fullNameElement.innerText = `${first_name} ${last_name}`;

  const emailElement = document.createElement("p");
  emailElement.innerText = email;

  userDiv.appendChild(avatarElement);
  userDiv.appendChild(fullNameElement);
  userDiv.appendChild(emailElement);

  return userDiv;
};

// createUserHTMLElement(mockUser);
// console.log(userHRML);

getData("https://reqres.in/api/users?page=2", renderUsers);
