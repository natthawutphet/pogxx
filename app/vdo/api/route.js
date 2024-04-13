import { NextResponse } from "next/server";

const mysql = require('mysql2')

export const mysqlpool = mysql.createPool ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})




export async function GET(request) {
  const promisePool = mysqlpool.promise()
  const [rows, fields] = await promisePool.query(
    `SELECT * FROM vdo;`
  )
 
  return NextResponse.json(rows)
}