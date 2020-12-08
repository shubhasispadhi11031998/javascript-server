export default function hasPermission(moduleName, role, permissionType) {
    if (!moduleName.hasOwnProperty(permissionType)) {
        return false;
    }
    else if (moduleName[permissionType].includes(role) || role == "head-trainer") {
        return true;
    }
    else {
        return false;
    }
}
export{hasPermission};
// hasPermission(permissions.getUser1, "trainee", "delete");