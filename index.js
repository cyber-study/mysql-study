const mysql2 = require("mysql2/promise");

let connection;

async function createConnection() {
  if (connection) {
    connection.end();
    connection.destroy();
    connection.removeAllListeners(["error"]);
    connection = null;
  };
  try {
    connection = await mysql2.createConnection({
      host: "0.0.0.0",
      port: 23306,
      user: "root",
      password: 'glyz205070410'
    });
    console.log("连接成功!");
    connection.on("error", async (error) => {
      console.log(error);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await createConnection();
    });
  } catch (error) {
    console.log("连接失败,2s后尝试重新连接...", error);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await createConnection();
    return false;
  };
}; createConnection();

