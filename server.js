const { ApolloServer } = require("apollo-server");
const { sequelize } = require("./models");

const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
  sequelize
    .authenticate()
    .then(() => console.log("database connected!!"))
    .catch((err) => console.log(err));
});
