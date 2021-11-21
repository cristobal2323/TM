module.exports = {
  db:
    process.env.MONGODB_URI ||
    "mongodb+srv://cris:**CMrocha13@cluster0.desob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

  SECRET_TOKEN: "chiquita1234",
};
