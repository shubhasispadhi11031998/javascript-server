let config =
{
    create:
    {
        id:
        {
            required: true,
            string: true,
            in: ['body'],
            custom: function (value) {
                console.log('Value', value);
                throw { error: 'Error Occured', message: 'Message' }
            }
        },
        name:
        {
            required: true,
            regex: true,
            in: ['body'],
            errorMessage: 'Name is required',
        }
    },
    delete:
    {
        id:
        {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    get: {
        skip: {
            required: false,
            default: 1,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        },
        sort: {
            required: false,
            boolean: true,
            in: ['query'],
            errorMessage: 'Sort is invalid',
        }
    },
    update:
        {
            id:
            {
                required: true,
                string: true,
                in: ['body']
            },
            dataToUpdate: {
                in: ['body'],
                required: true,
                isObject: true,
                // custom: function (dataToUpdate) { },

            }
        }
}
export default config;