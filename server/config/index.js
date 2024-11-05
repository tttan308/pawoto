require("dotenv").config();
const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";
const database =
  process.env.NODE_ENV === "test"
    ? process.env.POSTGRES_DB_TEST
    : process.env.POSTGRES_DB;

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${database}`;
const pool = new Pool({
  connectionString,
  ssl: !isProduction ? { rejectUnauthorized: false } : false,
});

// Đường dẫn tới file init.sql
const initFilePath = path.join(__dirname, "init.sql");

// Hàm để xóa dữ liệu và chạy lại init.sql
const initializeDatabase = async () => {
  try {
    // Xóa tất cả các bảng hiện có
    const dropTablesQuery = `
      DROP TABLE IF EXISTS 
        cart_items,
        orders,
        order_items,
        products,
        users,
        categories CASCADE;
    `;
    await pool.query(dropTablesQuery);
    console.log("Đã xóa tất cả các bảng");

    // Chạy lại file init.sql
    const initSql = fs.readFileSync(initFilePath, "utf8");
    await pool.query(initSql);
    console.log("Database đã được khởi tạo lại với init.sql");
  } catch (error) {
    console.error("Lỗi khi khởi tạo lại database:", error);
  }
};

// Gọi hàm initializeDatabase khi kết nối lần đầu
initializeDatabase();

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};
