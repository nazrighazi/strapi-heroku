const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("host"),
        port: env.int("port", 1337),
        database: env("database"),
        username: env("user"),
        password: env("password"),
      },
      options: {
        ssl: false,
      },
    },
  },
});
