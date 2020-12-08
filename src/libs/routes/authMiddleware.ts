import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { hasPermission } from "../../libs/permissions";
import { permissions } from "../../libs/constants";
import { error } from "console";
import IRequest from '../../libs/IRequest';

export default (moduleName: any, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log("The config is : ", moduleName, permissionType);
        console.log("Header is ", req.headers['authorization']);
        const token = req.headers['authorization'];
        const secret = 'qwertyuiopasdfghjklzxcvbnm123456';
        const decodeUser = jwt.verify(token, secret);
        const role = decodeUser.role;
        console.log('User', decodeUser);

        if (hasPermission(permissions.getUser1, role, permissionType)) {
            console.log(`${role} has permission ${permissionType} :true`);
        }
        else {
            next({ error: "unauthorized", message: "Permission denied", status: 403 });
        }
        req.user=decodeUser;
        next();
    }

    catch (err) {
        next({
            error: "Unauthorized",
            code: 403
        })
    }
}