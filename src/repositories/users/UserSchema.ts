import * as mongoose from 'mongoose';
import { stringifyConfiguration } from 'tslint/lib/configuration';

class UserSchema extends mongoose.Schema {
    constructor(collections: any) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String,
        });
        super(baseSchema, collections);
    }
}
export default UserSchema;