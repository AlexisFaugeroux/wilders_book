const datasource = require("../utils").datasource;
const wilder = require("../entity/Wilder");
const skill = require("../entity/Skill");
const grade = require("./grade");

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
                    id: req.params.id
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
            const deletedItem = await datasource
                .getRepository(wilder)
                .delete({
                        id: req.params.id
                });
            
            res.status(200).send(deletedItem);
        } catch (error) {
            console.log(error);
        }
    },
    addSkill: async (req, res) => {
        try {
            const wilderToUpdate = await datasource.getRepository(wilder).findOne({
                where: {
                    id: req.params.id
                }
            });

            console.log(wilderToUpdate);

            const skillToAdd = await datasource.getRepository(skill).findOne({
                where: {
                    id: req.body.id
                }
            });
            console.log(skillToAdd);

            wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
            await datasource.getRepository(wilder).save(wilderToUpdate);

            res.status(200).send({...wilderToUpdate, message: "Skill added"});

        } catch (error) {
            console.log(error);
        }
    },
    addGrade: async (req, res) => {
        try {
            const wilderToUpdate = await datasource.getRepository(wilder).findOne({
                where: {
                    id: req.params.id
                }
            });

            console.log(wilderToUpdate);

            const gradeToAdd = await datasource.getRepository(grade).findOne({
                where: {
                    id: req.body.id
                }
            });
            console.log(gradeToAdd);

            wilderToUpdate.grades = [...wilderToUpdate.grades, gradeToAdd];
            await datasource.getRepository(wilder).save(wilderToUpdate);

            res.status(200).send({...wilderToUpdate, message: "Grade added"});

        } catch (error) {
            console.log(error);
        }
    }
}