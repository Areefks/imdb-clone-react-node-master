const credentials = require("./config/db_config_template");
const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "postgres",
    connection: {
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    ...knexSnakeCaseMappers,
  },
};
