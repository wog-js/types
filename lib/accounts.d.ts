import { DatabaseManager } from './database';
import { Logger } from './logger';
import { Storage } from './storage';

export interface User {

	readonly id: number
	username: string
	email: string
	password: string
	role: string

}

/**
 * The Accounts class is responsible for managing user accounts.
 */
export interface Accounts {

	_logger: Logger
	_database: DatabaseManager
	_storage: Storage
	_needsSeed: boolean

	/**
	 * Initializes the user tables.
	 */
	init(): Promise<void>
	dispose(): Promise<void>

	/**
	 * Generates a hashes password string.
	 *
	 * @param password
	 */
	hashPassword(password: string): Promise<string>

	/**
	 * Verify that a password matches a hash.
	 *
	 * @param password The password to verify.
	 * @param hash The hash to verify against.
	 */
	verifyPassword(password: string, hash: string): Promise<boolean>

	/**
	 * Queries a list of all users.
	 */
	all(): Promise<User[]>

	/**
	 * Count the total number of users.
	 */
	count(): Promise<number>

	/**
	 * Insert a new user account into the database.
	 *
	 * @param user The user to insert.
	 */
	create(user: User): Promise<void>

	update(user: User): Promise<void>

	/**
	 * Deletes a user.
	 *
	 * @param id The user id.
	 */
	deleteUser(id: number): Promise<void>

	/**
	 * Queries a specific user identified by the id.
	 *
	 * @param id The user id.
	 */
	findById(id: number): Promise<User>

	/**
	 * Queries a specific user identified by the username.
	 *
	 * @param username
	 */
	findByUsername(username: string): Promise<User>

	/**
	 * Check whether a given username/password combination is correct.
	 *
	 * @param {string} username
	 * @param {string} password
	 */
	checkAuth(username: string, password: string): Promise<boolean>

}
