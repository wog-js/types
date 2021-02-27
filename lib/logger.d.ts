import { Logger as WinstonLogger } from 'winston'

export interface Logger extends WinstonLogger {

	/**
	 * Creates a new logger with the given name as it's label.
	 *
	 * @param name The new logging label.
	 */
	scope(name: string): Logger

}
