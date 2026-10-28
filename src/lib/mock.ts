/**
 * Bật/tắt dữ liệu mẫu.
 * NEXT_PUBLIC_USE_MOCK=false  → các service sẽ gọi API thật qua lib/axios.ts
 */
// export const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== 'false';
export const USE_MOCK = true;

/** Giả lập độ trễ mạng để test skeleton/loading (mặc định 0ms). */
export function mockResolve<T>(data: T, ms = 0): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}
