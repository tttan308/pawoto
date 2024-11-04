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

// Hàm để kiểm tra và chạy init.sql nếu cần thiết
const initializeDatabase = async () => {
  try {
    // Kiểm tra nếu bảng tồn tại (ở đây kiểm tra bảng 'users' để làm ví dụ)
    const tableCheck = await pool.query(
      "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'users')"
    );

    // Nếu bảng chưa tồn tại, chạy file init.sql
    if (!tableCheck.rows[0].exists) {
      const initSql = fs.readFileSync(initFilePath, "utf8");
      await pool.query(initSql);
      console.log("Database initialized with init.sql");
    } else {
      console.log("Database already initialized.");
    }
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

// Gọi hàm initializeDatabase khi kết nối lần đầu
initializeDatabase();

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};
