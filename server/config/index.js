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
  // eslint-disable-next-line no-useless-catch
  try {
    // Xóa tất cả các bảng hiện có theo thứ tự phù hợp với ràng buộc khóa ngoại
    const dropTablesQuery = `
      DO $$ DECLARE
      BEGIN
        -- Disable triggers temporarily
        SET CONSTRAINTS ALL DEFERRED;
        
        -- Drop tables in correct order
        DROP TABLE IF EXISTS cart_items CASCADE;
        DROP TABLE IF EXISTS order_items CASCADE;
        DROP TABLE IF EXISTS orders CASCADE;
        DROP TABLE IF EXISTS products CASCADE;
        DROP TABLE IF EXISTS categories CASCADE;
        DROP TABLE IF EXISTS users CASCADE;
        
        -- Re-enable triggers
        SET CONSTRAINTS ALL IMMEDIATE;
      END $$;
    `;

    await pool.query(dropTablesQuery);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Chạy lại file init.sql
    const initSql = fs.readFileSync(initFilePath, "utf8");
    await pool.query(initSql);
  } catch (error) {
    throw error;
  }
};

initializeDatabase();

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};
