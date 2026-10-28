/** Chạy một tác vụ async, trả về fallback nếu lỗi — dùng ở server component để trang không bị sập. */
export async function safe<T>(task: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await task();
  } catch (err) {
    console.error('[safe]', err);
    return fallback;
  }
}
