// import config from '../../controllers/trainee/validation';
import * as jwt from 'jsonwebtoken';
import  {hasPermission}  from '../../libs/permissions';
import {permissions} from '../../libs/constants';

export default (module, permissionType) => (req, res, next) => {
    try {
        console.log('the config is', module, permissionType);
        console.log('Header is', req.headers['authorization']);
        const token = req.headers['authorization']
        const decodeuser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log('User is', decodeuser);
        if(hasPermission(permissions.getUser1,decodeuser.Role,permissionType))
        {
            console.log(`${decodeuser.Role} has permission ${permissionType}: true`);
            next();
        }
        else{
            throw Error;
        }
        
    } catch (err) {
        next({
            error: 'Unauthorized',
            code: 403
        })
    }
}