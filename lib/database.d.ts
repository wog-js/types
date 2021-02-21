import { Logger } from './logger'
import { Database } from 'sqlite3'

export interface DatabaseManager {

	_logger: Logger

	readonly db: Database

	/**
	 * Open the database connection.
	 */
	init(): Promise<void>

	/**
	 * Closes the database connection.
	 */
	dispose(): Promise<void>

	/**
	 * Runs the SQL query with the specified parameters and calls the callback afterwards. It does not retrieve any result data.
	 *
	 * @param sql The SQL query to run. If the SQL query is invalid and a callback was passed to the function,
	 *            it is called with an error object containing the error message from SQLite. If no callback was
	 *            passed and preparing fails, an error event will be emitted on the underlying Statement object.
	 * @param params When the SQL statement contains placeholders, you can pass them in here.
	 *               They will be bound to the statement before it is executed.
	 */
	run(sql: string, params: any[]): Promise<void>

	/**
	 * Runs the SQL query with the specified parameters and calls the callback afterwards. It does not retrieve any result data.
	 *
	 * @param sql The SQL query to run. If the SQL query is invalid and a callback was passed to the function,
	 *            it is called with an error object containing the error message from SQLite. If no callback was
	 *            passed and preparing fails, an error event will be emitted on the underlying Statement object.
	 * @param params When the SQL statement contains placeholders, you can pass them in here.
	 *               They will be bound to the statement before it is executed.
	 */
	get(sql: string, params: any[]): Promise<any>

	/**
	 * Runs the SQL query with the specified parameters and calls the callback afterwards. It does not retrieve any result data.
	 *
	 * @param sql The SQL query to run. If the SQL query is invalid and a callback was passed to the function,
	 *            it is called with an error object containing the error message from SQLite. If no callback was
	 *            passed and preparing fails, an error event will be emitted on the underlying Statement object.
	 * @param params When the SQL statement contains placeholders, you can pass them in here.
	 *               They will be bound to the statement before it is executed.
	 */
	all(sql: string, params: any[]): Promise<any[]>
}
