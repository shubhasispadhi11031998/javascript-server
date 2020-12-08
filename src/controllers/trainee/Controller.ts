class TraineeController {
    // tslint:disable-next-line: semicolon
    instance: TraineeController
    static instance: any;
    static getInstance() {
        // tslint:disable-next-line: semicolon
        if ( TraineeController.instance) {
            // tslint:disable-next-line: semicolon
            return TraineeController.instance
        }
        TraineeController.instance = new TraineeController();
        // tslint:disable-next-line: semicolon
        return TraineeController.instance
    }
    get(req, res, next) {
        try {
            console.log('Inside get method of trainee controller');
            res.send({
                message: 'trainess fetched successfully',
                data: [{
                    name: 'Shubhasis',
                    address: 'NoidaSector11'
                }
            ]
            // tslint:disable-next-line: semicolon
            });
        } catch (err) {
            console.log('Inside error', err);
            next({
                error: 'Error Occures in fetching user',
                code: 500,
                message: err
            // tslint:disable-next-line: semicolon
            });
        }
    }
    create(req, res, next) {
        try {
            console.log('Inside post method of trainee controller');
            res.send({
                message: 'trainess created successfully',
                data: [{
                    name: 'Shubhasis1',
                    address: 'NoidaSector11'
                }
            ]
            // tslint:disable-next-line: semicolon
            })
        } catch (err) {
            console.log('Inside error', err);
        }
    }
    update(req, res, next) {
        try {
            console.log('Inside put method of trainee controller');
            res.send({
                message: 'trainess updated successfully',
                data: [{
                    name: 'Shubhasis2',
                    address: 'NoidaSector11'
                }
            ]
            // tslint:disable-next-line: semicolon
            });
        } catch (err) {
            console.log('Inside error', err);
        }
    }
    delete(req, res, next) {
        try {
            console.log('Inside delete method of trainee controller');
            res.send({
                message: 'trainess deleted successfully',
                data: [{
                    name: 'Shubhasis3',
                    address: 'NoidaSector11'
                }
            ]
            // tslint:disable-next-line: semicolon
            });
        } catch (err) {
            console.log('Inside error', err);
        }
    }
}
export default new TraineeController();