"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUsers = exports.validateEmail = void 0;
let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail(email) {
    return emailregex.test(String(email).toLowerCase());
}
exports.validateEmail = validateEmail;
function validateUsers(users) {
    let validUser = [], invalidUser = [], count1 = 0, count2 = 0;
    users.forEach((element, index) => {
        let { traineeEmail, reviewerEmail } = element;
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            validUser.push(element);
        }
        else {
            invalidUser.push(element);
        }
    });
    console.log("ValidUsersssssss", validUser);
    console.log("InvalidUsersssssss", invalidUser);
    console.log("validusercounr", validUser.length);
    console.log("Invalidusercounr", invalidUser.length);
    const finalvaliduser = Object.assign({}, validUser);
    const finalinvaliduser = Object.assign({}, invalidUser);
    const printuser = {
        validcount: count1,
        totalvaliduser: finalvaliduser,
        invalidcount: count2,
        totalinvaliduser: finalinvaliduser
    };
    console.log(printuser);
}
exports.default = validateUsers;
exports.validateUsers = validateUsers;
//# sourceMappingURL=validation.js.map