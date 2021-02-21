declare global {

	/** Holds the application root directory. */
	const ROOT_DIRECTORY: string

	/** Indicates whether the application is running in debug mode. */
	const IS_DEBUG: boolean

}

export * from './lib/accounts'
export * from './lib/database'
export * from './lib/logger'
export * from './lib/mailer'
export * from './lib/packages'
export * from './lib/redis'
export * from './lib/storage'
