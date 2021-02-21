/**
 * The Storage class is a small utility for working with files within the `storage/` directory.
 */
export interface Storage {

	/** The absolute path to the storage directory. */
	_root: string

	/**
	 * Build the absolute path to a directory or file in the storage.
	 *
	 * @param name The relative path.
	 * @returns The absolute path.
	 */
	getPath(name?: string): string

	/**
	 * Create a new storage directory.
	 *
	 * @param name The directory name.
	 */
	createDirectory(name: string): Promise<string>

	/**
	 * Writes content to a file. The file is created if it does not exist.
	 * Note that existing files are overwritten.
	 *
	 * @param name The file name.
	 * @param content The content. Defaults to nothing.
	 */
	writeFile(name: string, content?: string): Promise<void>

	/**
	 * Reads contents from a file.
	 *
	 * @param name The file name.
	 * @param stream Whether the file should be streamed instead of read completely.
	 */
	readFile(name: string, stream: boolean): Promise<string> | NodeJS.ReadableStream

	/**
	 * Delets a file or an entire directory.
	 *
	 * @param path The path to delete.
	 */
	delete(path: string): Promise<void>

}
