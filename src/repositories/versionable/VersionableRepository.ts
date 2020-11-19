import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';

export default class VersioningRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    // public static generateObjectId(){
    //     return String(mongoose.Types.ObjectId());
    // }
    // private model: M;
    // constructor(model) {
    //     this.model = model;
    // }
    // public async create(options: any): Promise<D> {
    //     const id = VersioningRepository.generateObjectId();
    //     const model = new this.model({
    //         ...options,
    //         _id: id,
    //         originalId: id,
    //         createdAt: Date.now()
    //     });
    //     return model.save();
    // }
    // public count(query: any): Query<number> {
    //     const finalQuery = { deletedAt: null, ...query };
    //     return this.model.countDocuments(finalQuery);
    // }
    // protected getAll(query: any, projection: any={}, options: any ={}): DocumentQuery<D[], D> {
    //     const finalQuery ={deletedAt: null, ...query};
    //     return this.model.find(finalQuery, projection, options);
    // }
    // protected findOne(query: any): DocumentQuery<D, D> {
    //     const finalQuery = { deletedAt: null, ...query};
    //     return this.model.findOne(finalQuery);
    // }
    // protected find(query: any={}, projection: any = {}, options: any = {}):DocumentQuery<D[], D>{
    //     const finalQuery = { deletedAt: null, ...query}
    //     return this.model.find(finalQuery, projection, options);
    // }
    // protected invalidate(id: any): DocumentQuery<D, D> {
    //     return this.model.update({ originalId: id, deletedAt: null}, {})
    // }
    // protected async update(data: any): Promise<D> {
    //     console.log('Looking for previous valid document');
    //     const prev = this.findOne({originalId: data.originalId, deletedAt: null,});
    //         console.log('Prev: ',prev);
    //         if(prev) {
    //             this.invalidate(data.originalId);
    //         }else{
    //             return null;
    //         }
    //         console.log('Data: ', data);
    //         const newData = Object.assign(JSON.parse(JSON.stringify(prev),data));
    //         console.log('New Data: ',newData);
    //         newData._id = VersioningRepository.generateObjectId();
    //         delete newData.deletedAt;
    //         const model = new this.model(newData);
    //         return model.save();
    // }





    private model: M;

    constructor(model) {
        this.model = model;
    }

    public static generateObjectId(): string {
        return String(mongoose.Types.ObjectId());
    }

    public async count() {
        return await this.model.countDocuments();
    }

    public async findOne(query: object) {
        return await this.model.findOne(query).lean();
    }

    public async create(data: any, creator): Promise<D> {
        const id = VersioningRepository.generateObjectId();

        const modelData = {
            ...data,
            originalId: id,
            createdBy: creator,
            _id: id,
        };

        return await this.model.create(modelData);
    }

    public async getUser(data: any) {
        return await this.model.findOne(data);
    }

    public async update(id: string, dataToUpdate: any, updator) {

        let originalData;
        // console.log()
        await this.findOne({ _id: id, updatedAt: null, deletedAt: null })
            .then((data) => {
                if (data === null) {
                    throw '';
                }
                originalData = data;
                const newId = VersioningRepository.generateObjectId();
                const oldId = originalData._id;
                const oldModel = {
                    ...originalData,
                    updatedAt: Date.now(),
                    updatedBy: updator,
                    deletedAt: Date.now(),
                    deletedBy: updator,
                };

                const newData = Object.assign(JSON.parse(JSON.stringify(originalData)), dataToUpdate);
                console.log('newwwwwwwwwwwww',newData);
                newData._id = newId;
                newData.createdAt = Date.now();

                this.model.updateOne({ _id: oldId }, oldModel)
                    .then((res) => {
                        if (res === null) {
                            throw '';
                        }
                        else
                            return res;
                    });

               return this.model.create(newData);
            });
    }
    public async delete(id: string, remover: string) {

        let originalData;

        await this.findOne({ _id: id, deletedAt: null })
            .then((data) => {
                if (data === null) {
                    throw '';
                }

                originalData = data;
                const oldId = originalData._id;

                const modelDelete = {
                    ...originalData,
                    deletedAt: Date.now(),
                    deletedBy: remover,
                };

                this.model.updateOne({ _id: oldId }, modelDelete)
                    .then((res) => {
                        if (res === null) {
                            throw '';
                        }
                    });

            });
    }
}