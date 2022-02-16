const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log("Server is listening to port ", process.env.PORT);
});
