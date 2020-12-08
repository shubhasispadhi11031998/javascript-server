console.log("PATTERN");
console.log(" ");
import {diamond , equilateral} from './pattern';
diamond(5)
equilateral(10)
console.log(" ");
console.log("VALIDATION");
console.log(" ");
import {users} from './utils/helper.js';
import {validateUsers} from './utils/validation.js'
validateUsers(users);
console.log(" ");
console.log("PERMISSIONS");
console.log(" ");
import {permissions} from './constants.js';
import hasPermission from './utils/permissions.js';
hasPermission(permissions.getUser1,"trainee","delete");