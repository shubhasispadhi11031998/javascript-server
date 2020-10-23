"use strict";
// console.log("PATTERN");
// console.log(" ");
// import {diamond , equilateral} from './pattern';
// diamond(5)
// equilateral(10)
// console.log(" ");
// console.log("VALIDATION");
// console.log(" ");
// import {users} from './utils/helper.js';
// import {validateUsers} from './utils/validation.js'
// validateUsers(users);
// console.log(" ");
// console.log("PERMISSIONS");
// console.log(" ");
// import {permissions} from './constants.js';
// import hasPermission from './utils/permissions.js';
// hasPermission(permissions.getUser1,"trainee","delete");
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("./utils/validation");
let users = [
    {
        traineeEmail: "shubhasis1.padhi@successive.tech",
        reviewerEmail: "shubham1.jain@successive.tech"
    },
    {
        traineeEmail: "shubhasis2.padhi@successive.tech",
        reviewerEmail: "shubham2.jain@successive.tech"
    },
    {
        traineeEmail: "shubhasis13.padhi@successive.tech",
        reviewerEmail: "shubham13.jain@successive.tech"
    },
    {
        traineeEmail: "shubhasis14.padhi@successive.tech",
        reviewerEmail: "shubham4@.jain@successive.tech"
    }
];
validation_1.validateUsers(users);
//# sourceMappingURL=index.js.map