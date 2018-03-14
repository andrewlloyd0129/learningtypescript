interface User {
  email : string;
  firstName : string;
  lastName : string;
}

function profile(user : User) : string {
  return ` Welcome, ${user.firstName}`;
}

var realUser = {
  email: 'test@test.com',
  firstName: 'Andrew',
  lastName: 'Lloyd',
};

console.log(profile(realUser));