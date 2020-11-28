import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersioningRepository from '../versionable/VersionableRepository';
export default class UserRepository extends VersioningRepository<IUserModel, mongoose.Model<IUserModel>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    constructor() {
        super(userModel);
    }
    public createUser(data, creator) {
        return super.create(data, creator);
    }

    public updateUser(id, data, updator) {
        return super.update(id, data, updator);
    }

    public getUser(data) {
        return super.getUser(data);
    }

    public getallTrainee(skip, limit, sort) {
        return super.getallTrainee(skip, limit, sort);
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