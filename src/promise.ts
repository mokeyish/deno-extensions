
declare global {
  interface PromiseConstructor {
    /**
     * Creates an Promise that asynchronously yields back to the current context when awaited after a specified number of milliseconds.
     * @param  [ms=1] number of milliseconds
     */
    yield(ms?: number): Promise<void>;

    /**
     * Creates a Promise<TResult> that's completed successfully with the specified result.
     * @param value 
     */
    fromResult<T>(value: T): Promise<T>;
  }
}



Promise.yield = (ms = 1) => new Promise<void>( r => setTimeout(r, ms));
Promise.fromResult = (value) => new Promise(() => value);