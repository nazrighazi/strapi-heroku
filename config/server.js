module.exports = ({ env }) => ({
  host: env("host", "0.0.0.0"),
  port: env.int("port", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "839ee8b83a838156101f00bd425852c9"),
    },
  },
});
