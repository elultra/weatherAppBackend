const swaggerJsDoc = require("swagger-jsdoc");

module.exports = swaggerJsDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "weatherAppBackend API",
            version: "1.0.0",
            description: "A simple Express weatherAppBackend API",
            contact: {
                name: "Eric",
                email: "example.com",
            },
        },
    },
    apis: ["app/controllers/*.js"],
});
