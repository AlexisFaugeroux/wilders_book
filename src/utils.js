const typeorm = require("typeorm");

module.exports = {
    datasource: new typeorm.DataSource({
        type: "sqlite",
        database: "./wildersdb.sqlite",
        synchronize: true,
        entities: [
          require("./entity/Wilder"),
          require("./entity/Skill"),
          require("./entity/Grade")
          ],
        logging: ["query", "error"]
      })
}