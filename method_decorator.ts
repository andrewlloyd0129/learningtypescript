@detailedLog('billing')
class AccountsPayable {
  constructor() {}

  @admin
  deleteAccount() {
    console.log('deleting account....');
  }
}


function detailedLog(dashboard : string) {
  if(dashboard == 'billing') {
    console.log('working in the billing department')
    return function (target : Object) {};
  } else {
    return function (target : Object) {};
  }
}

function admin(target : Object, propertyKey : string, descriptor : TypedPropertyDescriptor<any) : any {
  console.log('Doing admin check');
  return descriptor;
}

var post = new AccountsPayable;
post.deleteAccount();


// Doing admin check
// working in the billing department
// deleting account....