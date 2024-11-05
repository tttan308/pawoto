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
    // Xóa tất cả các bảng hiện có theo thứ tự phù hợp với ràng buộc khóa ngoại
    const dropTablesQuery = `
      DO $$ DECLARE
      BEGIN
        -- Disable triggers temporarily
        SET CONSTRAINTS ALL DEFERRED;
        
        -- Drop tables in correct order (theo đúng tên trong init.sql)
        DROP TABLE IF EXISTS cart_item CASCADE;
        DROP TABLE IF EXISTS order_item CASCADE;
        DROP TABLE IF EXISTS orders CASCADE;
        DROP TABLE IF EXISTS products CASCADE;
        DROP TABLE IF EXISTS "resetTokens" CASCADE;
        DROP TABLE IF EXISTS reviews CASCADE;
        DROP TABLE IF EXISTS cart CASCADE;
        DROP TABLE IF EXISTS users CASCADE;
        
        -- Drop custom types
        DROP TYPE IF EXISTS payment CASCADE;
        
        -- Re-enable triggers
        SET CONSTRAINTS ALL IMMEDIATE;
      END $$;
    `;

    await pool.query(dropTablesQuery);
    console.log("Đã xóa tất cả bảng cũ");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Chạy lại file init.sql
    const initSql = fs.readFileSync(initFilePath, "utf8");
    await pool.query(initSql);
    console.log("Đã tạo lại cấu trúc database");
  } catch (error) {
    console.error("Lỗi khởi tạo database:", error);
    throw error;
  }
};

// Chỉ chạy initializeDatabase trong môi trường development
if (!isProduction) {
  initializeDatabase();
}

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};
