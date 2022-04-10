import app from "./app";
import { ConnectDatabase } from "./database/database";

ConnectDatabase();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App started!`);
});
