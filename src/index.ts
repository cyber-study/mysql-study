import moment from "moment";
import mysql2, { Pool } from "mysql2/promise";

let connection: Pool;

process.on("exit", (error) => {
  console.log("exit==>", error);
});

process.on("error", (error) => {
  console.log("error==>", error);
});

async function createConnection() {
  try {
    connection = await mysql2.createPool({
      host: "0.0.0.0",
      port: 43306,
      user: "root",
      connectionLimit: 0,
      password: "glyz205070410"
    });

    console.log("连接成功!");

    setInterval(async () => {
      try {
        const connect = await connection.getConnection();
        console.log(moment().format("YYYY-MM-DD HH:mm:ss"), "获取到连接");
      } catch (error) {
        console.log(error);
      };
      // connect.release();
      // console.log("连接已释放");
    }, 1000);

  } catch (error) {
    console.log("连接失败,2s后尝试重新连接...", error);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await createConnection();
    return false;
  };
}; createConnection();

