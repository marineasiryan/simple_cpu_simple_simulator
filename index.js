const fs = require('fs');
const FakeCpu = require("./fakeCpu")
const txt = fs.readFileSync('./asm.txt', 'utf-8');
const fakeCpu = new FakeCpu();

const rows = txt.split('\n');
let rowArray = [];

for (let i = 0; i < rows.length; i++) {
    rowArray.push(rows[i].split(/[ ,]/))
    let instruc = rows[i].replace(",", " ");
    // console.log(instruc);
    if (instruc.length) {
        let oper = instruc.split(" ")[0];
        // console.log("oper", oper);
        let arg1 = instruc.split(" ")[1];
        // console.log("arg1", arg1);
        let arg2 = instruc.split(" ")[2];
        // console.log("arg2", arg2);

        if (oper === "mov") {
            if (arg2.charAt(0) === "r") {
                fakeCpu.movR(arg1, arg2);
            } else {
                fakeCpu.movI(arg1, arg2);
            }
        }
        if (oper === "add") {
            if (arg2.charAt(0) === "r") {
                fakeCpu.addR(arg1, arg2);
            } else {
                fakeCpu.addI(arg1, arg2);
            }
        }
        if (oper === "sub") {
            if (arg2.charAt(0) === "r") {
                fakeCpu.subR(arg1, arg2);
            } else {
                fakeCpu.subI(arg1, arg2);
            }
        }
        if (oper === "mul") {
            if (arg2.charAt(0) === "r") {
                fakeCpu.mulR(arg1, arg2);
            } else {
                fakeCpu.mulI(arg1, arg2);
            }
        }
        if (oper === "div") {
            if (arg2.charAt(0) === "r") {
                fakeCpu.divR(arg1, arg2);
            } else {
                fakeCpu.divI(arg1, arg2);
            }
        }
        if (oper === "and") {
            if (arg2.charAt(0) === "r") {
                fakeCpu.andR(arg1, arg2);
            } else {
                fakeCpu.andI(arg1, arg2);
            }
        }
        if (oper === "or") {
            if (arg2.charAt(0) === "r") {
                fakeCpu.orR(arg1, arg2);
            } else {
                fakeCpu.orI(arg1, arg2);
            }
        }
        if (oper === "xor") {
            if (arg2.charAt(0) === "r") {
                fakeCpu.xorR(arg1, arg2);
            } else {
                fakeCpu.xorI(arg1, arg2);
            }
        }
        if (oper === "cmp") {
            if (arg2.charAt(0) === "r") {
                fakeCpu.cmpR(arg1, arg2);
            } else {
                fakeCpu.cmpI(arg1, arg2);
            }
        }
        if (oper === "not") {
            fakeCpu.not(arg1)
        }
    }
}

console.log( fakeCpu.registors)