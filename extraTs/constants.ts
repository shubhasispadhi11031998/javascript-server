const permissions: Ipermissions ={
    'getUser1':
    {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: []
    },
    'getUsers2':
    {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: []
    }
};
import {Ipermissions,Iusers} from "./interfaces";

// export{permissions};