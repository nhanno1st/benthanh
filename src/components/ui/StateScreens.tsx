import Link from 'next/link';

export function EmptyState({ message }: { message: string }) {
  return <p className="bg-white px-6 py-14 text-center text-ink-muted ring-1 ring-line">{message}</p>;
}

export function ErrorScreen({ title = 'Đã có lỗi xảy ra', message, onRetry }: { title?: string; message?: string; onRetry?: () => void }) {
  return (
    <div className="container-page pb-24 pt-40 text-center">
      <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-ink-muted">{message ?? 'Vui lòng thử lại sau ít phút.'}</p>
      <div className="mt-8 flex justify-center gap-3">
        {onRetry && (
          <button onClick={onRetry} className="btn-primary">
            Thử lại
          </button>
        )}
        <Link href="/" className="btn-outline">
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
