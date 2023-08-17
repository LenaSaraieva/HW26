class SuperMath {
    constructor() {
        this.operations = {
            "+": (x, y) => x + y,
            "-": (x, y) => x - y,
            "*": (x, y) => x * y,
            "/": (x, y) => x / y,
            "%": (x, y) => x % y
        };
    }
performOperation(x, y, znak) {
        return this.operations[znak](x, y);
}
input() {
    const x = parseFloat(prompt("Enter a value for X"));
    const y = parseFloat(prompt("Enter a value for Y"));
    const znak = prompt("Choose an operation (+, -, *, /, %)");
    if (!(znak in this.operations)) {
        alert("Error!");
        return this.input();
    }
    return { x, y, znak };
}
check(obj) {
 const x = obj.X;
 const y = obj.Y;
 const znak = obj.znak;

 const userChoice = prompt(`Do you want to perform the operation '${znak}' with ${x} and ${y}? (yes/no):`);
 if (userChoice.toLowerCase() === "yes") {
   if (znak in this.operations) {
    const result = this.performOperation(x, y, znak);
    alert(`Result: ${x} ${znak} ${y} = ${result}`);
   } else {
    alert("Error!");
   }
 } else {
    const { x, y, znak } = this.input();
    const result = this.performOperation(x, y, znak);
    alert(`Result: ${x} ${znak} ${y} = ${result}`);
 }
}
}
const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);