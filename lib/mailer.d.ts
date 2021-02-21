import { Logger } from './logger';

export interface Mailer {

	_config: object
	_logger: Logger

	readonly isConnected: boolean

	init(): Promise<void>
	dispose(): Promise<void>

	/**
	 * Attempts to send an email using the given options and the configuration.
	 *
	 * @param to The receiver.
	 * @param subject The email subject.
	 * @param htmlText The formatted HTML text to send.
	 */
	sendMail(to: string, subject: string, htmlText: string): Promise<void>

  }
