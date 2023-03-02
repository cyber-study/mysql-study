import moment from "moment";
import mysql2, { Pool } from "mysql2";

let connection: Pool;

async function dosome_things() {
  connection.getConnection(async (error: any, connect) => {
    if (error) {
      console.log("获取连接时出错,2s后重新连接... ...", error);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dosome_things();
      return false;
    };
    try {
      console.log(moment().format("YYYY-MM-DD HH:mm:ss"), "获取到连接");
      setTimeout(() => {
        connect.release();
        console.log("连接已释放!");
      }, 2000);
    } catch (error) {
      console.log("业务中出错===>", error);
      await dosome_things();
    } finally {
      connect.release();
    };
  });
};

async function createConnection() {
  connection = mysql2.createPool({
    host: "0.0.0.0",
    port: 43306,
    user: "root",
    connectionLimit: 0,
    password: "glyz205070410"
  });

  console.log("连接成功!");

  await dosome_things();

}; createConnection();

