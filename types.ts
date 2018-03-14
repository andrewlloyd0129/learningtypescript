// Boolean
let paidAccount : boolean = false;

// Number
let age : number = 24;
var taxRate : number = 7.5;

// String
var fullName : string = "Andrew Lloyd";

// Array
var ages : number[] = [33, 25, 11];

// Tuple
let player : [number, string];
player = [3, 'Correa'];

// Enum
enum Stage {Approved, Pending, Rejected};
let job : Stage = Stage.Approved;

// Any 
var apiData : any[] = [123, 'Andrew', false];

// Void 
function printOut(msg: string) : void {
  console.log(msg);
}