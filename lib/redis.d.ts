import { RedisClient } from 'redis'
import { Logger } from './logger';

interface RedisManager {

	_logger: Logger
	_config: object

	/**
	 * Indicates whether a connection is currently established.
	 */
	readonly isConnected: boolean

	readonly client: RedisClient

	init(): Promise<void>

	/**
	 * Executes the given redis command on the current connection.
	 *
	 * @param cmd The command to execute.
	 * @param args An arguments to pass to the command. The last argument must be the callback.
	 */
	run(cmd: string, ...args: any[]): void

	dispose(): Promise<void>

}
