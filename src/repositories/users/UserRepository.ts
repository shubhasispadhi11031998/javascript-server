import * as mongoose from 'mongoose';
import {userModel} from './UserModel';
import IUserModel from './IUserModel';
import VersioningRepository from '../versionable/VersionableRepository';
export default class UserRepository extends VersioningRepository<IUserModel,mongoose.Model<IUserModel>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    constructor(){
        super(userModel);
    }
//     public findOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
//         return userModel.findOne(query).lean();
//     }
//     public find(query, projection ?:any, options ?:any): any {
//         return userModel.find(query, projection, options)    
//     }
//     public create(data: any): Promise<IUserModel> {
//         console.log('UserRepository:: create', data);
//         const id = UserRepository.generateObjectId();
//         const model = new userModel({
//             _id: id,
//             originalId:id,
//             ...data,
//         });
//         return model.save();
//     }
//     public update(data:any): Promise<IUserModel>{
//         console.log('USerRepository:: update', data);
        
//         return super.update(data);
//     }
//     public count(){
//         return userModel.countDocuments();    }
// }



public createUser(data, creator) {
    return super.create(data, creator);
}

public updateUser(id, data, updator) {
    return super.update(id, data, updator);
}

public getUser(data) {
    return super.getUser(data);
}

public deleteData(id, remover) {
    return super.delete(id, remover);
}

public findone(data) {
    return super.findOne(data);
}

public countData() {
    return super.count();
}
}