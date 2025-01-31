var rdl = require('readline');
var rl = rdl.createInterface({
    input: process.stdin,
    output: process.stdout
});

var arr = [1, 2];
console.log("hello1");

let i = 0;

function askNumber() {
    if (i < 5) {
        rl.question("Enter number: ", (y) => {
            let x = parseInt(y);
            if (!isNaN(x)) {
                console.log(`Number: ${x}`);
                arr.push(x);
            } else {
                console.log("Invalid input");
            }
            console.log(arr);
            i++;
            askNumber(); // Recursive call for next input
        });
    } else {
        rl.close(); // Close readline after all inputs
    }
}

askNumber();
