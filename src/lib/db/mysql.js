import mysql from 'mysql2/promise';
import {
	DB_NAME,
	DB_PASSWORD,
	DB_PORT,
	DB_HOST,
	DB_USER } from '$env/static/private';

let connection = null;
export function createConnection() {
	if (!connection) {
		connection = mysql.createConnection({
			host: DB_HOST,
			user: DB_USER,
			port: DB_PORT,
			password: DB_PASSWORD,
			database: DB_NAME
		});
	}
	return connection;
}
