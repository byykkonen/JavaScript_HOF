console.log("Hello World!\n==========\n");

// Exercise 1 Section
function plus(num) {
    return function (plusNumber) {
        return num + plusNumber;
    };
}

const plus15 = plus(10);

console.log(plus15(10));

//Exercise 2 section

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach(user => console.log(user.name));


  //Exercise 3 Section

  let newUsers = users.map((user) => {
    return { name: user.name, score: user.score };
  });

  console.log(newUsers);

  //Exercise 4 Section

  let activeUsers = users.filter((user) => user.isActive == true );
   console.log(activeUsers);

   //Exercise 5 Section
 users.sort((a, b) => {
    if (a.score < b.score) return 1;
    else return -1;
  });

  console.log(users);

//Exercise 6 Section

let avgScore = users.reduce((sum, user) => sum + user.score, 0) / users.length;


console.log(avgScore);