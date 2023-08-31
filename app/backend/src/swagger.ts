import swaggerJsDoc from 'swagger-jsdoc';
const options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : 'api',
            version : '1.0.0',
            description : '' ,

        },
        servers : [
           { url : 'http://localhost'}
        ],
       
    },
    apis : [
        "src/routes/*.ts"
    ]

}

export const specs = swaggerJsDoc(options)