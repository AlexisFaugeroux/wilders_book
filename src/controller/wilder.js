const datasource = require("../utils").datasource;
const wilder = require("../entity/Wilder");

module.exports = {
    create: async (req, res) => {
        try {
            const createdItem = await datasource.getRepository(wilder).save(req.body);
            res.send({...createdItem, message: "Created Wilder"});
        } catch (error) {
            console.log(error);
        }

    },
    getAll: async (req, res) => {
        try {
            const result = await datasource.getRepository(wilder).find();
            res.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            let searchedItem = await datasource.getRepository(wilder).findOne({
                where: {
                    id: req.body.id
                }
            });

            searchedItem = req.body;
            const updatedItem = await datasource.getRepository(wilder).save(searchedItem);

            res.status(200).send(updatedItem);

        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            console.log(req.body);

            const deletedItem = await datasource
                .getRepository(wilder)
                .delete({
                        id: req.body.id
                });
            
            res.status(200).send(deletedItem);
        } catch (error) {
            console.log(error);
        }
    },
}