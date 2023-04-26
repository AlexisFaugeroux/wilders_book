const datasource = require("../utils").datasource;
const grade = require("../entity/Grade");

module.exports = {
    create: async (req, res) => {
        try {
            const createdItem = await datasource.getRepository(grade).save(req.body);
            res.send({...createdItem, message: "Created Grade"});
        } catch (error) {
            console.log(error);
        }

    },
    getAll: async (req, res) => {
        try {
            const result = await datasource.getRepository(grade).find();
            res.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            let searchedItem = await datasource.getRepository(grade).findOne({
                where: {
                    id: req.params.id
                }
            });

            searchedItem = req.body;
            const updatedItem = await datasource.getRepository(grade).save(searchedItem);

            res.status(200).send(updatedItem);

        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            console.log(req.body);

            const deletedItem = await datasource
                .getRepository(grade)
                .delete({
                        id: req.params.id
                });
            
            res.status(200).send(deletedItem);
        } catch (error) {
            console.log(error);
        }
    },
}