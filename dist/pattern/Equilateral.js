"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equilateral = void 0;
function equilateral(n) {
    let w1 = "", w2 = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= n - i; j++) {
            w1 += " ";
        }
        for (let k = 0; k <= i; k++) {
            w2 += "* ";
        }
        console.log(w1, w2);
        w1 = "";
        w2 = "";
    }
}
exports.equilateral = equilateral;
// equilateral(10)
//# sourceMappingURL=Equilateral.js.map