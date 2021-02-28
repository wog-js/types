import { Logger } from './logger';

export interface Package {

	id: string
	type: string
	version: string
	description: string
	displayName: string
	main: string

}

export const VALID_TYPES: string[]

export interface PackageRegistry {

	_logger: Logger

	_rootDirectory: string
	_registry: Package[]
	_loadedPackages: number

	init(): void

	/**
	 * @returns The number of loaded packages.
	 */
	count(): number

	/**
	 * Finds all packages by their type.
	 *
	 * @param type The package type.
	 * @see VALID_TYPES
	 */
	findByType(type: string): Package[]

	/**
	 * Finds a single package by it's id.
	 *
	 * @param id The package id.
	 */
	findById(id: string): Package|null
}
