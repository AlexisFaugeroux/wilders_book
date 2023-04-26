const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Wilder",
    tableName: "wilder",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type:"text",
        },
        city : {
            type: "text",
            nullable: true
        }
    }
});