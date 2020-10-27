interface Ipermissions{
    "getUser1":{
        all:String[];
        read:String[];
        write:String[];
        delete:String[];
    },
    "getUsers2":{
        all:String[];
        read:String[];
        write:String[];
        delete:String[];
    }
}
export default interface Iusers{
    traineeEmail:String;
    reviewerEmail:String;
};
export{Ipermissions};
export{Iusers};