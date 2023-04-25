const datasource = require("../utils").datasource;
const skill = require("../entity/Skill");

module.exports = {
    create: async (req, res) => {
        try {
            const createdItem = await datasource.getRepository(skill).save(req.body);
            res.send({...createdItem, message: "Created Skill"});
        } catch (error) {
            console.log(error);
        }

    },
    getAll: async (req, res) => {
        try {
            const result = await datasource.getRepository(skill).find();
            res.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            let searchedItem = await datasource.getRepository(skill).findOne({
                where: {
                    id: req.params.id
                }
            });

            searchedItem = req.body;
            const updatedItem = await datasource.getRepository(skill).save(searchedItem);

            res.status(200).send(updatedItem);

        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            console.log(req.body);

            const deletedItem = await datasource
                .getRepository(skill)
                .delete({
                        id: req.params.id
                });
            
            res.status(200).send(deletedItem);
        } catch (error) {
            console.log(error);
        }
    },
}