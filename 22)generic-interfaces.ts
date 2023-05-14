interface Result<T> {
  data: T | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null };
}
