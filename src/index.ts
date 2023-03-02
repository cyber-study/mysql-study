import mysql2, { Pool } from "mysql2/promise";

let connection: Pool;

async function createConnection() {
  if (connection) {
    connection.end();
    // connection.destroy();
    // connection.removeAllListeners(["error"]);
    // connection = null;
  };
  try {
    connection = await mysql2.createPool({
      host: "0.0.0.0",
      port: 43306,
      user: "root",
      password: 'glyz205070410'
    });
    console.log("连接成功!");

    setInterval(async () => {
      const connect = await connection.getConnection();
      console.log("获取到连接");
      connect.release();
      console.log("连接已释放");
    }, 1000);

  } catch (error) {
    console.log("连接失败,2s后尝试重新连接...", error);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await createConnection();
    return false;
  };
}; createConnection();

